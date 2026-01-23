/* Component BadgeBox */
(function ($, window, document, SapphireWidgets) {
	let abovePlaceholderEl = null;
	let maxValue = null;
	let minValue = null;
	let minusButtonEl = null;
	let plusButtonEl = null;
	let step = null;
	let timeout = null;
	let timeoutDelay = null;
	let value = null;
	let valueInputEl = null;
	let widgetEl = null;

	const create = (config) => {
		widgetEl = document.getElementById(config.widgetId);

		abovePlaceholderEl = widgetEl.querySelector('.badge-box-above');
		maxValue = config.max;
		minValue = config.min;
		minusButtonEl = widgetEl.querySelector('.badge-box-button.minus');
		plusButtonEl = widgetEl.querySelector('.badge-box-button.plus');
		step = config.step;
		timeoutDelay = config.timeoutDelay;
		valueInputEl = widgetEl.querySelector('input[type="text"]');

		if (config.value !== '') {
			value = config.value;
			abovePlaceholderEl.textContent = value;

			minusButtonEl.addEventListener('click', () => {
				value = parseFloat(value) - parseFloat(step);
				render();
			});

			plusButtonEl.addEventListener('click', () => {
				value = parseFloat(value) + parseFloat(step);
				render();
			});
		}
	};

	const render = () => {
		valueInputEl.value = value;
		valueInputEl.setAttribute('value', value);
		abovePlaceholderEl.textContent = value;

		if (parseFloat(value) === parseFloat(minValue)) {
			minusButtonEl.classList.add('is-disabled');
		} else {
			minusButtonEl.classList.remove('is-disabled');
		}

		if (parseFloat(value) === parseFloat(maxValue)) {
			plusButtonEl.classList.add('is-disabled');
		} else {
			plusButtonEl.classList.remove('is-disabled');
		}

		clearTimeout(timeout);
		timeout = setTimeout(() => {
			clearTimeout(timeout);
			valueInputEl.dispatchEvent(new Event('change', { bubbles: true }));
		}, timeoutDelay);
	};

	SapphireWidgets.BadgeBox = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);
