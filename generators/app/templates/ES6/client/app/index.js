'use strict';

import config from './config/';
import services from './services/';
import components from './components/';
import views from './views/';

var moduleName = '<%= appName %>';

var app = angular.module(moduleName, [
  services,
  components,
  views,
  'ngAnimate',
  'ngCookies',
  'ui.router',
  'ngSanitize',
  'ngTouch'
]);

app.config(config);

export default moduleName;
