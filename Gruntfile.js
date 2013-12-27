module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist'],

        jshint: {
            default: ['src/jquery.tao.js']
        },

        uglify: {
            default: {
                files: {
                    'dist/jquery.tao.min.js': ['src/jquery.tao.js']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint', 'uglify']);
};