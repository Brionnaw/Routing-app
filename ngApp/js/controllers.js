var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller($state, $stateParams) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.info = [
                    { brand: "BMW", model: "Alpina b3", image: "http://pictures.topspeed.com/IMG/crop/201303/2013-bmw-alpina-b3-5_600x0w.jpg", Price: "$70000", Miles: "10k", detail: "Elegant dynamic powerful - the new BMW ALPINA B3 Bi-Turbo combines performance with comfort and offers unparalleled driving culture." },
                    { brand: "AUDI", model: "A7", image: "http://media.caranddriver.com/images/14q4/638369/2016-audi-a7-sportback-first-drive-review-car-and-driver-photo-639968-s-429x262.jpg", Price: "$90000", Miles: "40k" },
                    { brand: "Mercedes", model: "CLS 550", image: "http://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Models/2015/CLS550C/Features/2015-CLS-CLASS-COUPE-077-MCFO.jpg", Price: "$100000", Miles: "5k", detail: "With an arresting design a lavish interior and a surprisingly practical hatchback layout the Audi A7 four-door-coupe offers a superb balance of style and comfortable versatility." }
                ];
            }
            return Page1Controller;
        }());
        Controllers.Page1Controller = Page1Controller;
        var Page2Controller = (function () {
            function Page2Controller($stateParams) {
                this.$stateParams = $stateParams;
                var temp = $stateParams["car"];
                var seperate = temp.split(",");
                this.image = seperate[0];
                this.detail = seperate[1];
            }
            return Page2Controller;
        }());
        Controllers.Page2Controller = Page2Controller;
        var Page3Controller = (function () {
            function Page3Controller($stateParams) {
                this.$stateParams = $stateParams;
                var detail = $stateParams["properties"];
                this.properties = detail;
            }
            return Page3Controller;
        }());
        Controllers.Page3Controller = Page3Controller;
        angular.module("app").controller('Page1Controller', Page1Controller);
        angular.module("app").controller('Page2Controller', Page2Controller);
        angular.module("app").controller('Page3Controller', Page3Controller);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
