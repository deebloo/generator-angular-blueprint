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
  './client/404.html',
  './client/favicon.ico',
  './client/index.html',
  './client/robots.txt',
  './client/app/components/',
  './client/app/services/',
  './client/app/views/about/',
  './client/app/views/home/',
  './client/app/views/main/',
  './client/images/',
  './client/styles/',
  './doc'
];

describe('angular-blueprint:app - es5', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({ appName: 'HelloWorld', jsVersion: 'es5' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(['./client/app.js', './client/app/views/application/'].concat(common));
  });
});

describe('angular-blueprint:app - es6', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({ appName: 'HelloWorld', jsVersion: 'es6' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(['./client/bootstrap.js'].concat(common));
  });
});
