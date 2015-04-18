
/**********************************
*	@Author David Hargat          *
*	@Email DavidHargat@yahoo.com  *
***********************************/

dh.graphics = {
	canvas: 
		null,
	context:
		null,
	clearColor:
		"#FFF",
	setCanvas: function(id){
		this.canvas = document.getElementById(id);
		this.context = this.canvas.getContext("2d");
		this.canvas.style.margin = "auto";
		this.canvas.style.display = "block";
	},
	setStyleSize: function(width,height){
		this.canvas.style.width = width;
		this.canvas.style.height = height;
	},
	setSize: function(width,height){
		this.canvas.width = width;
		this.canvas.height = height;
	},
	drawRect: function (x,y,w,h,color,angle){
		if(angle){
			this.context.translate(x,y);
			this.context.rotate(angle);
			this.context.fillStyle = color;
			this.context.fillRect(0,0,w,h);
			this.context.rotate(-angle);
			this.context.translate(-x,-y);
		}else{	
			this.context.fillStyle = color;
			this.context.fillRect(x,y,w,h);	
		}		
	},
	drawRectOutline: function (x,y,w,h,color,lw){
		this.context.strokeStyle = color;
		if(lw){
			this.context.lineWidth = lw;
		}else{
			this.context.lineWidth = 2;
		}
		this.context.beginPath();
		this.context.rect(x,y,w,h);
		this.context.stroke();
		this.context.closePath();
	},
	drawText: function (str,x,y,color,fontSize){
		this.fontSize = fontSize | 16;
		this.context.fillStyle = color;
		this.context.beginPath();
		this.context.font = this.fontSize + "px Arial";
		this.context.fillText(str,x,y);
		this.context.closePath();
	},
	drawLine: function (x1,y1,x2,y2,color,width){
		this.context.strokeStyle = color;
		this.context.lineWidth = width;
		this.context.beginPath();
		this.context.moveTo(x1,y1);
		this.context.lineTo(x2,y2);
		this.context.stroke();
		this.context.closePath();
	},
	drawCircle: function (x,y,radius,color){
		this.context.fillStyle = color;
		this.context.beginPath();
		this.context.arc(x,y,radius,0,2*Math.PI);
		this.context.fill();
		this.context.closePath();
	},
	drawCircleOutline: function (x,y,radius,color,width){
		this.context.lineWidth = width;
		this.context.strokeStyle = color;
		this.context.beginPath();
		this.context.arc(x,y,radius,0,2*Math.PI);
		this.context.stroke();
		this.context.closePath();
	},
	drawImage: function (img,x,y,width,height,angle){
		if(!img){
			dh.error("attempted to draw undefined.");
			return;
		}
		if(dh.resources.loading){
			dh.warning("drawing while resource are loading.");
		}
		if(angle){
			var a = Math.round(angle*10)/10;
			this.context.translate(x+width/2,y+height/2);
			this.context.rotate(a/(360*Math.PI/(180)));
			this.context.drawImage(img,-width/2,-height/2,width,height);
			this.context.rotate(-a/(360*Math.PI/(180)));
			this.context.translate(-x-width/2,-y-height/2);
		}else{	
			this.context.drawImage(img,x,y,width,height);
		}	
	},
	clear: function (color){
		this.drawRect(0,0,this.canvas.width,this.canvas.height,color);
	}
};
