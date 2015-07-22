'use strict';

function mainRoute($urlRouterProvider, $stateProvider) {
  $stateProvider.state('main', {
    templateUrl : 'main.view.html',
    controller  : 'Main',
    controllerAs: 'Main'
  });
}

export default mainRoute;