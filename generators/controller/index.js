'use strict';
var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  writing: writing
});

function writing() {
  blueprint.copyTpl.call(this, 'controller', 'views', {
    appName: this._.camelize(this.config.get('appName')),
    classedName: this._.classify(this.name)
  });
}
