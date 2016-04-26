'use strict';

const path = require('path');
const srcDir = (() => {
	let src;

	try {
		const yorc = require('../.yo-rc.json')['generator-angular-blueprint'];
		
		if(yorc.appDir) {
			src = yorc.appDir;	
		} else {
			src = 'src';
		}
	} catch (e) {
		src = 'src';
	}

	return src;
})();

const appDir = path.join(srcDir, '/app');
const src = path.join(__dirname, '/../', srcDir);
const app = path.join(src, '/app');
const dev = path.join(__dirname, '/../dev');
const dist = path.join(__dirname, '/../dist');
const sass = [path.join(src, '/styles/*.scss'), path.join(app, '/{components,views}/**/*.scss')];
const js = [path.join(src, '/*.js'), path.join(app, '/**/**/*.js'), path.join(src, '/common/**/*.js')];
const html = [path.join(app, '/{components,views}/**/*.html')];

module.exports = {
	srcDir,
	appDir,
	src,
	app,
	dev,
	dist,
	sass,
	js,
	html
};