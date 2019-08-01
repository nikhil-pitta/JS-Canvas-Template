var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/* UTILITY FUNCTIONS */
function randomIntFrom(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Change color pallet by searching up Kuler
var colors = [
	"#73020C", 
	"#400106", 
	"#BF213E", 
	"#BF0B0B", 
	"#0D0D0D"
];

function randomColor(colors) 
{
  return colors[Math.floor(Math.random() * colors.length)];
}

function distanceBetween(x1, y1, x2, y2) 
{
  let xDist = x2 - x1
  let yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
/* END UTILITY FUNCTIONS */

/* CODE SNIPPETS */
var mouse = 
{
    x: undefined,
    y: undefined
}

addEventListener('mousemove', 
	function()
	{
		mouse.x = event.clientX;
   		mouse.y = event.clientY;
	})

addEventListener('resize', 
	function()
	{
		canvas.width = innerWidth;
   		canvas.height = innerHeight;

    	init(); // Acts as "main method"
	})
/* END CODE SNIPPETS */

// Basic Code Shell for Drawing a Circle
function Circle(x, y, radius)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = randomColor(colors);

	this.draw = function()
	{
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function()
	{
		this.draw();
	}

}

// MAIN METHOD
// Initialize all objects/variables here so resize event listener will work
// However, declare outside the function so that the animate function can access the variables
function init()
{

}

// Method used to update objects
function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	c.fillText("Nikhil's Template", mouse.x, mouse.y);
	// Begin Animation

}

init();
animate();




