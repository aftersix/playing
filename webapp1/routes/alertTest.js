var Sugar = require('sugar');
var request = require('request');

request({
		url: 'http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=wX9NwuHnZU2ToO7GmGR9uw&route=CR-Newburyport&include_access_alerts=false&include_service_alerts=true&format=json',
		json: true
		},

		 function (error, response, trainAlerts) {
		  if (!error && response.statusCode == 200) {
				for (var i=0; i<trainAlerts['alerts'].length; i++){  
				 }  
		  }
		}
);