
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var PhotoStore = require('./PhotoStore_simple').PhotoStore;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + "/public/uploads" }));
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
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

var photoStore = new PhotoStore();
// Routes

app.get('/', routes.view);
app.get('/upload', routes.upload);
//app.post('/upload', routes.saveFile);
app.post('/upload', function(req, res){
  photoStore.save(req, function(err){
    res.redirect('/');
  });
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
