'use strict';
var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  prompting: prompting,
  writing: writing
});

/**
 * @name prompting
 */
function prompting() {
  var done = this.async();

  this.destDirectory = './client/app/services/' + this.name;

  this.prompt({
    type    : 'input',
    name    : 'directory',
    message : 'factory directory',
    default : this.destDirectory
  }, function(answers) {
    this.destDirectory = answers.directory;

    done();
  }.bind(this));
}

/**
 * @name writing
 */
function writing() {
  blueprint.copyTpl.call(this, 'factory', this.destDirectory, {
    appName: this._.camelize(this.config.get('appName')),
    cameledName: this._.camelize(this.name)
  });
}
