'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: function () {
    this.destPath = './client/app/filters/';
  },

  prompting: prompt,

  writing: function () {
    var values   = tplOptions(this.config.get('appName'), 'Controller', this.name),
      fileType = 'js';

    this.copyTpl(
      'filter',
      fileType,
      destination(this.destDirectory, this.name, 'filter', fileType),
      values
    );
  }
});