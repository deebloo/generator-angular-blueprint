'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  prompting: function () {
      prompt.call(this, 'app/components/')
  },
  
  writing: function () {
    var values    = tplOptions(this.config.get('appName'), 'directive', this.name),
        jsVersion = this.config.get('jsVersion') || 'ES5';

    this.copyTpl('directive-' + jsVersion, 'js', destination(this.destDirectory, this.name, 'directive', 'js'), values);

    this.copyTpl('directive-spec', 'js', destination(this.destDirectory, this.name, 'directive.spec', 'js'), values);
  }
});
