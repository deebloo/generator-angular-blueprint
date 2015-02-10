'use strict';
var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  writing: writing
});

function writing() {
  blueprint.call(this, 'controller');
}
