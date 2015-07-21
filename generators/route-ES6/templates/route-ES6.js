'use strict';

function aboutRoute($stateProvider) {
  $stateProvider.state('main.<%= cameledName %>', {
      url         : '/<%= dashedName %>',
      templateUrl : '<%= dashedName %>.view.html',
      controller  : '<%= classedName %>',
      controllerAs: '<%= classedName %>'
  });
}

export default aboutRoute;
