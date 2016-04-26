'use strict';

export default ($stateProvider) => {
	$stateProvider.state('home', {
		url: '/',
		template: '<my-app></my-app>',
	});
};