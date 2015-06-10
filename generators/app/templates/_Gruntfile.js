'use strict';
/**
 * @module Grunt
 * @description
 * Build script for the project
 */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// Configurable application
var appConfig = {
  app: require('./bower.json').appPath || 'client',
  dist: 'dist',
  proxy: false, // Whether or not the proxy should be turned on
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

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    appSettings: appConfig,

    /**
     * @description
     * Watches files for changes and runs tasks based on the changed files
     */
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: [
          '<%= appSettings.app %>/app/*.js',
          '<%= appSettings.app %>/app/components/**/{,*/}*.js',
          '<%= appSettings.app %>/app/views/**/*.js',
          '<%= appSettings.app %>/app/services/{,*/}*.js'
        ],
        tasks: ['newer:jshint:all', 'injector:scripts'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['<%= appSettings.app %>/test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      sass: {
        files: [
          '<%= appSettings.app %>/styles/*.scss',
          '<%= appSettings.app %>/app/views/**/*.scss',
          '<%= appSettings.app %>/app/components/**/*.scss',
          '<%= appSettings.app %>/sass-includes/*.scss'
        ],
        tasks: ['autoprefixer', 'injector:sass','sass']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
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
      options: {
        port: 9000,
        hostname: '*',
        livereload: 35729
      },
      proxies: appConfig.proxy ? appConfig.proxyConfig : [],
      livereload: {
        options: {
          open: {
            target: 'http://localhost:9000'
          },
          middleware: function (connect) {
            var middleware = [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(appConfig.app)
            ];

            if(appConfig.proxy) {
              middleware.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
            }

            return middleware;
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= appSettings.dist %>'
        }
      }
    },

    /**
     * @description
     * Make sure code styles are up to par and there are no obvious mistakes
     */
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= appSettings.app %>/{,*/}*.js',
          '<%= appSettings.app %>/app/components**/{,*/}*.js',
          '<%= appSettings.app %>/app/services/{,*/}*.js',
          '<%= appSettings.app %>/app/views/**/{,*/}*.js',
          '!<%= appSettings.app %>/app/{services,views,components}/**/*.spec.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= appSettings.app %>/test/.jshintrc'
        },
        src: ['<%= appSettings.app %>/test/spec/{,*/}*.js']
      }
    },

    /**
     * @description
     * Creates JSDoc-style documentation based on comments. Folder doc/template has customization options.
     *
     * @see {@link http://usejsdoc.org}
     * @see {@link https://github.com/allenhwkim/angular-jsdoc}
     */
    jsdoc : {
      dist : {
        src: [
          'Gruntfile.js',
          '<%= appSettings.app %>/{,*/}*.js',
          '<%= appSettings.app %>/app/components**/{,*/}*.js',
          '<%= appSettings.app %>/app/services/{,*/}*.js',
          '<%= appSettings.app %>/app/views/**/{,*/}*.js',
          '<%= appSettings.app %>/test/**/{,*/}*.js'
        ],
        options: {
          destination: 'doc/client',
          configure: 'node_modules/angular-jsdoc/conf.json',
          template: 'doc/template'
        }
      }
    },

    /**
     * @description
     * Empties folders to start fresh
     */
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'doc/client',
            '<%= appSettings.dist %>/{,*/}*',
            '!<%= appSettings.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp',
      visual: 'client/test/visual/results'
    },

    /**
     * @description
     * Add vendor prefixed styles
     */
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '{,*/}*.css',
          dest: '.tmp'
        }]
      }
    },

    /**
     * @description
     * Automatically inject Bower components into the app
     */
    wiredep: {
      app: {
        src: ['<%= appSettings.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= appSettings.app %>/styles/*.scss', '<%= appSettings.app %>/app/views/**/*.scss'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    injector: {
      options: {

      },
      //Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');

            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
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

      // Inject component scss into app.scss
      sass: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client', '..');

            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector',
          endtag: '// endinjector'
        },
        files: {
          '<%= appSettings.app %>/styles/app.scss': [
            '<%= appSettings.app %>/{app/views, app/components}/**/*.{scss,sass}'
          ]
        }
      }
    },

    /**
     * @description
     * Compiles Sass to CSS and generates necessary files if requested
     * @property {String} [outputStyle] - nested or compressed default value is nested
     */
    sass: {
      options: {
        imagePath: '<%= appSettings.app %>/images',
        outputStyle: (function() {
          var outputStyle = grunt.option('output-style');
          if(outputStyle !== undefined) {
            return outputStyle;
          }
          else {
            return 'nested';
          }
        }()),
        sourceMap: (function() {
          var sourcemap = grunt.option('sourcemap');
          if(sourcemap !== undefined) {
            return sourcemap;
          }
          else {
            return true;
          }
        }())
      },
      dist: {
        files: {
          '.tmp/styles/app.css' : '<%= appSettings.app %>/styles/app.scss'
        }
      }
    },

    /**
     * @description
     * Renames files for browser caching purposes
     */
    filerev: {
      dist: {
        src: [
          '<%= appSettings.dist %>/scripts/{,*/}*.js',
          '<%= appSettings.dist %>/styles/{,*/}*.css',
          //'<%= appSettings.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= appSettings.dist %>/styles/fonts/*'
        ]
      }
    },

    /**
     * @description
     * Reads HTML for usemin blocks to enable smart builds that automatically
     * concat, minify and revision files. Creates configurations in memory so
     * additional tasks can operate on them.
     */
    useminPrepare: {
      html: '<%= appSettings.app %>/index.html',
      options: {
        dest: '<%= appSettings.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    /**
     * @description
     * Performs rewrites based on filerev and the useminPrepare configuration
     */
    usemin: {
      html: ['<%= appSettings.dist %>/{,*/}*.html'],
      css: ['<%= appSettings.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= appSettings.dist %>','<%= appSettings.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= appSettings.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= appSettings.dist %>/scripts/scripts.js': [
    //         '<%= appSettings.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appSettings.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= appSettings.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appSettings.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= appSettings.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= appSettings.dist %>',
          src: ['*.html', '{,*/}*.html', 'views/{,*/}*.html', 'components/{,*/}*.html'],
          dest: '<%= appSettings.dist %>'
        }]
      }
    },

    /**
     * @description
     * ng-annotate tries to make the code safe for minification automatically by using the Angular long form for dependency injection.
     */
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    /**
     * @description
     * Replace Google CDN references
     */
    cdnify: {
      dist: {
        html: ['<%= appSettings.dist %>/*.html']
      }
    },

    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module: require('./bower.json').name || 'myApp',
        usemin: 'scripts/scripts.js',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        cwd: 'client',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/templates.js'
      }
    },

    /**
     * @description
     * Copies remaining files to places other tasks can use
     */
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appSettings.app %>',
          dest: '<%= appSettings.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*',
            '.tmp/concat/scripts/templates.js'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= appSettings.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= appSettings.dist %>'
        }, {
          expand: true,
          src: 'server',
          dest: '<%= appSettings.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= appSettings.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    /**
     * @description
     * Run some tasks in parallel to speed up the build process
     */
    concurrent: {
      server: [
        'sass'
      ],
      test: [
        'sass'
      ],
      dist: [
        'sass',
        'imagemin',
        'svgmin'
      ]
    },

    /**
     * @description
     * Unit Test settings
     */
    karma: {
      unit: {
        configFile: '<%= appSettings.app %>/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    var tasks = [
      'clean:server',
      'wiredep',
      'injector:sass',
      'injector:scripts',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ];

    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    if(appConfig.proxy) {
      tasks.unshift('configureProxies:server');
    }

    grunt.task.run(tasks);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'ngtemplates',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'jsdoc'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
