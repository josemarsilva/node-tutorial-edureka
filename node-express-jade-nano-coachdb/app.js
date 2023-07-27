// Required modules

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var urlencoded = require('url');
var bodyParser = require('body-parser');
var json = require('json');
var logger = require('logger');
var methodOverride = require('method-override');

var username = 'admin';
var password = 'admin';
var couchDBUrl = 'http://' + username + ':' + password + '@127.0.0.1:5984';

var nano = require('nano')(couchDBUrl);
var db = nano.use('address');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname,'public')));

app.get('/', routes.index);

app.post('/createdb', function(req, res){
    console.log('/createdb', req.body.dbname);
    nano.db.create(req.body.dbname, function(err){
        if(err){
            console.log(err);
            res.end("Error creating Database "+req.body.dbname + ' :-(');
            return;
        }
        res.send("Database " + req.body.dbname + " created successfully :-)");
    });
});

app.post('/new_contact', function(req,res){
    console.log('/new_contact', req.body.name, req.body.phone);
    var name = req.body.name;
    var phone = req.body.phone;
    db.insert({name:name, phone:phone, crazy:true}, phone, function(err,body,header){
        if(err){
            console.log(err);
            res.send("Error creating contact :-(");
            return;
        }
        res.send("Contact created sucessfully!");
    });
});

app.post('/view_contact', function(req,res){
    console.log('/view_contact', req.body.phone);
    var alldoc = "Following are the contact<br/><br/>";
    db.get(req.body.phone, {revs_info:true}, function(err,body){
        if(!err){
            console.log(body);
        }
        if(body) {
            alldoc += "* Name: " + body.name + "<br/>Phone Number: " + body.phone;
        }
        else {
            alldoc = "No records found :-(";
        }
        res.send(alldoc);
    });
});

app.post('/delete_contact', function(req,res){
    console.log('/delete_contact', req.body.phone);
    db.get(req.body.phone, {revs_info:true}, function(err,body){
        if(!err){
            db.destroy(req.body.phone, body._rev, function(err,body){
                if(err){
                    console.log(err);
                    res.send("Error deleting contact :-(");
                }                
            });
            res.send("Contact deleted successfully :-)");
        }
    });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});