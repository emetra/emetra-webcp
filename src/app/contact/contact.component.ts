import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'em-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  lat: number = -25.363;
  lng: number = 131.044;
  ngOnInit() {
  }

}
