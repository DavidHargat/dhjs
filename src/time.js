
/**********************************
*	@Author David Hargat          *
*	@Email DavidHargat@yahoo.com  *
***********************************/

dh.time = {
	delta: 0,
	lastTime: 0,
	currentTime: new Date().getTime(),
	passed: 0,
	getTime: 
		function(){
			return new Date().getTime();
		},
	update: 
		function(){
			dh.time.lastTime = dh.time.currentTime;
			dh.time.currentTime = dh.time.getTime();
			var dt = dh.time.currentTime - dh.time.lastTime;
			dh.time.delta = dt;
			dh.time.passed += dt;
		}
};
