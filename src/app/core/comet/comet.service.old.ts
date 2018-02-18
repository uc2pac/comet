import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CometService {
    private subscriptions = {};
    private observer;

    private payload : any;
    private topic   : string;
    private topics  : Array<string>
    
    private apiUrl  : string = 'http://localhost:3333/api/comet/';
    private options : RequestOptions;

    constructor(private _http: Http) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.options = new RequestOptions({ headers: headers });

        this.payload = {
            sessionId: this.generateSessionId(),
            topic: null
        }
    }

    public subscribe(topic: string): Observable<any> {
        this.topic = topic;
        
        if (!this.topics[topic]) {
            this.topics.push(topic);
        }

        return Observable.create((observer) => {
            this.observer = observer;
            this.connect();
        });
    }

    public cancelSubscriptions(topic): void {
        if (topic in this.subscriptions) {
            this.subscriptions[topic].unsubscribe();
            delete this.subscriptions[topic];
        }
    }

    private connect() {
        this.cancelSubscriptions(this.topic);
        this.payload.topic = this.topic;

        this.subscriptions[this.topic] = this._http.post(this.apiUrl, this.payload, this.options)
                .map((res: Response) => res.json())
                .subscribe(
                    res => {
                        this.observer.next(res);
                        this.reconnect();
                    },
                    err => {
                        if (err.status === 303) {
                            this.reconnect();
                        }
                    }
                );
    }

    private reconnect(): void {
        this.connect();
    }

    private generateSessionId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}