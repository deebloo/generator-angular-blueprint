'use strict';

/**
 * @ngdoc factory
 *
 * @name baz1
 *
 * @description
 * Factory for myApp
 */
(function () {

  angular
    .module('myApp')
    .factory('baz1', baz1);

  function baz1() {
    var privateVal = 'Hello World';

    return {
      exposeVal: function () {
        return privateVal;
      }
    };
  }

})();

