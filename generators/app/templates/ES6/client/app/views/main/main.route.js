'use strict';

function mainRoute($stateProvider) {
  $stateProvider.state('main', {
    templateUrl : 'main.view.html',
    controller  : 'Main',
    controllerAs: 'Main'
  });
}

export default mainRoute;