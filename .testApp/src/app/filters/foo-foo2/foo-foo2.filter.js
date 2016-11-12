'use strict';

/**
 * @ngdoc filter
 *
 * @name fooFoo2
 *
 * @description
 * Filter for myApp
 */
(function () {

  angular
    .module('myApp')
    .filter('fooFoo2', fooFoo2);

  function fooFoo2() {
    return function () {

    }
  }

})();

