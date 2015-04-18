
/**********************************
*	@Author David Hargat          *
*	@Email DavidHargat@yahoo.com  *
***********************************/

dh.block = {
	create: 
	function(x,y,width,height){
		return new function(){
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.left = function(){return this.x;}
			this.right = function(){return this.x+this.width;}
			this.top = function(){return this.y;}
			this.bottom = function(){return this.y+this.height;}
			this.touches = function(other){return dh.block.touch(this,other);}
			this.distance = function(other){return dh.block.distance(this,other);}
			this.move = function(dx,dy){
				this.x += dx;
				this.y += dy;
			};
		}
	},
	touch: 
	function(block1,block2){
		if(block1.right() < block2.left())return false;
		if(block1.left() > block2.right())return false;
		if(block1.bottom() < block2.top())return false;
		if(block1.top() > block2.bottom())return false;
		return true;
	},
	distance:
	function(block1,block2){
		return dh.util.distance(
		block1.x+(block1.width/2),
		block1.y+(block1.height/2),
		block2.x+(block2.width/2),
		block2.y+(block2.height/2));
	},
	splitY:
	function(block1,w){
		if(arguments.length == 1){
			var leftSide = dh.block.create(block1.x,block1.y,block1.width/2,block1.height);
			var rightSide = dh.block.create(block1.x+block1.width/2,block1.y,block1.width/2,block1.height);
			return [leftSide,rightSide];
		}else{
			var leftSide = dh.block.create(block1.x,block1.y,w,block1.height);
			var rightSide = dh.block.create(block1.x+w,block1.y,block1.width-w,block1.height);
			return [leftSide,rightSide];
		}
	},
	splitX:
	function(block1,h){
		if(arguments.length == 1){
			var topSide = dh.block.create(block1.x,block1.y,block1.width,block1.height/2);
			var bottomSide = dh.block.create(block1.x,block1.y+block1.height/2,block1.width,block1.height/2);
			return [topSide,bottomSide];
		}else{
			var topSide = dh.block.create(block1.x,block1.y,block1.width,h);
			var bottomSide = dh.block.create(block1.x,block1.y+h,block1.width,block1.height-h);
			return [topSide,bottomSide];
		}
	}
};