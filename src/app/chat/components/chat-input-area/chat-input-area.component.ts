import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MessageService } from '../../services/messages.service';

@Component({
    selector: 'chat-input-area',
    templateUrl: 'chat-input-area.component.html',
    styles: [`
        .form-control {
            border-radius: 0 0 4px 4px;
            border-top: none;
        }
    `]
})
export class ChatInputAreaComponent implements OnInit {
    @Output() onMessageAdded = new EventEmitter<any>();
    private message: string;

    constructor(private _messageService: MessageService) { }

    ngOnInit() { }

    addMessage(event) {
        let messageClone: string;

        if (event.key && event.key === 'Enter') {
            messageClone = this.message;
            this.message = '';

            this._messageService.addMessage(messageClone)
                .subscribe(
                    message => {
                        // this.onMessageAdded.emit(message);   
                    },
                    err => console.log(err)
                )
        }
    }
}