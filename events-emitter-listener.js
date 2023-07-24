var http = require('http');                                 // Import http
var events = require('events');                             // Import events

var eventEmitter = new events.EventEmitter();               // Create an eventEmitter object

var server = http.createServer(function(req,res){           // Create HTTP server
    eventEmitter.emit('someone requested', 'something');    // Event emitter firing an event when request incomes
    res.end('Server works!')
});

eventEmitter.on('someone requested', function(data){        // Event listener 
    console.log('A request has been done on the server! ', data);
});

server.listen(3000, 'localhost', function(){                // Start HTTP server listen on port 3000
    console.log('Server started on port 3000');
});