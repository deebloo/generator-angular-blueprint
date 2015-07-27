'use strict';

function homeRoute($urlRouterProvider, $stateProvider) {
  $stateProvider.state('main.home', {
    url         : '/',
    templateUrl : 'app/views/home/home.view.html',
    controller  : 'Home',
    controllerAs: 'Home'
  });
}

export default homeRoute;
