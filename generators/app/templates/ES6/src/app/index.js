'use strict';

import services from 'services';
import components from 'components';
import views from 'views';

export default angular
	.module('MyApp', [
        'ngAnimate',
        'ngSanitize',
        services,
        components,
        views
    ])
	.config(['$urlRouterProvider', $urlRouterProvider => {
		$urlRouterProvider.otherwise('/');
	}])
	.name;