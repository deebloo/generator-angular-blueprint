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
  this.destPath = './client/app/services/';
}

/**
 * @name writing
 */
function writing() {
  var values = tplOptions(this.config.get('appName'), 'Controller', this.name);

  this.copyTpl('service', 'js', destination(this.destDirectory, this.name, 'service', 'js'), values);

  this.copyTpl('service-spec', 'js', destination(this.destDirectory, this.name, 'service.spec', 'js'), values);
}
