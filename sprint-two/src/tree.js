var Tree = function(value) {
  var newTree = {};
  newTree = _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree (value);
  this.children.push(child);
};









treeMethods.contains = function(target) {
  var result = false;
    


  var recurs = function (node, target) {
    

    if (node.value === target) {
      result = true;
    } else {
      for (var x = 0; x < node.children.length; x++) {
        recurs (node.children[x], target);
      }
    }
  };

  recurs(this, target);
  return result;
};









/*
 * Complexity: What is the time complexity of the above functions?
 */
