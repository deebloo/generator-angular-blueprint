'use strict';

/**
 * @ngdoc controller
 *
 * @name AboutCtrl
 *
 * @description
 * Controller for <%= appName %>
 */
class AboutCtrl {
  constructor() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
}

AboutCtrl.$inject = [];

export default AboutCtrl;
