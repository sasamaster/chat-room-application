import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { VideoChatRoomComponent}from '../app/video-chat-room/video-chat-room.component';
import { AuthGuard } from './guards';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: 'chat-room', component: VideoChatRoomComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes);