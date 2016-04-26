'use strict';

/**
 * @ngdoc directive
 *
 * @name bar2
 *
 * @description
 * directive for 
 */
(function () {

  angular
    .module('')
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


