var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller() {
            }
            return Page1Controller;
        }());
        Controllers.Page1Controller = Page1Controller;
        var Page2Controller = (function () {
            function Page2Controller() {
            }
            return Page2Controller;
        }());
        Controllers.Page2Controller = Page2Controller;
        angular.module("app").controller('Page1Controller', Page1Controller);
        angular.module("app").controller('Page2Controller', Page2Controller);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
