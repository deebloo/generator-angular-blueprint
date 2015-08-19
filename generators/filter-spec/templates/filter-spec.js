'use strict';

describe('<%= type %>:<%= cameledName %>', function () {

  // load the filter's module
  beforeEach(angular.mock.module('<%= appName %>'));

  var <%= cameledName %>;

  // initialize a new instance of the filter before each test
  beforeEach(inject(function ($injector) {
    <%= cameledName %> = $injector.get('$filter')('<%= cameledName %>');
  }));

  it('should apply the filter', function () {

  });

});
