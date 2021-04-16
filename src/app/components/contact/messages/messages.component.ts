import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent  {

  @Input() data: Contact = {
    name: '',
    email: '',
    phone: 0,
    message: ''
  };
}
