System.register(['./buses/buses.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var buses_component_1;
    var routes;
    return {
        setters:[
            function (buses_component_1_1) {
                buses_component_1 = buses_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'home', component: buses_component_1.BusesComponent },
                { path: 'busdetail', component: buses_component_1.BusesComponent }
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map