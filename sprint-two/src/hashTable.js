

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //[[k,v]]


  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    
  } else {

    bucket.push([k, v]);
  }
    
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;

  _.each(bucket, function(tuples) {
    if (tuples[0] === k) {


      result = tuples[1];
    }
  });
  return result;                                                                                                 
                                                                                                                                                                                                                  



  

};                             

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageIndex = this._storage.get(index);
  var result;
  _.each(storageIndex, function(tuples, i) {
    if (tuples[0] === k) {
      result = storageIndex.splice(i, 1);
    }
  });
  return result;    

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


