'use strict';

describe('<%= type %>:<%= cameledName %>', function () {
    // load the factory's module
    beforeEach(angular.mock.module('<%= appName %>'));

    let <%= cameledName %>;

    // initialize a new instance of the factory before each test
    beforeEach(inject(function ($injector) {
        <%= cameledName %> = $injector.get('<%= cameledName %>');
    }));

    it('condition of test', function () {

    });
});
