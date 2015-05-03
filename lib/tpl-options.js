var strings = require('underscore.string');

/**
 * @name tplOption
 *
 * @param {String} appName
 * @param {String} type
 * @param {String} name
 *
 * @return {{appName: *, classedName: *, cameledName: *, dashedName: *, humanName: *, type: *}}
 */
module.exports.tplOption = function tplOption(appName, type, name) {
   return {
     appName:     strings.camelize(appName),
     classedName: strings.classify(name),
     cameledName: strings.camelize(name),
     dashedName:  strings.dasherize(name),
     humanName:   strings.humanize(name),
     type:        type
  };
};