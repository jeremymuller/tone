//create a synth and connect it to the master output (your speakers)

// var osc = new Tone.Oscillator("C5", "square").start();
// var synth = new Tone.AmplitudeEnvelope({
// 	"attack" : 2,
// 	"decay" : 0.2,
// 	"sustain" : 1.0,
// 	"release" : 2,
// 	"releaseCurve" : "linear"
// }).toMaster();
// osc.connect(synth);

var notes = ["C5", "D5", "E5", "G5", "A5", "C6", "D6", "E6", "G6", "A6", "C7", "D7", "E7", "G7", "A7"];

var synth = new Tone.Synth().toMaster();
synth.set({
	"oscillator" : {
		"type" : "square"
	},
	"portamento" : 0,
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.2,
		"sustain" : 1.0,
		"release" : 1,
	}
});

// synth.portamento = 0;



//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "1n", 3);

var count = 0;
var bgColor = Math.random() * 360; // hue

// StartAudioContext(Tone.context, '#start');
StartAudioContext(Tone.context);
Tone.Transport.start("+2");

var clock = new Tone.Clock(function(time){
	console.log(time);
}, 1);

clock.start();

function loopDis(time) {
	// playSound(time);

	var index = Math.floor(Math.random() * notes.length);
	synth.triggerAttackRelease(261.626, 0.02, time, 0.9);
	console.log("play!");
	// var r = Math.random() * 0.2 + 0.1;
	// var r = 0.1;
	// console.log(r);
	// loop.interval = r;
}

var loop = new Tone.Loop(loopDis, 0.2);
// loop.probability = 0.5;
loop.humanize = 0.1;
loop.start("+0").stop(30);


function updateTime(){
	requestAnimationFrame(updateTime);

	//Tone.now returns the current AudioContext time
	document.getElementById("text").innerHTML = "AudioContext " + Tone.now().toFixed(2);

	document.body.style.backgroundColor = "hsl(" + bgColor + ", 100%, 50%)";

	bgColor += 0.1;
	count++;
}
updateTime()
