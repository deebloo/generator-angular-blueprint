var fs    = require('fs'),
    chalk = require('chalk');

module.exports = {
  copyTpl: copyTpl, // Copy file using template syntax
  copy: copy, // Plain Copy
  promptInstallPath: promptInstallPath // prompt for pathName
};

/**
 * @name copyTpl
 *
 * @description
 * use either the local template or the default one.
 * Use either .call or .apply to use in generator!
 *
 * @example
 * require('blueprint').copyTpl.call(this, 'controller', 'js', './destination/directory/', {
 *   appName: this._.camelize(this.config.get('appName')),
 *   classedName: this._.classify(this.name)
 * });
 *
 * @param {string} type
 * @param {string} fileExt
 * @param {object} tempValues
 */
function copyTpl(type, fileExt, tempValues) {
  var destinationPath = this.destinationPath(this.destDirectory + '/' + this._.dasherize(this.name) + '.' + type + '.' + fileExt),
      template        = templatePaths.call(this, type, fileExt);

  this.fs.copyTpl(template, destinationPath, tempValues);
}

/**
 * @name copy
 *
 * @description
 * use either the local template or the default one.
 * Use either .call or .apply to use in generator!
 *
 * @example
 * require('blueprint').copyTpl.call(this, 'controller', 'js', './destination/directory/');
 *
 * @param {string} type
 * @param {string} fileExt
 */
function copy(type, fileExt) {
  var destinationPath = this.destinationPath(this.destDirectory + '/' + this._.dasherize(this.name) + '.' + type + '.' + fileExt),
      template        = templatePaths.call(this, type, fileExt);

  this.fs.copy(template, destinationPath);
}

/**
 * @name promptInstallPath
 *
 * @description
 * prompt the user for the path to install the generator to
 */
function promptInstallPath() {
  var done = this.async();

  this.destDirectory = this.destPath + this._.dasherize(this.name);

  this.prompt({
    type   : 'input',
    name   : 'directory',
    message: 'Where should I generate "' + this._.dasherize(this.name) + '"?',
    default: this.destDirectory
  }, function promptSuccess(answers) {
    this.destDirectory = answers.directory;

    done();
  }.bind(this));
}

/**
 * @name templatePaths
 *
 * @description
 * determine what template path to use. local or global
 *
 * @param type
 * @param {string} fileExt
 *
 * @returns {{localTemplate: string, templatePath: *}}
 */
function templatePaths(type, fileExt) {
  var templateDir = __dirname.replace('lib', 'generators/');

  this.sourceRoot(templateDir + type); // manually set source root to the select generator type

  var localTemplate = './blueprints/' + type + '/',
      templatePath = this.templatePath('/templates/' + type + '.' + fileExt);

  if (fs.existsSync(localTemplate)) {
    this.log(chalk.blue('blueprint found'));

    templatePath = localTemplate + type + '.' + fileExt;
  }

  return templatePath;
}
