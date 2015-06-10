'use strict';

describe('<%= type %>:<%= cameledName %>', function () {

  // load the filter's module
  beforeEach(module('<%= appName %>'));

  // initialize a new instance of the filter before each test
  var <%= cameledName %>;

  beforeEach(inject(function ($injector) {
    <%= cameledName %> = $injector.get('$filter')('<%= cameledName %>');
  }));

  it('should apply the filter', function () {

  });

});
