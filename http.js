var http = require('http');                                // Import required module
var fs = require('fs');                                    // Import required module
var url = require('url');                                  // Import required module

http.createServer( function(request, response) {            // Creating Server

    var pathname = url.parse(request.url).pathname;         // Parse the fetched URL to get pathname
    
    console.log("Request for "+ pathname + " received.");

    fs.readFile(pathname.substr(1), function(err,data) {    // Request file to be read from file system (index.html)
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'}); // Creating Header with content type as text or HTML
        } else {
            response.writeHead(200,{'Content-Type': 'text/html'});  // Generating Response
            response.write(data.toString());
        }
        response.end();
    });
}).listen(3000);                                                    // Listening to port: 3000

console.log('Server running at localhost:3000');

