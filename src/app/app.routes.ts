import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';
import { PostComponent } from './post';
import { ChatComponent } from './chat';

export const ROUTES: Routes = [{
    path: 'chat', 
    component: ChatComponent 
}, { 
    path: 'post', 
    component: PostComponent 
}, { 
    path: '**',    
    component: NoContentComponent 
}];