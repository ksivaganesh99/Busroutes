System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var user, users, AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            user = (function () {
                function user(email, password) {
                    this.email = email;
                    this.password = password;
                }
                return user;
            }());
            exports_1("user", user);
            users = [new user('ksivaganesh99@gmail.com', 'siva'), new user('admin', 'admin')];
            AuthenticationService = (function () {
                function AuthenticationService(_router) {
                    this._router = _router;
                }
                AuthenticationService.prototype.checkcredentials = function () {
                    if (localStorage.getItem("user") === null) {
                        this._router.navigate(['login']);
                    }
                };
                AuthenticationService.prototype.login = function (user) {
                    var authenticatedUser = users.find(function (u) { return u.email === user.email; });
                    if (authenticatedUser && user.password === authenticatedUser.password) {
                        localStorage.setItem("user", authenticatedUser);
                        this._router.navigate(['adminform']);
                        return true;
                    }
                    return false;
                };
                AuthenticationService.prototype.logout = function () {
                    localStorage.removeItem("user");
                    this._router.navigate(['login']);
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map