'use strict';

const gulp = require('gulp');
const server = require('../server');
const FILES = require('../FILES');

gulp.task('html-watch', ['html:dev', 'compile'], () => server.reload());
gulp.task('sass-watch', ['sass'], () => server.reload());
gulp.task('js-watch', ['compile', 'injector'], () => server.reload());

gulp.task('watch', () => {
	gulp.watch(FILES.html, ['html-watch']);
	gulp.watch(FILES.sass, ['sass-watch']);
	gulp.watch(FILES.js, ['js-watch']);
});