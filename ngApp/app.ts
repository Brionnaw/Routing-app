
    namespace MyApp {
      angular.module("app", ['ui.router']).config((
        $stateProvider:ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
      ) => {
        $stateProvider.state('Home', {
          url:'/',
          templateUrl:'ngApp/templates/page1.html',
          controller: MyApp.Controllers.Page1Controller,
          controllerAs:'ctrl'
        }) .state('Page2', {
          url:'/page2/:car',
          templateUrl:'ngApp/templates/page2.html',
          controller: MyApp.Controllers.Page2Controller,
          controllerAs:'ctrl'
        }) .state('Page3', {
          url:'/page3/:properties',
          templateUrl:'ngApp/templates/page3.html',
          controller: MyApp.Controllers.Page3Controller,
          controllerAs:'ctrl'
        })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

      })
}
