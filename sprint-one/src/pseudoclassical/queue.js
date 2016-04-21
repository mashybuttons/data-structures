var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
  this.deletecount = 0;

};

Queue.prototype.size = function() {
  if (this.length - this.deletecount < 0) {
    return 0;
  } else {
    return this.length - this.deletecount;
  }
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.deletecount];
  delete this.storage[this.deletecount];
  this.deletecount++;
  return dequeued;
};



