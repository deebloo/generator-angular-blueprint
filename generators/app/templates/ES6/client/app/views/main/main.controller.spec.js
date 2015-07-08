'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('MyApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    MainCtrl = $injector.get('$controller')('MainCtrl');
  }));

  it('User login value should set', function () {

  });

});
