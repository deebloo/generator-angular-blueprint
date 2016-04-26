'use strict';

// THIS FILE IS DYNAMICALLY GENERATED. MODIFY AT YOUR OWN RISK

// START-import-components
import myApp from './my-app/my-app.directive.js';
// END-import-components

const moduleName = 'components';
const components = angular.module(moduleName, []);

// START-attach-components
components.directive('myApp', myApp);
// END-attach-components

export default moduleName;