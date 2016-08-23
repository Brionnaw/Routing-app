var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller($state, $stateParams) {
                this.$state = $state;
                this.$stateParams = $stateParams;
            }
            Page1Controller.prototype.test = function () {
                console.log(this.info);
            };
            return Page1Controller;
        }());
        Controllers.Page1Controller = Page1Controller;
        var Page2Controller = (function () {
            function Page2Controller() {
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
