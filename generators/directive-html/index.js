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

    this.copyTpl('directive-html-' + jsVersion, 'js', destination(this.destDirectory, this.name, 'directive', 'js'), values);

    this.copyTpl('directive-html-spec', 'js', destination(this.destDirectory, this.name, 'directive.spec', 'js'), values);

    this.copyTpl('view', 'html', destination(this.destDirectory, this.name, 'directive', 'html'), values);

    this.copyTpl('style', 'scss', destination(this.destDirectory, this.name, 'directive', 'scss'), values);
  }
});
