System.register(['@angular/core', '../shared/reverse.pipe', '../shared/logger.service'], function(exports_1, context_1) {
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
    var core_1, reverse_pipe_1, logger_service_1;
    var BusListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reverse_pipe_1_1) {
                reverse_pipe_1 = reverse_pipe_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            BusListComponent = (function () {
                function BusListComponent(_log) {
                    var _this = this;
                    this._log = _log;
                    this.srcadi = true;
                    this.srcloc = true;
                    this.destadi = true;
                    this.destloc = true;
                    this.selectroute = new core_1.EventEmitter();
                    this.landmarklocurl = "";
                    this.landmarkloc = "";
                    this.details = function (source) {
                        alert(source);
                        this._log.log(source);
                        this.selectroute.emit(source);
                    };
                    this.showPosition = function (position) {
                        _this.currlocation = position.coords.latitude + "," + position.coords.longitude;
                        //this.currlocation="17.385,78.4867";
                        console.log(_this.currlocation);
                    };
                    this.getmapdirections = function (latitude, longitude) {
                        _this.landmarkloc = latitude + "," + longitude;
                        console.log(_this.landmarkloc);
                        _this.landmarklocurl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBWgQr8HZk6JA-qbGHGScwyD8XDXOsE4J4&origin=" + _this.currlocation + "&destination=" + _this.landmarkloc + "&avoid=tolls|highways";
                        console.log(_this.landmarklocurl);
                        console.log(_this.sourceselected);
                    };
                }
                BusListComponent.prototype.ngOnInit = function () { };
                BusListComponent.prototype.ngAfterViewInit = function () { this.getlocation(); };
                BusListComponent.prototype.ngAfterContentChecked = function () { };
                BusListComponent.prototype.getlocation = function () {
                    if (navigator.geolocation) {
                        console.log("Geolocation is  supported by this browser.");
                        navigator.geolocation.getCurrentPosition(this.showPosition);
                    }
                    else {
                        console.log("Geolocation is not supported by this browser.");
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BusListComponent.prototype, "buseslist", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BusListComponent.prototype, "sourceselected", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BusListComponent.prototype, "weatherdata", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], BusListComponent.prototype, "srcadi", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], BusListComponent.prototype, "srcloc", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], BusListComponent.prototype, "destadi", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], BusListComponent.prototype, "destloc", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BusListComponent.prototype, "selectroute", void 0);
                BusListComponent = __decorate([
                    core_1.Component({
                        selector: 'busroutes-list',
                        templateUrl: 'app/buses/bus-list.component.html',
                        styleUrls: ['app/buses/bus-list.component.css'],
                        pipes: [reverse_pipe_1.ReversePipe]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], BusListComponent);
                return BusListComponent;
            }());
            exports_1("BusListComponent", BusListComponent);
        }
    }
});
//# sourceMappingURL=bus-list.component.js.map