var MyApp;
(function (MyApp) {
    angular.module("app", ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'ngApp/templates/page1.html',
            controller: MyApp.Controllers.Page1Controller,
            controllerAs: 'ctrl1'
        }).state('Page2', {
            url: '/page2',
            templateUrl: 'ngApp/templates/page2.html',
            controller: MyApp.Controllers.Page2Controller,
            controllerAs: 'ctrl2'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
