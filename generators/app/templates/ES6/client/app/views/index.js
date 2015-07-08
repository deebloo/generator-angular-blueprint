/* THIS FILE IS DYNAMICALLY MODIFIED. ADJUST AT YOUR OWN RISK */

// START-import-controllers
import AboutCtrl from './about/about.controller';
import AppCtrl from 'application/app.controller';
import HomeCtrl from './home/home.controller';
import MainCtrl from './main/main.controller';
// END-import-controllers

var moduleName  = 'MyApp.controllers',
    controllers = angular.module(moduleName, []);

// START-attach-controllers
controllers.controller('AboutCtrl', AboutCtrl);
controllers.controller('AppCtrl', AppCtrl);
controllers.controller('HomeCtrl', HomeCtrl);
controllers.controller('MainCtrl', MainCtrl);
// END-attach-controllers

export default moduleName;