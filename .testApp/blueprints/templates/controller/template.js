'use strict';

/**
 * @ngdoc controller
 *
 * @name <%= classedName %>
 *
 * @description
 * Controller for <%= appName %>
 */
(function () {

  angular
    .module('<%= appName %>')
    .controller('<%= classedName %>', <%= classedName %>);

  function <%= classedName %>() {
    var vm = this;

    vm.foo = [];
  }

})();

