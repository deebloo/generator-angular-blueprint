'use strict';

/**
 * @ngdoc Controller
 *
 * @name <%= appName %>.controller:<%= cameledName %>
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

    /**
    * @description
    * A list of awesome things.
    * @type string[]
    * @memberof AboutCtrl
    */
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

}());
