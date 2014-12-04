function BST(){
	this.root = null;
	this.pointer = null;
	this.size = 0;

	this.add = function(data){
		if(this.root === null){
			this.root = new BST_Node(data);
			this.pointer = this.root;
		} else {
			var keepGoing = true;
			while(keepGoing){
				var val = this.pointer.getData() - data;
				switch(true){
					case (val === 0):
						keepGoing = false;
						break;
					case (val > 0):
						if(this.pointer.getRight() === null){
							this.pointer.setRight(new BST_Node(data));
							this.size++;
							keepGoing = false;
						} else {
							this.pointer = this.pointer.getRight();
						}
						break;
					case (val < 0):
						if(this.pointer.getLeft() === null){
							this.pointer.setLeft(new BST_Node(data));
							this.size++;
							keepGoing = false;
						} else {
							this.pointer = this.pointer.getLeft();
						}
						break;
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
			while(keepGoing){
				comps ++;

				var val = this.pointer.getData() - data;

				switch(true){
					case (val === 0):
						keepGoing = false;
						break;
					case (val > 0):
						if(this.pointer.getRight() !== null){
							this.pointer = this.pointer.getRight();
						} else {
							keepGoing = false;
						}
						break;
					case (val < 0):
						if(this.pointer.getLeft() !== null){
							this.pointer = this.pointer.getLeft();
						} else { 
							keepGoing = false;
						}
						break;
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

	this.getSize = function(){
		return this.size;
	}
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