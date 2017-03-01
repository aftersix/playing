var Sugar = require('sugar');
var request = require('request');

/* var  jsonObject = require('./salemAPI.json');


 for (var i=0; i<jsonObject['mode'].length; i++){
    
	
	
	var mode = jsonObject['mode'][i];
	
		for (var j=0; j<mode['route'].length; j++){
		var route = mode['route'][j];
			for (var k=0; k<route['direction'].length; k++){
				var direction = route['direction'][k];
				for (var l=0; l<direction['trip'].length; l++){
					console.log(direction['trip'][l]['trip_name']);
					direction['trip'][l]['sch_arr_dt'] = Sugar.Date.format(new Date(direction['trip'][l]['sch_arr_dt']*1000),  '{hh}:{mm}');
					console.log("Scheduled at: " + direction['trip'][l]['sch_arr_dt']);
				}
			}
		}
 } */
	

	
	




var exportSalem = function exportSalem(callback){
	var salemSchedule = { table: []  };
request({
	url: 'http://realtime.mbta.com/developer/api/v2/schedulebystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=Salem&format=json',
	json: true
	},

	 function (error, response, jsonObject) {
	  if (!error && response.statusCode == 200) {
	     
			for (var i=0; i<jsonObject['mode'].length; i++){  
				var mode = jsonObject['mode'][i];
				for (var j=0; j<mode['route'].length; j++){
					var route = mode['route'][j];
					for (var k=0; k<route['direction'].length; k++){
						var direction = route['direction'][k];
						for (var l=0; l<direction['trip'].length; l++){
							//console.log(direction['trip'][l]['trip_name']);
							
							direction['trip'][l]['sch_arr_dt'] = Sugar.Date.format(new Date(direction['trip'][l]['sch_arr_dt']*1000),  '{hh}:{mm}');
							//console.log("Scheduled at: " + direction['trip'][l]['sch_arr_dt']);
							
							
							salemSchedule.table.push({train_name: direction['trip'][l]['trip_name'], scheduleTime: direction['trip'][l]['sch_arr_dt']});
							//console.log(salemSchedule);
							
							
						}
					}
				}
			  }  
	  }
	
	console.log("getSalem.js");
	console.log(salemSchedule);
	 console.log(salemSchedule['table'][0]['train_name']);
	 console.log(salemSchedule['table'].length);
	 
	   for(var i=0; i<salemSchedule['table'].length; i++) {
		   console.log(i);
		   console.log(salemSchedule['table'][i]['train_name']);
 }
 
 
 
	
	});
	return salemSchedule;
	callback();
}


exports.schedule = exportSalem();
exports.three = function(){return 3;};
exports.four = 4;

var getTen =  function getTen (callback) {
	
	var ten = 10;
	return ten;
	callback();
	
}

exports.ten = getTen();

console.log(exportSalem());





