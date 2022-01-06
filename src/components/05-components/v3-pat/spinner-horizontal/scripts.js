/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: config => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function() {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			this.value = val > +config.maxValue ? +config.maxValue : val < +config.minValue ? +config.minValue : val;

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},
	increment: function(elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) < maxValue) {
				_element.val(parseFloat(_element.val()) + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Minus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) >= maxValue) {
				$(elementId)
					.find('a.Plus')
					.attr('disabled', 'disabled');
			}
		}
	},
	decrement: function(elementId, minValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) > minValue) {
				_element.val(parseFloat(_element.val()) - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Plus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) <= minValue) {
				$(elementId)
					.find('a.Minus')
					.attr('disabled', 'disabled');
			}
		}
	},
};
