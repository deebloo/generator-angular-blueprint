'use strict';

var blueprints = require('../../lib/Blueprints'),
    prompt     = require('../../lib/prompt-install-path');

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
  var tempOptions = {
    appName: this._.camelize(this.config.get('appName')),
    classedName: this._.classify(this.name),
    cameledName: this._.camelize(this.name),
    dashedName: this._.dasherize(this.name),
    humanName: this._.humanize(this.name),
    type: 'factory'
  };

  this.copyTpl('factory', 'js', tempOptions);

  this.copyTpl('spec', 'js', tempOptions);
}
