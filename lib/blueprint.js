var fs = require('fs'),
    path = require('path'),
    findInstalledBlueprint = require('./findInstalledBlueprint');

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
 * require('blueprint').copyTpl.call(this, 'controller', 'js', {
 *   appName: this._.camelize(this.config.get('appName')),
 *   classedName: this._.classify(this.name)
 * });
 *
 * @param {string} type
 * @param {string} fileExt
 * @param {object} tempValues
 */
function copyTpl(type, fileExt, tempValues) {
  var files = destAndTempDir.apply(this, arguments);

  this.fs.copyTpl(files.template, files.destinationPath, tempValues);
}

/**
 * @name copy
 *
 * @description
 * use either the local template or the default one.
 * Use either .call or .apply to use in generator!
 *
 * @example
 * require('blueprint').copyTpl.call(this, 'controller', 'js');
 *
 * @param {string} type
 * @param {string} fileExt
 */
function copy(type, fileExt) {
  var files = destAndTempDir.apply(this, arguments);

  this.fs.copy(files.template, files.destinationPath);
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
  }, promptSuccess.bind(this));

  function promptSuccess(answers) {
    this.destDirectory = answers.directory;

    done();
  }
}

/**
 * @name destAndTempDir
 *
 * @description
 * return the destination director and the template to use.
 *
 * @param type
 * @param fileExt
 *
 * @returns {{destinationPath: string, template: string}}
 */
function destAndTempDir(type, fileExt) {
  var destination = this.destDirectory + '/' + this._.dasherize(this.name) + '.' + type + '.' + fileExt;

  return {
    destinationPath: this.destinationPath(destination),
    template: templatePaths.apply(this, arguments)
  };
}

/**
 * @name templatePaths
 *
 * @description
 * determine what template path to use. local or global
 *
 * @param {string} type
 * @param {string} fileExt
 *
 * @returns {string}
 */
function templatePaths(type, fileExt) {
  var globalTemplateDir = __dirname + '/../generators/', // navigate to the generators folder
      templateFileName  = type + '.' + fileExt, // the template filename
      templateLocales   = ['./blueprints/', './node_modules/', './bower_components/']; // locations to look for blueprints.

  this.sourceRoot(globalTemplateDir + type); // manually set source root to the select generator type

  var templatePath = this.templatePath('/templates/' + templateFileName); // set templatePath to the global template by default

  for(var i = 0, len = templateLocales.length; i < len; i++) {
    var current = templateLocales[i];

    if(fs.existsSync(current)) {
      var newTemplate = findInstalledBlueprint.call(this, type, fileExt, current) || templatePath;

      if(newTemplate !== templatePath) {
        templatePath = newTemplate;

        break;
      }
    }
  }

  return templatePath;
}
