var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById('player1')
	video.load();
	video.autoplay = false;

});

document.getElementById('play').addEventListener("click", function(){
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.getElementById('pause').addEventListener("click", function(){
	video.pause();
});

document.getElementById('slower').addEventListener("click", function(){
	const currentPlaybackRate = video.playbackRate;
  	const newPlaybackRate = currentPlaybackRate * (1 - (10/100));
  	video.playbackRate = newPlaybackRate;
	console.log("Speed is " + video.playbackRate);
});

document.getElementById('faster').addEventListener("click", function(){
	const currentPlaybackRate = video.playbackRate;
  	const newPlaybackRate = currentPlaybackRate * (1 + (10/100));
  	video.playbackRate = newPlaybackRate;
	console.log("Speed is " + video.playbackRate);
});

document.getElementById('skip').addEventListener("click", function(){
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
		console.log("Video Current Time is " + video.currentTime);
	} else {
		video.currentTime = 0;
		console.log("Video Current Time is " + video.currentTime);
	}
});

document.getElementById('mute').addEventListener("click", function(){
	if (video.muted == false) {
		video.muted = true;
		console.log("Mute");
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		console.log("Unmute");
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.getElementById('slider').addEventListener("change", function(){
	video.volume = this.value/100;
	document.getElementById('volume').textContent = video.volume;
	console.log("The current value is " + video.volume);
})

document.getElementById('vintage').addEventListener("click", function(){
	document.getElementById('player1').classList.add('oldSchool');
})

document.getElementById('orig').addEventListener("click", function(){
	document.getElementById('player1').classList.remove('oldSchool');
})




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

