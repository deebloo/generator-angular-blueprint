Angular-Blueprint
=================

Prerequisites
```
npm install -g bower
(optional) npm install -g grunt-cli
```

Angular js seed project based on [John Papa's AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide) and the [Yeoman Angular Generator](https://github.com/yeoman/generator-angular). The goal is to have an out of the box scaffolding that will scale well for large complex applications. I am looking for input and opinions to make this as good as we possibly can.

Download the seed
```
git clone https://github.com/DannyBlueDesign/angular-blueprint.git <projectName>
cd <project-name>
bower install && npm install
```
Optionally, to remove git commit history
```
rm -rf .git
```

All commands can either be run with grunt {command} or npm start {command}

To start the development server
```
grunt serve

or

npm start serve
```

To run unit tests
```
grunt test

or

npm start test
```

To build app for deployment
```
grunt build

or

npm start build
```

If you are using the [JSDoc](http://usejsdoc.org/) style of comments (which you should!!!) you can generate your documentation with the following command. Documentation can be found under `docs/client/` (Hooray  for automated documentation!)
```
grunt jsdoc

or 

npm start jsdoc
```

####Command Line Options
Disable Source Maps
> --sourcemap=false

Compress CSS Output
> --output-style=compressed

###Proxy
Angular-blueprint includes [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) to hit outside APIs for development. The proxy is set up for the github API right now but can can be configured easily to hit your own api. (Yes I know github's api does not require this!).

Angular Blueprint has a switch for proxying API's. To turn it on set ```appConfig.proxy = true```
```JS
var appConfig = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist',
  proxy: false, // <-- HERE HERE DO IT HERE!!!
  proxyConfig: [{
    context: '/api',
    host: 'api.github.com',
    port: 443,
    https: true,
    changeOrigin: true,
    rewrite: {
      '^/api': ''
    }
  }]
};
```