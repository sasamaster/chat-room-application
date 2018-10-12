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
  expanded = false;
  start() {
    this.showWebcam = true;
    this.expanded = false;
  }

  stop() {
    this.showWebcam = false;
    this.expanded = true;
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
}
