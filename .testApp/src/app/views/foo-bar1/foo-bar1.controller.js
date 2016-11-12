'use strict';

/**
 * @ngdoc controller
 *
 * @name FooBar1
 *
 * @description
 * Controller for myApp
 */
(function () {

  angular
    .module('myApp')
    .controller('FooBar1', FooBar1);

  function FooBar1() {
    var vm = this;

    vm.foo = [];
  }

})();

