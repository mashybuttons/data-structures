var BinarySearchTree = function(value) {
  newTree = {};
  newTree = _.extend(newTree, newTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var newTreeMethods = {};

newTreeMethods.insert = function (value) {
  var parent = this;
  var child = BinarySearchTree(value);
  
  var recurs = function(tree) {

    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = child;
      } else {
        recurs(tree.left);
      }

    } else {
      if (tree.right === null) {
        tree.right = child;
      } else {
        recurs(tree.right);
      }
    }

  };

  recurs(parent);


};

newTreeMethods.contains = function (value) {
  var parent = this;

  var result = false;   //using recurs function to augment outer variable
  var recurs = function(tree) {
    if (value === tree.value) {
      result = true;
    } else if (tree.left === null && tree.right === null) {
      result = false;
    } else if (value < tree.value) {
      recurs(tree.left);

    } else if (value > tree.value) {
      recurs(tree.right);
    }
  };

  recurs(parent);
  return result;


  //compare value === this.value
    //return true;
  //compare value < this.value
    //recurs over this.left
  //compare value > this. value
    //recurse voer this.right


   
};

newTreeMethods.depthFirstLog = function (cb) {
  //apply cv(this.value)
    //recurs down the left and right 
      //apply cb(on all left and right tree values)
  var result = [];
  var parent = this;
  var recurs = function(tree) {
    result = result.concat(cb(tree.value));
    if (tree.left !== null) {
      recurs(tree.left);
    } else if (tree.right !== null) {
      recurs(tree.right);
    }
  };

  recurs(parent);

  return result;



};
  
/*
 * Complexity: What is the time complexity of the above functions?
 */
