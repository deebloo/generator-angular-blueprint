'use strict';

var blueprints = require('yeoman-blueprints'),
    prompt     = require('../../lib/prompt-install-path'),
    tplOptions = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  init: init,
  prompting: prompt,
  writing: writing
});

function init() {
  this.destPath = './client/app/services/';
}

/**
 * @name writing
 */
function writing() {
  var values = tplOptions(this.config.get('appName'), 'Controller', this.name);

  this.copyTpl('service', 'js', values);

  this.copyTpl('spec', 'js', values);
}
