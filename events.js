var fs = require('fs');
var event = require('events'); // import Events Module

const myEmitter = new event.EventEmitter(); // Create object of EventEmitter

fs.readFile('text.txt', (err, data) => {
    if(err){ // err is true if something goes wrong, like file does not exists
        console.log(err);
    }
    console.log(data.toString());
    myEmitter.emit('readFile'); // Emitting event
});

myEmitter.on('readFile', () => {
    console.log('\nRead Event Ocurred!'); // Registering Listener and defining event handler
});


