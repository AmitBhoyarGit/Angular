import { Component, OnInit } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-vimeo-player',
  templateUrl: './vimeo-player.component.html',
  styleUrls: ['./vimeo-player.component.css']
})
export class VimeoPlayerComponent implements OnInit {
  player;
  url:string ="https://player.vimeo.com/video/76979871";
  //url:string ="http://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
  company:string = 'Amit Bhoyar'
  constructor() { }

  ngOnInit() {
    this.player = new Player('playerone',{
      url:this.url,
      loop:false,
      color:'ff9000',
      title:false,//'Live stream for' + this.company
      byline:true,
      header:false
    });
    this.player.on('play', function () {
      console.log('played the player 2.0 video!');
    });
  }

}
