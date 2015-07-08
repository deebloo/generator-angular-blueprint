'use strict';

describe('Controller: AppCtrl', function () {

  // load the controller's module
  beforeEach(module('MyApp'));

  var AppCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    AppCtrl = $injector.get('$controller')('AppCtrl');
  }));

  it('should display a default title', function () {
    expect(AppCtrl.title).toBe('My App');
  });

});
