'use strict';
var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  writing: writing
});

/**
 * @name writing
 */
function writing() {
  var destPath = './client/app/views/';

  var tempOptions = {
    appName: this._.camelize(this.config.get('appName')),
    classedName: this._.classify(this.name),
    cameledName: this._.camelize(this.name),
    dashedName: this._.dasherize(this.name),
    humanName: this._.humanize(this.name)
  };

  blueprint.copyTpl.call(this, 'view', 'html',  destPath, tempOptions);

  blueprint.copyTpl.call(this, 'view', 'scss',  destPath, tempOptions);

  blueprint.copyTpl.call(this, 'controller', 'js',  destPath, tempOptions);

  blueprint.copyTpl.call(this, 'router', 'js', destPath, tempOptions);
}
