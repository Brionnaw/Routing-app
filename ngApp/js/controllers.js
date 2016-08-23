var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller($state, $stateParams) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.info = [
                    { brand: "BMW", model: "Alpina b3", image: "http://pictures.topspeed.com/IMG/crop/201303/2013-bmw-alpina-b3-5_600x0w.jpg" },
                    { brand: "AUDI", model: "A7", image: "http://media.caranddriver.com/images/14q4/638369/2016-audi-a7-sportback-first-drive-review-car-and-driver-photo-639968-s-429x262.jpg" },
                    { brand: "Mercedes", model: "CLS 550", image: "http://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Models/2015/CLS550C/Features/2015-CLS-CLASS-COUPE-077-MCFO.jpg"
                    }];
            }
            return Page1Controller;
        }());
        Controllers.Page1Controller = Page1Controller;
        var Page2Controller = (function () {
            function Page2Controller($state, $stateParams) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.image = $stateParams["car"];
                console.log(this.image);
            }
            return Page2Controller;
        }());
        Controllers.Page2Controller = Page2Controller;
        var Page3Controller = (function () {
            function Page3Controller() {
            }
            return Page3Controller;
        }());
        Controllers.Page3Controller = Page3Controller;
        angular.module("app").controller('Page1Controller', Page1Controller);
        angular.module("app").controller('Page2Controller', Page2Controller);
        angular.module("app").controller('Page3Controller', Page3Controller);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
