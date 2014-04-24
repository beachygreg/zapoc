module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    
    karma:
      options:
        configFile: 'karma.conf.js'
      unit:
        autoWatch: false
        singleRun: true
        reporters: ['progress', 'junit']
        junitReporter:
          outputFile: '../test-results.xml'

      watch:
        autoWatch: true
        singleRun: false

  grunt.loadNpmTasks 'grunt-karma'
