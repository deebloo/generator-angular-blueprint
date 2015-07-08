'use strict';

function AppCtrl($rootScope) {
  var vm = this;

  vm.title = 'My App'; // Default Title

  $rootScope.$on('$stateChangeSuccess', stateChangeSuccess); // Listen for state change

  /**
   * @name stateChangeSuccess
   *
   * @memberof AppCtrl
   *
   * @param {Object} event - the event object
   * @param {Object} newState - the new state object
   */
  function stateChangeSuccess(event, newState) {
    vm.title = newState.title;
  }
}

AppCtrl.$inject = ['$rootScope'];

export default AppCtrl;
