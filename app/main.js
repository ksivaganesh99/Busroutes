System.register(['@angular/platform-browser-dynamic', '@angular/router', './app.component', '@angular/core', '@angular/common', './shared/spinner.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_1, app_component_1, core_1, common_1, spinner_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (spinner_service_1_1) {
                spinner_service_1 = spinner_service_1_1;
            }],
        execute: function() {
            // enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy), spinner_service_1.SpinnerService])
                .then(function (success) { return console.log("Bootstrap success"); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map