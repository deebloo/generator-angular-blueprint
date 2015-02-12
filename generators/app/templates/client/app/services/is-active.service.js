'use strict';

/**
 * @ngdoc factory
 *
 * @name isActive
 *
 * @description
 * # isActive
 * Factory in the <%= appName %>.
 */
(function() {

  angular
    .module('<%= appName %>')
    .factory('isActive', isActive);

  function isActive($location) {
    return checkActive;

    /**
     * @name Check Active
     * @returns {boolean}
     * @memberof isActive
     */
    function checkActive() {
      var links    = arguments,
          isActive = false;

      for(var i = 0, len = links.length; i < len; i++) {
        if(links[i] === $location.path()) {
          isActive = true;

          break;
        }
      }

      return isActive;
    }
  }

}());
