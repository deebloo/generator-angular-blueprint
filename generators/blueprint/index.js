'use strict';

var yeoman = require('yeoman-generator'),
    fs     = require('fs');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.argument('blueprintName', { type: String, required: false });

    this.destPath = './blueprints';
  },

  prompting: function prompting() {
    var done = this.async();

    if(this.blueprintName) {
      this.blueprint = this.blueprintName;

      done();
    }
    else {
      this.prompt({
        type   : 'list',
        name   : 'blueprints',
        message: 'Which blueprint would you like to create?',
        choices: [
          'controller',
          'controller-spec',
          'service',
          'service-spec',
          'factory',
          'factory-spec',
          'directive',
          'directive-spec',
          'route',
          'view',
          'style'
        ]
      }, function (answers) {
        this.blueprint = answers.blueprints;

        done();
      }.bind(this));
    }
  },

  writing: function writing() {
    if(!fs.existsSync('./blueprints/templates/blueprint.json')) {
      this.fs.copy(
        this.templatePath('blueprint.json'),
        this.destinationPath('./blueprints/templates/blueprint.json')
      );
    }

    var templateDir = __dirname + '/../' + this.blueprint + '/' + 'templates/'; // Mark the end of the string so it cn be easily replace below

    this.sourceRoot(templateDir); // manually set source root to the select generator type

    var fileExt = (function() {
      var ext;

      switch(this.blueprint) {
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
      this.templatePath(this.blueprint + fileExt),
      this.destinationPath('./blueprints/templates/' + this.blueprint + '/template' + fileExt)
    );
  }
});
