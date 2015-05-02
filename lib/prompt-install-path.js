var strings = require("underscore.string");

module.exports = function prompting() {
  var done = this.async();

  this.destDirectory = this.destPath + strings.dasherize(this.name);

  this.prompt({
    type   : 'input',
    name   : 'directory',
    message: 'Where should I generate "' + strings.dasherize(this.name) + '"?',
    default: this.destDirectory
  }, promptSuccess.bind(this));

  function promptSuccess(answers) {
    this.destDirectory = answers.directory;

    done();
  }
};