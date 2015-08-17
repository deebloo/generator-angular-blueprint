var strings = require('underscore.string');


module.exports = function prompting() {
  var done = this.async();

  this.destDirectory = (this.config.get('appDir') || 'client') + '/' + this.destPath + strings.dasherize(this.name);

  var opts = {
    type   : 'input',
    name   : 'directory',
    message: 'Where should I generate "' + strings.dasherize(this.name) + '"?',
    default: this.destDirectory
  };

  this.prompt(opts, function (answers) {
    this.destDirectory = answers.directory;

    done();
  }.bind(this));
};