'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: init,
  prompting: prompting,
  writing: {
    app: app,
    projectfiles: projectfiles,
    install: install
  }
});

/**
 * @name init
 */
function init() {
  this.argument('appName', { type: String });
}

/**
 * @name prompting
 */
function prompting() {
  if(this.appName) {
    this.config.save();

    this.config.set('appName', this.appName);
  }
  else {
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
}

/**
 * @name app
 */
function app() {
  this.fs.copy(
    this.templatePath('_.bowerrc'),
    this.destinationPath('.bowerrc')
  );

  this.fs.copy(
    this.templatePath('.editorconfig'),
    this.destinationPath('.editorconfig')
  );

  this.fs.copy(
    this.templatePath('.gitattributes'),
    this.destinationPath('.gitattributes')
  );

  this.fs.copy(
    this.templatePath('.gitignore'),
    this.destinationPath('.gitignore')
  );

  this.fs.copy(
    this.templatePath('.jshintrc'),
    this.destinationPath('.jshintrc')
  );

  this.fs.copyTpl(
    this.templatePath('bower.json'),
    this.destinationPath('bower.json'),
    { appName: this._.camelize(this.config.get('appName')) }
  );

  this.fs.copy(
    this.templatePath('Gruntfile.js'),
    this.destinationPath('Gruntfile.js')
  );

  this.fs.copyTpl(
    this.templatePath('package.json'),
    this.destinationPath('package.json'),
    { appName: this._.camelize(this.config.get('appName')) }
  );

  this.fs.copy(
    this.templatePath('README.md'),
    this.destinationPath('README.md')
  );
}

/**
 * @name projectfiles
 */
function projectfiles() {
  this.fs.copyTpl(
    this.templatePath('client'),
    this.destinationPath('client'),
    {
      appName: this._.camelize(this.config.get('appName')),
      humanAppName: this._.humanize(this.config.get('appName'))
    }
  );

  this.fs.copy(
    this.templatePath('doc'),
    this.destinationPath('doc')
  )
}

/**
 * @name install
 */
function install() {
  this.installDependencies({
    skipInstall: this.options['skip-install']
  });
}
