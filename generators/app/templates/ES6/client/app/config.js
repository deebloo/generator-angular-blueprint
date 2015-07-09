'use strict';

// START-import-routes
// END-import-routes

function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

  $urlRouterProvider.otherwise('/'); // redirect to root if state is not found

  // START-attach-routes
  // END-attach-routes
}

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;