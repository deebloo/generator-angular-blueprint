'use strict';

/**
 * @ngdoc directive
 *
 * @name bar2
 *
 * @description
 * directive for myApp
 */
(function () {

  angular
    .module('myApp')
    .directive('bar2', bar2);

  function bar2() {
    return {
        restrict: 'A',
        link: link
    };

    function link() {
    }
  }

})();


