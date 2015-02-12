'use strict';

/**
 * @ngdoc Controller
 *
 * @name <%= appName %>.controller:<%= cameledName %>
 *
 * @description
 * The main application Controller for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .controller('ApplicationCtrl', ApplicationCtrl);

  function ApplicationCtrl($rootScope) {
    var vm = this;

    vm.title = 'My App'; // Default Title

    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess); // Listen for state change

    /**
     * @name stateChangeSuccess
     *
     * @memberof <%= appName %>.controller:<%= cameledName %>
     *
     * @param event {Object} the event object
     *
     * @param newState {Object} the new state object
     */
    function stateChangeSuccess(event, newState) {
      vm.title = newState.title;
    }
  }

}());
