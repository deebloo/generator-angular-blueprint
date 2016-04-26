'use strict';

/**
 * @ngdoc factory
 *
 * @name baz2
 *
 * @description
 * Factory for 
 */
(function () {

  angular
    .module('')
    .factory('baz2', baz2);

  function baz2() {
    var privateVal = 'Hello World';

    return {
      exposeVal: function () {
        return privateVal;
      }
    };
  }

})();

