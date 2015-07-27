'use strict';

function aboutRoute($urlRouterProvider, $stateProvider) {
  $stateProvider.state('main.about', {
    url         : '/about',
    templateUrl : 'app/views/about/about.view.html',
    controller  : 'About',
    controllerAs: 'About'
  });
}

export default aboutRoute;
