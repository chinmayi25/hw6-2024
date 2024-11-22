var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById('player1')
	video.load();
	video.autoplay = false;

});

document.getElementById('play').addEventListener("click", function(){
	video.play();
	document.getElementById('volume').textContent = video.volume;
});

document.getElementById('pause').addEventListener("click", function(){
	video.pause();
});

document.getElementById('slower').addEventListener("click", function(){
	const currentPlaybackRate = video.playbackRate;
  	const newPlaybackRate = currentPlaybackRate * (1 - (10/100));
  	video.playbackRate = newPlaybackRate;
	console.log(newPlaybackRate)
});

document.getElementById('faster').addEventListener("click", function(){
	const currentPlaybackRate = video.playbackRate;
  	const newPlaybackRate = currentPlaybackRate * (1 + (10/100));
  	video.playbackRate = newPlaybackRate;
	console.log(newPlaybackRate)
});

document.getElementById('skip').addEventListener("click", function(){
	video.currentTime += 10;
});

document.getElementById('mute').addEventListener("click", function(){
	video.muted = !video.muted;
});

document.getElementById('slider').addEventListener("change", function(){
	video.volume = this.value/100;
	document.getElementById('volume').textContent = video.volume;
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

