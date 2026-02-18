/* Component ShiftTable */
SapphireWidgets.ShiftTable = (widgetId) => {
	const topLimit = 190;
	const firstColumnWidth = 400;

	$(document).ready(() => {
		console.log('ShiftTable', widgetId);

		function isInIframe() {
			return window.self !== window.top;
		}

		function getElementTopWindowRect(selector) {
			const el = document.querySelector(selector);
			if (!el) return null;

			const elRect = el.getBoundingClientRect();

			const iframeEl = window.frameElement;
			if (!iframeEl) {
				console.log('elRect', elRect);
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

		setTimeout(() => {
			const shiftTableEl = document.getElementById(widgetId);

			if (isInIframe()) {
				window.top.addEventListener('scroll', () => {
					const rectContent = getElementTopWindowRect('.ShiftTable__Content');
					const willBe = window.top.scrollY - rectContent.top + 12;
					if (rectContent.outerTop <= topLimit) {
						shiftTableEl.dataset.stickyheader = 'true';
						shiftTableEl.style.setProperty('--shifttable-header-top', `${willBe}px`);
					} else {
						shiftTableEl.style.removeProperty('--shifttable-header-top');
						shiftTableEl.dataset.stickyheader = 'false';
					}
				});
			}

			const resizeObserver = new ResizeObserver(() => {
				const hourWidth = shiftTableEl.querySelector('.ShiftTableRow__Content .ShiftTableCell').getBoundingClientRect().width;
				shiftTableEl.style.setProperty('--shifttable-hour-width', `${hourWidth}px`);
				const column = +shiftTableEl.querySelector('.HourLine').dataset.column;
				const minutes = +shiftTableEl.querySelector('.HourLine').dataset.minutes;
				const minutesConvertedtoPixels = (minutes * hourWidth) / 60;
				const leftInPx = (column - 1) * hourWidth + minutesConvertedtoPixels + firstColumnWidth;
				shiftTableEl.querySelector('.HourLine').style.left = `${leftInPx}px`;
			});
			resizeObserver.observe(shiftTableEl);
		}, 500);
	});
};
