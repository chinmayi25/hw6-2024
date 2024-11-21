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




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

