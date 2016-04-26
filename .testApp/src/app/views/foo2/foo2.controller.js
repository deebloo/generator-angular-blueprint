'use strict';

/**
 * @ngdoc controller
 *
 * @name Foo2
 *
 * @description
 * Controller for myApp
 */
(function () {

  angular
    .module('myApp')
    .controller('Foo2', Foo2);

  function Foo2() {
    var vm = this;

    vm.foo = [];
  }

})();

