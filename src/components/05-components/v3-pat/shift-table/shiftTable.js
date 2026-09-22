/* Component ShiftTable */

SapphireWidgets.ShiftTable = (widgetId, topLimit) => {
	const windowScrollYLimit = topLimit;

	document.querySelector('.ShiftTable').style.opacity = 0.5;

	const topLimitWithIframe = 190;
	const firstColumnWidth = 400;

	let topLimitWithoutIframe = document.querySelector('.WorklistPageHeader')?.getBoundingClientRect().bottom || 173;
	if (topLimitWithoutIframe < 173) {
		topLimitWithoutIframe = 173;
	}

	let headerTopWithoutIframe = document.querySelector('.ShiftTable__Header')?.getBoundingClientRect().top || 154;
	if (headerTopWithoutIframe < 154) {
		headerTopWithoutIframe = 154;
	}

	console.log('ShiftTable init');

	$(document).ready(() => {
		function isInIframe() {
			return window.self !== window.top;
		}

		function getElementTopWindowRect(selector) {
			const el = document.querySelector(selector);
			if (!el) return null;

			const elRect = el.getBoundingClientRect();

			const iframeEl = window.frameElement;
			if (!iframeEl) {
				return elRect;
			}

			const iframeRect = iframeEl.getBoundingClientRect();

			return {
				bottom: elRect.bottom,
				height: elRect.height,
				left: elRect.left,
				outerBottom: Math.ceil(iframeRect.top + elRect.bottom),
				outerLeft: Math.ceil(iframeRect.left + elRect.left),
				outerRight: Math.ceil(iframeRect.left + elRect.right),
				outerTop: Math.ceil(iframeRect.top + elRect.top),
				right: elRect.right,
				top: elRect.top,
				width: elRect.width,
			};
		}

		function calculateFloatingHeader() {
			// console.log('calculateFloatingHeader');

			const shiftTableEl = document.getElementById(widgetId);
			const shiftTableHeaderEl = shiftTableEl.querySelector('.ShiftTable__Header');

			const rectContent = getElementTopWindowRect('.ShiftTable__Content');
			if (isInIframe()) {
				const willBe = window.top.scrollY - rectContent.top + 12;
				if (rectContent.outerTop <= topLimitWithIframe) {
					shiftTableEl.dataset.stickyheader = 'true';
					shiftTableEl.style.setProperty('--shifttable-header-top', `${willBe}px`);
				} else {
					shiftTableEl.style.removeProperty('--shifttable-header-top');
					shiftTableEl.dataset.stickyheader = 'false';
				}
			} else {
				shiftTableHeaderEl.style.position = 'sticky';
				shiftTableHeaderEl.style.zIndex = 4;

				console.log('window.scrollY', window.scrollY, 'windowScrollYLimit', windowScrollYLimit);
				if (window.scrollY <= windowScrollYLimit) {
					shiftTableHeaderEl.style.top = 0;
				} else {
					shiftTableHeaderEl.style.top = `${window.scrollY - windowScrollYLimit}px`;
				}
			}
		}

		function calculateHourWidth() {
			const shiftTableEl = document.getElementById(widgetId);

			const headerWidth = shiftTableEl.querySelector('.ShiftTable__HeaderLabels').getBoundingClientRect().width;
			const numberOfHours = Array.from(shiftTableEl.querySelectorAll('.ShiftTable__HeaderLabels .ShiftTableCell')).length;
			const hourWidth = headerWidth / numberOfHours;

			shiftTableEl.style.setProperty('--shifttable-hour-width', `${hourWidth}px`);

			if (shiftTableEl.querySelector('.HourLine')) {
				const column = +shiftTableEl.querySelector('.HourLine').dataset.column;
				const minutes = +shiftTableEl.querySelector('.HourLine').dataset.minutes;
				const minutesConvertedtoPixels = (minutes * hourWidth) / 60;
				const leftInPx = (column - 1) * hourWidth + minutesConvertedtoPixels + firstColumnWidth + 24;
				shiftTableEl.querySelector('.HourLine').style.left = `${leftInPx}px`;
			}
		}

		setTimeout(() => {
			const shiftTableEl = document.getElementById(widgetId);

			document.querySelector('.ShiftTable').style.opacity = 1;

			if (!window.top.document.documentElement.hasAttribute('data-shifttable-binded')) {
				window.top.document.documentElement.dataset.shifttableBinded = 'true';
				window.top.addEventListener('scroll', () => {
					calculateFloatingHeader();
				});
			}

			shiftTableEl.addEventListener('scroll', () => {
				const horizontalScroll = shiftTableEl.scrollLeft;
				shiftTableEl.style.setProperty('--shifttable-horizontal-scroll', `${horizontalScroll}px`);
			});

			const resizeObserver = new ResizeObserver(() => {
				calculateHourWidth();
			});
			resizeObserver.observe(shiftTableEl);

			let mutationTimeoutId;
			const mutationObserver = new MutationObserver((mutations) => {
				clearTimeout(mutationTimeoutId);
				// console.log('MutationObserver');

				mutationTimeoutId = setTimeout(() => {
					const progressEls = shiftTableEl.querySelectorAll('.ShiftTableCardProgress');
					progressEls.forEach((el) => {
						// console.log('Possible width change');
						calculateHourWidth();
						el._instance.setTableCardProgress();
					});
				}, 500);
			});
			mutationObserver.observe(shiftTableEl, {
				subtree: true,
				childList: true,
				attributes: true,
				attributeFilter: ['style', 'class'],
			});

			calculateFloatingHeader();
		}, 250);
	});
};
