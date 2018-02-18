import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { MessageService } from '../../services/messages.service';
import { CometService } from '../../../core/comet/comet.service';

@Component({
    selector: 'chat-window',
    templateUrl: 'chat-window.component.html',
    styleUrls: ['chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
    private messages: any = [];

    @Input() 
    set message(message: any) {
        if (message) {
            this.messages.push(message);
        }
    }

    constructor(
        private _messageService: MessageService,
        private _comet: CometService
    ) { }

    ngOnInit() {
        this._messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.log(error)
            )

        this.pollMessages();
    }

    // Polling 'messages' endpoint using "_comet" service
    pollMessages() {
        /**
         * @params 
         * topic   : string
         * payload : object // optional
         */
        // this._comet.subscribe('messages')
        //     .subscribe(
        //         message => this.messages.push(message),
        //         error => console.log(error)
        //     )

        // this._comet.subscribe('counter')
        //     .subscribe(
        //         count => console.log(count)
        //     )


        this._comet.subscribe('messages', (err, message) => {
            this.messages.push(message)
        });

        this._comet.subscribe('counter', (counter) => {
            console.log(counter);
        });
    }

    ngOnDestroy() {
        this._comet.unsubscribe();
        //this._comet.cancelSubscriptions('messages');
    }
}