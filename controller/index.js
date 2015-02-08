'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called the AngularBlueprint subgenerator with the argument ' + this.name + '.');

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
  },

  writing: function () {
    var localTemplate = './blueprints/controller/test.controller.js';
    var templatePath = this.templatePath('controller.js');

    if (fs.existsSync(localTemplate)) {
      console.log('blueprint found');

      templatePath = localTemplate;
    }

    this.fs.copyTpl(
      templatePath,
      this.destinationPath('test.controller.js')
    );
  }
});
