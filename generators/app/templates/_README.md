Angular-Blueprint
=================

***
! Requires Node, Grunt and Bower
***

Angular js seed project based on [John Papa's AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide) and the [Yeoman Angular Generator](https://github.com/yeoman/generator-angular). The goal is to have an out of the box scaffolding that will scale well for large complex applications. I am looking for input and opinions to make this as good as we possibly can.

Download the seed
```shell
git clone https://github.com/DannyBlueDesign/angular-blueprint.git <projectName>
cd <project-name>
bower install && npm install
```
Optionally, to remove git commit history
```shell
rm -rf .git
```

To start the development server
```shell
grunt serve
```

To run unit tests
```shell
grunt test
```

To build app for deployment
```shell
grunt build
```

If you are using the [JSDoc](http://usejsdoc.org/) style of comments (which you should!!!) you can generate your documentation with the following command. Documentation can be found under `docs/client/` (Hooray  for automated documentation!)
```shell
grunt jsdoc
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

####Command Line Options
Delete the images in `client/test/visual/results/baseline` to reset the test after visual changes are accepted.
> --clean
