import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'em-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  lat: number = -6.242928;
  lng: number = 106.613657;
  zoom: number = 16;
  ngOnInit() {
  }

}
