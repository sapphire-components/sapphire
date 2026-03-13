/* Component TippyTooltip */
(function ($, window, document, SapphireWidgets) {
	let widgetEl = null;
	let triggerEl = null;
	let contentEl = null;

	const create = (config) => {
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

		if (config.width > config.tippyConfig.maxWidth) {
			config.tippyConfig.maxWidth = config.width;
		}

		if (config.tippyConfig.trigger.includes('click')) {
			triggerEl.style.cursor = 'pointer';
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
			onMount(instance) {
				console.log(tippyConfig);

				const box = instance.popper.querySelector('.tippy-box');

				if (config.height > 0) {
					box.style.height = `${config.height}px`;
				}

				if (config.iframeURL) {
					const iframe = instance.popper.querySelector('iframe');
					iframe.setAttribute('scrolling', 'no');
					iframe.style.height = '';
					iframe.addEventListener('load', () => {
						try {
							const doc = iframe.contentDocument || iframe.contentWindow.document;
							if (doc) {
								const body = doc.body;
								const html = doc.documentElement;
								const height = Math.max(body ? body.scrollHeight : 0, html ? html.scrollHeight : 0);
								if (height > 0) {
									iframe.style.height = `${height}px`;
								}

								let scheduled = false;
								let timeout;

								const mutationObserver = new MutationObserver(() => {
									if (scheduled) return;
									clearTimeout(timeout);
									scheduled = true;
									requestAnimationFrame(() => {
										scheduled = false;
										timeout = setTimeout(() => {
											notifyParentHeight();
										}, 500);
									});
								});

								mutationObserver.observe(body, {
									childList: true,
									subtree: true,
								});

								const notifyParentHeight = () => {
									iframe.style.height = '';
									const height = Math.max(body ? body.scrollHeight : 0, html ? html.scrollHeight : 0);
									if (height > 0) {
										iframe.style.height = `${height}px`;
										instance.popperInstance.update();
									}
								};
							}
						} catch (e) {
							// Silent fail for cross-origin iframes
						}
						instance.popperInstance.update();
					});
				}
			},
		};

		window.tippy(triggerEl, tippyConfig);
	};

	SapphireWidgets.TippyTooltip = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);
