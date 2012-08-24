(function (window, document) {
	"use strict";

// A very simple command set: bold, italic with no apparent interface...
// This is just a demo, so if you really wish to use Command pattern for this
// please do so.

	var Commands = Object.create(null);
	Commands = {
		bold: function (editor, selection) {
			if (selection.rangeCount === 0) {
				return;
			}

// Insert the ** prefix

			var range = selection.getRangeAt(0);
			range.insertNode(document.createTextNode('**'));

// And the ** postfix

			range.collapse();
			selection.removeAllRanges();
			selection.addRange(range);
			range.insertNode(document.createTextNode('**'));
		},

		italic: function (editor, selection) {
			console.log('italic', editor, selection);
		}
	};

// Define a Toolbar object which deals with commands issued to an instance
// of EpicEditor.

	var Toolbar = function (id, editor) {
		this.container = document.getElementById(id);
		this.editor = editor;

		if (!id) {
			throw new Error('Unable to find toolbar container: ' + id);
		}

		if (!(editor instanceof EpicEditor)) {
			throw new Error('You must provide an instance of EpicEditor');
		}

// Let's hard wire in the commands list for now

		this.commands = Commands;

// Tap into HTML's data-command attribute and trigger command on click

		this.container.addEventListener('click', function (event) {
			var target = event.target;
			var command = target.dataset['command'];
			this.executeCommand(command);
		}.bind(this), false);
	};

// Toolbar object has a very simple interface, just execute..

	Toolbar.prototype = {
		executeCommand: function (command) {

			if (!command) {
				return;
			}

// Each command is called with two arguments: editor and current selection.
// Note that selection object can be null.

			var selection = this.editor.editorIframeDocument.getSelection();
			this.commands[command](this.editor, selection);

		}
	};

	window.Toolbar = Toolbar;
}(window, window.document));
