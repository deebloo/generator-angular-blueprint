'use strict';
<% if(type === 'Controller') { %> describe('<%= type %>:<%= classedName %>Ctrl', function () { <% } %><% if(type !== 'Controller') { %> describe('<%= type %>:<%= cameledName %>', function () { <% } %>

  // load the controller's module
  beforeEach(module('<%= appName %>'));

  <% if(type === 'Controller') { %> var <%= classedName %>Ctrl; <% } %><% if(type !== 'Controller') { %> var <%= cameledName %>; <% } %>
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    <% if(type === 'Controller') { %><%= classedName %>Ctrl = $injector.get('$controller')('<%= classedName %>Ctrl');<% } %><% if(type !== 'Controller') { %><%= cameledName %> = $injector.get('<%= cameledName %>');<% } %>
  }));

  it('condition of test', function () {

  });

});
