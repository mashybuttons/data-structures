

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = function (value) {
    var node = {};
    node.value = value;
    node.connections = [];
    return node;
  };
//create a nod
  var newnode = node(value);

  this.storage.push(newnode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  var results = false;
  //
  _.each(this.storage, function(node) {
    if (node.value === target) {
      results = true;
    }
  });
  return results;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  //loop through this.storage 
  //find the node.value === target
  //delete that node

  var thisStorage = this.storage;

  _.each(this.storage, function(node, i) {
    if (node.value === target) {
      thisStorage.splice(i, 1);
    }
  });
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var node1;
  var node2;
  var result = false;

  _.each (this.storage, function(node) {
    if (node.value === fromNode) {
      node1 = node;
      if (node.value === toNode) {
        node2 = node;
      }
    } else if (node.value === toNode) {
      node2 = node;
    }
  });
  _.each(node1.connections, function(object) {
    if (object === node2) {
      result = true;
    } 

  });
  return result;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var node1;
  var node2;
  _.each (this.storage, function(node) {
    if (node.value === fromNode) {
      node1 = node;
    } else if (node.value === toNode) {
      node2 = node;
    }
  });

  if (node2 === undefined) {
    node2 = node1;
    node1.connections.push(node2);
  } else {
    node1.connections.push(node2);
    node2.connections.push(node1);
  }
  
  
  //look up fromNode and toNode from this.storage
  //use fromNode.connections.push(toNode)
  //use toNode.connections.push(fromNode)
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var node1;
  var node2;
  _.each (this.storage, function(node) {
    if (node.value === fromNode) {
      node1 = node;
    } else if (node.value === toNode) {
      node2 = node;
    }
  });
  _.each(node1.connections, function(object, i) {
    if (object === node2) {
      node1.connections.splice(i, 1);
    }
  });
  _.each(node2.connections, function(object, i) {
    if (object === node1) {
      node2.connections.splice(i, 1);
    }
  });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, function(node){
    
    cb(node.value);


    //graph.addEdge(node.value, 5)
  });
 
  //loop through this.storage 
  //apply cb on eachNode
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


