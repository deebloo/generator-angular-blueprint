'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-blueprint:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({ appName: 'HelloWorld' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.bowerrc',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.jshintrc',
      'bower.json',
      'Gruntfile.js',
      'package.json',
      'README.md',
      './client/404.html',
      './client/app.js',
      './client/favicon.ico',
      './client/index.html',
      './client/robots.txt',
      './client/app/',
      './client/images/',
      './client/styles/',
      './client/test/'
    ]);
  });
});
