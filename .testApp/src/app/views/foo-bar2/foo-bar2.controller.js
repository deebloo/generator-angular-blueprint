'use strict';

/**
 * @ngdoc controller
 *
 * @name FooBar2
 *
 * @description
 * Controller for myApp
 */
(function () {

  angular
    .module('myApp')
    .controller('FooBar2', FooBar2);

  function FooBar2() {
    var vm = this;

    vm.foo = [];
  }

})();

