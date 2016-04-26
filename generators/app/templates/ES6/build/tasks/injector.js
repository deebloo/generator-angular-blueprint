'use strict';

const gulp = require('gulp');
const _ = require('lodash');
const FILES = require('../FILES');
const inject = require('gulp-inject');
const string = {
	camelize: _.camelCase,
	classify: function (string) {
		return _.capitalize(_.camelCase(string));
	}
};

// inject views
gulp.task('inject:views', function () {
	const routes = gulp.src([`${FILES.app}/views/**/*.route.js`], {
		read: false
	});

	return gulp
		.src(FILES.app + '/views/index.js')
		.pipe(inject(routes, injectImport('routes', 'views', 'camelize')))
		.pipe(inject(routes, makeInject('attach-routes', function (filePath, file) {
			return file + '(...arguments);';
		}, 'camelize')))
		.pipe(gulp.dest(FILES.app + '/views/'));
});

// inject services
gulp.task('inject:services', function () {
	return injectImportAttach('services', 'services', [FILES.app + '/services/**/*.{service,factory}.js'], 'camelize');
});

// inject components
gulp.task('inject:components', function () {
	return injectImportAttach('components', 'components', [FILES.app + '/components/**/*.directive.js'], 'camelize');
});

// inject styles
gulp.task('inject:styles', function () {
	var styles = gulp.src([FILES.app + '/{components,views}/**/*.scss'], {
		read: false
	});

	return gulp
		.src(FILES.src + '/styles/app.scss')
		.pipe(inject(styles, makeInject('inject-styles', function (filePath) {
			return '@import "' + filePath.replace('/src', '..') + '";';
		})))
		.pipe(gulp.dest(FILES.src + '/styles/'));
});

gulp.task('injector', ['inject:views', 'inject:services', 'inject:components', 'inject:styles']);

/**
 * standard inject and attach to angular module
 *
 * @param module
 * @param type
 * @param files
 * @param style+
 *
 * @return {*}
 */
function injectImportAttach(module, type, files, style) {
	files = gulp.src(files, {
		read: false
	});

	return gulp
		.src(FILES.app + '/' + module + '/index.js')
		.pipe(inject(files, injectImport(type, module, style)))
		.pipe(inject(files, injectAttach(type, module, style)))
		.pipe(gulp.dest(FILES.app + '/' + module + '/'));
}

/**
 * import es6 module
 *
 * @param type
 * @param module
 * @param style
 *
 * @return {{starttag, endtag, transform}|{starttag: string, endtag: string, transform: Function}}
 */
function injectImport(type, module, style) {
	return makeInject('import-' + type, function (filePath, file) {
		return 'import ' + file + ' from \'' + filePath.replace('/' + FILES.appDir + '/' + module + '/', './') + '\';';
	}, style);
}

/**
 * Attach to module
 *
 * @param type
 * @param module
 * @param style
 *
 * @return {{starttag, endtag, transform}|{starttag: string, endtag: string, transform: Function}}
 */
function injectAttach(type, module, style) {
	return makeInject('attach-' + type, function (filePath, file, type) {
		return module + '.' + type + '(\'' + file + '\', ' + file + ');';
	}, style);
}

/**
 * create the inject configuration object
 *
 * @param {String} injectName
 * @param {Function} returns
 * @param {String} [style]
 *
 * @return {{starttag: string, endtag: string, transform: Function}}
 */
function makeInject(injectName, returns, style) {
	var fileName, file, type;

	return {
		starttag: '// START-' + injectName,
		endtag: '// END-' + injectName,
		transform: function (filepath) {
			fileName = filepath.split('/')[5].split('.');
			file = fileName[0];
			type = fileName[1];

			if (style) {
				file = string[style](file);
			}

			return returns(filepath, file, type);
		}
	};
}