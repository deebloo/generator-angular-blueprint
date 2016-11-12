'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var HomeCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    HomeCtrl = $injector.get('$controller')('HomeCtrl');
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });

});
