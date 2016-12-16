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
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_spinner) {
                    this._spinner = _spinner;
                }
                ContactComponent.prototype.ngOnInit = function () {
                    this._spinner.hide();
                    var myOptions = { zoom: 10, center: new google.maps.LatLng(17.2309294, 78.5631429), mapTypeId: google.maps.MapTypeId.ROADMAP };
                    this.map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
                    this.marker = new google.maps.Marker({ map: this.map, position: new google.maps.LatLng(17.2309294, 78.5631429) });
                    this.infowindow = new google.maps.InfoWindow({ content: '<strong>TCS Adibatla</strong><br> Adibhatla, Telangana 501510, India<br>' });
                    // google.maps.event.addListener(this.marker, 'click', function(){this.infowindow.open(this.map,this.marker);});this.infowindow.open(this.map,this.marker);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: 'app/common/contact.component.html'
                    }), 
                    __metadata('design:paramtypes', [spinner_service_1.SpinnerService])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map