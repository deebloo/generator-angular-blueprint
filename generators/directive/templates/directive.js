'use strict';

/**
 * @ngdoc Directive
 *
 * @name <%= appName %>.directive:<%= cameledName %>
 *
 * @description
 * directive for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    return {
        restrict: 'EA',
        // templateUrl: 'app/components/<%= cameledName %>/<%= cameledName %>.html'
        scope: {},
        link: link
    };

    function link(scope, el) {
    }
  }

}());


