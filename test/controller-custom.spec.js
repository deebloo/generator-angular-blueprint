'use strict';

var path = require('path'),
    assert = require('yeoman-generator').assert,
    helpers = require('yeoman-generator').test,
    os = require('os');


describe('AngularBlueprint:controller - custom', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/controller'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments(['test'])
      .withPrompt({ 'directory': './foo/bar/' })
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });


  it('creates files', function () {
    assert.file([
      './foo/bar/test.controller.js',
      './foo/bar/test.controller.spec.js'
    ]);
  });
});
