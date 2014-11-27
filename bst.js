function BST(){
	this.root = null;
	this.pointer = null;
	this.add = function(data){
		if(this.root === null){
			this.root = new BST_Node(data);
			this.pointer = this.root;
		} else {
			var keepGoing = true;
			while(keepGoing){
				if(keepGoing = (this.pointer.getData() !== data)){
					if(this.pointer.getData() < data){
						if(this.pointer.getRight() === null){
							this.pointer.setRight(new BST_Node(data));
							keepGoing = false;
						} else {
							this.pointer = this.pointer.getRight();
						}
					} else if(this.pointer.getData() > data){
						if(this.pointer.getLeft() === null){
							this.pointer.setLeft(new BST_Node(data));
							keepGoing = false;
						} else {
							this.pointer = this.pointer.getLeft();
						}
					}
				}
			}
		}
		this.pointer = this.root;
	};

	this.contains = function(data){
		var comps = 0;
		if(this.root !== null){
			comps ++;
			var keepGoing = true;
			
			var i = 1;
			while(keepGoing){
				comps ++;

				var val = this.pointer.getData() - data;

				keepGoing = (val !== 0);
				if(val > 0){
					if(keepGoing = (this.pointer.getRight() !== null)){
						this.pointer = this.pointer.getRight();
					}
				} else if(val < 0){
					if(keepGoing = (this.pointer.getLeft() !== null)){
						this.pointer = this.pointer.getLeft();
					}
				}
			}
		}

		this.pointer = this.root;
		return comps;
	};

	this.clear = function(){
		this.root = null;
		this.pointer = null;
	};
}

function BST_Node(nodeData){
	this.left = null;
	this.right = null;
	this.data = nodeData;
	this.getLeft = function(){
		return this.left;
	}
	this.setLeft = function(obj){
		this.left = obj;
	}
	this.getRight = function(){
		return this.right;
	}
	this.setRight = function(obj){
		this.Right = obj;
	}
	this.getData = function(){
		return this.data;
	}
}