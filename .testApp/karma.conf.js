'use strict';

var src = require('./bower.json').appPath || 'src';

module.exports = function (config) {
  console.log(src);
  
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      src + '/app/*.html',
      src + '/app/*.js',
      src + '/app/{views,components}/**/*.{js,html}',
      src + '/app/services/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9002,

    browsers: ['PhantomJS'],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'templates'
    },

    preprocessors: {
      'src/*.html': 'ng-html2js',
      'src/app/{components,views}/**/*.html': 'ng-html2js',
      'src/app/{components,services,views}/**/!(*spec).js': ['coverage']
    },

    reporters: ['coverage', 'progress'],

    coverageReporter: {
      type: 'html',
      dir : 'coverage/'
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};
