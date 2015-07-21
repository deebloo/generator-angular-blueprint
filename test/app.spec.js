'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var common = [
  '.bowerrc',
  '.editorconfig',
  '.gitattributes',
  '.gitignore',
  '.jshintrc',
  'bower.json',
  'Gruntfile.js',
  'karma.conf.js',
  'package.json',
  'README.md',
  './src/404.html',
  './src/favicon.ico',
  './src/index.html',
  './src/robots.txt',
  './src/app/components/',
  './src/app/services/',
  './src/app/views/about/',
  './src/app/views/home/',
  './src/app/views/main/',
  './src/images/',
  './src/styles/',
  './doc'
];


describe('angular-blueprint:app - es5', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({ appName: 'HelloWorld', jsVersion: 'ES5', appDir: 'src' })
      .on('ready', function (gen) {
        gen.config.set('appDir', 'src');
        gen.config.set('jsVersion', 'ES5');
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(['./src/app.js','./src/app/views/application/'].concat(common));
  });
});

describe('angular-blueprint:app - es6', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({ appName: 'HelloWorld', jsVersion: 'ES6', appDir: 'src' })
      .on('ready', function (gen) {
        gen.config.set('appDir', 'src');
        gen.config.set('jsVersion', 'ES6');
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(['./src/bootstrap.js'].concat(common));
  });
});
