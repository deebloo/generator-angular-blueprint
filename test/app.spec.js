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
      .withArguments(['test'])
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
      'karma.conf.js',
      'package.json',
      'README.md',
      './client/404.html',
      './client/app.js',
      './client/favicon.ico',
      './client/index.html',
      './client/robots.txt',
      './client/app/components/',
      './client/app/services/',
      './client/app/views/about/',
      './client/app/views/application/',
      './client/app/views/home/',
      './client/app/views/main/',
      './client/images/',
      './client/styles/',
      './doc'
    ]);
  });
});
