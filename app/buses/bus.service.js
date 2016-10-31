System.register(['@angular/core', '@angular/http', '../shared/config', '../shared/spinner.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, config_1, spinner_service_1;
    var allbusesurl, getplacesurl, gettoadibatlaplaces, getfromadibatlaplaces, getweather, BusService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            allbusesurl = config_1.CONFIG.baseurls.allbuses;
            getplacesurl = config_1.CONFIG.baseurls.getplaces;
            gettoadibatlaplaces = config_1.CONFIG.baseurls.gettoadibatlaplaces;
            getfromadibatlaplaces = config_1.CONFIG.baseurls.getfromadibatlaplaces;
            getweather = config_1.CONFIG.baseurls.getweather;
            BusService = (function () {
                function BusService(_http, _spinner) {
                    this._http = _http;
                    this._spinner = _spinner;
                }
                BusService.prototype.getBuses = function () {
                    var _this = this;
                    var buses = [{ "source": "Gachibowli" }, { "source": "Kondapur" }, { "source": "Indiranagar" }, { "source": "Hitechcity" }];
                    this._spinner.show();
                    console.log(allbusesurl);
                    return this._http.get(allbusesurl)
                        .map(function (res) { return res.json(); })
                        .finally(function () { return _this._spinner.hide(); });
                    //return buses;
                };
                BusService.prototype.getplaces = function () {
                    var _this = this;
                    this._spinner.show();
                    return this._http.get(getplacesurl)
                        .map(function (res) { return res.json(); })
                        .finally(function () { return _this._spinner.hide(); });
                    //return buses;
                };
                BusService.prototype.getToAdibatla = function (selectedplace) {
                    var _this = this;
                    console.log(gettoadibatlaplaces + selectedplace);
                    this._spinner.show();
                    return this._http.get(gettoadibatlaplaces + selectedplace)
                        .map(function (res) { return res.json(); })
                        .finally(function () { return _this._spinner.hide(); });
                    //return buses;
                };
                BusService.prototype.getFromAdibatla = function (selectedplace) {
                    var _this = this;
                    console.log(getfromadibatlaplaces + selectedplace);
                    this._spinner.show();
                    return this._http.get(getfromadibatlaplaces + selectedplace)
                        .map(function (res) { return res.json(); })
                        .finally(function () { return _this._spinner.hide(); });
                    //return buses;
                };
                BusService.prototype.getWeather = function (latitude, longitude) {
                    console.log(getweather + "/" + latitude, longitude);
                    return this._http.get(getweather + "q=" + latitude + "_" + longitude)
                        .map(function (res) { return res.json(); })
                        .finally(function () { return console.log("weather"); });
                };
                BusService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, spinner_service_1.SpinnerService])
                ], BusService);
                return BusService;
            }());
            exports_1("BusService", BusService);
        }
    }
});
//# sourceMappingURL=bus.service.js.map