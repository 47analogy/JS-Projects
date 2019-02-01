// create game canvas
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

// x-position of ball
let ballX = 50;

// x-speed of ball (movement)
let ballSpeedX = 15;

// variable to set frame rate
const framesPerSecond = 30;

// draw initial playing screen
const drawScreen = () => {
	// playing field
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// ball
	ctx.fillStyle = 'white';
	ctx.fillRect(ballX, 120, 15, 15);

	// left paddle
	ctx.fillStyle = 'white';
	ctx.fillRect(50, 40, 15, 100);
	// right paddle
	ctx.fillStyle = 'white';
	ctx.fillRect(750, 150, 15, 100);
};

// move the ball and change direction
const moveball = () => {
	ballX = ballX + ballSpeedX;
	// (- flips the direction)
	if (ballX >= canvas.width) ballSpeedX = -ballSpeedX;
	if (ballX <= 0) ballSpeedX = -ballSpeedX;
};

// update playing screen
const updateScreen = () => {
	setInterval(drawScreen, 1000 / framesPerSecond);
	setInterval(moveball, 1500 / framesPerSecond);
};

// function calls
updateScreen();
