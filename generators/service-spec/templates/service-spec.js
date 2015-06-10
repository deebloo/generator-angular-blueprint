'use strict';

describe('<%= type %>:<%= cameledName %>', function () {

  // load the module
  beforeEach(module('<%= appName %>'));

  var <%= cameledName %>;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    <%= cameledName %> = $injector.get('<%= cameledName %>');
  ));

  it('condition of test', function () {

  });

});
