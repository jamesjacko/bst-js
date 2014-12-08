function BST(){
	this.root = null;

	this.add = function(data){
        var newNode = new BST_Node(data);
        var pointer;
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
                } else {
                    break;
                }
            }
        }
	};

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

function BST_Node(nodeData){
	this.left = null;
	this.right = null;
	this.data = nodeData;
}