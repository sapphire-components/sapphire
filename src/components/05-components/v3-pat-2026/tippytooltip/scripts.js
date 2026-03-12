/* Component TippyTooltip */
(function ($, window, document, SapphireWidgets) {
	let widgetEl = null;
	let triggerEl = null;
	let contentEl = null;

	const create = (config) => {
		console.log(config);

		let incomingConfig = config.tippyConfig;

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

		const tippyConfig = {
			allowHTML: allowHTML,
			appendTo: incomingConfig.appendTo === '' ? () => document.body : incomingConfig.appendTo,
			arrow: true,
			content: content,
			hideOnClick: incomingConfig.hideOnClick,
			interactive: incomingConfig.interactive,
			maxWidth: incomingConfig.maxWidth,
			placement: incomingConfig.placement,
			theme: incomingConfig.theme,
			trigger: incomingConfig.trigger,
			zIndex: incomingConfig.zIndex,
			onCreate(instance) {
				const box = instance.popper.querySelector('.tippy-box');
				box.dataset.padding = config.padding;
			},
		};

		window.tippy(triggerEl, tippyConfig);
	};

	const render = (options) => {};

	SapphireWidgets.TippyTooltip = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);
