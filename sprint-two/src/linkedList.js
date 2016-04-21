var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail === null) {
      list.tail = list.head;
    } else {
      var oldTail = list.tail;
      oldTail.next = newNode;
      list.tail = newNode;
      if (list.head.next === null) {
        list.head.next = list.tail;
      } 
    }
  };

  list.removeHead = function() {
    var removedhead = list.head.value;
    list.head = list.head.next;
    return removedhead;
    //change list.head to look at list.head.next

  };

  list.contains = function(target) {

    var recurs = function(target, node) {

      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return recurs(target, node.next);
      }

    };
     
    return recurs(target, list.head);

  };





  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
