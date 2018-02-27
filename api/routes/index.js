var express = require('express');
var router = express.Router();

var ctrlSample = require('../controllers/sample.controllers.js');

router
  .route('/sample')
  .get( ctrlSample.getExample);

  module.exports = router;