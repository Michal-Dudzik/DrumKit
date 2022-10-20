document.addEventListener('keypress', playsound);

function onKyePress(e) {
	const key = e.key;
	const sound = 'clap';
	playsound(sound);
}

function playsound(e) {
	const audiotag = document.querySelector('#' + sound);
	audiotag.currentTime = 0;
	audiotag.play();
}
