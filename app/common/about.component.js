System.register(['@angular/core', '../shared/spinner.service'], function(exports_1, context_1) {
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
    var core_1, spinner_service_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(myElement, _spinner) {
                    this.myElement = myElement;
                    this._spinner = _spinner;
                }
                AboutComponent.prototype.ngOnInit = function () {
                    this._spinner.hide();
                };
                AboutComponent.prototype.ngAfterViewInit = function () {
                };
                AboutComponent.prototype.ngAfterContentInit = function () {
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        templateUrl: 'app/common/about.component.html',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, spinner_service_1.SpinnerService])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map