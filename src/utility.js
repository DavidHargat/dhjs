
/**********************************
*	@Author David Hargat          *
*	@Email DavidHargat@yahoo.com  *
***********************************/

dh.util = {
	distance: 	
		function(val1,val2,val3,val4){
			if(arguments.length == 2){
				return dh.util.distanceFromPoints(val1,val2);
			}
			if(arguments.length == 4){
				return dh.util.distanceFromValues(val1,val2,val3,val4);
			}
			return 0;
		},	
	distanceFromValues: 
		function(p1x,p1y,p2x,p2y){
			var d;
			d = Math.sqrt(
			((p2x - p1x) * (p2x - p1x))+
			((p2y - p1y) * (p2y - p1y)) 
			);
			return d;
		},	
	distanceFromPoints:
		function(p1,p2){
			if(!p1 || !p2)return 0;
			return dh.util.distanceFromValues(p1.x,p1.y,p2.x,p2.y);
		},
	direction:
		function(p1x,p1y,p2x,p2y){
			var point = new dh.util.Point(p2x-p1x,p2y-p1y);
			var distance = dh.util.distance(p1x,p1y,p2x,p2y);
			point.div(distance);
			return point;
		},
	Point:
		function(x1,y1){
			this.x = x1;
			this.y = y1;
			this.div = function(i){
				this.x /= i;
				this.y /= i;
			};
			this.mul = function(i){
				this.x /= i;
				this.y /= i;
			};
		},
	Color:
		function(r,g,b){
			this.r = r;
			this.g = g;
			this.b = b;
			this.toString = function(){
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
			}
		},
	Container:
		function(){
			this.list = [];

			this.remove = function(item){
				var index = this.list.indexOf(item);
				this.list.splice(index, 1);
			};
			
			this.add = function(item){
				this.list.push(item);
			};
			
			this.get = function(index){
				return this.list[index];
			};
			
			this.clear = function(){
				this.list = [];
			};
			
			this.size = function(){
				return this.list.length;
			};
		},
};