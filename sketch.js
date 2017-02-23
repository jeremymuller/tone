//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "1n", 3);

var count = 0;
var bgColor = Math.random() * 360; // hue

// StartAudioContext(Tone.context, '#start');
StartAudioContext(Tone.context);

// synth.triggerAttackRelease("C5", 0.001, 0, 0.9);
// synth.triggerAttack("C5", 0, 0.9);
// synth.triggerRelease(0.5);

var clock = new Tone.Clock(function(time){
	console.log(time);
}, 1);

clock.start();

function loopDis(time) {
	playSound();
}

var loop = new Tone.Loop(loopDis, 0.5);
loop.start(0).stop(5);

Tone.Transport.start(2);


function updateTime(){
	requestAnimationFrame(updateTime);

	//Tone.now returns the current AudioContext time
	document.getElementById("text").innerHTML = "AudioContext " + Tone.now().toFixed(2);

	document.body.style.backgroundColor = "hsl(" + bgColor + ", 100%, 50%)";

	// if ((Math.random() * 100) < 3) {
	// 	playSound();
	// }

	bgColor += 0.1;
	count++;
}
updateTime()

function playSound() {
	synth.envelope.attack = 0.1;
	synth.envelope.release = 1;
	synth.triggerAttack("C5", 0, 0.9);
	synth.triggerRelease("+0.3");
	console.log("belafonte");
}
