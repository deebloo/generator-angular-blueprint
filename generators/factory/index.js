'use strict';
var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  writing: writing
});

function writing() {
  blueprint.copyTpl.call(this, 'factory', 'services', {
    appName: this._.camelize(this.config.get('appName')),
    cameledName: this._.camelize(this.name)
  });
}
