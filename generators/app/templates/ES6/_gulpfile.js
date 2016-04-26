'use strict';

const gulp = require('gulp');
const fs = require('fs');

// load in tasks
fs.readdirSync('./build/tasks/').forEach(file => {
	require('./build/tasks/' + file);
});

gulp.task('default', ['serve', 'watch']);
gulp.task('build', ['assets:dist', 'sass:dist', 'compile:dist', 'html:dist']);