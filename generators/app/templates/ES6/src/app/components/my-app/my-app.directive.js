'use strict';

import template from 'components/my-app/my-app.directive.html';

/**
 * @ngdoc directive
 *
 * @description
 * Application component
 *
 * @example <my-app></my-app>
 */
function createMyApp() {
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

createMyApp.$inject = [];

export default createMyApp;