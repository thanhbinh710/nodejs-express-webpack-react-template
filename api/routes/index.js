var express = require('express');
var router = express.Router();

var ctrlSample = require('../controllers/sample.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

router
 	.route('/sample')
  	.get( ctrlSample.getExample);

router
    .route('/users/login')
    .post(ctrlUsers.login);

router
  	.route('/protectedroute')
  	.post(ctrlUsers.authenticate, ctrlSample.getProtected);

module.exports = router;