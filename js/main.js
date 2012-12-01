var ctx;

function init()
{	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 400;		
	console.log("Canvas initiated");
	update();
}

function update()
{
	requestAnimationFrame(update);
	draw();
	// Update functions go here
}

function draw()
{	
	clear();
	drawFPS();
	// Draw functions go here
}