// Generates a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var tcolor = '#';
    for (var i = 0; i < 6; i++ ) {
        tcolor += letters[Math.round(Math.random() * 15)];
    }
    return tcolor;
}

// Returns a random number in  a spcified range
function randomRange(minVal,maxVal,floatVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

// Clear canvas, call before drawing anything else
function clear()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Ass SetupFPS() in init
function setupFPS(){var d=new Date();var a=0;var c="Waiting";function b(){a++;var f=new Date();if(f.getTime()-d.getTime()>1000){var e=f.getTime()-d.getTime();c=""+Math.round(a*1000/e);a=0;d=f}return c}return b}var hit=setupFPS();

// Add this function to draw()
function drawFPS()
{
	ctx.font = "16px Helvetica";
	ctx.fillStyle = '#000000';
	ctx.fillText(hit(), 10, 20);
}