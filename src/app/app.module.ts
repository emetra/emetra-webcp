import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FoobarComponent } from './foobar/foobar.component';
import { ServicesComponent } from './services/services.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ContactService } from './contact/contact.service';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyBeVTAIWvBLhSx79lFe82XEXD8FtmO02n8',
});


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    FoobarComponent,
    ServicesComponent
],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    googleMapsCore,
    NgxCarouselModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

