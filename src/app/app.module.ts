import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    FormBuilder 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
