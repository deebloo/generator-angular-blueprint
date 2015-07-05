'use strict';

describe('<%= type %>:<%= classedName %>Ctrl', function () {

  // load the controller's module
  beforeEach(module('<%= appName %>'));
  beforeEach(module('templates'));

  var <%= classedName %>;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    <%= classedName %> = $injector.get('$controller')('<%= classedName %>');
  }));

  it('condition of test', function () {

  });

});
