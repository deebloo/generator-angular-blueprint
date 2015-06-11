'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: function () {
    this.destPath = './client/app/views/';
  },

  prompting: prompt,

  writing: function () {
    var values   = tplOptions(this.config.get('appName'), 'Controller', this.name),
      fileType = 'js';

    this.copyTpl(
      'controller',
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

