var mongoose = require('mongoose');
var Operator = mongoose.model('Operator');

exports.get = function(req, res) {
  Operator
    .find({})
    .exec(function(err, doc) {
      if (err) {
        res.json({
          success: false
        });
      } else {
        if (doc) {
          res.json({
            success: true,
            results: doc.length,
            data: doc
          });
        } else {
          res.json({
            success: false
          });
        }
      }
    });
};

exports.set = function(req, res) {
  console.log(req.params);
  var data = {
    username: req.params.username,
    password: req.params.password
  };
  var OperatorModel = new Operator(JSON.parse(JSON.stringify(data)));
  OperatorModel.save(function(err, doc) {
    if (err) {
      res.json({
        success: false,
        data: 'Error occured: ' + err
      });
    } else {
      if (doc) {
        res.json({
          success: true,
          data: doc
        });
      } else {
        res.json({
          success: false
        });
      }
    }
  });
};