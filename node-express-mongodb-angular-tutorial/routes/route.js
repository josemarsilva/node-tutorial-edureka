const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// retrieve data
router.get('/contacts', async (req,res,next)=>{
    console.log('GET /contacts');
    try {
        const contacts = await Contact.find().exec();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ msg: 'Failed to retrieve contacts: ' + err });
    }
});

// add contact
router.post("/contact", (req,res,next)=>{
    console.log('POST /contact - first_name: ' + req.body.first_name + ', last_name: ' + req.body.last_name + ', phone: '  + req.body.phone );
    try {
        let newContact = new Contact({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone
        });

        const savedContact = newContact.save();
        res.json({ msg: 'Contact added successfully', contact: newContact });
    } catch (err) {
        res.status(500).json({ msg: 'Failed to add contact: ' + err });
    }
});


// delete contact
router.delete("/contact/:id", async (req, res, next)=>{
    console.log('DELETE /contact - id: ' + req.params.id);

    try {
        const deletedContact = await Contact.deleteOne({ _id: req.params.id }).exec();
        if (deletedContact.deletedCount === 1) {
            res.json({ msg: 'Contact deleted successfully' });
        } else {
            res.json({ msg: 'Contact not found or already deleted' });
        }
    } catch (err) {
        res.status(500).json({ msg: 'Failed to delete contact: ' + err });
    }
});


module.exports = router;
