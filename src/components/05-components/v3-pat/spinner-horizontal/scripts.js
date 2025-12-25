/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: (config) => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function () {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			// Note that val can never be less than 1 because of the above
			if (val > +config.maxValue) {
				val = +config.maxValue;
				this.value = val;
				$(`#${config.widgetId} a.NotifyOverflowMax`).click();
			} else if (val < +config.minValue) {
				val = +config.minValue;
				this.value = val;
				$(`#${config.widgetId} a.NotifyOverflowMin`).click();
			} else {
				this.value = val;
			}

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},

	increment: function (elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(`#${elementId} input`);
		var val = parseInt(_element.val());
		if (val == undefined || isNaN(val)) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
			$(`#${elementId} a.Minus`).attr('disabled', 'disabled');
			$(`#${elementId} a.Plus`).removeAttr('disabled');
		} else {
			if (val < maxValue) {
				_element.val(val + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(`#${elementId} a.Minus`).removeAttr('disabled');
			}
			if (parseInt(_element.val()) >= maxValue) {
				$(`#${elementId} a.Plus`).attr('disabled', 'disabled');
			}
		}
	},

	decrement: function (elementId, minValue, triggerOnChange) {
		var _element = $(`#${elementId} input`);
		var val = parseInt(_element.val());
		if (val == undefined || isNaN(val)) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
			$(`#${elementId} a.Minus`).attr('disabled', 'disabled');
			$(`#${elementId} a.Plus`).removeAttr('disabled');
		} else {
			if (val > minValue) {
				_element.val(val - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(`#${elementId} a.Plus`).removeAttr('disabled');
			}
			if (parseInt(_element.val()) <= minValue) {
				$(`#${elementId} a.Minus`).attr('disabled', 'disabled');
			}
		}
	},
};
