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
    cameledName: this._.camelize(this.name)
  };

  blueprint.copyTpl.call(this, 'view', 'html',  destPath, tempOptions);

  blueprint.copyTpl.call(this, 'view', 'scss',  destPath, tempOptions);
}
