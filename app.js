
const h1 =  document.querySelector("h1");
let sound=document.querySelector("#keys");
const img = document.querySelector("#drum");


const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openHat = document.getElementById("openHat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");





document.addEventListener("keypress",  (event) => {
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

// mouse click functions ----------------------



boom.addEventListener("click", () =>{
	soundBoom.play();
	boom.style.backgroundColor	= "white";
	
})
clap.addEventListener("click", () =>{
	soundClap.play();
	clap.style.backgroundColor	= "white";
})
hihat.addEventListener("click", () =>{
	soundHat.play();
	hihat.style.backgroundColor	= "white";
})
kick.addEventListener("click", () =>{
	soundKick.play();
	kick.style.backgroundColor	= "white";
})
openHat.addEventListener("click", () =>{
	soundOpen.play();
	openHat.style.backgroundColor	= "white";
})
ride.addEventListener("click", () =>{
	soundRide.play();
	ride.style.backgroundColor	= "white";
})
snare.addEventListener("click", () =>{
	soundSnare.play();
	snare.style.backgroundColor	= "white";
})
tink.addEventListener("click", () =>{
	soundTink.play();
	tink.style.backgroundColor	= "white";
})
tom.addEventListener("click", () =>{
	soundTom.play();
	tom.style.backgroundColor	= "white";
})



boom.addEventListener("mouseout", () =>{
	boom.style.backgroundColor = "#3E92CC";
})
clap.addEventListener("mouseout", () =>{
	clap.style.backgroundColor = "#3E92CC";
})
hihat.addEventListener("mouseout", () =>{
	hihat.style.backgroundColor = "#3E92CC";
})
kick.addEventListener("mouseout", () =>{
	kick.style.backgroundColor = "#3E92CC";
})
openHat.addEventListener("mouseout", () =>{
	openHat.style.backgroundColor = "#3E92CC";
})
ride.addEventListener("mouseout", () =>{
	ride.style.backgroundColor = "#3E92CC";
})
snare.addEventListener("mouseout", () =>{
	snare.style.backgroundColor = "#3E92CC";
})
tink.addEventListener("mouseout", () =>{
	tink.style.backgroundColor = "#3E92CC";
})
tom.addEventListener("mouseout", () =>{
	tom.style.backgroundColor = "#3E92CC";
})