// create game canvas
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// globals

let ballX = 0; // x-position of ball
let ballY = 0; // y-position of ball

// speed/direction of ball (movement)
let ballDirectionX = 10;
let ballDirectionY = 10;

// initial positions of paddle
let player1 = 250;
let player2 = 250;

const _paddleHeight = 100;
const _paddleThickness = 15;

// y-speed/direction of paddle (movement)
let player1DirectionY = 20;
let player2DirectionY = 20;

// variable to set frame rate
const framesPerSecond = 30;

// score
let player1Score = 0;
let player2Score = 0;

const winningScore = 5;

// end globals

// draw net on screen
const drawNet = () => {
	for (let i = 0; i < canvas.height; i += 40) {
		ctx.fillStyle = "white";
		ctx.fillRect(canvas.width / 2 - 1, i, 2, 20);
	}
};
// draw initial playing screen
const drawScreen = () => {
	// playing field
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// net
	drawNet();

	// ball
	makeBall(ballX, ballY, 7);

	// left paddle
	leftPaddle(10, player1, _paddleThickness, _paddleHeight);

	// right paddle
	rightPaddle(780, player2, _paddleThickness, _paddleHeight);

	// scoreboard
	ctx.fillStyle = "white";
	ctx.font = "20px Arial";
	ctx.fillText(player1Score, 100, 50);
	ctx.fillText(player2Score, 700, 50);
};

// update playing screen
const updateScreen = () => {
	setInterval(drawScreen, 1000 / framesPerSecond);
	setInterval(moveball, 1500 / framesPerSecond);
};

// create left paddle
// paddleY - important param to control up and down movement
const leftPaddle = (paddleX, paddleY, paddleWidth, paddleHeight) => {
	ctx.fillStyle = "white";
	ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
};

// create right paddle
const rightPaddle = (paddleX, paddleY, paddleWidth, paddleHeight) => {
	ctx.fillStyle = "white";
	ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
};

// create playing ball
const makeBall = (xPos, yPos, size) => {
	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(xPos, yPos, size, 0, 2 * Math.PI, false);
	ctx.fill();
};

// reset ball to middle of screen
const centerBall = () => {
	if (player1Score === winningScore) {
		alert("Player 1 Wins");
		player1Score = 0;
		player2Score = 0;
		//updateScreen(); RESTART GAME
	} else if (player2Score === winningScore) {
		alert("Player 2 Wins");
		player1Score = 0;
		player2Score = 0;
		//updateScreen(); RESTART GAME
	}

	ballX = canvas.width / 2;
	ballDirectionX = -ballDirectionX;
};

// move the ball and change direction
const moveball = () => {
	ballX = ballX + ballDirectionX;
	ballY = ballY + ballDirectionY;

	if (ballX > canvas.width) {
		if (ballY > player2 && ballY < player2 + _paddleHeight) {
			ballDirectionX = -ballDirectionX; //return ball

			let deltaY = ballY - (player2 + _paddleHeight / 2);
			ballY = deltaY * 0.35;
		} else {
			player1Score++; // update score before reset ball
			centerBall(); //reset ball
		}
	}

	if (ballX < 0) {
		if (ballY > player1 && ballY < player1 + _paddleHeight) {
			ballDirectionX = -ballDirectionX;

			let deltaY = ballY - (player1 + _paddleHeight / 2);
			ballY = deltaY * 0.35;
		} else {
			player2Score++;
			centerBall();
		}
	}

	if (ballY >= canvas.height) ballDirectionY = -ballDirectionY;
	if (ballY <= 0) ballDirectionY = -ballDirectionY;
};

/* move paddles by updating player1 and player2
 * A and Z control player 1 / left paddle movement
 * K and M control player 2 / right paddle movement
 */
const PaddleCtrl = e => {
	const moveUp1 = 65; // A key code
	const moveDown1 = 90; // Z key code

	const moveUp2 = 75; // K key code
	const moveDown2 = 77; // M key code

	if (e.keyCode === moveUp1) player1 = player1 - player1DirectionY;
	if (e.keyCode === moveDown1) player1 = player1 + player1DirectionY;

	if (e.keyCode === moveUp2) player2 = player2 - player2DirectionY;
	if (e.keyCode === moveDown2) player2 = player2 + player2DirectionY;

	// keep paddle from moving off screen
	if (player1 < 0) player1 = 0;
	if (player1 > canvas.height - _paddleHeight)
		player1 = canvas.height - _paddleHeight;

	if (player2 < 0) player2 = 0;
	if (player2 > canvas.height - _paddleHeight)
		player2 = canvas.height - _paddleHeight;
};

// event listeners
document.addEventListener("keydown", PaddleCtrl);

// function calls
updateScreen();
