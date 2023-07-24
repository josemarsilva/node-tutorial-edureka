// Import libraries
var http = require('http');
var url = require('url');

// create server
var server = http.createServer(function(req,res){
    // setting content header
    console.log('writeHead');
    res.writeHead(200, ('Content-Type', 'text/html'));
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    console.log('vars', q, txt);
    // send string to response
    console.log('end');
    res.end(txt);
});

// assign port 8082 as server listening port
server.listen(8082);