'use strict';

const blueprints = require('yeoman-blueprints');
const prompt = require('../../lib/prompt-install-path');
const destination = require('../../lib/destination');
const tplOptions  = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
    prompting: function () {
        prompt.call(this, 'app/views/')
    },

    writing: function () {
        const values = tplOptions(this.config.get('appName'), 'Controller', this.name);
        const jsVersion = this.config.get('jsVersion') || 'ES5';

        this.copyTpl(
            'view', 
            'html', 
            destination(this.destDirectory, this.name, 'view', 'html'), 
            values
        );

        this.copyTpl(
            'style', 
            'scss', 
            destination(this.destDirectory, this.name, 'style', 'scss'), 
            values
        );

        this.copyTpl(
            `controller-${jsVersion}`, 
            'js', 
            destination(this.destDirectory, this.name, 'controller', 'js'), 
            values
        );

        this.copyTpl(
            `route-${jsVersion}`,
            'js', 
            destination(this.destDirectory, this.name, 'route', 'js'), 
            values
        );

        this.copyTpl(
            `controller-spec-${jsVersion}`,
            'js', 
            destination(this.destDirectory, this.name, 'controller.spec', 'js'), 
            values
        );
    }
});