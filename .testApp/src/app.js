'use strict';

/**
 * @module myApp
 *
 * @description
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  });
