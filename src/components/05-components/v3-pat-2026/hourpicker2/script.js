(function ($, window, document, SapphireWidgets) {
	// Loose parse: accepts forms like "4", "04", "430", "1430", "4:30",
	// "4 pm", "12am", "12:30 PM", "8 AM", "6 PM". Returns minutes-of-day
	// or null if no digits.
	const parseLoose = (raw) => {
		if (!raw) return null;
		const s = String(raw).toUpperCase();

		let period = null;
		if (s.indexOf('P') >= 0) period = 'PM';
		else if (s.indexOf('A') >= 0) period = 'AM';

		const digits = (s.match(/\d/g) || []).join('');
		if (digits.length === 0) return null;

		let hStr, mStr;
		if (digits.length <= 2) {
			hStr = digits;
			mStr = '0';
		} else if (digits.length === 3) {
			hStr = digits.slice(0, 1);
			mStr = digits.slice(1);
		} else {
			hStr = digits.slice(0, 2);
			mStr = digits.slice(2, 4);
		}

		let h = parseInt(hStr, 10);
		let m = parseInt(mStr, 10);

		if (period === 'PM' && h < 12) h += 12;
		else if (period === 'AM' && h === 12) h = 0;

		if (h > 23) h = 23;
		if (m > 59) m = 59;
		return h * 60 + m;
	};

	// Convert a loose time string ("3 pm", "4:25 PM", "830", "1430") into
	// strict 24h "HH:MM". Returns '' when the input has no digits.
	const to24h = (raw) => {
		const mins = parseLoose(raw);
		if (mins === null) return '';
		const h = Math.floor(mins / 60);
		const m = mins % 60;
		return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
	};

	const create = (config) => {
		const options = {
			allowType: '',
			format24h: '',
			hasClear: '',
			hasOverlay: '',
			max: '23:59',
			min: '00:00',
			placeholder: '',
			step: 30,
			value: '',
			widgetId: '',
			...config,
		};

		const widgetEl = document.getElementById(config.widgetId);
		const inputWrapperEl = widgetEl.querySelector('.hourpicker2-input');

		const clearEl = widgetEl.querySelector('.hourpicker2-clear');
		const inputEl = inputWrapperEl.querySelector('input');
		const inputToEmitEl = widgetEl.querySelector('.hourpicker2-toemit');

		inputEl.placeholder = options.placeholder;

		// allowType=false locks the input so the only entry path is the overlay.
		// Default (undefined / '' / true) keeps typing enabled.
		const allowType = options.allowType !== false && options.allowType !== 'false';
		if (!allowType) inputEl.readOnly = true;

		const commitValue = (v) => {
			console.log(`will commitValue -> [${v}]`);

			inputEl.value = v;

			if (to24h(v) === '') {
				inputToEmitEl.value = '--';
			} else {
				inputToEmitEl.value = to24h(v);
			}

			setTimeout(() => {
				inputToEmitEl.dispatchEvent(new Event('change'), { bubbles: true });
				console.log(`commitValue -> [${inputEl.value}] -> [${inputToEmitEl.value}] -> [${to24h(inputToEmitEl.value)}]`);
			}, 0);
		};

		// Assigned by the overlay block (if hasOverlay). Lets earlier handlers
		// such as the clear button close the overlay without forward refs.
		let closeOverlay = () => {};

		if (clearEl) {
			clearEl.addEventListener('mousedown', (e) => {
				e.preventDefault(); // keep input focus so overlay state stays consistent
				commitValue('');
				closeOverlay();
			});
		}

		const format24h = options.format24h === true || options.format24h === 'true';

		// --- Time helpers ---------------------------------------------------

		// Format minutes-of-day to the current display format.
		const formatTime = (mins) => {
			const h = Math.floor(mins / 60);
			const m = mins % 60;
			const mm = String(m).padStart(2, '0');
			if (format24h) return `${String(h).padStart(2, '0')}:${mm}`;
			const period = h < 12 ? 'AM' : 'PM';
			const h12 = h % 12 === 0 ? 12 : h % 12;
			return `${String(h12).padStart(2, '0')}:${mm} ${period}`;
		};

		const minMins = parseLoose(options.min) ?? 0;
		const maxMins = parseLoose(options.max) ?? 23 * 60 + 59;

		// Parse a raw value, clamp to [min, max], and return the canonical display
		// form. Empty / no-digits -> ''.
		const canonicalize = (raw) => {
			const mins = parseLoose(raw);
			if (mins === null) return '';
			const clamped = Math.max(minMins, Math.min(maxMins, mins));
			return formatTime(clamped);
		};

		// Commit on Enter / blur: canonicalize whatever the user typed and fire
		// input/change so listeners react.
		const commit = () => commitValue(canonicalize(inputEl.value));

		// Raw allowed characters during typing: digits, ':', space, A/P/M.
		const ALLOWED_CHAR = /[\d: aApPmM]/;
		const DISALLOWED_RE = /[^\d: aApPmM]/g;

		inputEl.addEventListener('keydown', (event) => {
			if (event.ctrlKey || event.metaKey || event.altKey) return;
			if (event.key === 'Enter') {
				commit();
				return;
			}
			if (event.key.length !== 1) return; // navigation / edit / modifier keys
			if (!ALLOWED_CHAR.test(event.key)) event.preventDefault();
		});

		// Strip disallowed characters from paste/drop/IME without canonicalizing.
		inputEl.addEventListener('input', () => {
			const cleaned = inputEl.value.replace(DISALLOWED_RE, '');

			if (cleaned !== inputEl.value) {
				inputEl.value = cleaned;
				inputEl.setSelectionRange(cleaned.length, cleaned.length);
			}
		});

		inputEl.addEventListener('blur', commit);

		// --- Overlay --------------------------------------------------------

		const hasOverlay = options.hasOverlay === true || options.hasOverlay === 'true';

		if (hasOverlay) {
			const buildTimes = () => {
				const step = Math.max(1, parseInt(options.step, 10) || 30);
				const list = [];
				for (let t = minMins; t <= maxMins; t += step) list.push(formatTime(t));
				return list;
			};

			const overlayEl = document.createElement('div');
			overlayEl.className = 'hourpicker2-overlay';
			const listEl = document.createElement('ul');
			listEl.className = 'hourpicker2-overlay-list';
			for (const t of buildTimes()) {
				const li = document.createElement('li');
				li.className = 'hourpicker2-overlay-item';
				li.dataset.time = t;
				li.textContent = t;
				li.addEventListener('mousedown', (e) => {
					e.preventDefault(); // keep focus, avoid blur-close race
					commitValue(t);
					closeOverlay();
				});
				listEl.appendChild(li);
			}
			overlayEl.appendChild(listEl);
			inputWrapperEl.appendChild(overlayEl);

			let isOpen = false;

			const positionOverlay = () => {
				overlayEl.classList.remove('is-above');
				const rect = inputEl.getBoundingClientRect();
				const overlayHeight = overlayEl.offsetHeight;
				const spaceBelow = window.innerHeight - rect.bottom;
				if (spaceBelow < overlayHeight && rect.top > spaceBelow) {
					overlayEl.classList.add('is-above');
				}
			};

			const handleOutside = (e) => {
				if (!inputWrapperEl.contains(e.target)) closeOverlay();
			};

			const openOverlay = () => {
				if (isOpen) return;
				isOpen = true;
				overlayEl.style.visibility = 'hidden';
				overlayEl.classList.add('is-open');
				positionOverlay();
				overlayEl.style.visibility = '';

				const current = inputEl.value.trim();
				overlayEl.querySelectorAll('.is-active').forEach((el) => el.classList.remove('is-active'));
				if (current) {
					const active = overlayEl.querySelector(`[data-time="${current}"]`);
					if (active) {
						active.classList.add('is-active');
						active.scrollIntoView({ block: 'nearest' });
					}
				}

				document.addEventListener('mousedown', handleOutside);
				window.addEventListener('resize', positionOverlay);
				window.addEventListener('scroll', positionOverlay, true);
			};

			closeOverlay = () => {
				if (!isOpen) return;
				isOpen = false;
				overlayEl.classList.remove('is-open');
				document.removeEventListener('mousedown', handleOutside);
				window.removeEventListener('resize', positionOverlay);
				window.removeEventListener('scroll', positionOverlay, true);
			};

			inputEl.addEventListener('focus', openOverlay);
			inputEl.addEventListener('click', openOverlay);
			inputEl.addEventListener('keydown', (e) => {
				if (e.key === 'Escape' || e.key === 'Enter') closeOverlay();
			});
		}

		// Initial canonicalization: seed from options.value if the input is empty,
		// then format whatever is there. Set directly (no input/change dispatch)
		// since this is mount-time normalization, not a user-driven commit.
		if (!inputEl.value && options.value) inputEl.value = options.value;
		if (inputEl.value) inputEl.value = canonicalize(inputEl.value);
	};

	SapphireWidgets.HourPicker2 = {
		create: create,
		to24h: to24h,
	};
})(jQuery, window, document, SapphireWidgets);
