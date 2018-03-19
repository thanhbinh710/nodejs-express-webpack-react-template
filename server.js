const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const compression = require('compression')

const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + (60*60*2 ));
    if (process.env.NODE_ENV == "production" && req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/api', routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', (process.env.PORT || 7000));
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

