// create game canvas
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

// x-position of ball
let ballX = 170;

const drawScreen = () => {
	ballX = ballX + 10;

	// playing field
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// ball
	ctx.fillStyle = 'white';
	ctx.fillRect(ballX, 120, 20, 20);

	// paddles

	ctx.fillStyle = 'white';
	ctx.fillRect(50, 40, 15, 100);

	ctx.fillStyle = 'white';
	ctx.fillRect(750, 150, 15, 100);
};

drawScreen();
