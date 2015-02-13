'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:controller - custom', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments(['test'])
      .withPrompt({ 'directory': './foo/bar/' })
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './foo/bar/test.controller.js',
      './foo/bar/test.spec.js'
    ]);
  });
});
