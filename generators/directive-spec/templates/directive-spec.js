'use strict';

describe('<%= type %>:<%= dashedName %>', function () {

  // load the directive's module and view
  beforeEach(module('<%= appName %>'));
  beforeEach(module('components/<%= dashedName %>/<%= dashedName %>.html'));

  var element, scope;

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  it('should be a checkbox', inject(function ($compile) {
    element = angular.element('<<%= dashedName %>></<%= dashedName %>>');
    element = $compile(element)(scope);

    scope.$apply();
  }));
});
