import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { VideoChatRoomComponent}from '../app/video-chat-room/video-chat-room.component';


const appRoutes: Routes = [
    
    { path: '', component: LoginComponent },
    { path: 'chat-room', component: VideoChatRoomComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);