import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableDataComponent } from './table-data/table-data.component';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import  { AppRoutingModule } from './app-routing.module';
import { VideojsPlayerComponent } from './videojs-player/videojs-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    VimeoPlayerComponent,
    VideojsPlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
