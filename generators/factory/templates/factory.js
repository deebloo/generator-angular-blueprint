'use strict';

/**
 * @ngdoc factory
 *
 * @name <%= appName %>.factory:<%= cameledName %>
 *
 * @description
 * Factory for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    return { };
  }

})();

