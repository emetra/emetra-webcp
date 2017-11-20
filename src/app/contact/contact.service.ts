import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Ticket } from '../models/Ticket';

@Injectable()

export class ContactService {

    email: string;
    firstname: string;
    lastname: string;
    subject: string;
    message: string;

    constructor(private http: Http) { }

    public send(ticket: Ticket): Observable<Response> {
        let url = "http://localhost/api-emetra/public/api/v1/mail/contact";

        return this.http.post(url,ticket);
    }

}