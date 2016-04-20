var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  var deletecount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
  //   var dequeued = storage[length - 1];
  //   delete storage[length - 1];
  //   length--;
  //   return dequeued;
        var dequeued = storage[deletecount];
        delete storage[deletecount];
        deletecount++;
        return dequeued;
  };

  someInstance.size = function() {
    if (length - deletecount < 0 ) {
      return 0;
    } else {
      return length - deletecount;
      
    }

  };

  return someInstance;
};

