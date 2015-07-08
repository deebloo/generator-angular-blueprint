'use strict';

/**
 * @ngdoc directive
 *
 * @name <%= cameledName %>
 *
 * @description
 * directive for <%= appName %>
 */
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

<%= cameledName %>.$inject = [];

export default <%= cameledName %>;



