const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// retrieve data
router.get('/contacts', (req,res,next)=>{
    console.log('GET /contacts/');
    console.log(Contact);
    // res.send('Retrieving the contact list');
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

// add contact
router.post("/contact", (req,res,next)=>{
    // logic to add contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add contact' + err});
        } else {
            res.json({msg: 'Contact added sucessfully'});
        }
    });
});

// delete contact
router.delete("/contact/:id", (req,res,next)=>{
    // logic to delete contact
    Contact.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json({msg: 'Failed to delete contact' + err});
        } else {
            res.json({msg: 'Contact deleted sucessfully'});
        }
    });
});


module.exports = router;
