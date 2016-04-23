var BinarySearchTree = function(value) {
  var newTree = {};
  newTree = _.extend(newTree, newTreeMethods);
  newTree.value = value;
  newTree.children = [{left: null}, {right: null}];
  newTree.left = newTree.children[0].left;
  newTree.right = newTree.children[1].right;
  return newTree;
};

var newTreeMethods = {};

newTreeMethods.insert = function (value) {
  var parent = this;
  var child = BinarySearchTree(value);
  

  var leftrecurs = function(tree) {
    var parent = tree;
    if (parent.children[0].left === null) {
      if (value < parent.value) {
        parent.children[0].left = child;
      } else {
        parent.children[1].right = child;
      }
    } else {
      leftrecurs(parent.children[0].left);
    }
  };

  var rightrecurs = function(tree) {
    var parent = tree;
    if (parent.children[1].right === null) {
      if (value > parent.value) {
        parent.children[1].right = child;
      } else {
        parent.children[0].left = child;
      }
    } else {
      rightrecurs(parent.children[1].right);
    }
  };
  leftrecurs(parent);
  rightrecurs(parent);



};

newTreeMethods.contains = function () {

};

newTreeMethods.depthFirstLog = function () {

};
  
/*
 * Complexity: What is the time complexity of the above functions?
 */
