"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var device_service_1 = require('../services/device.service');
var DevicesComponent = (function () {
    function DevicesComponent(_deviceService) {
        this._deviceService = _deviceService;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.devices = [];
        this._deviceService.getDevices()
            .subscribe(function (devices) {
            _this.devices = devices;
        });
    };
    DevicesComponent.prototype.addDevice = function (event, deviceIp) {
        var _this = this;
        var result;
        var dateNow = Date.now();
        var newDevice = {
            ip: deviceIp.value,
            name: 'device###',
            interval: 'interval data',
            structure: 'structure data',
            extra: 'extra data',
            createdAt: '' + dateNow,
            updatedAt: "criado",
            isCompleted: false
        };
        result = this._deviceService.saveDevice(newDevice);
        result.subscribe(function (x) {
            newDevice._id = deviceIp._id;
            _this.devices.push(newDevice);
            deviceIp.value = '';
        });
    };
    DevicesComponent.prototype.setEditState = function (device, state) {
        if (state) {
            device.isEditMode = state;
        }
        else {
            delete device.isEditMode;
        }
    };
    DevicesComponent.prototype.updateStatus = function (device) {
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
            .subscribe(function (data) {
            device.isCompleted = !device.isCompleted;
        });
    };
    DevicesComponent.prototype.updateDeviceIp = function (event, device) {
        var _this = this;
        if (event.which === 13) {
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
                .subscribe(function (data) {
                _this.setEditState(device, false);
            });
        }
    };
    DevicesComponent.prototype.deleteDevice = function (device) {
        var devices = this.devices;
        this._deviceService.deleteDevice(device._id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < devices.length; i++) {
                    if (devices[i]._id == device._id) {
                        devices.splice(i, 1);
                    }
                }
            }
        });
    };
    DevicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'devices',
            templateUrl: 'devices.component.html'
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService])
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map