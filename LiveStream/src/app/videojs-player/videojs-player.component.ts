import { Component, OnInit } from '@angular/core';
import videojs from 'video.js'
import chromecast from 'videojs-chromecast'

@Component({
  selector: 'app-videojs-player',
  templateUrl: './videojs-player.component.html',
  styleUrls: ['./videojs-player.component.css']
})
export class VideojsPlayerComponent implements OnInit {
videoNode ='video-1';
videoJsOptions = {
  autoplay: true,
  controls: true,
  chromecast:{
    appId:'APP-ID'
 },
  sources: [{
    src: 'http://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
  }]
}
player;
constructor() { }

  ngOnInit() {
    this.player = videojs(this.videoNode, this.videoJsOptions, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
    console.log(this.player);
  }
}
