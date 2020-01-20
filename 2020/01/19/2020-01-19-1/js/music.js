var _music = document.getElementById('_music');

_music.onclick = function () {
	var _audio = document.getElementById('_audio');

	if (_audio.paused) {
		_audio.play();

		this.innerHTML = "&#xe904";
	}
	else {
		_audio.pause();
		
		this.innerHTML = "&#xe905";
	}
};