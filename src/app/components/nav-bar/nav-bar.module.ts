import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { WhoComponent } from '../who/who.component';
import { CompanyComponent } from '../company/company.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

export { CompanyComponent } from '../company/company.component';
export { ContactComponent } from '../contact/contact.component';
export { HomeComponent } from '../home/home.component';
export { LoginComponent } from '../login/login.component';
export { WhoComponent } from '../who/who.component';
export { ProductsComponent } from '../products/products.component';

@NgModule({
    declarations: [
        CompanyComponent,
        ContactComponent,
        HomeComponent,
        LoginComponent,
        ProductsComponent,
        WhoComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule
    ]
})
export class NavBarModule {}