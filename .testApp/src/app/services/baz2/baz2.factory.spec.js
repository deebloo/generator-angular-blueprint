'use strict';

describe('factory:baz2', function () {

  // load the factory's module
  beforeEach(angular.mock.module('myApp'));

  var baz2;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    baz2 = $injector.get('baz2');
  }));

  it('condition of test', function () {

  });

});
