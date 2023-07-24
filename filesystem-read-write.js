var fs = require('fs');  // Required module

fs.readFile("./hello.txt", function(err,data){
    if(!err){
        console.log(data);
        console.log(data.toString());
    }
});


fs.writeFile("./hello.txt", 'Hello Node.js, How are you?', function(err){
    if(!err){
        fs.readFile('./hello.txt', function(err,data){
            if(!err){
                console.log(data.toString());
            }
        });
    }

});