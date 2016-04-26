'use strict';

const blueprints = require('yeoman-blueprints');
const prompt = require('../../lib/prompt-install-path');
const destination = require('../../lib/destination');
const tplOptions = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
  prompting: function () {
      prompt.call(this, 'app/services/')
  },

  writing: function () {
    const values = tplOptions(this.config.get('appName'), 'factory', this.name);
    const jsVersion = this.config.get('jsVersion') || 'ES5';

    this.copyTpl(
        `factory-${jsVersion}`, 
        'js', 
        destination(this.destDirectory, this.name, 'factory', 'js'), 
        values
    );

    this.copyTpl(
        `factory-spec-${jsVersion}`,  
        'js', 
        destination(this.destDirectory, this.name, 'factory.spec', 'js'), 
        values
    );
  }
});