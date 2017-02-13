//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "1n", 3);

var count = 0;

// StartAudioContext(Tone.context, '#start', function() {
// 		console.log("STARTED!!!");
// });
StartAudioContext(Tone.context, '#start');

function updateTime(){
	requestAnimationFrame(updateTime);

	//Tone.now returns the current AudioContext time
	document.getElementById("text").innerHTML = "AudioContext " + Tone.now().toFixed(2);
	// console.log(Tone.now().toFixed(2));

	count++;
}
updateTime()
