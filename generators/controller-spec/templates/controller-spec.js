'use strict';

describe('<%= type %>:<%= classedName %>Ctrl', function () {

  // load the module
  beforeEach(module('<%= appName %>'));

  var <%= classedName %>Ctrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    <%= classedName %>Ctrl = $injector.get('$controller')('<%= classedName %>Ctrl');
  ));

  it('condition of test', function () {

  });

});
