import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import { VideojsPlayerComponent } from './videojs-player/videojs-player.component';


const routes =[
  { path: 'vimeo', component: VimeoPlayerComponent },
  { path: 'videojs', component: VideojsPlayerComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
