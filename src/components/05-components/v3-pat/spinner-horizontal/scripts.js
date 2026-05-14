/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: (config) => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		function getValue() {
			var val = parseInt($input.val());
			if (val == undefined || isNaN(val)) {
				val = +config.minValue;
			}
			return val;
		}

		function updateButtons(val) {
			if (val <= +config.minValue) {
				if (config.deleteWhenMin) {
					$minus.addClass('Delete');
				} else {
					$minus.attr('disabled', 'disabled');
				}
			} else {
				if (config.deleteWhenMin) {
					$minus.removeClass('Delete');
				} else {
					$minus.removeAttr('disabled');
				}
			}
			if (val >= +config.maxValue) {
				$plus.attr('disabled', 'disabled');
			} else {
				$plus.removeAttr('disabled');
			}
		}

		$input.on('input', function () {
			let val = getValue();
			if (val > +config.maxValue) {
				val = +config.maxValue;
				this.value = val;
				$(`#${config.widgetId} a.NotifyOverflowMax`).click();
				if (config.triggerOnChange) {
					$input.trigger('change');
				}
			} else if (val < +config.minValue) {
				val = +config.minValue;
				this.value = val;
				$(`#${config.widgetId} a.NotifyOverflowMin`).click();
				if (config.triggerOnChange) {
					$input.trigger('change');
				}
			}
			updateButtons(val);
		});

		$plus.click(function () {
			var val = getValue();
			if (val < +config.maxValue) {
				val++;
				$input.val(val);
				if (config.triggerOnChange) {
					$input.trigger('change');
				}
			}
			updateButtons(val);
		});

		$minus.click(function () {
			if (config.deleteWhenMin) {
				if ($minus.hasClass('Delete')) {
					$(`#${config.widgetId} a.NotifyDelete`).click();
					return;
				}
			}
			var val = getValue();
			if (val > +config.minValue) {
				val--;
				$input.val(val);
				if (config.triggerOnChange) {
					$input.trigger('change');
				}
			}
			updateButtons(val);
		});

		updateButtons(getValue());
	},
};
