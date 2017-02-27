var salemSchedule = require('./getSalem.js');
var Sugar = require('sugar');



var schedule = salemSchedule.schedule();
var three = salemSchedule.three();

console.log(three);



function sleepFor( sleepDuration ){
	var now = new Date().getTime();
	while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

console.log("testing sleep");

while (true){

	var currentTime = Sugar.Date.format(new Date(),  '{hh}:{mm}:{ss}');
console.log("Current time:" + currentTime)
console.log(schedule);
sleepFor(6000);

}