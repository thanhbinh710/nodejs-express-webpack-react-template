const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./api/routes');



if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Server routes...
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/api', routes);
// app.get('/hello', (req, res) => res.send({ hi: 'there' }));



app.listen(process.env.PORT || 7000, () => console.log('Magic happens on port 7000'));

