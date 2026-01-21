SapphireWidgets.ShiftTableCardProgress = config => {
	const DEFAULT_PADDING = 0;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {

		const cardProgresID = config.widgetId;
		const shiftEndDateTime = config.shiftEndDateTime;
		const shiftStartDateTime = config.shiftStartDateTime;
		const slotBeginDateTime = config.slotBeginDateTime;
		const slotFinalDateTime = config.slotFinalDateTime;


		const $cardProgress = $('#' + cardProgresID);
		const $shiftTable = $cardProgress.closest('.ShiftTable');
		const $tableCellList = $shiftTable.find('.ShiftTable__Content .ShiftTableCell');
		const $tableRowContent = $cardProgress.closest('.ShiftTableRow__Content');
		const $tableCard = $tableRowContent.find('.ShiftTableCard');
		const $cardProgressList = $tableRowContent.find('.ShiftTableCardProgress');
		const $actions = $cardProgress.find('.MoreActions');
		const hasActions = $actions.length > 0;

		const cardsTotal = $tableCard.length;

		const timeSlotWidth = $tableCellList[1].getBoundingClientRect().width;

		const roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;

		const cardPosition = computeCardPosition({
			shiftStartStr: shiftStartDateTime,
			shiftEndStr: shiftEndDateTime,
			slotStartStr: slotBeginDateTime,
			slotEndStr: slotFinalDateTime,
			hourColWidthPx: roundWidth
		});



		const direction = $('.Page').hasClass('AR') || $('.Page').hasClass('FA') ? 'right' : 'left';

		$cardProgress.css('max-width', 'unset');
		$cardProgress.css('width', `${cardPosition.width}px`);
		$cardProgress.css(direction, `${(cardPosition.left += DEFAULT_PADDING)}px`);

		if (cardsTotal > 0) {
			let count = 0;

			$tableCard.each(function () {
				const $this = $(this);
				const isOverlaped = checkForOverlap($cardProgress[0], $this[0]);

				if (isOverlaped === true && count < $cardProgressList.length) {
					$cardProgress.css('top', $this[0].offsetTop + $cardProgress.height());
				}

				count = count++;
			});

			$cardProgressList.each(function () {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					$cardProgress.css('top', $this[0].offsetTop + 130);
				} else {
					$cardProgress.css('top', $tableRowContent.height() - DEFAULT_PADDING);
				}
			});

			const offset = 4 + DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

			$tableRowContent.height($cardProgressList.last().position().top + offset);
		} else {


			$cardProgressList.each(function () {
				this.style.opacity = 1;

				const $this = $(this);
				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					const myRect = this.getBoundingClientRect();
					const next = findNextSiblingWithClass(this, 'ShiftTableCardProgress');

					if (!next) return;

					const nextRect = next.getBoundingClientRect();

					next.style.top = this.offsetTop + myRect.height + 'px';
					helper.$shiftCard.height(this.offsetTop + myRect.height + nextRect.height);

					// const offset = DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;
					// $cardProgress.css('top', $cardProgress[0].offsetTop + offset + 'px');
					// helper.$shiftCard.height(helper.$shiftCard.height() + $this[0].offsetHeight);
				}
			});
		}

		setTimeout(() => {
			if (timeSlotWidth !== $tableCellList[1].getBoundingClientRect().width) {
				setTableCardProgress(config);
			}
		}, 500);

		if (hasActions) {
			$actions.on('click', e => {
				e.stopPropagation();
				$cardProgress.addClass('ShiftTableCardProgress--selected');
				window.addEventListener('click', onClickOutside);
			});

			const onClickOutside = e => {
				const $target = $(e.target);

				if (!e.target.className.includes($cardProgress) && !$target.parents($cardProgress).is($cardProgress)) {
					$cardProgress.removeClass('ShiftTableCardProgress--selected');

					window.removeEventListener('click', onClickOutside);
				}
			};
		}


	};


	const parseLocalDateTime = (str) => {
		// expects "YYYY-MM-DD HH:mm" (or "YYYY-MM-DDTHH:mm")
		const s = str.trim().replace("T", " ");
		const [datePart, timePart] = s.split(" ");
		const [y, m, d] = datePart.split("-").map(Number);
		const [hh, mm] = timePart.split(":").map(Number);
		return new Date(y, m - 1, d, hh, mm, 0, 0); // local time
	}

	const clampDate = (date, min, max) => {
		return new Date(Math.min(Math.max(date.getTime(), min.getTime()), max.getTime()));
	}

	const computeCardPosition = ({
		shiftStartStr,
		shiftEndStr,
		slotStartStr,
		slotEndStr,
		hourColWidthPx
	}) => {
		const gridStart = parseLocalDateTime(shiftStartStr);
		const gridEnd = parseLocalDateTime(shiftEndStr);
		let slotStart = parseLocalDateTime(slotStartStr);
		let slotEnd = parseLocalDateTime(slotEndStr);

		// Handle inverted/invalid ranges
		if (slotEnd <= slotStart) return { left: 0, width: 0 };

		// Clamp slot to grid (optional but usually desirable)
		slotStart = clampDate(slotStart, gridStart, gridEnd);
		slotEnd = clampDate(slotEnd, gridStart, gridEnd);

		if (slotEnd <= slotStart) return { left: 0, width: 0 };

		const pxPerMinute = hourColWidthPx / 60;

		const minutesFromStart = (slotStart - gridStart) / 60000;
		const durationMinutes = (slotEnd - slotStart) / 60000;

		const left = minutesFromStart * pxPerMinute;
		const width = durationMinutes * pxPerMinute;

		return { left, width };
	}

	const findPreviousSiblingWithClass = (element, className) => {
		let prev = element?.previousElementSibling;
		while (prev) {
			if (prev.classList.contains(className)) {
				return prev;
			}
			prev = prev.previousElementSibling;
		}
		return null;
	}

	const findNextSiblingWithClass = (element, className) => {
		let next = element?.nextElementSibling;
		while (next) {
			if (next.classList.contains(className)) {
				return next;
			}
			next = next.nextElementSibling;
		}
		return null;
	}







	const checkForOverlap = (el1, el2) => {
		const bounds1 = el1.getBoundingClientRect();
		const bounds2 = el2.getBoundingClientRect();

		const firstIstLeftmost = bounds1.left <= bounds2.left;
		const leftest = firstIstLeftmost ? bounds1 : bounds2;
		const rightest = firstIstLeftmost ? bounds2 : bounds1;

		// Replace > to to >= if border overlap should count
		if (leftest.right > rightest.left) {
			const firstIsTopmost = bounds1.top <= bounds2.top;
			const topest = firstIsTopmost ? bounds1 : bounds2;
			const bottomest = firstIsTopmost ? bounds2 : bounds1;

			// Replace > to >= if border should count
			return topest.bottom > bottomest.top;
		} else return false;
	};

	const helperObj = ($this, $cardProgress, $cardProgressList) => {
		const $shiftCard = $this.closest('.ShiftTableRow__Content');
		let isOverlaped = checkForOverlap($cardProgress[0], $this[0]);
		const createdId = $cardProgress.attr('id');
		const loopedId = $this.attr('id');
		const $firstSlotCreated = $cardProgressList[0];

		isOverlaped = isOverlaped === true && createdId != loopedId && createdId != $firstSlotCreated.id;

		return { $shiftCard, createdId, loopedId, $firstSlotCreated, isOverlaped };
	};

	$(document).ready(function () {
		setTableCardProgress(config);
	});

	$(window).resize(function () {
		if (window[config.widgetId]) {
			clearTimeout(window[config.widgetId].resizedFinished);


			const allShiftTableCardProgress = document.querySelectorAll('.ShiftTableCardProgress');
			allShiftTableCardProgress.forEach(element => {
				element.style.top = '';
				element.style.opacity = 0;
			});

			window[config.widgetId].resizedFinished = setTimeout(function () {
				setTableCardProgress(config);
			}, 250);
		}
	});
};
