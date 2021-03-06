System.register(["@angular/core", '../shared/authentication.service'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1;
    var AdminFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            AdminFormComponent = (function () {
                function AdminFormComponent(_authenticateservice) {
                    this._authenticateservice = _authenticateservice;
                }
                AdminFormComponent.prototype.ngOnInit = function () {
                    this._authenticateservice.checkcredentials();
                };
                AdminFormComponent.prototype.logout = function () {
                    this._authenticateservice.logout();
                };
                AdminFormComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-form',
                        templateUrl: 'app/common/adminform.component.html',
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], AdminFormComponent);
                return AdminFormComponent;
            }());
            exports_1("AdminFormComponent", AdminFormComponent);
        }
    }
});
//# sourceMappingURL=adminform.component.js.map