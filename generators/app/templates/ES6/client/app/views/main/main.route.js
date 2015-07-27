'use strict';

function mainRoute($urlRouterProvider, $stateProvider) {
  $stateProvider.state('main', {
    templateUrl : 'app/views/main/main.view.html',
    controller  : 'Main',
    controllerAs: 'Main'
  });
}

export default mainRoute;