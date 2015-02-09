'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called the AngularBlueprint subgenerator with the argument ' + this.name + '.');

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The name of the controller'
    });
  },

  writing: function () {
    var localTemplate = './blueprints/controller/';
    var templatePath = this.templatePath('controller.js');

    if (fs.existsSync(localTemplate)) {
      console.log('blueprint found');

      templatePath = localTemplate + 'controller.js';
    }

    this.fs.copyTpl(
      templatePath,
      this.destinationPath('./client/' + this.name + '/' + this.name + '.controller.js'),
      {
        appName: this._.camelize(this.config.get('appName')),
        classedName: this._.classify(this.name)
      }
    );
  }
});
