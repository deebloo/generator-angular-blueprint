'use strict';

const gulp = require('gulp');
const FILES = require('../FILES');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');

// compile sass
gulp.task('sass', () => {
	return gulp.src(`${FILES.src}/styles/app.scss`)
		.pipe(sass({
			sourceMaps: true,
			errLogToConsole: true
		}))
		.pipe(gulp.dest(`${FILES.dev}/css/`));
});

// Compile sass for prod
gulp.task('sass:dist', () => {
	return gulp.src(`${FILES.src}/styles/app.scss`)
		.pipe(sass())
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(gulp.dest(`${FILES.dist}/css/`));
});