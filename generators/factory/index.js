'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  prompting: function () {
      prompt.call(this, 'app/services/')
  },

  writing: function () {
    var values    = tplOptions(this.config.get('appName'), 'factory', this.name),
        jsVersion = this.config.get('jsVersion') || 'ES5';

    this.copyTpl('factory-' + jsVersion, 'js', destination(this.destDirectory, this.name, 'factory', 'js'), values);

    this.copyTpl('factory-spec', 'js', destination(this.destDirectory, this.name, 'factory.spec', 'js'), values);
  }
});