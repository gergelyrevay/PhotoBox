/*
 * GET home page.
 */

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