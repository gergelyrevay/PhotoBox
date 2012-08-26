
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , restrict = require('./controller/auth').restrict;

var PhotoStore = require('./PhotoStore_simple').PhotoStore;
var UserDB = require('./model/UserDB').UserDB;

var app = module.exports = express.createServer();

/**
* Configuration
*/

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + "/public/uploads" }));
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'Titk0sF1ckos' }));
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

/**
* Init
*/

photoStore = module.exports = new PhotoStore();
users = module.exports = new UserDB();

/**
* Routes
*/

app.get('/', restrict, routes.view);
app.get('/view', restrict, routes.view);
app.get('/upload', restrict, routes.showUploadPage); //uploading photo
app.post('/upload', restrict, routes.uploadFile); //uploading photo
app.get('/nextPhoto', restrict, routes.showNextPhoto); //getting next photo
app.get('/prevPhoto', restrict, routes.showPrevPhoto);//getting prev photo
app.get('/register', routes.showRegistration);
app.post('/register', routes.registerUser);
app.get('/login', routes.showLogin);
app.post('/login', routes.authenticateUser);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
