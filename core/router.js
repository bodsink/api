var restify = require('restify');

////////////////////////////////////// LOAD CONTROLLERS //////////////////////////////////////
var fs = require('fs');
var controllers = {};
var controllers_path = process.cwd() + '/controller';

fs.readdirSync(controllers_path).forEach(function (file) {
  if (file.indexOf('.js') !== -1) {
    controllers[file.split('.')[0]] = require(controllers_path + '/' + file);
  }
});
////////////////////////////////////// LOAD CONTROLLERS //////////////////////////////////////



//////////////////////////////////////// CREATE SERVER ///////////////////////////////////////
var server = restify.createServer();

server
  .use(restify.CORS())
  .use(restify.bodyParser({
    maxBodySize: 25000000
  }))
  .use(restify.fullResponse());


//////////////////////////////////////// CREATE SERVER ///////////////////////////////////////



/////////////////////////////////////////// ROUTER ///////////////////////////////////////////
server.get('/opr', controllers.operator.get);
server.get('/opr/:id', controllers.operator.get);
server.post('/opr', controllers.operator.set);

/////////////////////////////////////////// ROUTER ///////////////////////////////////////////



///////////////////////////////////////// RUN SERVER /////////////////////////////////////////
var port = process.env.PORT || 8080;

server.listen(port, function (err) {
  if (err) {
    console.log('API server error:' + err);
  } else {
    console.log('API server is running @' + port);
  }
});

if (process.env.environment === 'production') {
  process.on('uncaughtException', function (err) {
    console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)));
  });
}
///////////////////////////////////////// RUN SERVER /////////////////////////////////////////