/**
 * Binary Search Tree implementation, limited to two functions
 * add(data) and contains(data), tree is intiated with no nodes
 */
function BST(){
  this.root = null;

  /**
   * add function adds a new node in a tree in the correct place
   * will not add if the data already exists.
   */
  this.add = function(data){
    var newNode = new BST_Node(data);
    var pointer;
    // if root is null we need to add a new node at that point
    if (this.root === null){
      this.root = newNode;
    } else {
      pointer = this.root;
      while(true){
        if (data < pointer.data){
          if (pointer.left === null){
            pointer.left = newNode;
            break;
          } else {
            pointer = pointer.left;
          }
        } else if (data > pointer.data){
          if (pointer.right === null){
            pointer.right = newNode;
            break;
          } else {
            pointer = pointer.right;
          }
        // data already present in tree
        } else {
            break;
        }
      }
    }
  };

  /**
   * contains function searches the tree for given data and returns
   * the length of the search if successful or 0 if unsuccessfull
   */
  this.contains = function(data){
    var comps = 0;
    var pointer = this.root;
    while(pointer){
      if(data < pointer.data){
        pointer = pointer.left;
        comps++;
      } else if(data > pointer.data){
        pointer = pointer.right;
        comps++;
      } else {
        return comps;
      }
    }
    return 0;
  };
}

/**
 * Implementation of a binary search tree node
 */
function BST_Node(nodeData){
  this.left = null;
  this.right = null;
  this.data = nodeData;
}