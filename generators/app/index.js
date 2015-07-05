'use strict';

var yeoman = require('yeoman-generator'),
    chalk  = require('chalk'),
    yosay  = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: function init() {
    this.argument('appName', { type: String, required: false });
  },

  prompting: function prompting() {
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
  },

  writing: {
    app: function app() {
      this.fs.copy(
        this.templatePath('_.bowerrc'),
        this.destinationPath('.bowerrc')
      );

      this.fs.copy(
        this.templatePath('_.editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('_.gitattributes'),
        this.destinationPath('.gitattributes')
      );

      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('_.jshintrc'),
        this.destinationPath('.jshintrc')
      );

      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { appName: this._.camelize(this.config.get('appName')) }
      );

      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );

      this.fs.copy(
        this.templatePath('_karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { appName: this._.camelize(this.config.get('appName')) }
      );

      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      );
    },

    projectfiles: function projectfiles() {
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
    },

    install: function install() {
      this.installDependencies({
        skipInstall: this.options['skip-install']
      });
    }
  }
});
