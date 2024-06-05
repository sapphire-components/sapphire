/* Component TriggerIframeTooltip */
(function ($, window, document, SapphireWidgets) {
	var create = function (config) {
		var $elementId = $('#' + config.elementId);

		$elementId.addClass('tooltip');

		if (config.triggerId === 'click') $elementId.addClass('tooltipstered--pointer');

		const widgetNotifyDiv = $.find('[data-iframetooltiptriggerid="' + config.elementId + '"]');
		let widgetNotifyId = '';

		if (widgetNotifyDiv.length === 1) {
			widgetNotifyId = $(widgetNotifyDiv).data('iframetooltipnotifyid');
		}

		$elementId.tooltipster({
			contentAsHTML: true,
			theme: config.theme,
			interactive: true,
			position: config.positionId,
			trigger: config.triggerId,
			minWidth: config.minWidth,
			maxWidth: config.maxWidth,
			zindex: config.zindex,
			onlyOne: true,
			content: `<iframe id="tooltipster-frame" data-ui="iframe-tooltip" src="${config.URL}" style="border:none;" data-iframetooltiptriggerid="${config.elementId}" iframetooltipnotifyid="${widgetNotifyId}"></iframe>`,
			functionReady: function (instance, helper) {
				$(helper).css({ visibility: 'hidden' });

				if (config.noPadding) $('.tooltipster-base').addClass('tooltipster-base--no-padding');
				if (config.customClass) $('.tooltipster-base').addClass(config.customClass);

				setTimeout(function () {
					$('.tooltipster-base').css({
						visibility: 'visible',
						minHeight: config.minHeight > 0 ? config.minHeight : 'auto',
					});
				}, 500);

				$('.tooltipster-content').prepend('<div class="TooltipsterLoading"><div class="lds-ring"><div></div></div>');

				let _tooltipIframe = helper[0].querySelector('iframe');
				if (!!_tooltipIframe) {
					_tooltipIframe.addEventListener('load', function () {
						// Check if iframe is loaded
						if (_tooltipIframe.contentWindow.document.readyState === 'complete') {
							$('.TooltipsterLoading').fadeOut(300, function () {
								$(this).remove();
							});
						}
						else {
							console.log('Tooltip iframe is still loading...');
						}
					});
				}

				const isLeftOrRight = config.positionId === 'left' || config.positionId === 'right';

				// Set a fixed height in order to keep the arrow in the same position
				if (isLeftOrRight) {
					setFixHeight();

					$(window)
						.off('scroll.Tooltip')
						.on('scroll.Tooltip', function () {
							setTimeout(() => {
								setFixHeight();
							}, 500);
						});
				}
			},
			functionAfter: function () {
				$(window).off('scroll.Tooltip');
			},
		});
	};

	const setFixHeight = () => {
		const $arrow = $('.tooltipster-arrow');

		$arrow.height($arrow.height());
	};

	SapphireWidgets.TriggerIframeTooltip = { create };
})(jQuery, window, document, SapphireWidgets);
