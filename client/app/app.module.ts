import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {DevicesComponent} from './devices/devices.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [AppComponent, DevicesComponent],
  bootstrap:    [AppComponent]
})

export class AppModule { }
