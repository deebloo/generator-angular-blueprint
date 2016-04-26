'use strict';

(function() {

  angular
    .module('')
    .config(function ($stateProvider) {
      $stateProvider
        .state('fooBar2', {
          url         : '/foo-bar2',
          templateUrl : 'app/views/foo-bar2/foo-bar2.view.html',
          controller  : 'FooBar2',
          controllerAs: 'FooBar2',
          title       : 'Foo bar2'
        });
    });

})();