/* Component ExpandableLink */
(function($, window, SapphireWidgets) {
	const create = widgetID => {
		const $elementWrapper = $(`#${widgetID}`);

		if ($elementWrapper.parent('.ExpandableList').hasClass('HideWhenEmpty')) {
			const text = $elementWrapper.find('.ExpandableLink__Content').text();

			if (text.length === 0) $elementWrapper.parent('.ExpandableList').hide();
		}

		bindEvents(widgetID);
	};

	const bindEvents = widgetID => {
		$(`#${widgetID} .ExpandableLink__Header`).click(() => openClose(`#${widgetID}`));
	};

	const openClose = elementID => {
		// When the expandables are inside a container with class ExpandableLinkGroup, will act like a expandable group
		const $linkGroup = $(elementID).closest('.ExpandableLinkGroup');

		if ($linkGroup.length) {
			const $expandables = $linkGroup.find('.ExpandableLink--expanded').not(elementID);

			$expandables.removeClass('ExpandableLink--expanded');
		}

		$(elementID).toggleClass('ExpandableLink--expanded');

		if (SapphireWidgets.ResizeParentIframe) {
			SapphireWidgets.ResizeParentIframe.resize();
		}
	};

	SapphireWidgets.ExpandableLink = { create };
})(jQuery, window, SapphireWidgets);
