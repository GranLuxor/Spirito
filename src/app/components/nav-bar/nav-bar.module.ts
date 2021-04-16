import { NgModule } from '@angular/core';

import { ContactModule } from '../contact/contact.module';

import { WhoComponent } from '../who/who.component';
import { CompanyComponent } from '../company/company.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

export { CompanyComponent } from '../company/company.component';
export { ContactComponent } from '../contact/contact.component';
export { HomeComponent } from '../home/home.component';
export { LoginComponent } from '../login/login.component';
export { WhoComponent } from '../who/who.component';
export { ProductsComponent } from '../products/products.module';

@NgModule({
    declarations: [
        HomeComponent,
        WhoComponent,
        CompanyComponent,
        LoginComponent,
    ],
    exports: [
    ],
    imports: [
        ContactModule,
    ]
})
export class NavBarModule {}