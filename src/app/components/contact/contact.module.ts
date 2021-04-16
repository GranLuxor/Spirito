import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [
        ContactComponent
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