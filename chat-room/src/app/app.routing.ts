import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { VideoChatRoomComponent}from '../app/video-chat-room/video-chat-room.component';
import { AuthGuard } from './guards';


const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]} ,
    { path: 'login', component: LoginComponent },
    { path: 'chat-room', component: VideoChatRoomComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
     { path: '**', redirectTo: ''},
     { path: '', redirectTo: '/login', pathMatch:'full' }
    
];

export const routing = RouterModule.forRoot(appRoutes);