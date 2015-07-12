/**Created by sparky on 3/21/15.*/
module.exports = function(grunt) {

    //noinspection GjsLint
    grunt.initConfig({
        less: {
            app: {
                files: { "app/css/main.css": "less/main.less" }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-karma');
}
