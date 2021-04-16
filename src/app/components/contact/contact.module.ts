import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        ContactComponent,
        MessagesComponent
    ],
    exports: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ContactModule {}