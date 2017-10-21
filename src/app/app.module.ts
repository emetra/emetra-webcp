import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
