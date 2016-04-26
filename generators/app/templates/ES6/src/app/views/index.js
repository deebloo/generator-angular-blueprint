'use strict';

// THIS FILE IS DYNAMICALLY GENERATED. MODIFY AT YOUR OWN RISK

// START-import-routes
import home from './home/home.route.js';
// END-import-routes

const moduleName = 'views';
const views = angular.module(moduleName, ['ui.router']);

function config($stateProvider) {
	// START-attach-routes
	home(...arguments);
	// END-attach-routes
}
config.$inject = ['$stateProvider'];

views.config(config);

export default moduleName;