module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: {
                src: ['dist'],
            }
        },
        
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: ['main.js', 'pokemon-card.js', 'utils.js'],
                dest: 'dist/js/built.js',
            }
        },

        less: {
            build: {
                files: {
                    'dist/styles/styles.css':'styles.less',
                }
            }
        },
        
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'dist/min/js/built.min.js':'dist/js/built.js',
                }
            }
        },

        cssmin: {
            build: {
                files: {
                    'dist/min/styles/styles.min.css':'dist/styles/styles.css',
                }
            }
        },

        includeSource: {
            options: {
                basePath: 'dist/min',
                baseUrl: 'dist/min/',
                templates: {
                    js: '<script src"{filePath}"></script>',
                    css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
                }
            },
            build: {
                files: {
                    'index.html':'index.html',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.registerTask('default', ['clean', 'concat', 'less', 'uglify', 'cssmin', 'includeSource']);

}