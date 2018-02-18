import { Injectable } from '@angular/core';

const sessionID = 'some string';

@Injectable()
export class CometService {
    private cometUrl: string = 'http://localhost:3333/api/comet/';

    private topics: any = {};

    constructor() {
        
    }

    subscribe(topic: string, callback: any): void {

        if (!topic || typeof topic !== 'string') {
            callback('Topic parameter should be provided', null);
            return;
        }
        
        if (!this.topics[topic]) {
            this.topics[topic] = {
                topic,
                callback
            };
        }
        
        this.poll();
    }

    private poll = (): void => {
        var topics = Object.keys(this.topics);

        if (!topics.length) {
            return;
        }

        fetch(this.cometUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sessionID,
                topics: topics
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.reconnect) {
                this.reconnect();
                return;
            }
            console.log(data);
            
            // data should be {topic, data}
            this.topics[data.topic].callback(null, data.data);
            this.reconnect();
        })
        .catch(function(e) {
            console.log("error");
        });
    }

    private reconnect = (): void => {
        this.poll();
    }

    public unsubscribe = (topics?: string | Array<string>): void => {
        if (typeof topics === 'undefined') {
            this.topics = {};

            return;
        }

        if (!Array.isArray(topics)) {
            topics = [topics];
        }

        topics.forEach((topic) => {
            delete this.topics[topic];
        });
    }
}