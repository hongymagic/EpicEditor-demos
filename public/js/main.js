(function (window) {
	"use strict";

// Default content to display to EpicEditor

	var text = [
		"# Introducing EpicEditor",
		"",
		"This is a demo site which contains examples on bending EpicEditor to your will. Be it text formatting, interacting with `Selection` and `Range` objects or even implementing your own UI elements – this page serves to demonstrate some of the way you can use EpicEditor.",
		"",
		"## Text Formatting, almost WYSIWYG",
		"",
		"In this section, we'll have a look at using existing EpicEditor API methods to implement a simple toolbar which makes texts bold, italic and etc. If you haven't realised by now, there is a very simple toolbar presented above the editor. Try selecting text in this editor and press any one of those buttons.",
		"",
		"### Relevant source codes",
		"",
		"```javascript",
		"public/js/toolbar.js",
		"public/js/commands.js",
		"```",
		"",
		"Take a peek at them and see how those buttons are implemented!"
	].join('\n');


	var options = {
		file: {
			name: 'demo',
			defaultContent: text
		}
	};
	var editor = new EpicEditor(options).load();
	var commands = window.DefaultCommands;
	var toolbar = new Toolbar('toolbar', editor, commands);

}(window));
