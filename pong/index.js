// create game canvas
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

let ballX = 50; // x-position of ball
let ballY = 50; // y-position of ball

// x-speed/direction of ball (movement)
let ballDirectionX = 15;
let ballDirectionY = 15;

// variable to set frame rate
const framesPerSecond = 30;

// draw initial playing screen
const drawScreen = () => {
	// playing field
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// ball
	makeBall(ballX, ballY, 7);

	// left paddle
	ctx.fillStyle = 'white';
	ctx.fillRect(50, 40, 15, 100);
	// right paddle
	ctx.fillStyle = 'white';
	ctx.fillRect(750, 150, 15, 100);
};

// create playing ball
const makeBall = (xPos, yPos, size) => {
	ctx.fillStyle = 'white';
	ctx.beginPath();
	ctx.arc(xPos, yPos, size, 0, 2 * Math.PI, false);
	ctx.fill();
};

// move the ball and change direction
const moveball = () => {
	ballX = ballX + ballDirectionX;
	ballY = ballY + ballDirectionY;

	// (- flips the direction)
	if (ballX >= canvas.width) ballDirectionX = -ballDirectionX;
	if (ballX <= 0) ballDirectionX = -ballDirectionX;
	if (ballY >= canvas.height) ballDirectionY = -ballDirectionY;
	if (ballY <= 0) ballDirectionY = -ballDirectionY;
};

// update playing screen
const updateScreen = () => {
	setInterval(drawScreen, 1000 / framesPerSecond);
	setInterval(moveball, 1500 / framesPerSecond);
};

// function calls
updateScreen();
