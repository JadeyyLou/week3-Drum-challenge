
const h1 =  document.querySelector("h1");
let sound=document.querySelector("#keys");
const img = document.querySelector("#drum")





document.addEventListener("keypress", (event) => {
	let keyPressed = event.key;
	  if(keyPressed == "a"){
		 soundBoom.currentTime = 0;
		 soundBoom.play();
		 boom.style.backgroundColor	= "white";
	} else if (keyPressed == "s") {
		soundClap.currentTime = 0;
		soundClap.play();
		clap.style.backgroundColor	= "white";
	} else if (keyPressed == "d") {
		soundHat.currentTime = 0;
		soundHat.play();
		hihat.style.backgroundColor	= "white";
    } else if (keyPressed == "f") {
	    soundKick.currentTime = 0;
		soundKick.play();
		kick.style.backgroundColor	= "white";
	} else if (keyPressed == "g") {
		soundOpen.currentTime = 0;
		soundOpen.play();
		openHat.style.backgroundColor = "white";
	} else if (keyPressed == "h") {
		soundRide.currentTime = 0;
		soundRide.play();
		ride.style.backgroundColor	= "white";
	} else if (keyPressed == "j") {
		soundSnare.currentTime = 0;
		soundSnare.play();
		snare.style.backgroundColor	= "white";
	} else if (keyPressed == "k") {
		soundTink.currentTime = 0;
		soundTink.play();
		tink.style.backgroundColor	= "white";
	} else if (keyPressed == "l") {
		soundTom.currentTime = 0;
		soundTom.play();
		tom.style.backgroundColor = "white";
	}

img.style.width="80%";
img.style.height="auto";
})

document.addEventListener("keyup", () =>{
	boom.style.backgroundColor= "#3E92CC";
	clap.style.backgroundColor= "#3E92CC";
	hihat.style.backgroundColor= "#3E92CC";
	kick.style.backgroundColor= "#3E92CC";
	openHat.style.backgroundColor= "#3E92CC";
	ride.style.backgroundColor= "#3E92CC";
	snare.style.backgroundColor= "#3E92CC";
	tink.style.backgroundColor= "#3E92CC";
	tom.style.backgroundColor= "#3E92CC";
   img.style.width="50%";
   img.style.height="auto"
})


