'use strict';

var _ = require('lodash');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// Configurable application
var appConfig = {
  app        : require('./bower.json').appPath || 'client',
  dist       : 'dist',
  proxy      : false, // Whether or not the proxy should be turned on
  proxyConfig: [{
    context     : '/api',
    host        : 'api.github.com',
    port        : 443,
    https       : true,
    changeOrigin: true,
    rewrite     : {
      '^/api': ''
    }
  }]
};

var dirs = {
  servicesFiles  : [
    '{.tmp,<%= appSettings.app %>}/app/services/{,*/}*.service.js'
  ],
  routeFiles     : [
    '{.tmp,<%= appSettings.app %>}/app/views/{,*/}*.route.js'
  ],
  componentFiles : [
    '{.tmp,<%= appSettings.app %>}/app/components/{,*/}*.directive.js'
  ],
  controllerFiles: [
    '{.tmp,<%= appSettings.app %>}/app/views/{,*/}*.controller.js'
  ],
  jsFiles        : [
    '<%= appSettings.app %>/app/*.js',
    '<%= appSettings.app %>/app/{services,components,views}/{,*/}*.js',
    '!<%= appSettings.app %>/**/**/**/*.spec.js'
  ],
  scssFiles      : [
    '<%= appSettings.app %>/styles/**/*.scss',
    '<%= appSettings.app %>/app/{views,components}/**/*.scss'
  ]
};

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    appSettings: appConfig,

    watch: {
      bower     : {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      browserify: {
        files  : dirs.jsFiles,
        tasks  : ['browserify', 'newer:jshint:all', 'injector'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass      : {
        files: dirs.scssFiles,
        tasks: ['injector:sass', 'sass', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files  : [
          '<%= appSettings.app %>/*.html',
          '<%= appSettings.app %>/**/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '.tmp/**/*.css',
          '<%= appSettings.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    /**
     * @description The actual grunt server settings
     */
    connect: {
      options   : {
        port      : process.env.PORT || 9000,
        hostname  : '*',
        livereload: 35729
      },
      proxies   : appConfig.proxy ? appConfig.proxyConfig : [],
      livereload: {
        options: {
          middleware: function (connect) {
            var middleware = [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(appConfig.app)
            ];

            if (appConfig.proxy) {
              middleware.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
            }

            return middleware;
          }
        }
      },
      test      : {
        options: {
          port      : 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all    : {
        src: [
          'Gruntfile.js',
          'server/**/**/*.js',
          '<%= appSettings.app %>/{,*/}*.js',
          '<%= appSettings.app %>/app/{services,views,components}/**/*.js',
          '!<%= appSettings.app %>/app/{services,views,components}/**/*.spec.js'
        ]
      },
      test   : {
        options: {
          jshintrc: '.jshintrc'
        },
        src    : ['<%= appSettings.app %>/test/spec/{,*/}*.js']
      }
    },

    clean: {
      dist  : {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'doc/client',
            '<%= appSettings.dist %>'
          ]
        }]
      },
      server: '.tmp'
    },

    autoprefixer: {
      options: {
        map     : true,
        browsers: ['last 1 versions']
      },
      dist   : {
        files: {
          '.tmp/styles/app.css': '.tmp/styles/app.css'
        }
      }
    },

    wiredep: {
      app : {
        src       : ['<%= appSettings.app %>/index.html'],
        ignorePath: /\.\.\//,
        exclude   : [/jquery/, 'bower_components/bootstrap/dist/js/bootstrap.js']
      },
      sass: {
        src       : ['<%= appSettings.app %>/styles/*.scss', '<%= appSettings.app %>/app/views/**/*.scss'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    injector: {
      //Inject application script files into index.html (doesn't include bower)
      importServices   : {
        options: {
          transform: function (filePath) {
            var splitPath   = filePath.split('.')[0].split('/'),
                file        = splitPath[splitPath.length - 1],
                serviceName = _.camelCase(file);

            return 'import ' + serviceName + ' from ' + '\'./' + file + '/' + file + '.service\';';
          },
          starttag : '// START-import-services',
          endtag   : '// END-import-services'
        },
        files  : {
          '<%= appSettings.app %>/app/services/index.js': [dirs.servicesFiles]
        }
      },
      attachServices   : {
        options: {
          transform: function (filePath) {
            var splitPath   = filePath.split('.')[0].split('/'),
                file        = splitPath[splitPath.length - 1],
                serviceName = _.camelCase(file);

            return 'services.factory(\'' + serviceName + '\', ' + serviceName + ');';
          },
          starttag : '// START-attach-services',
          endtag   : '// END-attach-services'
        },
        files  : {
          '<%= appSettings.app %>/app/services/index.js': [dirs.servicesFiles]
        }
      },
      importRoutes     : {
        options: {
          transform: function (filePath) {
            var splitPath = filePath.split('.')[0].split('/'),
                file      = splitPath[splitPath.length - 1];

            return 'import ' + file + 'Route from ' + '\'./views/' + file + '/' + file + '.route\';';
          },
          starttag : '// START-import-routes',
          endtag   : '// END-import-routes'
        },
        files  : {
          '<%= appSettings.app %>/app/config.js': [dirs.routeFiles]
        }
      },
      attachRoutes     : {
        options: {
          transform: function (filePath) {
            var splitPath = filePath.split('.')[0].split('/'),
                file      = splitPath[splitPath.length - 1];

            return file + 'Route(...arguments);';
          },
          starttag : '// START-attach-routes',
          endtag   : '// END-attach-routes'
        },
        files  : {
          '<%= appSettings.app %>/app/config.js': [dirs.routeFiles]
        }
      },
      importComponents : {
        options: {
          transform: function (filePath) {
            var splitPath   = filePath.split('.')[0].split('/'),
                file        = splitPath[splitPath.length - 1],
                serviceName = _.camelCase(file);

            return 'import ' + serviceName + ' from ' + '\'./' + file + '/' + file + '.directive\';';
          },
          starttag : '// START-import-components',
          endtag   : '// END-import-components'
        },
        files  : {
          '<%= appSettings.app %>/app/components/index.js': [dirs.componentFiles]
        }
      },
      attachComponents : {
        options: {
          transform: function (filePath) {
            var splitPath   = filePath.split('.')[0].split('/'),
                file        = splitPath[splitPath.length - 1],
                serviceName = _.camelCase(file);

            return 'components.directive(\'' + serviceName + '\', ' + serviceName + ');';
          },
          starttag : '// START-attach-components',
          endtag   : '// END-attach-components'
        },
        files  : {
          '<%= appSettings.app %>/app/components/index.js': [dirs.componentFiles]
        }
      },
      importControllers: {
        options: {
          transform: function (filePath) {
            var splitPath      = filePath.split('.')[0].split('/'),
                file           = splitPath[splitPath.length - 1],
                controllerName = _.capitalize(_.camelCase(file));

            return 'import ' + controllerName + ' from ' + '\'./' + file + '/' + file + '.controller\';';
          },
          starttag : '// START-import-controllers',
          endtag   : '// END-import-controllers'
        },
        files  : {
          '<%= appSettings.app %>/app/views/index.js': [dirs.controllerFiles]
        }
      },
      attachControllers: {
        options: {
          transform: function (filePath) {
            var splitPath      = filePath.split('.')[0].split('/'),
                file           = splitPath[splitPath.length - 1],
                controllerName = _.capitalize(_.camelCase(file));

            return 'controllers.controller(\'' + controllerName + '\', ' + controllerName + ');';
          },
          starttag : '// START-attach-controllers',
          endtag   : '// END-attach-controllers'
        },
        files  : {
          '<%= appSettings.app %>/app/views/index.js': [dirs.controllerFiles]
        }
      },
      scripts          : {
        options: {
          transform: function (filePath) {
            filePath = filePath.replace('/client/', '');

            return '<script src="' + filePath + '"></script>';
          },
          starttag : '<!-- injector:js -->',
          endtag   : '<!-- endinjector -->'
        },
        files  : {
          '<%= appSettings.app %>/index.html': [
            [
              '{.tmp,<%= appSettings.app %>}/app/templates.js',
              '{.tmp,<%= appSettings.app %>}/{app,components,services}/**/*.js',
              '!{.tmp,<%= appSettings.app %>}/app/app.js',
              '!{.tmp,<%= appSettings.app %>}/{app,components,services}/**/*.spec.js',
              '!{.tmp,<%= appSettings.app %>}/{app,components,services}/**/*.mock.js'
            ]
          ]
        }
      },
      sass             : {
        options: {
          transform: function (filePath) {
            filePath = filePath.replace('/' + appConfig.app, '..');

            return '@import \'' + filePath + '\';';
          }.bind(this),
          starttag : '// injector',
          endtag   : '// endinjector'
        },
        files  : {
          '<%= appSettings.app %>/styles/app.scss': [
            '<%= appSettings.app %>/app/{views,components}/**/*.{scss,sass}'
          ]
        }
      }
    },

    sass: {
      options: {
        imagePath  : '<%= appSettings.app %>/images',
        outputStyle: 'expanded',
        sourceMap  : true
      },
      dist   : {
        files: {
          '.tmp/styles/app.css': '<%= appSettings.app %>/styles/app.scss'
        }
      }
    },

    filerev: {
      dist: {
        src: [
          '<%= appSettings.dist %>/scripts/{,*/}*.js',
          '<%= appSettings.dist %>/styles/{,*/}*.css',
          '<%= appSettings.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= appSettings.dist %>/styles/fonts/*'
        ]
      }
    },

    useminPrepare: {
      html   : '<%= appSettings.app %>/index.html',
      options: {
        dest: '<%= appSettings.dist %>',
        flow: {
          html: {
            steps: {
              js : ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post : {}
          }
        }
      }
    },

    usemin: {
      html   : ['<%= appSettings.dist %>/{,*/}*.html'],
      css    : ['<%= appSettings.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= appSettings.dist %>', '<%= appSettings.dist %>/images']
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace       : true,
          conservativeCollapse     : true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA  : true,
          removeOptionalTags       : true
        },
        files  : [{
          expand: true,
          cwd   : '<%= appSettings.dist %>',
          src   : ['*.html', '{,*/}*.html', 'views/{,*/}*.html', 'components/{,*/}*.html'],
          dest  : '<%= appSettings.dist %>'
        }]
      }
    },

    cdnify: {
      dist: {
        html: ['<%= appSettings.dist %>/*.html']
      }
    },

    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module : require('./bower.json').name,
        usemin : 'scripts/scripts.js',
        htmlmin: {
          collapseBooleanAttributes    : true,
          collapseWhitespace           : true,
          removeAttributeQuotes        : true,
          removeEmptyAttributes        : true,
          removeRedundantAttributes    : true,
          removeScriptTypeAttributes   : true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main   : {
        cwd : '<%= appSettings.app %>',
        src : ['{app,components}/**/*.html'],
        dest: '.tmp/templates.js'
      }
    },

    copy: {
      dist  : {
        files: [
          {
            expand: true,
            dot   : true,
            cwd   : '<%= appSettings.app %>',
            dest  : '<%= appSettings.dist %>',
            src   : [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'images/{,*/}*.{png,jpg,svg,webp}',
              'fonts/{,*/}*.*',
              '.tmp/concat/scripts/templates.js'
            ]
          },
          {
            expand: true,
            cwd   : '.tmp/images',
            dest  : '<%= appSettings.dist %>/images',
            src   : ['generated/*']
          },
          {
            expand: true,
            cwd   : 'bower_components/bootstrap/dist',
            src   : 'fonts/*',
            dest  : '<%= appSettings.dist %>'
          }
        ]
      },
      styles: {
        expand: true,
        cwd   : '<%= appSettings.app %>/styles',
        dest  : '.tmp/styles/',
        src   : '{,*/}*.css'
      }
    },

    concurrent: {
      server: [
        'sass'
      ],
      test  : [
        'sass'
      ],
      dist  : [
        'sass'
      ]
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun : true
      }
    },

    browserify: {
      dev: {
        files  : {
          '.tmp/module.js': ['<%= appSettings.app %>/bootstrap.js']
        },
        options: {
          browserifyOptions: {
            debug: true
          },
          transform        : ['babelify']
        }
      },
      dist: {
        files  : {
          '.tmp/module.js': ['<%= appSettings.app %>/bootstrap.js']
        },
        options: {
          browserifyOptions: {
            debug: false
          },
          transform        : ['babelify']
        }
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function () {
    var tasks = [
      'clean:server',
      'wiredep',
      'injector',
      'concurrent:server',
      'autoprefixer',
      'browserify:dev',
      //'ngtemplates',
      'connect:livereload',
      'watch'
    ];

    if (appConfig.proxy) {
      tasks.unshift('configureProxies:server');
    }

    grunt.task.run(tasks);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'injector',
    'browserify',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'injector',
    'useminPrepare',
    'browserify:dist',
    'ngtemplates',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
