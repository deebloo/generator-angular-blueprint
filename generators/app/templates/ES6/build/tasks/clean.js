'use strict';

const gulp = require('gulp');
const FILES = require('../FILES');
const clean = require('gulp-clean');
const docs = [
	`${__dirname}/../../docs/*.html`,
	`${__dirname}/../../docs/scripts`,
	`${__dirname}/../../docs/styles`
];

gulp.task('clean', function () {
	var files = [
		...docs,
        `${FILES.dev}/css`,
        `${FILES.dev}/scripts`,
        `${FILES.dev}/index.html`
    ];

	return gulp.src(files, {
		read: false
	}).pipe(clean());
});

gulp.task('clean:docs', function () {
	return gulp.src(docs, {
		read: false
	}).pipe(clean());
});