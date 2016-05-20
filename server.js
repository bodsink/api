/*
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/bras');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./router/index'));

//start ecek2
app.listen(8080);
console.log('ecek2 berada di port 8080');*/

require('./core/mongoose');
require('./core/router');