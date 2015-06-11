'use strict';

/**
 * @ngdoc filter
 *
 * @name <%= appName %>.filter:<%= cameledName %>
 *
 * @description
 * Filter for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .filter('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    return function() {

    }
  }

}());

