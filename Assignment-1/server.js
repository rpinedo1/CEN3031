var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
 
  var parsedUrl = url.parse(request.url);
 
 
   if(parsedUrl.path === '/listings' && request.method === "GET"){
   	
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end(listingData);
	
   }

   else{
   		response.writeHead(404, {'Content-Type' : 'text/plain'});
		response.end('Bad gateway error');
   }
   
   
};


fs.readFile('listings.json', 'utf8', function(err, data) {

   server = http.createServer(requestHandler);
   if (err) throw err;
   listingData = data;
   
   server.listen(port, function() {
   }); 
});
