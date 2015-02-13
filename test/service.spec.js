'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:service', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['test'])
      .withPrompt({ 'directory': false })
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './client/app/services/test/test.service.js',
      './client/app/services/test/test.spec.js'
    ]);
  });
});
