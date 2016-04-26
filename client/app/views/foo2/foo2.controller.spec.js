'use strict';

describe('controller:Foo2Ctrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module(''));
  beforeEach(angular.mock.module('templates'));

  var Foo2;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Foo2 = $injector.get('$controller')('Foo2');
  }));

  it('condition of test', function () {

  });

});
