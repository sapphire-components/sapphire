/* Component BadgeBox */
(function ($, window, document, SapphireWidgets) {
	const create = (config) => {
		const widgetEl = document.getElementById(config.widgetId);
		const abovePlaceholderEl = widgetEl.querySelector('.badge-box-above');
		const minusButtonEl = widgetEl.querySelector('.badge-box-button.minus');
		const plusButtonEl = widgetEl.querySelector('.badge-box-button.plus');
		const valueInputEl = widgetEl.querySelector('input[type="text"]');
		const maxValue = config.max;
		const minValue = config.min;
		const step = config.step;
		const timeoutDelay = config.timeoutDelay;

		let timeout = null;
		let value = config.value;

		if (config.isEditable) {
			abovePlaceholderEl.contentEditable = true;
			abovePlaceholderEl.textContent = value;
			if (value <= minValue) {
				minusButtonEl.classList.add('is-disabled');
			}
			if (maxValue > minValue && value >= maxValue) {
				plusButtonEl.classList.add('is-disabled');
			}

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
						if (rawValue === '' || isNaN(rawValue)) {
							value = minValue;
							render();
							return;
						}

						// Keep underlying value, input, and buttons in sync
						render(rawValue);
					}, 0);
				}

				if (event.key === 'ArrowUp') {
					event.preventDefault();
					value += step;
					render();
					event.stopPropagation();
				} else if (event.key === 'ArrowDown') {
					event.preventDefault();
					value -= step;
					render();
					event.stopPropagation();
				}
			});
		}

		const render = (inputValue) => {
			if (inputValue) {
				value = parseFloat(inputValue);
			}
			if (value === null || typeof value === 'undefined' || isNaN(value)) {
				value = minValue;
			} else if (value < minValue) {
				value = minValue;
			} else if (maxValue > minValue && value > maxValue) {
				value = maxValue;
			}

			if (value <= minValue) {
				minusButtonEl.classList.add('is-disabled');
			} else {
				minusButtonEl.classList.remove('is-disabled');
			}
			if (maxValue > minValue && value >= maxValue) {
				plusButtonEl.classList.add('is-disabled');
			} else {
				plusButtonEl.classList.remove('is-disabled');
			}

			if (!inputValue) {
				abovePlaceholderEl.textContent = value;
			} else if (value.toString() !== inputValue) {
				// Only touch the DOM / caret when we modified the string (e.g. fixed it to minimum)
				abovePlaceholderEl.textContent = value;

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

			if (value != valueInputEl.value) {
				valueInputEl.value = value;
				valueInputEl.setAttribute('value', value);

				// If there is already notification pending - don't start another one
				if (timeout == null) {
					timeout = setTimeout(() => {
						clearTimeout(timeout);
						timeout = null;
						valueInputEl.dispatchEvent(new Event('change', { bubbles: true }));
					}, timeoutDelay);
				}
			}
		};
	};

	SapphireWidgets.BadgeBox = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);
