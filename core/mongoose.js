var mongoose = require('mongoose');
var fs = require('fs');
var config = require('./config');
var models_path = process.cwd() + '/model';

mongoose.connect(config.database, {
  server: {
    auto_reconnect: true
  }
});

var db = mongoose.connection;

db.on('error', function(err) {
  console.error('API server connection to MongoDB error:', err);
});

db.once('open', function callback() {
  console.info('API server establishing connection to MongoDB.');
});

db.on('disconnected', function() {
  console.error('API server disconnected from MongoDB.');
  mongoose.connect(process.env.MONGO_URL, {
    server: {
      auto_reconnect: true
    }
  });
});

db.on('reconnected', function() {
  console.info('API server reconnected to MongoDB.');
});

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js')) {
    require(models_path + '/' + file);
  }
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('API server closing connection through app termination.');
    process.exit(0);
  });
});