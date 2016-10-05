'use strict';

module.exports = function (grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            sass: {
                files: ['desafio-1/_sass/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'desafio-1/styles/style.css': 'desafio-1/_sass/main.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000
                }
            }
        }
    });

    grunt.registerTask('default', [
        'sass',
        'connect',
        'watch'
    ]);

};
