import {Component, OnInit} from '@angular/core';
import {NgxCarousel, NgxCarouselStore} from 'ngx-carousel';

@Component({
  selector: 'em-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})

export class HomeComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public carouselTwo: NgxCarousel;
  constructor() {}

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
                list-style-type: none;
                text-align: center;
                padding: 12px;
                margin: 0;
                white-space: nowrap;
                overflow: auto;
                position: absolute;
                width: 100%;
                bottom: 20px;
                left: 0;
                box-sizing: border-box;
          }
          .ngxcarouselPoint li {
                display: inline-block;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.55);
                padding: 5px;
                margin: 0 3px;
                transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
                background: white;
                width: 20px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
    this.carouselTwo = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
                list-style-type: none;
                text-align: center;
                padding: 12px;
                margin: 0;
                white-space: nowrap;
                overflow: auto;
                position: absolute;
                width: 100%;
                bottom: 20px;
                left: 0;
                box-sizing: border-box;
          }
          .ngxcarouselPoint li {
                display: inline-block;
                border-radius: 50%;
                background: #6b6b6b;
                padding: 5px;
                margin: 0 3px;
                transition: .4s;
          }
          .ngxcarouselPoint li.active {
                border: 2px solid rgba(0, 0, 0, 0.55);
                transform: scale(1.2);
                background: transparent;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

  public onMovefn(data: NgxCarouselStore) {
  }
  public onMovefn2(data: NgxCarouselStore) {
  }
}
