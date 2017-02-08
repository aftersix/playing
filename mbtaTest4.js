var Sugar = require('sugar');
var request = require('request');





request('http://developer.mbta.com/lib/RTCR/RailLine_12.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
     //console.log(importedJSON); //displays the imported json on the console (for testing)
  }
  //console.log(importedJSON['Messages'].length); displays the length of the imported json on the console (for testing)
  for (var i=0; i<importedJSON['Messages'].length; i++){
	  var line = importedJSON['Messages'][i];
	  
	  if(line['Stop'] == "Salem"){
	  console.log(line['Destination'])
	  console.log(line['Trip']);
		var scheduleTime = Sugar.Date.format(new Date(line['Scheduled']*1000),  '{hh}:{mm}');
	  console.log("Scheduled in Salem at:" + scheduleTime);
			if(line['Lateness'] == 0){
			var predictedTime = '';} else {
			var predictedTime = scheduleTime + line['Lateness'];
			}
		predictedTime = line['Scheduled']+predictedTime;
		predictedTime = Sugar.Date.format(new Date(predictedTime*1000),  '{hh}:{mm}');
	  console.log("Predicted in Salem at:" + predictedTime);
	
	  console.log(" ");
	  }
  }
  
})