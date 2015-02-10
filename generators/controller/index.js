'use strict';
var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.Base.extend({
  initializing: initializing,
  writing: writing
});

function initializing() {
  this.argument('name', {
    required: true,
    type: String,
    desc: 'The name of the controller'
  });
}

function writing() {
  blueprint.call(this, 'controller');
}
