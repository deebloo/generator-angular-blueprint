'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('AngularBlueprint') + ' generator!'
    ));

    // Ask for the appName
    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What would you like to name your application?',
      default: this._.camelize(this.appname)
    }];

    this.prompt(prompts, function (props) {
      this.config.save();

      this.config.set('appName', props.appName);

      console.log(this.config.getAll());

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );

      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );

      this.fs.copyTpl(
        this.templatePath('client/index.html'),
        this.destinationPath('client/index.html')
      )
    },

    projectfiles: function () {
      this.fs.copyTpl(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copyTpl(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );

      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
