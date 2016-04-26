'use strict';

describe('controller:Foo1Ctrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module(''));
  beforeEach(angular.mock.module('templates'));

  var Foo1;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Foo1 = $injector.get('$controller')('Foo1');
  }));

  it('condition of test', function () {

  });

});
