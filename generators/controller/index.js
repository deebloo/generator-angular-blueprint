'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: function () {
    this.destPath = 'app/views/';
  },

  prompting: prompt,

  writing: function () {
    var values    = tplOptions(this.config.get('appName'), 'controller', this.name),
        fileType  = 'js',
        jsVersion = this.config.get('jsVersion') || 'ES5';

    this.copyTpl(
      'controller-' + jsVersion,
      fileType,
      destination(this.destDirectory, this.name, 'controller', fileType),
      values
    );

    this.copyTpl(
      'controller-spec',
      fileType,
      destination(this.destDirectory, this.name, 'controller.spec', fileType),
      values
    );
  }
});

