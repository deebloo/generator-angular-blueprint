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
    var values    = tplOptions(this.config.get('appName'), 'Controller', this.name),
        jsVersion = this.config.get('jsVersion') || 'ES5';

    this.copyTpl('view', 'html', destination(this.destDirectory, this.name, 'view', 'html'), values);

    this.copyTpl('style', 'scss', destination(this.destDirectory, this.name, 'style', 'scss'), values);

    this.copyTpl('controller-' + jsVersion, 'js', destination(this.destDirectory, this.name, 'controller', 'js'), values);

    this.copyTpl('route-' + jsVersion, 'js', destination(this.destDirectory, this.name, 'route', 'js'), values);

    this.copyTpl('controller-spec', 'js', destination(this.destDirectory, this.name, 'controller.spec', 'js'), values);
  }

});