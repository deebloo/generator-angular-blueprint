'use strict';

/**
 * @ngdoc controller
 *
 * @name <%= classedName %>
 *
 * @description
 * Controller for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

  function <%= classedName %>Ctrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

