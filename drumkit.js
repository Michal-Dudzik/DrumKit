document.addEventListener('keypress', onKeyPress);

const KeyToSound = {
	a: 'hihat',
	s: 'kick',
	d: 'openhat',
	f: 'boom',
	g: 'ride',
	h: 'snare',
	j: 'tom',
	k: 'tink',
};

const audio = new Audio('./sounds/hihat.wav');

function onKeyPress(ev) {
	// logika mapowania key -> sound
	const sound = KeyToSound[ev.key];
	switch (ev.key) {
		case 'a':
			sound = SOUND.clap;

			// clap
			break;
		case 's':
			sound = SOUND.hihat;
			// hihat
			break;
		case 'd':
			sound = SOUND.kick;
			// kick
			break;
		case 'f':
			sound = SOUND.openhat;
			// openhat
			break;
		case 'g':
			sound = SOUND.ride;
			// ride
			break;
		case 'h':
			sound = SOUND.snare;
			// snare
			break;
		case 'j':
			sound = SOUND.tink;
			// tink
			break;
		case 'k':
			sound = SOUND.tom;
			// tom
			break;
	}
	playSound(sound);
}

function playSound(sound) {
	if (!sound) {
		return;
	}
	const audioTag = document.querySelector(`#${clap}`);
	audioTag.currentTime = 0;
	audioTag.play();
}
// Date.now()

function Play(x) {
	document.querySelector(x).classList.add('keyPressed');
	audio.play();
}

function Stop(x) {
	document.querySelector(x).classList.remove('keyPressed');
}

document.getElementById('d1').addEventListener('mousedown', function () {
	document.querySelector('d1').classList.add('keyPressed');
	audio.play();
});
document.getElementById('d1').addEventListener('mouseup', function () {
	document.getElementById('d1').classList.remove('keyPressed');
});
