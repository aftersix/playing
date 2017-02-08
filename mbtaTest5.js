// Load the http module to create an http server.
var http = require('http');
var Sugar = require('sugar');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
	var formatDate = Sugar.Date.format(new Date(), '{hh}:{mm}');
  response.write(formatDate);
  response.write("hello" + </br>);
  
  response.end(formatDate);

  
  
  
  });

// Listen on port 6969
server.listen(6969);

// Put a friendly message on the terminal
console.log("Server running at http://localhost:6969/");