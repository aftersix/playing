var Sugar = require('sugar');
var request = require('request');


//var mbtaFeed; //needs to be a universal variable to pass outside of the 



  

console.log("ran trains.js");


exports.trains = function(req,res,param) {

request({
	url: 'http://developer.mbta.com/lib/RTCR/RailLine_12.json',
	json: true
	},

	 function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	      mbtaFeed = body;
		 
		 //format the timestamp into something readable
		 for (var i=0; i<mbtaFeed['Messages'].length; i++){
			 
			mbtaFeed['Messages'][i]['Scheduled'] = Sugar.Date.format(new Date(mbtaFeed['Messages'][i]['Scheduled']*1000),  '{hh}:{mm}');
			 
		 }
		 
		 
		 
		 //for testing - print the array of mbta data feeds
		 console.log(mbtaFeed);
		 console.log(param);
	  }
	})



res.render('trains', {title:'trains' , mbtaFeed:mbtaFeed });
console.log("ran trains.js exports module");
};
