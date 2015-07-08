'use strict';

var yeoman = require('yeoman-generator'),
    fs     = require('fs');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.argument('blueprintName', {type: String, required: false});

    this.destPath = './blueprints';
  },

  prompting: function prompting() {
    var done = this.async();

    if (this.blueprintName) {
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
          'directive-html',
          'directive-html-spec',
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
    var type   = this.config.get('jsVersion') || 'ES5',
        bpName = this.blueprint + '-' + type,
        fileExt;

    switch (this.blueprint) {
      case 'view':
        fileExt = '.html';
        bpName = 'view';
        break;
      case 'style':
        fileExt = '.scss';
        bpName = 'style';
        break;
      default:
        fileExt = '.js';
    }

    if (!fs.existsSync('./blueprints/templates/blueprint.json')) {
      this.fs.copy(
        this.templatePath('blueprint.json'),
        this.destinationPath('./blueprints/templates/blueprint.json')
      );
    }

    this.sourceRoot(__dirname + '/../' + bpName + '/' + 'templates/');

    this.fs.copy(
      this.templatePath(bpName + fileExt),
      this.destinationPath('./blueprints/templates/' + this.blueprint + '/template' + fileExt)
    );
  }
});
