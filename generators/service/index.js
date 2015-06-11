'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: function init() {
    this.destPath = './client/app/services/';
  },

  prompting: prompt,

  writing: function () {
    var values = tplOptions(this.config.get('appName'), 'service', this.name);

    this.copyTpl('service', 'js', destination(this.destDirectory, this.name, 'service', 'js'), values);

    this.copyTpl('service-spec', 'js', destination(this.destDirectory, this.name, 'service.spec', 'js'), values);
  }

});