'use strict';

// START-import-routes
import aboutRoute from './views/about/about.route';
import homeRoute from './views/home/home.route';
import mainRoute from './views/main/main.route';
// END-import-routes

function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

  $urlRouterProvider.otherwise('/'); // redirect to root if state is not found

  // START-attach-routes
  aboutRoute($stateProvider);
  homeRoute($stateProvider);
  mainRoute($stateProvider);
  // END-attach-routes
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;