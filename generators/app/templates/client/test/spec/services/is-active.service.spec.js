'use strict';

describe('Service: isActive', function () {

  // load the service's module
  beforeEach(module('<%= appName %>'));

  // instantiate service
  var isActive, $location;

  beforeEach(inject(function ($injector) {
    $location = $injector.get('$location');

    isActive = $injector.get('isActive');
  }));

  it('isActive should return true', function() {
    $location.path('/');

    expect(isActive('/' , '/test')).toBe(true);

    $location.path('/test');

    expect(isActive('/' , '/test')).toBe(true);
  });

  it('isActive should return false', function() {
    $location.path('/');

    expect(isActive('/test')).toBe(false);
  });

});
