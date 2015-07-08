'use strict';

var yeoman = require('yeoman-generator'),
    chalk  = require('chalk'),
    yosay  = require('yosay'),
    files  = require('./files.json');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.argument('appName', {type: String, required: false});
  },

  prompting: function () {
    var done = this.async();

    this.config.save();

    this.config.defaults({
      jsVersion: 'ES5'
    });

    var prompts = [{
      type   : 'list',
      name   : 'jsVersion',
      message: 'Which version of Javascript would you like to use?',
      choices: ['ES5', 'ES6']
    }];

    this.log(yosay('Welcome to the ' + chalk.red('AngularBlueprint') + ' generator!'));

    if (this.appName) {
      this.config.set('appName', this.appName);
    }
    else {
      prompts.push({
        type   : 'input',
        name   : 'appName',
        message: 'What would you like to name your application?',
        default: this._.camelize(this.appname)
      });
    }

    this.prompt(prompts, function (props) {
      for (var prop in props) {
        if (props.hasOwnProperty(prop)) {
          this.config.set(prop, props[prop]);
        }
      }

      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      var version = this.config.get('jsVersion'),
          appName = this.config.get('appName'),
          currentFile;

      var tplValues = {
        appName     : this._.camelize(appName),
        humanAppName: this._.humanize(appName)
      };

      for (var file in files) {
        if (files.hasOwnProperty(file)) {
          currentFile = files[file];

          this.fs[currentFile.type](
            this.templatePath(version + '/' + file),
            this.destinationPath('/' + currentFile.as),
            tplValues
          );
        }
      }
    },

    install: function () {
      this.installDependencies({
        skipInstall: this.options['skip-install']
      });
    }
  }
});
