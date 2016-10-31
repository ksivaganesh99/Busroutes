System.register(['@angular/core', './bus.service', './bus-list.component', '../shared/sourcefilter.pipe', "ng2-bootstrap/ng2-bootstrap", '../shared/spinner.service'], function(exports_1, context_1) {
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
    var core_1, bus_service_1, bus_list_component_1, sourcefilter_pipe_1, ng2_bootstrap_1, spinner_service_1;
    var BusesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bus_service_1_1) {
                bus_service_1 = bus_service_1_1;
            },
            function (bus_list_component_1_1) {
                bus_list_component_1 = bus_list_component_1_1;
            },
            function (sourcefilter_pipe_1_1) {
                sourcefilter_pipe_1 = sourcefilter_pipe_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            }],
        execute: function() {
            BusesComponent = (function () {
                function BusesComponent(_busservices, _spinner) {
                    this._busservices = _busservices;
                    this._spinner = _spinner;
                    this.srcadi = true;
                    this.srcloc = true;
                    this.destadi = true;
                    this.destloc = true;
                    this.selectedroute = function (selected) {
                        // this.sourcevalue=selected;
                        // this.filter.details(selected);
                    };
                }
                BusesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    /* this._busservices.getBuses()
                     .subscribe(data => {this.buses=data;console.log(data);},error => console.log(error),()=>console.log("completed"));*/
                    this._busservices.getplaces()
                        .subscribe(function (data) { _this.busessources = data; console.log(data); }, function (error) { return console.log(error); }, function () { return console.log("completed places"); });
                    //alert(this.buses);
                    //     this.buses=[{ "source":"Gachibowli" },{ "source":"Kondapur" },{ "source":"Indiranagar" },{ "source":"Hitechcity" }];
                    // alert(this.buses);
                    // this._busservices.getBuses();
                };
                BusesComponent.prototype.ngOnChanges = function () {
                };
                BusesComponent.prototype.ngOnDestroy = function () {
                };
                BusesComponent.prototype.getSrcBusDetails = function () {
                    var _this = this;
                    this._spinner.hide();
                    var places = document.getElementById("srcplace");
                    var selectedvalue = places.options[places.selectedIndex].innerHTML;
                    if (selectedvalue === "Adibatla") {
                        this.destloc = true;
                        this.destadi = false;
                        this.srcloc = false;
                        this.sourcevalue = "";
                        document.getElementById("destplace").value = "Select to location";
                    }
                    else {
                        this.destloc = false;
                        this.destadi = true;
                        this.srcloc = false;
                        document.getElementById("destplace").value = "Adibatla";
                        this._busservices.getToAdibatla(selectedvalue)
                            .subscribe(function (data) { _this.buses = data; console.log(data); }, function (error) { return console.log(error); }, function () {
                            console.log("completed");
                            _this._busservices.getWeather("17.236", "78.54")
                                .subscribe(function (data) { _this.weatherdata = data; console.log(data); }, function (error) { return console.log(error); }, function () { return console.log("weater fetched"); });
                        });
                        this.sourcevalue = selectedvalue;
                    }
                    document.getElementById("destplace").focus();
                };
                BusesComponent.prototype.getDstBusDetails = function () {
                    var _this = this;
                    var places = document.getElementById("destplace");
                    var selectedvalue = places.options[places.selectedIndex].innerHTML;
                    this.sourcevalue = selectedvalue;
                    this._busservices.getFromAdibatla(selectedvalue)
                        .subscribe(function (data) { _this.buses = data; console.log(data); }, function (error) { return console.log(error); }, function () {
                        console.log("completed");
                        _this._busservices.getWeather(_this.buses.lattitude, _this.buses.longitude)
                            .subscribe(function (data) { _this.weatherdata = data; console.log(data); }, function (error) { return console.log(error); }, function () { return console.log("weater fetched"); });
                    });
                };
                __decorate([
                    core_1.ViewChild(bus_list_component_1.BusListComponent), 
                    __metadata('design:type', Object)
                ], BusesComponent.prototype, "filter", void 0);
                BusesComponent = __decorate([
                    core_1.Component({
                        selector: 'buseslist',
                        templateUrl: 'app/buses/buses.component.html',
                        styleUrls: ['app/buses/buses.component.css'],
                        directives: [bus_list_component_1.BusListComponent, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        pipes: [sourcefilter_pipe_1.sourceFilter]
                    }), 
                    __metadata('design:paramtypes', [bus_service_1.BusService, spinner_service_1.SpinnerService])
                ], BusesComponent);
                return BusesComponent;
            }());
            exports_1("BusesComponent", BusesComponent);
        }
    }
});
//# sourceMappingURL=buses.component.js.map