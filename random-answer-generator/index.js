const input = document.querySelector('input');
const btnSubmit = document.querySelector('.btnSubmit');
const btnReset = document.querySelector('.btnReset');
const display = document.querySelector('.display-answer');

const answers = [
	'Exercitation enim nulla.',
	'Et culpa labore ullamco.',
	'Excepteur esse ea ad mollit do.',
	'Non pariatur non eiusmod veniam consequat velit.',
	'Deserunt enim commodo esse esse eu officia.',
	'Laborum dolor do nulla do aute anim.',
	'Mauris commodo augue pharetra'
];

btnSubmit.addEventListener('click', genAnswer);
btnReset.addEventListener('click', clearScreen);

// ToDo: Validation
function genAnswer() {
	let random = Math.floor(Math.random() * 7);
	let randomAns = answers[random];
	displayAns(randomAns);
}

function displayAns(output) {
	const div = document.createElement('div');
	div.innerText = output;
	display.appendChild(div);
}

function clearScreen() {
	input.value = '';
	while (display.firstChild) {
		display.removeChild(display.firstChild);
	}
}
