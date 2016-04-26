'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for myApp
 */
(function() {

  angular
    .module('myApp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;

    vm.user = { username: 'USER'};
  }

})();
