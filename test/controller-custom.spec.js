'use strict';

var path = require('path'),
    assert = require('yeoman-generator').assert,
    helpers = require('yeoman-generator').test;

describe('AngularBlueprint:controller - custom - ES5', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/controller'))
      .withArguments(['test'])
      .withPrompt({ 'directory': './foo/bar/' })
      .withOptions({ 'skip-install': true})
      .on('ready', function (gen) {
        gen.config.set('appDir', 'src');
        gen.config.set('jsVersion', 'ES5');
      })
      .on('end', done);
  });


  it('creates files', function () {
    assert.file([
      './foo/bar/test.controller.js',
      './foo/bar/test.controller.spec.js'
    ]);
  });
});
