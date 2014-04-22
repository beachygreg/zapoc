module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    
    karma:
      options:
        frameworks: ['jasmine']
        basePath: 'public'
        files: [
          'bower_components/jquery/dist/jquery.min.js'
          'bower_components/bootstrap/dist/js/bootstrap.min.js'
          'bower_components/angular/angular.js'
          'bower_components/angular-route/angular-route.js'
          'bower_components/angular-ui/build/angular-ui.min.js'
          'bower_components/angular-ui/build/angular-ui-ieshiv.min.js'
          'bower_components/angular-bootstrap/ui-bootstrap.js'
          'bower_components/angular-socket-io/socket.js'
          'bower_components/angular-local-storage/angular-local-storage.js'

          'app/scripts/**/*.js'

          '../spec/**/*.spec.{js,coffee}'
        ]
        runnerPort: 9100
        browsers: ['PhantomJS']
        preprocessors:
          '**/*.coffee': ['coffee']
      unit:
        autoWatch: false
        singleRun: true
        reporters: ['progress', 'junit']
        junitReporter:
          outputFile: '../test-results.xml'

      watch:
        autoWatch: true
        singleRun: false
        browsers: ['PhantomJS']


#          vendor: [
#          ]

  grunt.loadNpmTasks 'grunt-karma'
