'use strict';

function homeRoute($stateProvider) {
  $stateProvider.state('main.home', {
    url         : '/',
    templateUrl : 'home.view.html',
    controller  : 'Home',
    controllerAs: 'Home'
  });
}

export default homeRoute;
