
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
          controllerAs:'ctrl1'
        }) .state('Page2', {
          url:'/page2',
          templateUrl:'ngApp/templates/page2.html',
          controller: MyApp.Controllers.Page2Controller,
          controllerAs:'ctrl2'
        })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

      })
}
