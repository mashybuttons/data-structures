var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, stackMethods);
  obj.length = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  size: function() {
    if (this.length < 0) {
      return 0;
    } else {
      return this.length;
    }
  },
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    var popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return popped;
  }
};


