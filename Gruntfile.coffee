module.exports = (grunt) ->
  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    coffee:
      options:
        sourceMap: no
      compile:
        files: {
          'gyazzac.js': 'src/gyazzac.coffee'
        }

    uglify:
      options:
        compress: true
        banner: 'javascript: '
      compile:
        files: {
          'gyazzac.min.js': 'gyazzac.js',
          'bookmarklet.min.js': 'src/bookmarklet.js',
        }

    sass:
      options:
        style: 'expand'
        noCache: true
        trace: true
      dist:
        files: {
          'gyazzac.min.css': 'src/gyazzac.sass'
        }

    watch:
      options:
        dateFormat: (time) ->
          grunt.log.writeln "The watch finished in #{time}ms at #{new Date().toLocaleTimeString()}"
      coffee:
        files: ['src/*.coffee']
        tasks: ['coffee']
      sass:
        files: ['src/*.sass']
        tasks: ['sass']

  # compile
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  # watch
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'build', ['coffee', 'uglify', 'sass']
  grunt.registerTask 'default', ['build', 'watch']
