'use strict';

var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  init: init,
  prompting: blueprint.promptInstallPath,
  writing: writing
});

/**
 * @name init
 */
function init() {
  this.destPath = './client/app/views/';
}

/**
 * @name writing
 */
function writing() {
  var tempOptions = {
    appName: this._.camelize(this.config.get('appName')),
    classedName: this._.classify(this.name),
    type: 'Controller'
  };

  blueprint.copyTpl.call(this, 'controller', 'js', tempOptions);

  blueprint.copyTpl.call(this, 'spec', 'js', tempOptions);
}
