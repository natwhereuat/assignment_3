function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
}

var ballX = 200;
var ballY = 100;
var ballA = 200;
var ballB = 100;
var ballSpeedX = 3;
var ballSpeedY = 3;

function draw() {
// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	ballA = ballA + ballSpeedX
	ballB = ballB + ballSpeedY
	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	}

	// bottom
	if (ballY > height) {
		ballSpeedY = -ballSpeedY;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}


	background(0);
	ellipse(ballX, ballY, 50, 50);
	ellipse(ballA, ballB, 50, 50);

}
