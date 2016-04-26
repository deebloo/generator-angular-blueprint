module.exports = function (opts) {
    opts = opts || {};

    return {
        'src': {
            type: 'copyTpl',
            as: (opts.appDir + '/')
        },
        'doc': {
            type: 'copy',
            as: 'doc'
        },
        '_.bowerrc': {
            type: 'copy',
            as: '.bowerrc'
        },
        '_.editorconfig': {
            type: 'copy',
            as: '.editorconfig'
        },
        '_.gitattributes': {
            type: 'copy',
            as: '.gitattributes'
        },
        '_.gitignore': {
            type: 'copy',
            as: '.gitignore'
        },
        '_.jshintrc': {
            type: 'copy',
            as: '.jshintrc'
        },
        '_bower.json': {
            type: 'copyTpl',
            as: 'bower.json'
        },
        '_Gruntfile.js': {
            type: 'copy',
            as: 'Gruntfile.js'
        },
        '_karma.conf.js': {
            type: 'copy',
            as: 'karma.conf.js'
        },
        '_package.json': {
            type: 'copyTpl',
            as: 'package.json'
        },
        '_README.md': {
            type: 'copyTpl',
            as: 'README.md'
        }
    }
};