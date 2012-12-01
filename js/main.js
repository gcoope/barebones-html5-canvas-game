
function init()
{	var ctx;
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 400;		
	console.log("Canvas initiated");
	setupFPS();
	update();
}

function update()
{
	requestAnimationFrame(update);
	// Update functions go here
}

function draw()
{	
	drawFPS();
	// Draw functions go here
}