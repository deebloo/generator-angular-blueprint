'use strict';

/**
 * @ngdoc Directive
 *
 * @name <%= appName %>.service:<%= cameledName %>
 *
 * @description
 * <%= appName %>.directive:<%= cameledName %>
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


