'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:blueprint - style', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/blueprint'))
      .withPrompt({ 'blueprints': 'style' })
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'blueprints/style/style.scss'
    ]);
  });
});
