var fs    = require('fs'),
    chalk = require('chalk');

module.exports = {
  copyTpl: copyTpl, // Copy file using template syntax
  copy:    copy     // Strict Copy
};

/**
 * @name copyTpl
 *
 * @description
 * use either the local template or the default one.
 * Use either .call or .apply to use in generator!
 *
 * @example
 * require('blueprint').copyTpl.call(this, 'controller', {
 *   appName: this._.camelize(this.config.get('appName')),
 *   classedName: this._.classify(this.name)
 * });
 *
 * @param {string} type
 * @param {string} appDir
 * @param {object} tempValues
 */
function copyTpl(type, appDir, tempValues) {
  this.fs.copyTpl(
    templatePaths.call(this, type),
    this.destinationPath(appDir + '/' + this.name + '.' + type + '.js'),
    tempValues
  );
}

/**
 * @name copyTpl
 *
 * @description
 * use either the local template or the default one.
 * Use either .call or .apply to use in generator!
 *
 * @example
 * require('blueprint').copy.call(this, 'controller')
 *
 * @param {string} type
 */
function copy(type) {
  this.fs.copy(
    templatePaths.call(this, type),
    this.destinationPath('./client/app/views/' + this.name + '/' + this.name + '.' + type + '.js')
  );
}

/**
 * @name templatePaths
 *
 * @description
 * determine what template path to use. local or global
 *
 * @param type
 *
 * @returns {{localTemplate: string, templatePath: *}}
 */
function templatePaths(type) {
  var localTemplate = './blueprints/' + type + '/',
      templatePath = this.templatePath(type + '.js');

  if (fs.existsSync(localTemplate)) {
    this.log(chalk.blue('blueprint found'));

    templatePath = localTemplate + type + '.js';
  }

  return templatePath;
}
