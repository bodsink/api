var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OperatorSchema = new Schema({
  username: String,
  password: String
}, {
  collection: 'operator',
  versionKey: false
});


mongoose.model('Operator', OperatorSchema);