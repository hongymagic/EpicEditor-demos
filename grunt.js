
module.exports = function (grunt) {
	"use strict";

// Project configuration

	grunt.initConfig({
		pkg: '<json:package.json>',

		lint: {
			all: ['*.js', 'public/js/*.js']
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

// Build javascript files into one

		concat: {
			dist: {
				src: [
					'public/epiceditor/js/epiceditor.js',
					'public/js/commands.js',
					'public/js/toolbar.js',
					'public/js/main.js'
				],
				dest: 'public/js/dist/main.js',
				separator: ';\n'
			}
		},

		min: {
			dist: {
				src: ['public/js/dist/main.js'],
				dest: 'public/js/dist/main.min.js'
			}
		},

// JSHint options
// See: http://www.jshint.com/options/ for list of options and definitions

		jshint: {
			options: '<json:.jshintrc>'
		}

	});

// Default grunt task

	grunt.registerTask('default', 'lint concat min');

};