var authenticate = require('./../controller/auth').authenticate;

exports.view = function(req, res){
  var currentPhoto = photoStore.getCurrentPhoto();
  res.render('viewPhotos', {title: 'View', photo: currentPhoto})
};

exports.upload = function(req, res){
  res.render('uploadPhotos', {title: 'Upload'})
};

exports.showUploadPage = function(req, res){
  res.render('uploadPhotos', {title: 'Upload'})
};

exports.uploadFile = function(req, res){
    photoStore.save(req, function(err){
    res.redirect('/');
  });
};

exports.showNextPhoto = function(req, res){
  var nextPhoto = photoStore.getNextPhoto();
  res.render('viewPhotos', {title: 'View', photo: nextPhoto})
};

exports.showPrevPhoto = function(req, res){
  var prevPhoto = photoStore.getPrevPhoto();
  res.render('viewPhotos', {title: 'View', photo: prevPhoto})
};

exports.showRegistration = function(req, res){
  res.render('registerUser', {title: 'Registration'})
};

exports.registerUser = function(req, res){
  users.addUser(req.body.userName, req.body.password, function(err, user){
    if (err != null) {
      res.render('registerUser', {title: 'Registration Failed', errorMessage: 'Sorry the registration failed.'})
    } else {
      req.session.regenerate(function(){
        // Store the user's primary key 
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        res.redirect('/view')
      });
    }
  });
};

exports.showLogin = function(req, res){
  res.render('login', {title: 'Login'})
};

exports.authenticateUser  = function(req, res){
  authenticate(users, req.body.userName, req.body.password, function(err, user){
    if (err != null) {
      res.render('login', {title: 'Login Failed', errorMessage: err});
    } else {
      req.session.regenerate(function(){
        // Store the user's primary key 
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        res.redirect('/view')
      });
    }
  });
};
