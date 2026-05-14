(function ($, window, document, SapphireWidgets) {
	const create = (config) => {
		const options = {
			allowType: '',
			format24h: '',
			hasClear: '',
			hasOverlay: '',
			max: '23:59',
			min: '00:00',
			step: 30,
			value: '',
			widgetId: '',
			...config,
		};

		console.log('options', options);

		const widgetEl = document.getElementById(config.widgetId);
		const inputWrapperEl = widgetEl.querySelector('.hourpicker2-input');
		const inputEl = inputWrapperEl.querySelector('input');
		const clearEl = widgetEl.querySelector('.hourpicker2-clear');

		if (clearEl) {
			clearEl.addEventListener('mousedown', (e) => {
				e.preventDefault(); // keep input focus so overlay state stays consistent
				inputEl.value = '';
				inputEl.dispatchEvent(new Event('input', { bubbles: true }));
			});
		}

		const format24h = options.format24h === true || options.format24h === 'true';

		// --- Time helpers ---------------------------------------------------

		// Parse "HH:MM" (24h) to minutes-of-day. Used for min/max options.
		const parseTime = (s) => {
			const m = /^(\d{1,2}):(\d{2})$/.exec(String(s ?? '').trim());
			if (!m) return null;
			const h = parseInt(m[1], 10);
			const min = parseInt(m[2], 10);
			if (h > 23 || min > 59) return null;
			return h * 60 + min;
		};

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

		const minMins = parseTime(options.min) ?? 0;
		const maxMins = parseTime(options.max) ?? 23 * 60 + 59;

		// Loose parse: accepts forms like "4", "04", "430", "1430", "4:30",
		// "4 pm", "12am", "12:30 PM". Returns minutes-of-day or null if no digits.
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

		// Commit on Enter / blur: reinterpret the typed value, clamp to [min, max],
		// and write back the canonical display format. Empty stays empty; garbage
		// (no digits) is cleared.
		const commit = () => {
			const mins = parseLoose(inputEl.value);
			if (mins === null) {
				if (inputEl.value !== '') inputEl.value = '';
				return;
			}
			const clamped = Math.max(minMins, Math.min(maxMins, mins));
			inputEl.value = formatTime(clamped);
		};

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
					inputEl.value = t;
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

			function closeOverlay() {
				if (!isOpen) return;
				isOpen = false;
				overlayEl.classList.remove('is-open');
				document.removeEventListener('mousedown', handleOutside);
				window.removeEventListener('resize', positionOverlay);
				window.removeEventListener('scroll', positionOverlay, true);
			}

			inputEl.addEventListener('focus', openOverlay);
			inputEl.addEventListener('click', openOverlay);
			inputEl.addEventListener('keydown', (e) => {
				if (e.key === 'Escape' || e.key === 'Enter') closeOverlay();
			});
		}
	};

	SapphireWidgets.HourPicker2 = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);
