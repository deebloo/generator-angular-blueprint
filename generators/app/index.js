'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  prompting: prompting,

  writing: {
    app: app,
    projectfiles: projectfiles,
    install: install
  }
});

/**
 * @name prompting
 */
function prompting() {
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay('Welcome to the ' + chalk.red('AngularBlueprint') + ' generator!'));

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

    done();
  }.bind(this));
}

/**
 * @name app
 */
function app() {
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
}

/**
 * @name projectfiles
 */
function projectfiles() {
  this.fs.copyTpl(
    this.templatePath('_editorconfig'),
    this.destinationPath('.editorconfig')
  );

  this.fs.copyTpl(
    this.templatePath('_jshintrc'),
    this.destinationPath('.jshintrc')
  );

  this.fs.copy(
    this.templatePath('_Gruntfile.js'),
    this.destinationPath('Gruntfile.js')
  );
}

/**
 * @name install
 */
function install() {
  this.installDependencies({
    skipInstall: this.options['skip-install']
  });
}
