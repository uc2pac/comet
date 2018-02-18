import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
    private message: any;
    constructor() { }

    ngOnInit() { }

    addToWindow(message: any): void {
        this.message = message;
    }
}