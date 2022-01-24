/* Component SubLayoutLeft */
(function($, window, document, SapphireWidgets) {
	const create = function() {
		$(window).scroll(function() {
			const $collapsibleOpen = $('.CollapsibleSidePanel--open');

			if ($collapsibleOpen.length) {
				const position = $(window).scrollTop();

				if (position >= 64) $collapsibleOpen.addClass('CollapsibleSidePanel--fixed');
				else $collapsibleOpen.removeClass('CollapsibleSidePanel--fixed');
			}
		});
	};

	SapphireWidgets.SubLayoutLeft = {
		create,
	};
})(jQuery, window, document, SapphireWidgets);
