/* Component ShiftTable */
SapphireWidgets.ShiftTable = (widgetId) => {
	const topLimitWithIframe = 190;
	const topLimitWithoutIframe = 173;
	const headerTopWithoutIframe = 154;
	const firstColumnWidth = 400;

	$(document).ready(() => {
		// console.log('ShiftTable', widgetId);

		const shiftTableEl = document.getElementById(widgetId);

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
				const willBe = headerTopWithoutIframe;
				if (window.scrollY >= topLimitWithoutIframe) {
					shiftTableEl.dataset.stickyheader = 'true';
					shiftTableEl.style.setProperty('--shifttable-header-top', `${willBe}px`);
				} else {
					shiftTableEl.style.removeProperty('--shifttable-header-top');
					shiftTableEl.dataset.stickyheader = 'false';
				}
			}
		}

		setTimeout(() => {
			window.top.addEventListener('scroll', () => {
				calculateFloatingHeader();
			});

			shiftTableEl.addEventListener('scroll', () => {
				const horizontalScroll = shiftTableEl.scrollLeft;
				shiftTableEl.style.setProperty('--shifttable-horizontal-scroll', `${horizontalScroll}px`);
			});

			const resizeObserver = new ResizeObserver(() => {
				const hourWidth = shiftTableEl.querySelector('.ShiftTableRow__Content .ShiftTableCell').getBoundingClientRect().width;
				shiftTableEl.style.setProperty('--shifttable-hour-width', `${hourWidth}px`);

				if (shiftTableEl.querySelector('.HourLine')) {
					const column = +shiftTableEl.querySelector('.HourLine').dataset.column;
					const minutes = +shiftTableEl.querySelector('.HourLine').dataset.minutes;
					const minutesConvertedtoPixels = (minutes * hourWidth) / 60;
					const leftInPx = (column - 1) * hourWidth + minutesConvertedtoPixels + firstColumnWidth + 24;
					shiftTableEl.querySelector('.HourLine').style.left = `${leftInPx}px`;
				}
			});
			resizeObserver.observe(shiftTableEl);

			calculateFloatingHeader();
		}, 500);
	});
};
