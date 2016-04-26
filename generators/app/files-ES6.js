module.exports = function (opts) {
    opts = opts || {};

    return {
        build: {
            type: 'copy',
            as: 'build'
        },
        docs: {
            type: 'copy',
            as: 'docs'
        },
        src: {
            type: 'copyTpl',
            as: 'src'
        },
        '_gulpfile.js': {
            type: 'copy',
            as: 'gulpfile.js'
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
        },
        '_webpack.config.js': {
            type: 'copy',
            as: 'webpack.config.js'
        }
    }
};