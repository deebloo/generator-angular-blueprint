'use strict';

/**
 * @ngdoc Service
 *
 * @name <%= appName %>.service:isActive
 *
 * @description
 * Service for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .factory('isActive', isActive);

  function isActive($location) {
    return function checkActive() {
      var links    = arguments,
          isActive = false;

      for(var i = 0, len = links.length; i < len; i++) {
        if(links[i] === $location.path()) {
          isActive = true;

          break;
        }
      }

      return isActive;
    };
  }

}());
