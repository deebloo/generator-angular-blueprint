'use strict';

function aboutRoute($stateProvider) {
  $stateProvider.state('<%= cameledName %>', {
    url         : '/<%= dashedName %>',
    templateUrl : 'views/<%= dashedName %>/<%= dashedName %>.view.html',
    controller  : '<%= classedName %>',
    controllerAs: '<%= classedName %>'
  });
}

export default aboutRoute;
