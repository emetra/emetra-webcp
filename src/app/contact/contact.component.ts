import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Ticket } from '../models/Ticket';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'em-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  public lat: number = -6.242928;
  public lng: number = 106.613657;
  public zoom: number = 16;

  // declare data using Ticket Interface
  // set default to null
  data: Ticket = {
    email: '',
    firstname: '',
    lastname: '',
    subject: '',
    message: ''
  };

  private mailgunUrl: string = 'https://api.mailgun.net/v3/sandbox733dc2c3a6a74f74a9a84f6454177e3b.mailgun.org';
  private apiKey: string = 'key-40ab7988a18137908715579087be89f9';

  constructor(private contactService: ContactService, public http: Http) { }

  ngOnInit() {

  }

  postMessage(): void {
    const mailMessage = '<html><head></head><body>Email: ' + this.data.email + '<br> Name: ' + this.data.firstname + ' ' + this.data.lastname + '<br> Subject: ' + this.data.subject + '<br> Message: ' + this.data.message + '</body></html>';
    let headers = new Headers(
        {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa("api:"+this.apiKey)
        }
    );
    let options = new RequestOptions({ headers: headers });
    let body = "from=" + this.data.email + "&to=emetracontact@gmail.com&subject=" + this.data.subject + "&text=" + mailMessage;
    this.http.post(this.mailgunUrl + "/messages", body, options)
        .map(result => result.json())
        .do(result => console.log("RESULT: ", JSON.stringify(result)))
        .subscribe(result => {
            console.log("SENT!");
        }, error => {
            console.log(error);
        });
  
    // this.contactService.send(this.data)
    // .map(res => {
    //   // this.data =  res.json();
    //   console.log(res.json());
    // })
    // .catch(err => {
    //   console.log(err);
    //   return err;
    // })
    // .subscribe();
  }
}
