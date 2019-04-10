const player1 = 'X';
const player2 = 'O';

class TicTacToe {
	// game logic
	playerMove = event => {
		// console.log(event.target.id);
		this.displayPlayerMove(event.target.id);
	};

	// update the game board
	displayPlayerMove = boardIndex => {
		if (this.board[boardIndex] === '') {
			this.board[boardIndex] = this.currentPlayer;
			this.updateBoard();

			// check if there's a winner before alternating player
			if (!this.determineWinner()) {
				// alternate players
				this.currentPlayer = this.currentPlayer === player1 ? player2 : player1;
				//console.log(this.currentPlayer);
				//console.log(this.board);
			} else {
				// announce winner and restart game
				alert('Player ' + this.currentPlayer + ' is the winner!');
				this.start();
			}
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

	determineWinner() {
		// using array position to determine winning combinations
		const winner = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		return winner.find(combo => {
			if (
				this.board[combo[0]] !== '' &&
				this.board[combo[1]] !== '' &&
				this.board[combo[2]] !== '' &&
				this.board[combo[0]] === this.board[combo[1]] &&
				this.board[combo[1]] === this.board[combo[2]]
			) {
				return true;
			} else {
				return false;
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
		this.board = ['', '', '', '', '', '', '', '', ''];
		this.currentPlayer = player1; // set player1 to play first;
		this.drawBoard(); // draw board
	}
}

const game = new TicTacToe();
game.start();
