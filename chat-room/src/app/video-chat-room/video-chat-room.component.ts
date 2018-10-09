import { Component, OnInit } from '@angular/core';
import { WebcamUtil } from '../util/webcam.util';
@Component({
  selector: 'app-video-chat-room',
  templateUrl: './video-chat-room.component.html',
  styleUrls: ['./video-chat-room.component.css']
})
export class VideoChatRoomComponent implements OnInit {
  public showWebcam = true;
 
  constructor() { }

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
       
      });
  }
  start() {
    this.showWebcam = true;
  }
   
    stop() {
      this.showWebcam = false;
    }
    public toggleWebcam(): void {
      this.showWebcam = !this.showWebcam;
    }
  }
