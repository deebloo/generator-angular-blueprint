'use strict';

/**
 * @ngdoc factory
 *
 * @name <%= cameledName %>
 *
 * @description
 * Factory for <%= appName %>
 */
(function () {

  angular
    .module('<%= appName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    var privateVal = 'Hello World';

    return {
      exposeVal: function () {
        return privateVal;
      }
    };
  }

})();

