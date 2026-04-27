/* Component TippyTooltip */
(function ($, window, document, SapphireWidgets) {
	const create = (config) => {
		const incomingConfig = config.tippyConfig;
		let contentEl = null;
		let linkClose = null;
		let linkOpen = null;
		let triggerEl = null;
		let widgetEl = null;

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

		linkClose = widgetEl.querySelector('.tippytooltip-link-close');
		linkOpen = widgetEl.querySelector('.tippytooltip-link-open');

		let allowHTML = false;
		let content = contentEl;

		if (config.width > incomingConfig.maxWidth) {
			incomingConfig.maxWidth = config.width;
		}

		if (config.iframeURL) {
			allowHTML = true;
			content = `<iframe data-ui="iframe-tooltip" src="${config.iframeURL}" style="border:none; width:100%;"></iframe>`;
			incomingConfig.maxWidth = 1024;
		}

		if (incomingConfig.trigger.includes('click')) {
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
				const box = instance.popper.querySelector('.tippy-box');

				box.dataset.triggerid = triggerEl.id;
				box.dataset.widgetid = config.runtimeId;

				if (config.height > 0) {
					box.style.height = `${config.height}px`;
				}

				if (config.minHeight > 0) {
					box.style.minHeight = `${config.minHeight}px`;
				}

				if (config.iframeURL) {
					const iframe = instance.popper.querySelector('iframe');
					iframe.setAttribute('scrolling', 'no');
					iframe.style.height = '';

					box.insertAdjacentHTML('afterbegin', '<div class="tippytooltip-loading"><div class="lds-ring"><div></div></div>');

					iframe.addEventListener('load', () => {
						box.querySelector('.tippytooltip-loading')?.remove();

						try {
							const doc = iframe.contentDocument || iframe.contentWindow.document;

							if (doc) {
								const styles = window.getComputedStyle(box.querySelector('.tippy-content'));
								const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);

								const iframeContentWidth = doc.documentElement.scrollWidth + horizontalPadding;

								box.style.width = `${iframeContentWidth}px`;

								const body = doc.body;
								const html = doc.documentElement;
								const height = Math.max(body ? body.scrollHeight : 0, html ? html.scrollHeight : 0);

								if (height > 0) {
									iframe.style.height = `${height}px`;
								}

								let scheduled = false;
								let timeout;

								const mutationObserver = new MutationObserver((args) => {
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
									attributes: true,
									attributeFilter: ['style'],
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

				linkOpen.click();
			},
			onHide(instance) {
				linkClose.click();
			},
		};

		window.tippy(triggerEl, tippyConfig);
	};

	const emitCustomString = (incoming) => {
		const isInIframe = window.self !== window.top;

		if (isInIframe) {
			const frameElement = window.frameElement;
			const tippyBox = frameElement.closest('.tippy-box');
			const widgetId = tippyBox.dataset.widgetid;
			const widgetEl = window.parent.document.getElementById(widgetId);
			const linkCustomString = widgetEl.querySelector('.tippytooltip-link-customstring');
			const customStringEl = widgetEl.querySelector('.tippytooltip-customstring');
			customStringEl.value = incoming;
			linkCustomString.click();
		}
	};

	hideAll = () => {
		window.tippy.hideAll();
	};

	SapphireWidgets.TippyTooltip = {
		create: create,
		emitCustomString: emitCustomString,
		hideAll: hideAll,
	};
})(jQuery, window, document, SapphireWidgets);
