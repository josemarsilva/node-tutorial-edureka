// Required modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// Connect to mongodb
const mongodbUsername = encodeURIComponent('mongouser');
const mongodbPassword = encodeURIComponent('mongopassword');
const mongodbHost = '127.0.0.1';
const mongodbPort = '27017';
const mongodbDatabase = 'contactlist';
const mongodbAuthMechanism = 'DEFAULT'; // Use "DEFAULT" if not using LDAP
const mongodbConnectionString = `mongodb://${mongodbUsername}:${mongodbPassword}@${mongodbHost}:${mongodbPort}/${mongodbDatabase}?authMechanism=${mongodbAuthMechanism}`;

mongoose.connect(mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin' // The authSource should be set to the database where the user is defined (usually "admin")  
  });


// On connection connected
mongoose.connection.on('connected',()=> {
    console.log('Connected to database ' + `mongodb://${mongodbUsername}@${mongodbHost}:${mongodbPort}/${mongodbDatabase}?authMechanism=${mongodbAuthMechanism}`)
});

// On connection error
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in Database connection');
    }
});

app.get('/', (req,res)=>{
    console.log('GET /');
    res.send('Hello !!!');
});

// Add middleware - cors
app.use(cors());

// Use body - parser
app.use(bodyparser.json());

// Use static files
app.use(express.static(path.join(__dirname,'public')));

// Use routes
app.use('/api', route);

// Start server listening
app.listen(3000,()=>{
    console.log('Server started listening port 3000');
});