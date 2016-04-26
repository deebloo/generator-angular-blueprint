'use strict';

describe('Controller:FooBar2Ctrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module(''));
  beforeEach(angular.mock.module('templates'));

  var FooBar2;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    FooBar2 = $injector.get('$controller')('FooBar2');
  }));

  it('condition of test', function () {

  });

});
