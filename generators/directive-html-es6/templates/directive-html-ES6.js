'use strict';

import template from 'components/<%= dashedName %>/<%= dashedName %>.directive.html';

/**
 * @ngdoc directive
 *
 * @name <%= cameledName %>
 *
 * @description
 * directive for <%= appName %>
 */
function <%= cameledName %>() {
  	class Controller {
		    constructor() {
		    }
	  }

	  return {
		    restrict: 'E',
		    template: template,
		    scope: {},
		    controller: Controller,
		    controllerAs: 'vm',
		    bindToController: true,
	  };
}

<%= cameledName %>.$inject = [];

export default <%= cameledName %>;




