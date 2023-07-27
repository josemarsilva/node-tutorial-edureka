const express = require('express');
const bodyParser = require('body-parser');

const App = express();

// parse application/x-www-form-urlencoded
// App.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// App.use(bodyParser);

// People           -> /people
// Person/Row       -> /people/person
// Person/Row/Age   -> /people/person/age

let people = { people : [ {name: "Adao"}, {name: "Eva"} ] };  // two first people

App.get('/people', function(req,res){
    console.log('GET /people');
    res.json(people);
    res.end();
});

App.post('/people', function(req,res){
    console.log('POST /people', req);
    if(req.body && req.body.name) {
        console.log('people.people.push');
        people.people.push({ name: req.body.name });
    }
    res.json(people);
    res.end();
});


App.listen(3000);
console.log('Server is listening on port 3000');