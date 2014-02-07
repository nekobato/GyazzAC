module.exports = (grunt) ->
  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    coffee:
      options:
        sourceMap: no
      compile:
        files: {
          'egyazz.js': 'src/egyazz.coffee'
        }

    uglify:
      options:
        compress: true
        banner: 'javascript: '
      compile:
        files: {
          'egyazz.min.js': 'egyazz.js',
          'bookmarklet.min.js': 'src/bookmarklet.js',
        }

    sass:
      options:
        style: 'compressed'
        noCache: true
        trace: true
      dist:
        files: {
          'egyazz.min.css': 'src/egyazz.sass'
        }

    watch:
      options:
        dateFormat: (time) ->
          grunt.log.writeln "The watch finished in #{time}ms at #{new Date().toLocaleTimeString()}"
      coffee:
        files: ['src/*.coffee']
        tasks: ['coffee']
      uglify: 
        files: ['./egyazz.js', 'src/bookmarklet.js']
        tasks: ['uglify']
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
