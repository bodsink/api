var express = require('express');
var router = express.Router();

//schema test
var Operator = require('../model/index');

// routing test
Operator.methods(['get', 'put', 'post', 'delete']);
Operator.register(router, '/opr');

module.exports = router;