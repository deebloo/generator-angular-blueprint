var fs    = require('fs'),
  chalk = require('chalk');

module.exports = findInstalledBlueprint;

/**
 * @name findInstalledBlueprint
 *
 * @description
 * Look through a given directory for the correct blueprint
 *
 * @returns {string}
 */
function findInstalledBlueprint(type, fileExt, directory) {
  var template;

  var files = fs.readdirSync(directory), currentDir, blueprint;

  for(var i = 0, len = files.length; i < len; i++) {
    currentDir = directory + files[i] + '/';

    blueprint  = currentDir + type + '/template.' + fileExt;

    if(fs.existsSync(currentDir + 'blueprint.json')) {

      if(fs.existsSync(blueprint)) {
        this.log(chalk.inverse(directory + ' blueprint for ' + type + ' found. '));

        this.blueprintFound = true;

        template = blueprint;

        break;
      }

    }
  }

  return template;
}
