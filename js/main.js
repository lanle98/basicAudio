(()=>{
	var aud = document.querySelector("audio");
	var button = document.querySelector("button");
		tracks = document.querySelectorAll('.trackholder')

	// button.addEventListener("click", () =>
	// {
	// 	button.innerHTML = "Pause"
	// 	aud.play()
		

	// 	if(true)
	// 	{

	// 		button.addEventListener("click", () =>
	// 			{
	// 			button.innerHTML = "Play"
	// 			aud.pause()})
			
	// 	}


	// 	// if(aud.pause()){
	// 	// 	button.addEventListener("click", () =>
	// 	// 		{button.innerHTML = "Play"
	// 	// 		aud.play()})
	// 	// }	

			
	// })



	function switchAudioTrack(){
	currentTrack = this.dataset.currenttrack;

	aud.src = `audio/${currentTrack}`;
	aud.load();
	aud.play()
}

tracks.forEach(track => {
	track.addEventListener("click", switchAudioTrack)
	console.log(this)
})
})()