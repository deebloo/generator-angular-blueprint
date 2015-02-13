'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('<%= appName %>'));

  var AboutCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    AboutCtrl = $injector.get('$controller')('AboutCtrl');
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });

});
