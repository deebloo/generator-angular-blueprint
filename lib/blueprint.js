var fs = require('fs');

module.exports = blueprint;

/**
 * @name blueprint
 *
 * @description
 * use either the local template or the default one
 *
 * @param {string} type
 */
function blueprint(type) {
  var localTemplate = './blueprints/' + type + '/';
  var templatePath = this.templatePath(type + '.js');

  if (fs.existsSync(localTemplate)) {
    console.log('blueprint found');

    templatePath = localTemplate + type + '.js';
  }

  this.fs.copyTpl(
    templatePath,
    this.destinationPath('./client/' + this.name + '/' + this.name + '.controller.js'),
    {
      appName: this._.camelize(this.config.get('appName')),
      classedName: this._.classify(this.name)
    }
  );
}
