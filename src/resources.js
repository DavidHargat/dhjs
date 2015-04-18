
/**********************************
*	@Author David Hargat          *
*	@Email DavidHargat@yahoo.com  *
***********************************/

dh.resources = {
	sourceList: [],
	loading: 
		false,
	getImage: 
		function(src){
			if(this.imageMap[src] == undefined){
				return this.imageMap["dh/loading.png"];
			}else{
				return this.imageMap[src];
			}
		},
	imageMap:
		{},
	load: 	
		function(src){
			var ext = src.split(".")[1];
			if(ext=="png"||ext=="gif"||ext=="jpg"){
				this.loadImage(src);
			}
		},
	clear:
		function(){
			this.sourceList = [];
			this.imageMap = {};
		},
	loadImage:
		function(src){
			// If sourceList already contains remove
			if( this.sourceList.indexOf(src) > -1){
				this.sourceList.splice(this.sourceList.indexOf(src),1);
			}			
			// add image to sourceList
			this.sourceList.push(src);
			// get current index
			var index = this.sourceList.length - 1;
			// currently loading
			this.loading = true;
			// instantiate image
			var img = new Image();
			img.onload = function(){
				dh.resources.loading = false;
				dh.resources.imageMap[src] = img;
			};
			img.onerror = function(){
				dh.error("Could not load img " + "'" + src + "'");
				dh.resources.loading = false;
				dh.resources.sourceList.splice(index,1);
			};
			img.src = src;
		},
	isLoaded:
		function(){
			var done = true;
				for(var i=0;i<this.sourceList.length;i++){
					var src = this.sourceList[i];
					if(src=="dh/loading.png")continue;
					if(!this.getImage(src)){
						done = false;
						continue;
					}
					if(this.getImage(src).src == "dh/loading.png"){
						done = false;
					}
				}
			return done;
		},
	drawLoadingScreen:
		function(){
			var g = dh.graphics;
			var w = dh.graphics.canvas.width;
			var h = dh.graphics.canvas.height;
			
			g.drawRect(0,0,w,h,"#000");
			g.drawCircle(w/2,0,w/1.5,"#fa0");
			g.drawCircle(w/2,0,w/1.5 - (w/16),"#000");
			g.drawCircle(w/2,0,w/1.5 - (w/8),"#fa0");
			
			g.fontSize = w/10;
			g.drawText("dh.js",w/4 + (w/10),h/8,"#000");
			g.drawText("loading...",w/4 + (w/32),h/4 + (w/10),"#fff");
		},
	onLoad:
		function(func){
			if(!this.isLoaded()){	
				this.drawLoadingScreen();
				setTimeout(function(){dh.resources.onLoad(func);},1);
			}else{
				dh.graphics.clear("#000");
				func();
			}
		}
};
dh.resources.load("dh/loading.png");
