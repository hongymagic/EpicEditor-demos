
module.exports = function (grunt) {
	"use strict";

// Project configuration

	grunt.initConfig({
		pkg: '<json:package.json>',

		lint: {
			all: ['server.js', 'grunt.js', 'public/js/**/*.js']
		},

		docs: {
			all: ['README.md']
		},

		watch: {
			scripts: {
				files: '<config:lint.all>',
				tasks: 'lint concat min'
			}
		},

// JSHint options
// See: http://www.jshint.com/options/ for list of options and definitions

		jshint: {
			options: '<json:.jshintrc>'
		}

	});

// Default grunt task

	grunt.registerTask('default', 'lint');

};