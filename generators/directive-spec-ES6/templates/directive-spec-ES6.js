'use strict';

describe('<%= type %>:<%= dashedName %>', function () {
    // load the directive's module and view
    beforeEach(angular.mock.module('<%= appName %>'));

    let element, scope;

    // Initialize a mock scope
    beforeEach(inject(function ($injector) {
        scope = $injector.get('$rootScope').$new();
    }));

    // compile the element to be tested
    it('should be a thing', inject(function ($compile) {
        element = angular.element('<div <%= dashedName %>></div>');
        element = $compile(element)(scope);

        scope.$apply();
    }));
});
