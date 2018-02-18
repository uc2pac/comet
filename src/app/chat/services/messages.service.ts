import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {
    private apiUrl = 'http://localhost:3333/api';

    constructor(private _http: Http) { }

    getMessages() {
        return this._http.get(this.apiUrl + '/messages')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addMessage(message) {
        let body = {
            text: message
        };

        return this._http.post(this.apiUrl + '/messages', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}