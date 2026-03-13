/* Component SplitButton */
(function ($, window, document, SapphireWidgets) {
	const create = function (config) {
		window[config.widgetId] = new SplitButton(config);
	};

	const SplitButton = function (config) {
		const _this = this;
		this.config = config;
		this.$widget = $('#' + this.config.widgetId);
		this.$button = this.$widget.find('.SplitButton-button');
		this.$buttonLink = this.$button.find('> a');
		this.$trigger = this.$widget.find('.SplitButton-trigger');
		this.$actions = this.$widget.find('.SplitButton-actions');
		if (!!this.$actions.text()) {
			this.$widget.find('> .SplitButton').addClass('hasTrigger');
			this.buildActionsTrigger();
		}
	};

	SplitButton.prototype.buildActionsTrigger = function () {
		const _this = this;
		const classList = this.$buttonLink[0].classList.value;

		const trigger = this.$trigger[0];
		const isInIframe = window.self !== window.top;
		const result = findAncestorWithInlineMarginTop(trigger, 4);

		this.$trigger.addClass(classList);
		$(function () {
			// inside a document ready due to sapphire popup binded events
			if (!_this.$trigger.hasClass('tooltipstered')) {
				_this.$trigger.tooltipster({
					arrow: true,
					content: $('<section/>').append(_this.$actions.clone(true)),
					trigger: _this.config.triggerEvent,
					position: _this.config.position,
					maxWidth: _this.config.maxWidth,
					theme: 'tooltipster-splitbutton Padding-' + _this.config.padding,
					functionReady: function (instance, helper) {
						if (isInIframe) {
							if (result.found) {
								const overlay = helper[0];
								overlay.style.marginTop = `${result.value}`;
							}
						}
					},
				});
				_this.$actions.remove();
			}
		});
	};

	SapphireWidgets.SplitButton = {
		create: create,
	};

	function findAncestorWithInlineMarginTop(element, maxLevels = 4) {
		let current = element?.parentElement;
		let level = 1;

		while (current && level <= maxLevels) {
			const inlineMarginTop = current.style.marginTop;

			if (inlineMarginTop && inlineMarginTop.trim() !== '') {
				return {
					found: true,
					element: current,
					level,
					value: inlineMarginTop,
				};
			}

			current = current.parentElement;
			level++;
		}

		return {
			found: false,
			element: null,
			level: null,
			value: null,
		};
	}
})(jQuery, window, document, SapphireWidgets);
