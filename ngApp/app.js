var MyApp;
(function (MyApp) {
    angular.module("app", ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'ngApp/templates/page1.html',
            controller: MyApp.Controllers.Page1Controller,
            controllerAs: 'ctrl'
        }).state('Page2', {
            url: '/page2/:car',
            templateUrl: 'ngApp/templates/page2.html',
            controller: MyApp.Controllers.Page2Controller,
            controllerAs: 'ctrl'
        }).state('Page3', {
            url: '/page3',
            templateUrl: 'ngApp/templates/page3.html',
            controller: MyApp.Controllers.Page3Controller,
            controllerAs: 'ctrl'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
