import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { WhoComponent } from './components/who/who.component';
import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'who', component: WhoComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);