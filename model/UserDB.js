var User = require('./User').User;


function UserDB(){
  this.users = [new User("test", "test"), new User("geri", "pina")];
}

UserDB.prototype.addUser = function(name, password, callback){
  var user = new User(name, password);
  this.users.push(user);
  console.log("Users:" + this.users);
  callback(null, user);
}

UserDB.prototype.delUser = function(name){
  for (user in this.users){
      if (user.name == name){
        this.users.splice(indexOf(user), 1);
      }
  }
}

UserDB.prototype.setUser = function(name, password){
  for (user in this.users){
      if (user.name == name){
        user[this.users.indexOf(user)].password = password;
      }
  }
}

UserDB.prototype.getUser = function(name){
  console.log("getUser(" + name +")");
  console.log("users: " + this.users);
  for (var i = 0; i < this.users.length; i++){
      if (this.users[i].getName() == name){
        console.log("user: " +  this.users[i].getName());
        return this.users[i];
      }
  }
  return false;
}

exports.UserDB = UserDB;