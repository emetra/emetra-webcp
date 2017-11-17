import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'em-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 8000, noPause: true}}]
})

export class HomeComponent {

  constructor() {}

}
