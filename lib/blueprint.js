var fs    = require('fs'),
    chalk = require('chalk'),
    path  = require('path');

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
  var files = destAndTempDir.call(this, type, fileExt);

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
  var files = destAndTempDir.call(this, type, fileExt);

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
  }, function promptSuccess(answers) {
    this.destDirectory = answers.directory;

    done();
  }.bind(this));
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
    template: templatePaths.call(this, type, fileExt)
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
  var globalTemplateDir  = (__dirname + '!@#$').replace('lib!@#$', 'generators/'), // Mark the end of the string so it cn be easily replace below
      localTemplateDir   = './blueprints/' + type + '/', // local template directory path
      bowerComponentsDir = './bower_components/', // bower components directory
      nodeModulesDir     = './node_modules/', // node modules directory
      templateFileName   = type + '.' + fileExt, // the template filename
      blueprintFound     = false; // lower level blueprint found

  this.sourceRoot(globalTemplateDir + type); // manually set source root to the select generator type

  var templatePath = this.templatePath('/templates/' + templateFileName); // set templatePath to the global template by default

  // check to see if a local blueprint exists
  if (fs.existsSync(localTemplateDir) && !blueprintFound) {
    this.log(chalk.inverse(' Blueprint for ' + type + ' found. '));

    templatePath = localTemplateDir + templateFileName;

    blueprintFound = true;
  }

  // check to see if there are templates installed in node_modules
  if(fs.existsSync(nodeModulesDir) && !blueprintFound) {
    findInstalledBlueprint.call(this, nodeModulesDir);
  }

  // check to see if there are templates installed in bower_components
  if(fs.existsSync(bowerComponentsDir) && !blueprintFound) {
    findInstalledBlueprint.call(this, bowerComponentsDir);
  }

  function findInstalledBlueprint(directory) {
    fs.readdirSync(directory).forEach(function(dir) {
      var currentDir = directory + dir + '/',
          blueprint  = currentDir + '/blueprints/' + type + '/' + type + '.' + fileExt;

      if(fs.existsSync(currentDir + 'blueprint.json')) {

        if(fs.existsSync(blueprint)) {
          this.log(chalk.inverse(directory + ' blueprint for ' + type + ' found. '));

          templatePath = blueprint;

          blueprintFound = true;
        }

      }
    }.bind(this));
  }

  return templatePath;
}
