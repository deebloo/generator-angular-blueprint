'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:route', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/route'))
      .withArguments(['helloWorld'])
      .withPrompt({ 'directory': false })
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './client/app/views/hello-world/hello-world.view.html',
      './client/app/views/hello-world/hello-world.view.scss',
      './client/app/views/hello-world/hello-world.controller.js',
      './client/app/views/hello-world/hello-world.router.js'
    ]);
  });
});
