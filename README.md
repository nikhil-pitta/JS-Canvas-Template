# JS-Canvas-Template
Launch index.html and immediately begin working by editing canvas.js.
* canvas.js comes with preexisting utility functions and code snippets to optimize your workflow.

### How to Use
1. Navigate to a directory in which you feel comfortable creating a new folder
2. In terminal type in:
`git clone https://github.com/nikhil-pitta/JS-Canvas-Template.git <Name of Folder>`
Without the "< >"

## Features
* The set up of creating an html page to load the canvas.js script has already been completed
* The HTML5 canvas will take up the entire screen
* canvas.getContext('2d') is stored in a variable called c

## Utility Functions
* randomIntFrom(min, max)
  * Returns an integer from the given range inclusively
* var colors and randomColor(colors) 
  * colors is an array with a preloaded color pallet. randomColor(colors) takes in colors as a parameter and returns a color within colors. 
* function distanceBetween(x1, y1, x2, y2)
  * Evaluates and returns the euclidean distance between 2 points. 

## Code Snippets
* var mouse
  * Contains the variables x and y, indicating the location of the mouse
* resize Event Listener
  * Will dynamically change the canvas's width and height, along with calling the "init function"
* function Circle(x, y, radius)
  * A basic blue print for creating a circle
* function init()
  * Variables should be initalized here since this method will be called again in the resize Event Listener
* function animate()
  * This function calls requestAnimationFrame in order to appropriately update objects on the screen




