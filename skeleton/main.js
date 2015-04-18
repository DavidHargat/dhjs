// Shortener for graphics module
var g = dh.graphics;

// Find canvas element with id=canvas
g.setCanvas("canvas");

// Set canvas size to 800px by 600px
g.setSize(800,600);

//Run after all resources have loaded
dh.resources.onLoad(function(){
	// Clear canvas with white
	g.clear("#fff");
	// do your stuff here
	
});