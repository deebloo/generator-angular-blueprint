'use strict';

/**
 * @ngdoc filter
 *
 * @name <%= cameledName %>
 *
 * @description
 * Filter for <%= appName %>
 */
(function () {

  angular
    .module('<%= appName %>')
    .filter('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    return function () {

    }
  }

})();

