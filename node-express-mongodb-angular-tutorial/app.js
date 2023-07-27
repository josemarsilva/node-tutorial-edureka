// required modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected',()=> {
    console.log('Connected to database mongodb @ localhost:27017')
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in Database connection');
    }
});

app.get('/', (req,res)=>{
    console.log('GET /');
    res.send('Hello !!!');
});

// add middleware - cors
app.use(cors());

// body - parser
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname,'public')));

// routes
app.use('/api', route);

// start listening
const port = 3000;
app.listen(port,()=>{
    console.log('Server started listening port ' + port);
});