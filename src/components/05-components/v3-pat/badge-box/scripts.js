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
			abovePlaceholderEl.contentEditable = true;
			abovePlaceholderEl.textContent = value;

			minusButtonEl.addEventListener('click', () => {
				const currentNumeric = isNaN(parseFloat(value)) ? 0 : parseFloat(value);

				value = currentNumeric - parseFloat(step);
				render();
			});

			plusButtonEl.addEventListener('click', () => {
				const currentNumeric = isNaN(parseFloat(value)) ? 0 : parseFloat(value);

				value = currentNumeric + parseFloat(step);
				render();
			});

			abovePlaceholderEl.addEventListener('keydown', (event) => {
				if (!abovePlaceholderEl.isContentEditable) {
					return;
				}

				const allowedControlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End', 'Enter'];
				const isDigit = event.key >= '0' && event.key <= '9';
				const isControl = allowedControlKeys.includes(event.key) || event.ctrlKey || event.metaKey;

				if (!isDigit && !isControl && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
					event.preventDefault();
					event.stopPropagation();
					return;
				}

				// When typing numbers (or editing with non-navigation control keys), update value from the content
				const isNavigationKey = event.key === 'ArrowLeft' || event.key === 'ArrowRight';

				if ((isDigit || (isControl && !isNavigationKey)) && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
					setTimeout(() => {
						const rawValue = abovePlaceholderEl.textContent.trim();

						// If cleared, still trigger render so bindings update
						if (rawValue === '') {
							value = '';
							render();
							return;
						}

						if (isNaN(rawValue)) {
							return;
						}

						// Normalize to avoid leading zeros like 01, 001, etc.
						const numericValue = parseFloat(rawValue);
						const normalizedValue = `${numericValue}`;

						value = normalizedValue;

						// Only touch the DOM / caret when we actually changed the string (e.g. 01 -> 1)
						if (normalizedValue !== rawValue) {
							abovePlaceholderEl.textContent = normalizedValue;

							const selection = window.getSelection();
							const range = document.createRange();
							const textNode = abovePlaceholderEl.firstChild;
							const pos = textNode ? textNode.length : 0;

							if (selection && range && textNode) {
								range.setStart(textNode, pos);
								range.collapse(true);
								selection.removeAllRanges();
								selection.addRange(range);
							}
						}

						// Keep underlying value, input, and buttons in sync
						render({ skipAbovePlaceholderUpdate: true });
					}, 0);
				}

				if (event.key === 'ArrowUp') {
					event.preventDefault();

					const currentNumeric = isNaN(parseFloat(value)) ? parseFloat(minValue) : parseFloat(value);

					value = currentNumeric + parseFloat(step);
					render();
					event.stopPropagation();
				} else if (event.key === 'ArrowDown') {
					event.preventDefault();

					const currentNumeric = isNaN(parseFloat(value)) ? parseFloat(minValue) : parseFloat(value);

					value = currentNumeric - parseFloat(step);
					render();
					event.stopPropagation();
				}
			});
		}
	};

	const render = (options) => {
		const skipAbovePlaceholderUpdate = options && options.skipAbovePlaceholderUpdate;

		const isEmpty = value === '' || value === null || typeof value === 'undefined';

		// Clamp only when we have a numeric value
		if (!isEmpty) {
			if (parseFloat(value) < parseFloat(minValue)) {
				value = parseFloat(minValue);
			}
			if (parseFloat(value) > parseFloat(maxValue)) {
				value = parseFloat(maxValue);
			}
		}

		if (isEmpty) {
			valueInputEl.value = '';
			valueInputEl.setAttribute('value', '');

			if (!skipAbovePlaceholderUpdate) {
				abovePlaceholderEl.textContent = '';
			}
		} else {
			valueInputEl.value = value;
			valueInputEl.setAttribute('value', value);

			if (!skipAbovePlaceholderUpdate) {
				abovePlaceholderEl.textContent = value;
			}
		}

		// For button state, treat empty as min value
		const numericForButtons = isEmpty ? parseFloat(minValue) : parseFloat(value);

		if (numericForButtons <= parseFloat(minValue)) {
			minusButtonEl.classList.add('is-disabled');
		} else {
			minusButtonEl.classList.remove('is-disabled');
		}

		if (numericForButtons >= parseFloat(maxValue)) {
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
