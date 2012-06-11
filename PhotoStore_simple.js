PhotoStore = function(){
    console.log("PhotoStore()");
};

PhotoStore.prototype.save = function(req, callback){
    console.log("PhotoStore.save()");
    callback(null);
};

PhotoStore.getAll = function(callback){
};

PhotoStore.getById = function(id, callback){
};

PhotoStore.deleteAll = function(callback){
};

PhotoStore.deleteById = function(callback){
};

exports.PhotoStore = PhotoStore;
