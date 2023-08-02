import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

// DEPRECATED: import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts: Contact[] = []; // Initialize 'contacts' property
  contact: Contact = new Contact(); // Initialize 'contact' property
  first_name: string = ''; // Initialize 'first_name' property
  last_name: string = ''; // Initialize 'last_name' property
  phone: string = ''; // Initialize 'phone' property


  constructor(private contactService: ContactService) { }

  addContact()
  {
    debugger
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
    });
    this.reloadData();
  }

  deleteContact(id:any)
  {
    debugger
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe( () => this.reloadData() );
  }

  ngOnInit() {
    this.reloadData();
    // this.contactService.getContacts()
    //   .subscribe( contacts =>
    //     this.contacts = contacts );
  }

  reloadData(){
    this.contactService.getContacts()
      .subscribe( contacts =>
        this.contacts = contacts );
  }

}
