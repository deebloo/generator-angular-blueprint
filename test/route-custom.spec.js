'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:route - custom', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/route'))
      .withArguments(['helloWorld'])
      .withPrompt({ 'directory': './foo' })
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './foo/hello-world.view.html',
      './foo/hello-world.view.scss',
      './foo/hello-world.controller.js',
      './foo/hello-world.router.js',
      './foo/hello-world.spec.js'
    ]);
  });
});
