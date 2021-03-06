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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var DeviceService = (function () {
    function DeviceService(_http) {
        this._http = _http;
    }
    DeviceService.prototype.getDevices = function () {
        return this._http.get('/api/v1/devices')
            .map(function (res) { return res.json(); });
    };
    DeviceService.prototype.saveDevice = function (device) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/device', JSON.stringify(device), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DeviceService.prototype.updateDevice = function (device) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/v1/device/' + device._id, JSON.stringify(device), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DeviceService.prototype.deleteDevice = function (id) {
        return this._http.delete('/api/v1/device/' + id)
            .map(function (res) { return res.json(); });
    };
    DeviceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map