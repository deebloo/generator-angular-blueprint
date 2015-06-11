'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: function () {
    this.destPath = './client/app/services/';
  },

  prompting: prompt,

  writing: function () {
    var values = tplOptions(this.config.get('appName'), 'Factory', this.name);

    this.copyTpl('factory', 'js', destination(this.destDirectory, this.name, 'factory', 'js'), values);

    this.copyTpl('factory-spec', 'js', destination(this.destDirectory, this.name, 'factory.spec', 'js'), values);
  }
});