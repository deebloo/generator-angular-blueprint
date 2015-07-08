'use strict';

function mainRoute($stateProvider) {
  $stateProvider.state('main', {
    url         : '',
    templateUrl : 'app/views/main/main.view.html',
    controller  : 'MainCtrl',
    controllerAs: 'MainCtrl',
    title       : 'main'
  });
}

export default mainRoute;