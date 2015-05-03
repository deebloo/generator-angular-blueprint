var strings = require('underscore.string');

/**
 * @name tplOption
 *
 * @param {String} appName
 * @param {String} type
 * @param {String} name
 *
 * @return {{appName: String, classedName: String, cameledName: String, dashedName: String, humanName: String, type: String}}
 */
module.exports = function tplOption(appName, type, name) {
   return {
     appName:     strings.camelize(appName),
     classedName: strings.classify(name),
     cameledName: strings.camelize(name),
     dashedName:  strings.dasherize(name),
     humanName:   strings.humanize(name),
     type:        type
  };
};