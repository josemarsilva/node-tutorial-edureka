const express = require('express')
const app = express();

app.get('/', function(req,res){
    console.log('GET /');
    res.send('Hello from Docker !');
})

app.listen(3000, function(){
    console.log('Server is listening on 3000');
});