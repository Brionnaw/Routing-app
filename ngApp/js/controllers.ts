
    namespace MyApp.Controllers {
      export class Page1Controller {
        public info:string;
        constructor(
        public $state: ng.ui.IStateService,
        public $stateParams: ng.ui.IStateParamsService
        ) {

          }
        public test() {
        console.log(this.info);

        }
      }
      export class Page2Controller {

      }
      export class Page3Controller {

      }
      angular.module("app").controller('Page1Controller', Page1Controller)
      angular.module("app").controller('Page2Controller', Page2Controller)
      angular.module("app").controller('Page3Controller', Page3Controller)
    }
