'use strict';

const webpackConfig = require('./webpack.config');

module.exports = function (config) {
	config.set({
		basePath: __dirname,

		frameworks: ['jasmine'],

		files: [
			'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'src/app/index.js',
            'src/app/{components,services,views}/**/**.spec.js',
            'src/common/**/spec.js'
        ],

		preprocessors: {
			'src/app/index.js': ['webpack'],
			'src/common/**/spec.js': ['webpack'],
			'src/app/{components,views}/**/**.**.html': ['webpack'],
			'src/app/{components,services,views}/**/**.spec.js': ['webpack']
		},

		webpack: {
			resolve: webpackConfig.resolve,
			module: webpackConfig.module
		},

		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: process.env.NODE_ENV === 'ci'
	});
};