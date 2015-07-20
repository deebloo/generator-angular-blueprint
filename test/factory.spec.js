'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('AngularBlueprint:factory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['test'])
      .withPrompt({ 'directory': false })
      .withOptions({ 'skip-install': true })
      .on('ready', function (gen) {
        gen.config.set('appDir', './src/');
        gen.config.set('jsVersion', 'ES5')
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './src/app/services/test/test.factory.js',
      './src/app/services/test/test.factory.spec.js'
    ]);
  });
});
