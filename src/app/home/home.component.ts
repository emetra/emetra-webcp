import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'em-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: true}}]
})

export class HomeComponent {

  constructor() {}

}
