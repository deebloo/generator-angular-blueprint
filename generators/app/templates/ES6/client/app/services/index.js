/* THIS FILE IS DYNAMICALLY MODIFIED. ADJUST AT YOUR OWN RISK */

// START-import-services
import isActive from './is-active/is-active.service';
// END-import-services

var moduleName = 'MyApp.services',
    services   = angular.module(moduleName, []);

// START-attach-services
services.factory('isActive', isActive);
// END-attach-services

export default moduleName;