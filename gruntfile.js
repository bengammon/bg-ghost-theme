module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // We configure our Sass task here
        watch: {
            files: 'assets/scss/**/*.scss',
            tasks: ['sass', 'cssmin']
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'assets/css/screen.css': 'assets/scss/styles.scss'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                   'assets/css/screen.min.css': ['assets/css/screen.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default',['watch','cssmin']);
};