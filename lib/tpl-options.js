var strings = require('underscore.string');

module.exports = function(appName, type, name) {
   return {
    appName:     strings.camelize(appName),
    classedName: strings.classify(name),
    cameledName: strings.camelize(name),
    dashedName:  strings.dasherize(name),
    humanName:   strings.humanize(name),
    type:        type
  };
};