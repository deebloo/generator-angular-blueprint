'use strict';

var blueprints  = require('yeoman-blueprints'),
    prompt      = require('../../lib/prompt-install-path'),
    destination = require('../../lib/destination'),
    tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: init,
  prompting: prompt,
  writing: writing
});

function init() {
  this.destPath = './client/app/views/';
}

/**
 * @name writing
 */
function writing() {
  var values = tplOptions(this.config.get('appName'), 'Controller', this.name);

  this.copyTpl('view', 'html', destination(this.destDirectory, this.name, 'view', 'html'), values);

  this.copyTpl('style', 'scss', destination(this.destDirectory, this.name, 'style', 'scss'), values);
}
