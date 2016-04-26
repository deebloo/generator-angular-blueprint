'use strict';

const gulp = require('gulp');
const FILES = require('../FILES');

gulp.task('assets:dev', () => {
	return gulp
		.src(`${FILES.src}/imgs/**/**`)
		.pipe(gulp.dest(`${FILES.dev}/imgs`));
});

gulp.task('assets:dist', () => {
	return gulp
		.src(`${FILES.src}/imgs/**/**`)
		.pipe(gulp.dest(`${FILES.dist}/imgs`));
});