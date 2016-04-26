'use strict';

const gulp = require('gulp');
const FILES = require('../FILES');

gulp.task('html:dev', () => {
	return gulp
		.src(`${FILES.src}/index.html`)
		.pipe(gulp.dest(FILES.dev));
});

gulp.task('html:dist', () => {
	return gulp
		.src(`${FILES.src}/index.html`)
		.pipe(gulp.dest(FILES.dist));
});