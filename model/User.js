function User(userName, password){
  this.name = userName;
  this.password =  password;

  console.log(this.name + " is registered.");
}

User.prototype.getName = function() {
  return this.name;
}

User.prototype.setName = function(name){
  this.name = name;
}

User.prototype.getPassword = function(){
  return this.password;
}

User.prototype.setPassword = function(password){
  this.password = password;
}

exports.User = User;