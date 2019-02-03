// create game canvas
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

let ballX = 50; // x-position of ball
let ballY = 50; // y-position of ball

// x-speed/direction of ball (movement)
let ballDirectionX = 15;
let ballDirectionY = 15;

// initial y-position of paddle
let player1 = 250;

// y-speed/direction of paddle (movement)
let player1DirectionY = 20;

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
	leftPaddle(20, player1, 15, 100);

	// right paddle
	// ctx.fillStyle = 'white';
	// ctx.fillRect(780, 150, 15, player2Paddle);
};

// update playing screen
const updateScreen = () => {
	setInterval(drawScreen, 1000 / framesPerSecond);
	setInterval(moveball, 1500 / framesPerSecond);
};

// create left paddle
// paddleY - important param to control up and down movement
const leftPaddle = (paddleX, paddleY, paddleWidth, paddleHeight) => {
	ctx.fillStyle = 'white';
	ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
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

// move left paddle by updating player1
// A and Z control player 1 movement

// TODO: keep paddle from moving off playing surface
const leftPaddleCtrl = e => {
	const moveUp = 65;
	const moveDown = 90;

	if (e.keyCode === moveUp) {
		player1 = player1 - player1DirectionY;
	}
	if (e.keyCode === moveDown) {
		player1 = player1 + player1DirectionY;
	}
};

// event listeners
document.addEventListener('keydown', leftPaddleCtrl);
// function calls
updateScreen();
