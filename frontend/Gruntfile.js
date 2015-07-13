/**Created by sparky on 3/21/15.*/
module.exports = function (grunt) {

    //noinspection GjsLint
    grunt.initConfig({
        less: {
            app: {
                files: {"app/css/main.css": "less/main.less"}
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        protractor: {
            options: {
                // Location of your protractor config file
                configFile: "e2e-tests/protractor.conf.js",

                // Do you want the output to use fun colors?
                noColor: false,

                // Set to true if you would like to use the Protractor command line debugging tool
                // debug: true,

                // Additional arguments that are passed to the webdriver command
                args: {}
            },
            e2e: {
                options: {
                    // Stops Grunt process if a test fails
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    keepAlive: true
                }
            }
        },
        connect: {
            options: {
                port: 8000,
                hostname: 'localhost'
            },
            test: {
                options: {
                    // set the location of the application files
                    base: ['app']
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-protractor-runner");
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('e2e-test', ['connect:test', 'protractor:e2e']);
};

