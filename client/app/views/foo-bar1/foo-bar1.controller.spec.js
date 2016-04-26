'use strict';

describe('Controller:FooBar1Ctrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module(''));
  beforeEach(angular.mock.module('templates'));

  var FooBar1;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    FooBar1 = $injector.get('$controller')('FooBar1');
  }));

  it('condition of test', function () {

  });

});
