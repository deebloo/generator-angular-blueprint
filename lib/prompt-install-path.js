module.exports = function prompting() {
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
};