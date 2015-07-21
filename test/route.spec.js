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
      .on('ready', function (gen) {
        gen.config.set('appDir', 'src');
        gen.config.set('jsVersion', 'ES5')
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      './src/app/views/hello-world/hello-world.view.html',
      './src/app/views/hello-world/hello-world.style.scss',
      './src/app/views/hello-world/hello-world.controller.js',
      './src/app/views/hello-world/hello-world.route.js',
      './src/app/views/hello-world/hello-world.controller.spec.js'
    ]);
  });
});
