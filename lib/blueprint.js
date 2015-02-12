var fs    = require('fs'),
    chalk = require('chalk');

module.exports = {
  copyTpl: copyTpl, // Copy file using template syntax
  copy:    copy     // Plain Copy
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
 * @param {string} templatePath
 * @param {string} fileExt
 * @param {object} tempValues
 */
function copyTpl(type, fileExt, templatePath, tempValues) {
  prompt.call(this, templatePath);

  var destinationPath = this.destinationPath(this.destDirectory + '/' + this.name + '.' + type + '.' + fileExt),
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
 * require('blueprint').copy.call(this, './destination/directory/', 'controller, {
 *   tempVal1: 'hello',
 *   tempVal2: 'world'
 * });
 *
 * @param {string} type
 * @param {string} fileExt
 * @param {string} templatePath
 */
function copy(type, fileExt, templatePath) {
  prompt.call(this, templatePath);

  var destinationPath = this.destinationPath(this.destDirectory + '/' + this.name + '.' + type + '.' + fileExt),
      template        = templatePaths.call(this, type, fileExt);

  this.fs.copy(template, destinationPath);
}

/**
 * @name prompt
 *
 * @description
 * prompt the user to confirm the destination directory
 *
 * @param templatePath
 */
function prompt(templatePath) {
  var done = this.async();

  this.destDirectory = templatePath + this.name;

  this.prompt({
    type    : 'input',
    name    : 'directory',
    message : 'destination directory',
    default : this.destDirectory
  }, function(answers) {
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
  var templateDir = __dirname.replace('lib', 'generators');

  this.sourceRoot(templateDir + '/' + type);

  var localTemplate = './blueprints/' + type + '/',
      templatePath = this.templatePath('/templates/' + type + '.' + fileExt);

  if (fs.existsSync(localTemplate)) {
    this.log(chalk.blue('blueprint found'));

    templatePath = localTemplate + type + '.' + fileExt;
  }

  return templatePath;
}
