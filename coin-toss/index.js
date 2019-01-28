const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const coinArray = ['Heads', 'Tails'];
let score = [0, 0]; // [win, lose]

// e.target.innerText gets the text of button that was clicked (heads or tails)
const tossCoin = e => {
	let playerGuess = e.target.innerText;
	let outPut;

	// let tossResults = Math.random();
	// if (tossResults >= 0.5) {
	//   tossResults = 1;
	// } else {
	//   tossResults = 0;
	// }
	// BETTER:
	let tossResults = Math.floor(Math.random() * 2);
	let computerGuess = coinArray[tossResults];

	// Determine winner
	// if (tossResults === 1) {
	//   console.log (coinArray[1])
	//   return coinArray[1]
	// } else {
	//   console.log (coinArray[0])
	//   return coinArray[0]
	// }
	// BETTER:
	if (playerGuess === computerGuess) {
		outPut = 'Player Wins!';
		score[0]++;
	} else {
		outPut = 'Computer Wins!';
		score[1]++;
	}

	// send output to screen
	message.innerHTML = `Player picked: ${playerGuess} 
    <br> Computer picked: ${computerGuess} 
    <br>${outPut} 
    <br> Player: ${score[0]}  Computer: ${score[1]}`;
};

// event listener for button click
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', tossCoin);
}
