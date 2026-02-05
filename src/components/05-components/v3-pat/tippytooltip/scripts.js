/* Component TippyTooltip */
(function ($, window, document, SapphireWidgets) {
	let widgetEl = null;
	let triggerEl = null;
	let contentEl = null;

	const create = (config) => {
		widgetEl = document.getElementById(config.runtimeId);
		if (config.triggerId) {
			triggerEl = document.getElementById(config.triggerId);
		} else {
			triggerEl = widgetEl.querySelector('.tippytooltip-trigger');
		}
		if (config.contentId) {
			contentEl = document.getElementById(config.contentEl);
		} else {
			contentEl = widgetEl.querySelector('.tippytooltip-content');
		}

		let allowHTML = false;
		let content = contentEl;

		if (config.iframeURL) {
			allowHTML = true;
			content = `<iframe data-ui="iframe-tooltip" src="${config.iframeURL}" style="border:none;"></iframe>`;
		}

		window.tippy(triggerEl, {
			allowHTML: allowHTML,
			appendTo: config.appendTo === '' ? () => document.body : config.appendTo,
			arrow: config.arrow,
			content: content,
			hideOnClick: config.hideOnClick,
			interactive: config.interactive,
			maxWidth: config.maxWidth,
			placement: config.placement,
			theme: config.theme,
			trigger: config.trigger,
			zIndex: config.zIndex,
		});
	};

	const render = (options) => {};

	SapphireWidgets.TippyTooltip = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);
