import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { VideoChatRoomComponent } from '../app/video-chat-room/video-chat-room.component';
import { LoginComponent } from './login/login.component';
import { routing } from '../app/app.routing';
import { fakeBackendProvider } from '../app/helpers/fake-backend';
import { UserService } from '../app/services/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoChatRoomComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule,
    routing,
  ],
  providers: [AuthenticationService, fakeBackendProvider, UserService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
