const express = require('express');
const app=express();

app.get('/', (req,res)=>{
    console.log('GET /');
    res.send('<h1>Hello World Express Tutorial</h1> <br> You have done a <b>GET</b> successfully !!! \\o/ ');
});

app.post('/', (req,res)=>{
    console.log('POST /');
    res.send('<h1>Hello World Express Tutorial</h1> <br> You have done a <b>POST</b> successfully !!! \\o/ \n');
});

app.listen('8080', ()=>{
    console.log('Server started and running on 8080');
});