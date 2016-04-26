'use strict';

const yeoman = require('yeoman-generator');
const fs = require('fs');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.argument('blueprintName', {
            type: String,
            required: false
        });

        this.destPath = './blueprints';
    },

    prompting: function () {
        const done = this.async();

        if (this.blueprintName) {
            this.blueprint = this.blueprintName;

            done();
        }
        else {
            this.prompt({
                type: 'list',
                name: 'blueprints',
                message: 'Which blueprint would you like to create?',
                choices: [
                    'controller',
                    'controller-spec',
                    'service',
                    'service-spec',
                    'factory',
                    'factory-spec',
                    'directive',
                    'directive-spec',
                    'directive-html',
                    'directive-html-spec',
                    'route',
                    'view',
                    'style'
                ]
            }, function (answers) {
                this.blueprint = answers.blueprints;

                done();
            }.bind(this));
        }
    },

    writing: function writing() {
        const type = this.config.get('jsVersion') || 'ES5';
        
        let bpName = `${this.blueprint}-${type}`;
        let fileExt;

        switch (this.blueprint) {
            case 'view':
                fileExt = '.html';
                bpName = 'view';
                break;
            case 'style':
                fileExt = '.scss';
                bpName = 'style';
                break;
            default:
                fileExt = '.js';
        }

        if (!fs.existsSync('./blueprints/templates/blueprint.json')) {
            this.fs.copy(
                this.templatePath('blueprint.json'),
                this.destinationPath('./blueprints/templates/blueprint.json')
            );
        }

        this.sourceRoot(`${__dirname}/../${bpName}/templates/`);

        this.fs.copy(
            this.templatePath(bpName + fileExt),
            this.destinationPath(`./blueprints/templates/${this.blueprint}/template${fileExt}`)
        );
    }
});
