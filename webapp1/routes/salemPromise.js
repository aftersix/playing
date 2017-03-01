var request = require('request');

var p1 = new Promise((resolve, reject) => { 
  
  
  
  var  jsonObject = require('./salemAPI.json');


 for (var i=0; i<jsonObject['mode'].length; i++){
    
	
	
	var mode = jsonObject['mode'][i];
	
		for (var j=0; j<mode['route'].length; j++){
		var route = mode['route'][j];
			for (var k=0; k<route['direction'].length; k++){
				var direction = route['direction'][k];
				for (var l=0; l<direction['trip'].length; l++){
					//console.log(direction['trip'][l]['trip_name']);
					//direction['trip'][l]['sch_arr_dt'] = Sugar.Date.format(new Date(direction['trip'][l]['sch_arr_dt']*1000),  '{hh}:{mm}');
					//console.log("Scheduled at: " + direction['trip'][l]['sch_arr_dt']);
				}
			}
		}
 } 
 
 resolve(jsonObject);

}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});



//It's even possible to use .catch
Promise.all([p1, p2, p3, p4]).then(values => { 
  console.log(values);
  exports.promise = values;
}).catch(reason => { 
  console.log(reason)
});

//From console: 
//"reject"