'use strict';

const blueprints = require('yeoman-blueprints');
const prompt = require('../../lib/prompt-install-path');
const destination = require('../../lib/destination');
const tplOptions = require('../../lib/tpl-options');

module.exports = blueprints.NamedBase.extend({
    prompting: function () {
        prompt.call(this, 'app/filters/')
    },

    writing: function () {
        const values = tplOptions(this.config.get('appName'), 'filter', this.name);
        const jsVersion = this.config.get('jsVersion') || 'ES5';
        const fileType = 'js';

        this.copyTpl(
            `filter-${jsVersion}`,
            fileType,
            destination(this.destDirectory, this.name, 'filter', fileType),
            values
        );

        this.copyTpl(
            `filter-spec-${jsVersion}`,
            fileType,
            destination(this.destDirectory, this.name, 'filter.spec', fileType),
            values
        );
    }
});