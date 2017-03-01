//var salemSchedule = require('./getSalem.js');
var Sugar = require('sugar');
//var salemPromise = require('./salemPromise.js');
var request = require('request');

var salemSchedule = { table: []  };

/* var schedule = salemSchedule.schedule;
var three = salemSchedule.three();
var four = salemSchedule.four;
var ten = salemSchedule.ten;
console.log(three);
console.log(four);
console.log(schedule);
console.log(ten);
 */
//var salemPromise = salemPromise.promise;



var salemPromise = new Promise((resolve, reject) => {
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
	 
	 resolve(); 
	
	});
  });


Promise.all([salemPromise]).then(values => { 
  //console.log(values); // [3, 1337, "foo"] 
  console.log(salemSchedule);
  console.log("done")
});


