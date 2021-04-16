import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, CompanyComponent, LoginComponent, ContactComponent, WhoComponent, ProductsComponent } from './components/nav-bar/nav-bar.module';


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