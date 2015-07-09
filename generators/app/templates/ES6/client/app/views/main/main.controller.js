'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for <%= appName %>
 */
class MainCtrl {
  constructor() {
    var vm = this;

    vm.user = { username: 'USER'};
  }
}

MainCtrl.$inject = [];

export default MainCtrl;
