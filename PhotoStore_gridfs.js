var mongodb = require("mongodb");
var Db = mongodb.Db;
var gridStore = mongodb.GridStore;
var Connection = mongodb.Connection;
var Server = mongodb.Server;
var BSON = mongodb.BSON;
var ObjectID = mongodb.ObjectID;

function PhotoStore(host, port) {
  this.db = new Db('photobox', new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};

PhotoStore.getStore = function(callback){
}

PhotoStore.save = function(callback){
  this.getCollection
};

PhotoStore.getAll = function(callback){
};

PhotoStore.getById = function(id, callback){
};

PhotoStore.deleteAll = function(callback){
};

PhotoStore.deleteById = function(callback){
};
