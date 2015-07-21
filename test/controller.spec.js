'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:controller - ES5', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/controller'))
      .withArguments(['test'])
      .withOptions({ 'skip-install': true})
      .on('ready', function (gen) {
        gen.config.set('appDir', 'src');
        gen.config.set('jsVersion', 'ES5');
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './src/app/views/test/test.controller.js',
      './src/app/views/test/test.controller.spec.js'
    ]);
  });
});

describe('AngularBlueprint:controller - ES6', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/controller'))
      .withArguments(['test'])
      .withOptions({ 'skip-install': true})
      .on('ready', function (gen) {
        gen.config.set('appDir', 'src');
        gen.config.set('jsVersion', 'ES6');
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './src/app/views/test/test.controller.js',
      './src/app/views/test/test.controller.spec.js'
    ]);
  });
});
