/* Component HorizontalToolbar */
(function ($, window, SapphireWidgets) {
	const create = (config) => {
		const $widget = $('#' + config.widgetId);

		$(document).ready(() => init($widget, config.isArrowNavigation));

		if (config.isArrowNavigation) {
			$(window).load(() => {
				const $itemWrapper = $widget.find('.MenuItemWrapper.Active');
				if ($itemWrapper.length) {
					$itemWrapper[0].scrollIntoView({
						behavior: 'auto',
						block: 'end',
					});
				}
			});
		}
	};

	const init = ($widget, isArrowNavigation) => {
		if (isArrowNavigation) {
			handleArrows($widget);

			const $toolbarItems = $widget.find('.Toolbar__Items');
			const $listItems = $widget.find('.Toolbar__Items .ListRecords');
			const $btnRight = $widget.find('.Toolbar__rightBtn');
			const $btnLeft = $widget.find('.Toolbar__leftBtn');

			$toolbarItems.scroll(() => handleArrows($widget));

			$btnRight.click(function () {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll + 50);

				if (currentScroll == sideWidth) $btnRight.addClass('Disabled');
				if (currentScroll != 50) $btnLeft.removeClass('Disabled');
			});

			$btnLeft.click(function () {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll - 50);

				if (currentScroll != sideWidth) $btnRight.removeClass('Disabled');
				if (currentScroll == 50) $btnLeft.addClass('Disabled');
			});

			$(window).on('resize.toolbar', () => handleArrows($widget));

			// Menu items are initially hidden and must be made visible after loading is finished
			$listItems.find('> a:not(.Visible)').addClass('Visible');
		} else {
			handleMoreOptions($widget);
			bindMoreOptionsEvents($widget);
		}
	};

	handleArrows = ($widget) => {
		const $toolbarItems = $widget.find('.Toolbar__Items');
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		const $btnRight = $widget.find('.Toolbar__rightBtn');
		const $btnLeft = $widget.find('.Toolbar__leftBtn');

		let currentScroll = $toolbarItems.scrollLeft();
		let menuWidth = $listItems.width();
		let externalWidth = $toolbarItems.width();
		var maxScrolll = menuWidth - externalWidth;

		if (externalWidth > menuWidth) {
			$btnLeft.hide();
			$btnRight.hide();

			$widget.find('.Toolbar_container').addClass('Toolbar_container--noarrows');
		} else {
			$btnLeft.show();
			$btnRight.show();

			$widget.find('.Toolbar_container').removeClass('Toolbar_container--noarrows');
		}

		if (currentScroll === 0) $btnLeft.addClass('Disabled');
		else $btnLeft.removeClass('Disabled');

		if (currentScroll >= maxScrolll) $btnRight.addClass('Disabled');
		else $btnRight.removeClass('Disabled');
	};

	handleMoreOptions = ($widget) => {
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		$listItems.find('> a.Visible').removeClass('Visible');

		const menuWidth = $widget.find('.Toolbar__Items').outerWidth(true);
		let itemsTotal = 0;

		$listItems.find('> a').each(function () {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			if (itemsTotal + 90 < menuWidth) {
				$(this).addClass('Visible');
			} else {
				return false;
			}
		});

		const $hiddenItems = $listItems.find('> a:not(.Visible)');

		if ($hiddenItems.length && !$listItems.find('.Toolbar__MoreOptions').length) {
			$widget.find('.Toolbar__MoreOptions').clone().css('display', 'block').appendTo($listItems);
		}
		$listItems.find('.Toolbar__MoreOptions').css('display', $hiddenItems.length ? 'block' : 'none');

		const $optionsList = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsList');
		$optionsList.empty();
		$hiddenItems.clone().appendTo($optionsList);

		const hasNotificationHidden = $hiddenItems.find('.MenuItemWrapper_Badge:not(:empty)').length !== 0;
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');

		if (hasNotificationHidden) {
			$trigger.addClass('Toolbar__MoreOptionsIcon--notification');
		} else {
			$trigger.removeClass('Toolbar__MoreOptionsIcon--notification');
		}
	};

	bindMoreOptionsEvents = ($widget) => {
		const $moreOptions = $widget.find('.Toolbar__Items .Toolbar__MoreOptions');
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');
		const $optionsList = $widget.find('.Toolbar__MoreOptionsList');

		$trigger.on('click', (event) => {
			$moreOptions.toggleClass('Toolbar__MoreOptions--open');
			event.stopPropagation();
		});

		$optionsList.on('mousewheel', (event) => {
			event.stopPropagation();
		});

		$('body').on('mouseup', (event) => {
			const $target = $(event.target).parents();

			if (!$target.andSelf().is($moreOptions)) {
				$moreOptions.removeClass('Toolbar__MoreOptions--open');
			}
		});

		$(window).on('resize.toolbar', () => handleMoreOptions($widget));

		window.addEventListener('ToolbarFixed', () => handleMoreOptions($widget), false);
	};

	SapphireWidgets.HorizontalToolbar = {
		create,
	};
})(jQuery, window, SapphireWidgets);
