// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var OperatorSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Return model
module.exports = restful.model('operator', OperatorSchema);