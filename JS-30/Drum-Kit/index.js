const keys = document.querySelectorAll('.key');

// uses key code to play a sound
const playKey = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (audio) {
		audio.currentTime = 0; // prevents delay when playing sound
		audio.play();
		key.classList.add('playing'); // adds playing class when key is pressed
	} else {
		return;
	}
};

// removes the playing class
const removeTransition = e => {
	if (e.propertyName !== 'transform') {
		return;
	} else {
		this.classList.remove('playing');
	}
};

// listen for key press event in the window
window.addEventListener('keydown', playKey);
// listen for when CSS transition is completed
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
