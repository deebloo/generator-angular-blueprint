'use strict';

function aboutRoute($stateProvider) {
    $stateProvider.state('<%= cameledName %>', {
        url         : '/<%= dashedName %>',
        templateUrl : 'views/<%= dashedName %>/<%= dashedName %>.view.html',
        controller  : '<%= classedName %> as <%= classedName %>'
    });
}

export default aboutRoute;
