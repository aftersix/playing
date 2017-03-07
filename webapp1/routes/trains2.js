var Sugar = require('sugar');
var request = require('request');


//var mbtaFeed; //needs to be a universal variable to pass outside of the 





console.log("ran trains.js");


exports.trains = function(req,res) {

console.log(req.param("station"));

var station = req.param("station");
if(req.param("station")=="Hamilton/ Wenham"){station = "Hamilton/%20Wenham";}

var url = "http://realtime.mbta.com/developer/api/v2/schedulebystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop="+station+"&format=json"

console.log(url);

var salemSchedule = {table: [] };

	var salemPromise = new Promise((resolve, reject) => {
		request({
		url: url,
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
	  res.render('trains2', {title:'trains' , salemSchedule:salemSchedule , station:req.param("station") });
	  console.log("ran trains.js exports module - promise done.");
	});

	
	

};
