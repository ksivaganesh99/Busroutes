System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CONFIG;
    return {
        setters:[],
        execute: function() {
            exports_1("CONFIG", CONFIG = {
                baseurls: {
                    allbuses: "http://busroutesip.no-ip.org:8080/BusRoutesApi/restApi/helloworld/place?place=Gachibowli Junction",
                    updatebus: "http://vdesntcs0587:8095/sample/restApi/helloworld/place?place=Gachibowli Junction",
                    deletebus: "http://vdesntcs0587:8095/sample/restApi/helloworld/place?place=Gachibowli Junction",
                    /* getplaces:"https://ec2-52-66-113-33.ap-south-1.compute.amazonaws.com:8443/BusRoutesApi-0.0.1-SNAPSHOT/restApi/helloworld/xml",
                     gettoadibatlaplaces:"https://ec2-52-66-113-33.ap-south-1.compute.amazonaws.com:8443/BusRoutesApi-0.0.1-SNAPSHOT/restApi/helloworld/toadibatla",
                     getfromadibatlaplaces:"https://ec2-52-66-113-33.ap-south-1.compute.amazonaws.com:8443/BusRoutesApi-0.0.1-SNAPSHOT/restApi/helloworld/fromadibatla"*/
                    /* getplaces:"http://ec2-52-66-113-33.ap-south-1.compute.amazonaws.com:8080/BusRoutesApi-0.0.1-SNAPSHOT/restApi/helloworld/xml",
                    gettoadibatlaplaces:"http://ec2-52-66-113-33.ap-south-1.compute.amazonaws.com:8080/BusRoutesApi-0.0.1-SNAPSHOT/restApi/helloworld/toadibatla",
                    getfromadibatlaplaces:"http://ec2-52-66-113-33.ap-south-1.compute.amazonaws.com:8080/BusRoutesApi-0.0.1-SNAPSHOT/restApi/helloworld/fromadibatla",*/
                    getplaces: "https://sleet-shoulder.hyperdev.space/api/toadibatla",
                    gettoadibatlaplaces: "https://sleet-shoulder.hyperdev.space/api/toadibatla/",
                    getfromadibatlaplaces: "https://sleet-shoulder.hyperdev.space/api/fromadibatla/",
                    // getweather:"https://api.darksky.net/forecast/61bc1053957b98072cf039ac033cabc9"
                    getweather: "https://api.apixu.com/v1/current.json?key=d0f9731bb63b4d4db0372112162609&"
                }
            });
        }
    }
});
//# sourceMappingURL=config.js.map