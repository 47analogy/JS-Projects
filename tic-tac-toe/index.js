const player1 = 'X';
const player2 = 'O';

class TicTacToe {
	// game logic
	playerMove = event => {
		// console.log(event.target.id);
		this.displayPlayerMove(event.target.id);
	};

	// update the game board
	displayPlayerMove = playerIndex => {
		if (this.board[playerIndex] === ' ') {
			this.board[playerIndex] = this.currentPlayer;
			// alternate players
			if ((this.currentPlayer = player1)) {
				this.currentPlayer = player2;
			} else {
				this.currentPlayer = player1;
			}
			console.log(this.board);
			this.updateBoard();
		}
	};

	// update game board on the screen
	updateBoard() {
		let gameBoard = document.querySelector('#gameBoard');
		let gameSquares = gameBoard.childNodes;
		// console.log(gameSquares);
		gameSquares.forEach((square, index) => {
			if (square.innerText !== this.board[index]) {
				square.innerText = this.board[index];
			}
		});
	}

	// draw board on screen
	drawBoard() {
		document.body.innerHTML = '';
		let gameBoard = document.createElement('div');
		gameBoard.id = 'gameBoard';
		gameBoard.classList.add('board');

		gameBoard.addEventListener('click', this.playerMove);

		this.board.forEach((square, index) => {
			let squareElement = document.createElement('div'); // squares
			squareElement.id = index;
			squareElement.classList.add('square');
			gameBoard.appendChild(squareElement);
		});
		document.body.appendChild(gameBoard);
	}

	// start new game
	start() {
		this.board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
		this.currentPlayer = player1; // set player1 to play first;
		this.drawBoard(); // draw board
	}
}

const game = new TicTacToe();
game.start();
