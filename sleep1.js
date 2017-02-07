var Sugar = require('sugar');

function sleepFor( sleepDuration ){
	var now = new Date().getTime();
	while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

console.log("testing sleep");

while (true){

	var currentTime = Sugar.Date.format(new Date(),  '{hh}:{mm}:{ss}');
console.log("Current time:" + currentTime)
sleepFor(60000);

}