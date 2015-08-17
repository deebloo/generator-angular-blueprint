var strings = require('underscore.string');

module.exports = function(dir, name, type, fileExt) {
  return dir + '/' + strings.dasherize(name) + '.' + type + '.' + fileExt;
};