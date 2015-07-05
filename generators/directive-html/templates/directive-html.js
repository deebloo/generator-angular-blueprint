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
        restrict: 'E',
        templateUrl: 'app/components/<%= dashedName %>/<%= dashedName %>.directive.html',
        scope: {},
        link: link
    };

    function link() {
    }
  }

})();


