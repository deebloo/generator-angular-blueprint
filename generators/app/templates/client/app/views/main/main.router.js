(function() {

  angular
    .module('<%= appName %>')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '',
          templateUrl: 'app/views/main/main.view.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
          title: 'main'
        });
    });

}());
