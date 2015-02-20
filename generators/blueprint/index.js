'use strict';

var yeoman = require('yeoman-generator');
var blueprint = require('../../lib/blueprint');

module.exports = yeoman.generators.NamedBase.extend({
  init: init,
  writing: writing
});

function init() {
  this.destPath = './blueprints';
}

/**
 * @name writing
 */
function writing() {
  this.sourceRoot('generators/' + this.name + '/templates/');

  var fileExt = (function() {
    var ext;

    switch(this.name) {
      case 'view':
        ext = '.html';
        break;
      case 'style':
        ext = '.scss';
        break;
      default:
        ext = '.js';
    }

    return ext;
  }.bind(this)());

  this.fs.copy(
    this.templatePath(this.name + fileExt),
    this.destinationPath('./blueprints/' + this.name + '/' + this.name + fileExt)
  );
}
