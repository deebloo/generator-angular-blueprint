'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    MainCtrl = $injector.get('$controller')('MainCtrl');
  }));

  it('User login value should set', function () {
    expect(MainCtrl.user.username).toBe('USER');
  });

});
