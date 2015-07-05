'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:directive-html', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/directive-html'))
      .withArguments(['test'])
      .withPrompt({ 'directory': false })
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './client/app/components/test/test.directive.js',
      './client/app/components/test/test.directive.spec.js',
      './client/app/components/test/test.directive.html',
      './client/app/components/test/test.directive.scss'
    ]);
  });
});