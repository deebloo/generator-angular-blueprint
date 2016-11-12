'use strict';

describe('filter:fooFoo1', function () {

  // load the filter's module
  beforeEach(angular.mock.module('myApp'));

  var fooFoo1;

  // initialize a new instance of the filter before each test
  beforeEach(inject(function ($injector) {
    fooFoo1 = $injector.get('$filter')('fooFoo1');
  }));

  it('should apply the filter', function () {

  });

});
