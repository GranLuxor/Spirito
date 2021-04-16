import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: Contact = {
    name: '',
    email: '',
    phone: 0,
    message: ''
  }

  contactar(){
    console.log(this.contact);
  }
}
