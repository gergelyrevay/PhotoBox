/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('viewPhotos', {title: 'View'})
};

exports.upload = function(req, res){
  res.render('uploadPhotos', {title: 'View'})
};

/*exports.savePhoto = function(req, res){
    photoStore.save(req, function(err){
    res.redirect('/');
  });
};
*/
