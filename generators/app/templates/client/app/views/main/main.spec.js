'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('<%= appName %>'));

  var main;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    main = $injector.get('$controller')('MainCtrl');
  }));

  it('User login value should set', function () {
    expect(main.user.username).toBe('USER');
  });

});
