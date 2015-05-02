/**
 * @module blueprints
 *
 * @description
 * Extend yeoman.generators to add methods to interacting with local templates or blueprint
 *
 * @type {*|exports|module.exports}
 *
 * @author Danny Blue
 */

var yeoman = require('yeoman-generator'),
    fs     = require('fs'),
    chalk  = require('chalk');

/**
 * @name blueprints.NamedBase
 *
 * @memberof blueprints
 *
 * @description
 * extend yeoman.generators.NamedBase to add methods to find blueprints
 */
module.exports.NamedBase = yeoman.generators.NamedBase.extend({
  /**
   * @name copyTpl
   *
   * @memberof blueprints.NamedBase
   *
   * @description
   * copy file using template values
   *
   * @param {String} type
   * @param {String} fileExt
   * @param {Object} tempValues
   */
  copyTpl: function copyTpl(type, fileExt, tempValues) {
    var files = this.destAndTempDir(type, fileExt);

    this.fs.copyTpl(files.template, files.destinationPath, tempValues);
  },

  /**
   * @name copys
   *
   * @memberof blueprints.NamedBase
   *
   * @description
   * copy file without template values
   *
   * @param {String} type
   * @param {String} fileExt
   */
  copy: function copy(type, fileExt) {
    var files = this.destAndTempDir(type, fileExt);

    this.fs.copy(files.template, files.destinationPath);
  },

  /**
   * @name destAndTempDir
   *
   * @memberof blueprints.NamedBase
   *
   * @description
   * return the destination director and the template to use.
   *
   * @param {String} type
   * @param {String} fileExt
   *
   * @returns {{destinationPath: string, template: string}}
   */
  destAndTempDir: function destAndTempDir(type, fileExt) {
    var destination = this.destDirectory + '/' + this._.dasherize(this.name) + '.' + type + '.' + fileExt;

    return {
      destinationPath: this.destinationPath(destination),
      template: this.templatePaths(type, fileExt)
    };
  },

  /**
   * @name templatePaths
   *
   * @memberof blueprints.NamedBase
   *
   * @description
   * determine what template path to use. local or global
   *
   * @param {String} type
   * @param {String} fileExt
   *
   * @returns {String}
   */
  templatePaths: function templatePaths(type, fileExt) {
    var globalTemplateDir = __dirname + '/../generators/', // navigate to the generators folder
        templateFileName  = type + '.' + fileExt, // the template filename
        templateLocales   = ['./blueprints/', './node_modules/']; // locations to look for blueprints.

    this.sourceRoot(globalTemplateDir + type); // manually set source root to the select generator type

    var templatePath = this.templatePath('/templates/' + templateFileName),
        current,
        newTemplate;

    for(var i = 0, len = templateLocales.length; i < len; i++) {
      current = templateLocales[i];

      if(fs.existsSync(current)) {
        newTemplate = this.findBlueprints(type, fileExt, current) || templatePath;

        if(newTemplate !== templatePath) {
          templatePath = newTemplate;

          break;
        }
      }
    }

    return templatePath;
  },

  /**
   * @name findBlueprints
   *
   * @memberof blueprints.NamedBase
   *
   * @description
   * Look through a given directory for the correct blueprint
   *
   * @param {String} type
   * @param {String} fileExt
   * @param {String} directory
   *
   * @returns {String}
   */
  findBlueprints: function findBlueprints(type, fileExt, directory) {
    var files  = fs.readdirSync(directory),
        exists = fs.existsSync,
        currentDir,
        blueprint,
        template;

    for(var i = 0, len = files.length; i < len; i++) {
      currentDir = directory + files[i] + '/';

      blueprint  = currentDir + type + '/template.' + fileExt;

      if(exists(currentDir + 'blueprint.json')) {
        if(exists(blueprint)) {
          this.log(_createMessage(directory, type));

          template = blueprint;

          break;
        }
      }
    }

    return template;
  }
});

/**
 * @name _createMessage
 *
 * @memberof blueprint
 *
 * @param directory
 * @param type
 *
 * @return {*}
 *
 * @private
 */
function _createMessage(directory, type) {
  return chalk.inverse(directory + ' blueprint for ' + type + ' found. ')
}