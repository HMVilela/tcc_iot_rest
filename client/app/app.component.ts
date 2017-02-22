import { Component } from '@angular/core';
import { DeviceService } from './services/device.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ DeviceService ]
})

export class AppComponent { }