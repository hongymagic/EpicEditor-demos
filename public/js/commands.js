(function (window) {
	"use strict";

// A simple helper function to insert prefix + postfix in the selection range

	function surroundWith(document, selection, prefix, postfix) {

// If no document is given, use the default window.document

		if (document === null || document === undefined) {
			document = window.document;
		}

// If no selection is made, nothing to do

		if (selection.rangeCount === 0) {
			return;
		}

// If postfix is not given, let prefix == postfix

		if (!postfix) {
			postfix = prefix;
		}

// Insert the prefix

		var range = selection.getRangeAt(0);
		range.insertNode(document.createTextNode(prefix));

		range.collapse(false);

// And the postfix

		selection.removeAllRanges();
		selection.addRange(range);
		range.insertNode(document.createTextNode(postfix));

	}

// A very simple command set: bold, italic with no apparent interface...
// This is just a demo, so if you really wish to use Command pattern for this
// please do so.

	var Commands = Object.create(null);
	Commands = {
		bold: function (editor, selection) {
			surroundWith(editor.editorIframeDocument, selection, '**');
		},

		italic: function (editor, selection) {
			surroundWith(editor.editorIframeDocument, selection, '*');
		},

		code: function (editor, selection) {
			surroundWith(editor.editorIframeDocument, selection, '`');
		}
	};

	window.DefaultCommands = Commands;
}(window));
