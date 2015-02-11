'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:factory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['test'])
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './client/app/services/test/test.factory.js'
    ]);
  });
});
