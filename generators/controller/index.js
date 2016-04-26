'use strict';

const blueprints = require('yeoman-blueprints');
const prompt = require('../../lib/prompt-install-path');
const destination = require('../../lib/destination');
const tplOptions = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
    prompting: function () {
        prompt.call(this, 'app/views/')
    },

    writing: function () {
        const values = tplOptions(this.config.get('appName'), 'controller', this.name);
        const fileType = 'js';
        const jsVersion = this.config.get('jsVersion') || 'ES5';

        this.copyTpl(
            'controller-' + jsVersion,
            fileType,
            destination(this.destDirectory, this.name, 'controller', fileType),
            values
        );

        this.copyTpl(
            'controller-spec-' + jsVersion,
            fileType,
            destination(this.destDirectory, this.name, 'controller.spec', fileType),
            values
        );
    }
});

