var fs = require("fs");

function PhotoStore(){
  this.uploadDir = "./public/uploads";
  this.photoList = [];
  this.indexOfCurrentlyShownPhoto = 0;

  console.log("PhotoStore()");
  this.refreshPhotoList();
}

PhotoStore.prototype.save = function(req, callback){
  console.log("PhotoStore.save()");
  this.refreshPhotoList();
  callback(null);
};

PhotoStore.prototype.refreshPhotoList = function(){
  this.photoList = fs.readdirSync(this.uploadDir);
  console.log(this.photoList);
};

PhotoStore.prototype.getPhotoList = function(){
  return this.photoList;
};

PhotoStore.prototype.getCurrentPhoto = function(){
  return this.photoList[this.indexOfCurrentlyShownPhoto];
}

PhotoStore.prototype.getNextPhoto = function(){
  this.indexOfCurrentlyShownPhoto += 1;
  this.indexOfCurrentlyShownPhoto = this.indexOfCurrentlyShownPhoto % this.photoList.length;
  console.log("current index: "+this.indexOfCurrentlyShownPhoto);
  return this.photoList[this.indexOfCurrentlyShownPhoto];
}

PhotoStore.prototype.getPrevPhoto = function(){
  this.indexOfCurrentlyShownPhoto -= 1;
  this.indexOfCurrentlyShownPhoto = ((this.indexOfCurrentlyShownPhoto % this.photoList.length) + this.photoList.length) % this.photoList.length;
  console.log("current index: "+this.indexOfCurrentlyShownPhoto);
  return this.photoList[this.indexOfCurrentlyShownPhoto];
}

exports.PhotoStore = PhotoStore;
