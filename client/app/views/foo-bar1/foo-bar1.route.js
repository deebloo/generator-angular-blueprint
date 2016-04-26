'use strict';

(function() {

  angular
    .module('')
    .config(function ($stateProvider) {
      $stateProvider
        .state('fooBar1', {
          url         : '/foo-bar1',
          templateUrl : 'app/views/foo-bar1/foo-bar1.view.html',
          controller  : 'FooBar1',
          controllerAs: 'FooBar1',
          title       : 'Foo bar1'
        });
    });

})();