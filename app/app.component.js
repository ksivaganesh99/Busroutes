System.register(['@angular/core', '@angular/http', '@angular/router', './buses/bus.service', './buses/buses.component', './shared/logger.service', './shared/spinner.service', './common/header.component', './common/search.component', './common/about.component', './common/contact.component', './common/login.component', './common/adminform.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, bus_service_1, buses_component_1, logger_service_1, spinner_service_1, header_component_1, search_component_1, about_component_1, contact_component_1, login_component_1, adminform_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bus_service_1_1) {
                bus_service_1 = bus_service_1_1;
            },
            function (buses_component_1_1) {
                buses_component_1 = buses_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (adminform_component_1_1) {
                adminform_component_1 = adminform_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_spinner) {
                    var _this = this;
                    this._spinner = _spinner;
                    this.spinner = _spinner.spinner;
                    _spinner.getspinner.subscribe(function (value) { return _this.spinner = value; });
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bus-route',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        providers: [bus_service_1.BusService, logger_service_1.LoggerService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, search_component_1.SearchComponent]
                    }),
                    router_1.Routes([
                        { path: '', component: buses_component_1.BusesComponent },
                        { path: 'about', component: about_component_1.AboutComponent },
                        { path: 'contact', component: contact_component_1.ContactComponent },
                        { path: 'login', component: login_component_1.LoginComponent },
                        { path: 'adminform', component: adminform_component_1.AdminFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [spinner_service_1.SpinnerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map