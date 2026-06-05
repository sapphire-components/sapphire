/* Component Textarea */
(function ($, window, document, SapphireWidgets) {
	$(document).ready(function () {
		CallTextAreaAutoResize();
	});

	function CallTextAreaAutoResize(textAreaId) {
		if (textAreaId) {
			$('#' + textAreaId)
				.each(function () {
					initializeTextArea(this);
				})
				.on('focus input', function () {
					resizeTextArea(this);
				});
		} else {
			$('textarea').each(function () {
				initializeTextArea(this);
			});

			// Bind event to document so that it has effect on elements added later or after Ajax refresh
			$(document).on('focus input', 'textarea', function () {
				resizeTextArea(this);
			});

			// Observe new elements added to initialize them
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					mutation.addedNodes.forEach((node) => {
						if (node.nodeName === 'TEXTAREA') {
							initializeTextArea(node);
						} else if (node.nodeType === 1) {
							$(node)
								.find('textarea')
								.each(function () {
									initializeTextArea(this);
								});
						}
					});
				});
			});
			observer.observe(document.body, { childList: true, subtree: true });
		}
	}

	function initializeTextArea(textAreaInput) {
		textAreaInput.rows = 2;
		textAreaInput.style.minHeight = '70px';
		resizeTextArea(textAreaInput);
	}

	function resizeTextArea(textAreaInput) {
		if (textAreaInput.scrollHeight == 0) {
			textAreaInput.style.height = '70px';
		} else {
			textAreaInput.style.height = 'auto';
			textAreaInput.style.height = textAreaInput.scrollHeight + 'px';
		}
	}
})(jQuery, window, document, SapphireWidgets);
