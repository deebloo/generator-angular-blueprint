'use strict';

describe('<%= type %>:<%= cameledName %>', function () {

  // load the service's module
  beforeEach(module('<%= appName %>'));

  var <%= cameledName %>;

  // initialize a new instance of the service before each test
  beforeEach(inject(function ($injector) {
    <%= cameledName % > = $injector.get('<%= cameledName %>');
  }));

  it('condition of test', function () {

  });

});
