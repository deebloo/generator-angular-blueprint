'use strict';

describe('<%= type %>:<%= classedName %>Ctrl', function () {
    // load the controller's module
    beforeEach(angular.mock.module('<%= appName %>'));

    let <%= classedName %>;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($injector) {
        <%= classedName %> = $injector.get('$controller')('<%= classedName %>');
    }));

    it('condition of test', function () {

    });
});
