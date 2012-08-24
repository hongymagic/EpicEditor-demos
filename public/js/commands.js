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

			range.collapse(false);
			selection.removeAllRanges();
			selection.addRange(range);
			range.insertNode(document.createTextNode('**'));

		},

		italic: function (editor, selection) {
			console.log('italic', editor, selection);
		}
	};

	window.DefaultCommands = Commands;
}(window, window.document));
