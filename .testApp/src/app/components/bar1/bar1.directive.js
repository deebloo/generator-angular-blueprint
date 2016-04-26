'use strict';

/**
 * @ngdoc directive
 *
 * @name bar1
 *
 * @description
 * directive for myApp
 */
(function () {

  angular
    .module('myApp')
    .directive('bar1', bar1);

  function bar1() {
    return {
        restrict: 'A',
        link: link
    };

    function link() {
    }
  }

})();


