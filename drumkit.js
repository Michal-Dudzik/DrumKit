document.addEventListener('keypress', onKeyPress);

const itsRecording = document.querySelector('#record');
itsRecording.addEventListener('change', () => {
	if (itsRecording.checked) recording.isrecording = true;
});

let records = [];

let recording = {
	isrecording: false,
	channel: 1,
};

function onKeyPress(event) {
	const key = event.key;
	let sound = '';
	switch (key) {
		case 'd':
			sound = 'boom';
			document.querySelector('#d').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#d').classList.remove('keyPressed');
			}, 100);
			break;
		case 'k':
			sound = 'tom';
			document.querySelector('#k').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#k').classList.remove('keyPressed');
			}, 100);
			break;
		case 's':
			sound = 'hihat';
			document.querySelector('#s').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#s').classList.remove('keyPressed');
			}, 100);
			break;
		case 'f':
			sound = 'kick';
			document.querySelector('#f').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#f').classList.remove('keyPressed');
			}, 100);
			break;
		case 'g':
			sound = 'openhat';
			document.querySelector('#g').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#g').classList.remove('keyPressed');
			}, 100);
			break;
		case 'a':
			sound = 'ride';
			document.querySelector('#a').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#a').classList.remove('keyPressed');
			}, 100);
			break;
		case 'j':
			sound = 'snare';
			document.querySelector('#j').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#j').classList.remove('keyPressed');
			}, 100);
			break;
		case 'h':
			sound = 'tink';
			document.querySelector('#h').classList.add('keyPressed');
			setTimeout(() => {
				document.querySelector('#h').classList.remove('keyPressed');
			}, 100);
			break;
		default:
			sound = 'default';
			break;
	}
	startRecording(sound);
}

function startRecording(sound) {
	console.log(recording);
	if (recording.isrecording) {
		var record = { soundName: sound, timestamp: Date.now() };
		records.push(record);
	}
	playSound(sound);
}

function playSound(sound) {
	console.log(sound);
	const audioTag = document.querySelector(`#${sound}`);
	audioTag.currentTime = 0;
	audioTag.play();
}

document.querySelector('#play').addEventListener('click', () => {
	for (let i = 0; i < records.length; i++) {
		setTimeout(() => {
			playSound(records[i].soundName);
		}, records[i].timestamp - records[0].timestamp);
	}
});

document.querySelector('#record').addEventListener('click', () => {
	if (!document.querySelector('#play').checked) {
		records = [];
	} else {
		recording = {
			isrecording: true,
			channel: 1,
		};
	}
});
