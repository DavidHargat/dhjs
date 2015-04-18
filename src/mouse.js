
/**********************************
*	@Author David Hargat          *
*	@Email DavidHargat@yahoo.com  *
***********************************/

dh.mouse = {
	x: 0,
	y: 0,
	addDownEvent: 
	function(event){
		dh.graphics.canvas.addEventListener("mousedown",event,false);
	},
	addUpEvent: 
	function(event){
		dh.graphics.canvas.addEventListener("mouseup",event,false);
	},
	pressed: false,
	listen: 
	function(){
		this.addDownEvent(function(){
			dh.mouse.pressed = true;
		});

		this.addUpEvent(function(){
			dh.mouse.pressed = false;
		});

		dh.graphics.canvas.onmousemove = function(e){
			dh.mouse.x = e.pageX - dh.graphics.canvas.getBoundingClientRect().left;
			dh.mouse.y = e.pageY - dh.graphics.canvas.getBoundingClientRect().top;
		}
	}
}

