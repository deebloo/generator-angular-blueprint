'use strict';

describe('factory:baz1', function () {

  // load the factory's module
  beforeEach(angular.mock.module('myApp'));

  var baz1;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    baz1 = $injector.get('baz1');
  }));

  it('condition of test', function () {

  });

});
