'use strict';

/**
 * @ngdoc directive
 *
 * @name <%= cameledName %>
 *
 * @description
 * directive for <%= appName %>
 */
(function () {

  angular
    .module('<%= appName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    return {
        restrict: 'A',
        link: link
    };

    function link() {
    }
  }

})();


