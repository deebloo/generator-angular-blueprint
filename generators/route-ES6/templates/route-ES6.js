'use strict';

function aboutRoute($stateProvider) {
  $stateProvider.state('main.<%= cameledName %>', {
      url         : '/<%= dashedName %>',
      templateUrl : 'app/views/<%= dashedName %>/<%= dashedName %>.view.html',
      controller  : '<%= classedName %>',
      controllerAs: '<%= classedName %>',
      title       : '<%= humanName %>'
  });
}

export default aboutRoute;
