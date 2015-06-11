'use strict';

/**
 * @ngdoc controller
 *
 * @name <%= appName %>.controller:AboutCtrl
 *
 * @description
 * Controller for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

}());
