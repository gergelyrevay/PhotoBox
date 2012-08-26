exports.authenticate = function(users, userName, password, callback){
  user = users.getUser(userName);
  console.log(user.name + " == " + userName + ", " + user.password + " == " + password);
  if ( user.name == userName && user.password == password) {
    console.log("User successfully authenicated: " + userName)
    callback(null, user);
  } else {
    console.log("Authentication failed for: " + userName)
    callback("Authentication Failed");
  }
}

exports.restrict = function(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}