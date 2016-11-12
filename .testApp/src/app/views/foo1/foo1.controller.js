'use strict';

/**
 * @ngdoc controller
 *
 * @name Foo1
 *
 * @description
 * Controller for myApp
 */
(function () {

  angular
    .module('myApp')
    .controller('Foo1', Foo1);

  function Foo1() {
    var vm = this;

    vm.foo = [];
  }

})();

