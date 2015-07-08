'use strict';

/**
 * @ngdoc factory
 *
 * @name <%= cameledName %>
 *
 * @description
 * Factory for <%= appName %>
 */
function <%= cameledName %>() {
  var privateVal = 'Hello World';

  return {
    exposeVal: function () {
      return privateVal;
    }
  };
}

<%= cameledName %>.$inject = [];

export default <%= cameledName %>;


