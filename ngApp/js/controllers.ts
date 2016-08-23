
    namespace MyApp.Controllers {
      export class Page1Controller {
        public info;
        constructor(
          public $state: ng.ui.IStateService,
          public $stateParams: ng.ui.IStateParamsService
      ) {
          this.info = [
            {brand: "BMW" , model:"Alpina b3" , image:"http://pictures.topspeed.com/IMG/crop/201303/2013-bmw-alpina-b3-5_600x0w.jpg"},
            {brand:"AUDI", model:"A7" , image: "http://media.caranddriver.com/images/14q4/638369/2016-audi-a7-sportback-first-drive-review-car-and-driver-photo-639968-s-429x262.jpg"},
            {brand:"Mercedes" , model:"CLS 550",  image:"http://assets.mbusa.com/vcm/MB/DigitalAssets/Vehicles/Models/2015/CLS550C/Features/2015-CLS-CLASS-COUPE-077-MCFO.jpg"
          }]
        }
      }
      export class Page2Controller {
        public image;
        constructor(
          public $state: ng.ui.IStateService,
          public $stateParams: ng.ui.IStateParamsService
      ){
        this.image = $stateParams["car"]
        console.log(this.image);

      }
      }
      export class Page3Controller {

      }
      angular.module("app").controller('Page1Controller', Page1Controller)
      angular.module("app").controller('Page2Controller', Page2Controller)
      angular.module("app").controller('Page3Controller', Page3Controller)
    }
