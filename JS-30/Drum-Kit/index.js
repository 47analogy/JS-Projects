const keys = document.querySelectorAll('.key');

const playKey = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	//console.log(audio);
	if (audio) {
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
	} else {
		return;
	}
};

const removeTransition = e => {
	if (e.propertyName !== 'transform') {
		return;
	} else {
		this.classList.remove('playing');
	}
};

window.addEventListener('keydown', playKey);
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
