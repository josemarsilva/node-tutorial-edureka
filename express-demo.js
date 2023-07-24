var express = require('express');   // Third party library
var http = require('http');         // Mix use of Express and HTTP
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get('/', function(req,res){
    console.log('get /');
    res.send('<h1>Express Works!</h1>');
});

app.get('/tasks', function(req,res){
    console.log('get /tasks');
    fs.readFile('./db.json', function(err,data){
        var tasks = JSON.parse(data.toString()).tasks;
        res.send(tasks);;  // res.send(data.toString());  // send data raw text
    });
});

server.listen(3000, function(){
    console.log('Server is listening to port 3000');
});

