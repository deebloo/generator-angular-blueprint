'use strict';

function aboutRoute($urlRouterProvider, $stateProvider) {
  $stateProvider.state('main.<%= cameledName %>', {
      url         : '/<%= dashedName %>',
      templateUrl : 'app/views/<%= dashedName %>/<%= dashedName %>.view.html',
      controller  : '<%= classedName %>',
      controllerAs: '<%= classedName %>'
  });
}

export default aboutRoute;
