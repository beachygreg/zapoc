// Karma configuration
// Generated on Wed Apr 23 2014 11:44:35 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'public',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-ui/build/angular-ui.min.js',
      'bower_components/angular-ui/build/angular-ui-ieshiv.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-socket-io/socket.js',
      'bower_components/angular-local-storage/angular-local-storage.js',

      //'../node_modules/socket.io/lib/socket.io.js',

      'app/scripts/app.js',
      'app/scripts/MainController.js',
      'app/scripts/ChatController.js',
      'app/scripts/BoardController.js',
      'app/scripts/SurvivorSidebarController.js',
      'app/scripts/player/PlayerService.js',
      //'app/scripts/sockets/SocketService.js',

      '../spec/**/*.spec.{js,coffee}'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.coffee': ['coffee'],
      '**/*.spec.coffee': ['coffee']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
