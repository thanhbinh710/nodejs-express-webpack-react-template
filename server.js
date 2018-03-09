const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const compression = require('compression')

const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');
    app.use(webpackMiddleware(webpack(webpackConfig)));

    // allow CORS when we run npm run dev
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
} else {
}
    app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/api', routes);


app.listen(process.env.PORT || 7000, () => console.log('Magic happens on port 7000'));

