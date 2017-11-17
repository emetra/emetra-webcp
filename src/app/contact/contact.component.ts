import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'em-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  

export class ContactComponent implements OnInit {
  lat: number = -6.242928;
  lng: number = 106.613657;
  zoom: number = 16;

  data: Ticket = {
    email: "",
    firstname: "",
    lastname: "",
    subject: "",
    message: ""
  };

  constructor(private contactService: ContactService) { }
  
  ngOnInit() {
    
  }

  postMessage(): void{

    this.contactService.send(this.data)
    .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
    )

  }
}
