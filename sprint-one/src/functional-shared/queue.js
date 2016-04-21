var Queue = function() {
  var obj = {};
  obj = _.extend(obj, queueMethods);
  obj.storage = {};
  obj.deletecount = 0;
  obj.length = 0;
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  size: function() {
    if (this.length - this.deletecount < 0) {
      return 0; 
    } else {
      return this.length - this.deletecount;
    }
  },
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var dequeued = this.storage[this.deletecount];
    delete this.storage[this.deletecount];
    this.deletecount++;
    return dequeued;

  }

};


