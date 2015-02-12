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
  var destPath = './client/app/services/';

  var tempOptions = {
    appName: this._.camelize(this.config.get('appName')),
    cameledName: this._.camelize(this.name)
  };

  blueprint.copyTpl.call(this, 'service', 'js', destPath, tempOptions);
}
