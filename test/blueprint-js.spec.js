'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:blueprint - js', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/blueprint'))
      .withArguments(['controller'])
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'blueprints/templates/controller/template.js',
      'blueprints/templates/blueprint.json'
    ]);
  });
});
