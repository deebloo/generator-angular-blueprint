'use strict';

const gulp = require('gulp');
const server = require('../server');
const FILES = require('../FILES');

// Static Server + watching scss/html files
gulp.task('serve', ['assets:dev', 'sass', 'compile', 'html:dev'], () => {
	server.init({
		server: FILES.dev
	});
});