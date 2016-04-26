'use strict';

const blueprints = require('yeoman-blueprints');
const prompt = require('../../lib/prompt-install-path');
const destination = require('../../lib/destination');
const tplOptions = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
    prompting: function () {
        prompt.call(this, 'app/components/')
    },
    
    writing: function () {
        const values = tplOptions(this.config.get('appName'), 'directive', this.name);
        const jsVersion = this.config.get('jsVersion') || 'ES5';

        this.copyTpl(
            `directive-${jsVersion}`, 
            'js', 
            destination(this.destDirectory, this.name, 'directive', 'js'), 
            values
        );

        this.copyTpl(
            `directive-spec-${jsVersion}`, 
            'js', 
            destination(this.destDirectory, this.name, 'directive.spec', 'js'), 
            values
        );
    }
});
