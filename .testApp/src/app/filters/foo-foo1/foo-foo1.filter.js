'use strict';

/**
 * @ngdoc filter
 *
 * @name fooFoo1
 *
 * @description
 * Filter for myApp
 */
(function () {

  angular
    .module('myApp')
    .filter('fooFoo1', fooFoo1);

  function fooFoo1() {
    return function () {

    }
  }

})();

