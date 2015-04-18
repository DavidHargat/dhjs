# dh.js

A light-weight library for quick HTML5 2D game development and prototyping.
I have mostly just kept it for personal use as a minimal framework for my games.

---

## What is dh.js?

dh.js is a small utility for quickly getting your html5 game or prototype off the ground.

### Features

- Intuitive wrappers for Canvas2D
- Basic keyboard and mouse input
- Utility class for things like distance calculation
- No dependencies

---

## Quick Setup Of New HTML5 Projects

```javascript
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