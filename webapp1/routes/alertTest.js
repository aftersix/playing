var Sugar = require('sugar');
var request = require('request');

request({
		url: 'http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=wX9NwuHnZU2ToO7GmGR9uw&route=CR-Newburyport&include_access_alerts=false&include_service_alerts=true&format=json',
		json: true
		},

		 function (error, response, jsonObject) {
		  if (!error && response.statusCode == 200) {
			 
				for (var i=0; i<jsonObject['alerts'].length; i++){  
					var note = jsonObject['alerts'][i]['short_header_text'];
					console.log(note);
					
					
					/* for (var j=0; j<note['route'].length; j++){
						var route = note['route'][j];
						
						for (var k=0; k<route['direction'].length; k++){
							var direction = route['direction'][k];
							//console.log(route['direction'][k]['direction_name']);
							for (var l=0; l<direction['trip'].length; l++){
								//console.log(direction['trip'][l]['trip_name']);
								
								direction['trip'][l]['sch_arr_dt'] = Sugar.Date.format(new Date(direction['trip'][l]['sch_arr_dt']*1000),  '{hh}:{mm}');
								//console.log("Scheduled at: " + direction['trip'][l]['sch_arr_dt']);
								direction['trip'][l]['pre_dt'] = Sugar.Date.format(new Date(direction['trip'][l]['pre_dt']*1000),  '{hh}:{mm}');
								
								salemSchedule.table.push({train_direction: route['direction'][k]['direction_name'], train_name: direction['trip'][l]['trip_name'], scheduleTime: direction['trip'][l]['sch_arr_dt'],predictedTime:direction['trip'][l]['pre_dt']});
								//console.log(salemSchedule);
								
								
							}
						}
					} */
				  }  
		  }
		 
		
		
		}
);