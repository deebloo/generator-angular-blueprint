'use strict';

describe('filter:fooFoo2', function () {

  // load the filter's module
  beforeEach(angular.mock.module('myApp'));

  var fooFoo2;

  // initialize a new instance of the filter before each test
  beforeEach(inject(function ($injector) {
    fooFoo2 = $injector.get('$filter')('fooFoo2');
  }));

  it('should apply the filter', function () {

  });

});
