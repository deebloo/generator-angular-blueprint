'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

let files;

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
    
        this.argument('appName', { type: String, required: false });
    },
    
    prompting: function () {
        let done = this.async();
        
        this.config.save();
        
        this.config.defaults({
            jsVersion: 'ES6',
            appDir: 'src'
        });

        let prompts = [];

        this.log(yosay('Welcome to the ' + chalk.red('AngularBlueprint') + ' generator!'));

        // see if appName passed in as argument
        if (this.appName) {
            this.config.set('appName', this.appName);
        } else {
            prompts.push({
                type: 'input',
                name: 'appName',
                message: 'What would you like to name your application?',
                default: this._.camelize(this.appname)
            });
        }

        prompts.push({
            type: 'list',
            name: 'jsVersion',
            message: 'Which version of Javascript would you like to use?',
            choices: ['ES5', 'ES6']
        });

        this.prompt(prompts, function (props) {
            for (var prop in props) {
                if (props.hasOwnProperty(prop)) {
                    this.config.set(prop, props[prop]);
                }
            }
            
            let getFiles = require('./files-' + this.config.get('jsVersion'));

            files = getFiles(this.config.getAll());
            
            done();
        }.bind(this));
    },

      writing: {
          projectfiles: function () {
              const version = this.config.get('jsVersion');
              const appName = this.config.get('appName');
              
              let currentFile;

              const tplValues = {
                  appName: this._.camelize(appName),
                  appDir: this.config.get('appDir'),
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
