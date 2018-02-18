import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { 
    ChatComponent,
    ChatWindowComponent,
    ChatInputAreaComponent
} from './index';

// Services
import { MessageService } from './index';

@NgModule({
    declarations: [
        ChatComponent,
        ChatWindowComponent,
        ChatInputAreaComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers: [
        MessageService
    ]
})
export class ChatModule {}
