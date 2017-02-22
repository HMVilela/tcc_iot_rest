import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Device } from '../device';

@Component({
  moduleId: module.id,
  selector: 'devices',
  templateUrl: 'devices.component.html'
})

export class DevicesComponent implements OnInit { 
  devices: Device[];
  constructor(private _deviceService: DeviceService) {

  }

  ngOnInit() {
    this.devices = [];
    this._deviceService.getDevices()
      .subscribe(devices => {
        this.devices = devices;
      });
  }

  addDevice(event, deviceIp) {
    var result;
    var dateNow = Date.now();
    var newDevice = {
      ip: deviceIp.value,
      name: 'device###',
      interval: 'interval data',
      structure: 'structure data',
      extra: 'extra data',      
      createdAt: ''+dateNow,
      updatedAt: "criado",
      isCompleted: false
    };

    

    result = this._deviceService.saveDevice(newDevice);
    result.subscribe(x => {
      newDevice._id = deviceIp._id;
      this.devices.push(newDevice);
      deviceIp.value = '';
    });
  }

  setEditState(device, state) {
    if(state) {
      device.isEditMode = state;
    } else {
      delete device.isEditMode;
    }
  }

  updateStatus(device) {
    var _device = {
      _id: device._id,
      ip: device.ip,
      name: device.name,
      interval: device.interval,
      structure: device.structure,
      extra: device.extra,
      createdAt: device.createdAt,
      updatedAt: device.updatedAt,
      isCompleted: !device.isCompleted

    };

    this._deviceService.updateDevice(_device)
      .subscribe(data => {
        device.isCompleted = !device.isCompleted;
      });
  }

  updateDeviceIp(event, device) {
    if(event.which === 13) {
      device.ip = event.target.value;
      var _device = {
        _id: device._id,
        ip: device.ip,
        name: device.name,
        interval: device.interval,
        structure: device.structure,
        extra: device.extra,
        createdAt: device.createdAt,
        updatedAt: device.updatedAt,
        isCompleted: device.isCompleted

      };

      this._deviceService.updateDevice(_device)
        .subscribe(data => {
          this.setEditState(device, false);
        });
    }
  }

  deleteDevice(device) {
    var devices = this.devices;

    this._deviceService.deleteDevice(device._id)
      .subscribe(data => {
        if(data.n ==1) {
          for(var i = 0; i < devices.length; i++) {
            if(devices[i]._id == device._id) {
              devices.splice(i, 1);
            }
          }
        }
      })
  }
}