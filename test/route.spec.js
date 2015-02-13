'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:route', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/route'))
      .withArguments(['test'])
      .withPrompt({ 'directory': false })
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './client/app/views/test/test.view.html',
      './client/app/views/test/test.view.scss',
      './client/app/views/test/test.controller.js',
      './client/app/views/test/test.router.js'
    ]);
  });
});
