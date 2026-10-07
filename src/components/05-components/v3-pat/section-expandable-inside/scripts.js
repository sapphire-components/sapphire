/* Component SectionExpandableInside */
(function ($, window, SapphireWidgets) {
	function SectionExpandableInside() {
		const that = this;

		// This will store expanded state of each section so that they can be restored after Ajax refresh.
		// There will be pairs of booleans: 'client' (result of user action) and 'server' (initial state).
		const previewstat = [];

		function handleClick(source) {
			let section = $(source).parent();
			let sectionContent = section.children('.SectionExpandableInside_content');
			let id = section.attr('id');

			if (section.hasClass('expanded')) {
				// Not sure what this hack is for, but it seems to work fine without it
				// Calc and set a fixed height, during this process, transitions are disabled
				//sectionContent.addClass('noTransition');
				//sectionContent.height(sectionContent.height());
				//sectionContent[0].offsetHeight; // hack to force a repaint
				//sectionContent.removeClass('noTransition');

				// Collapse content
				section.removeClass('expanded');
				sectionContent.height(0);
				previewstat[id]['client'] = false;
			} else {
				// Show content
				section.addClass('expanded');
				sectionContent.height('auto');
				previewstat[id]['client'] = true;
			}
		}

		that.handleAjaxRefresh = function () {
			// remove click events
			$('.SectionExpandableInside .SectionExpandableInside_header').off();

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a',
			).click(function (event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandableInside .SectionExpandableInside_header').on('click', function () {
				handleClick(this);
			});

			$('.SectionExpandableInside').each(function () {
				let id = $(this).attr('id');
				let curState = $(this).hasClass('expanded');

				if (previewstat[id] == null) {
					// If a new SectionExpandable was added - add an entry to the list
					previewstat[id] = { client: curState, server: curState };
				} else if (curState != previewstat[id]['server']) {
					// If initial state was changed - it takes priority over client state,
					// otherwise we won't be able to force expand the section, for example
					previewstat[id]['server'] = curState;
					previewstat[id]['client'] = curState;
				} else if (previewstat[id]['client'] != curState) {
					// If client state is different from server, e.g. user expanded the section -
					// restore that so it looks like refresh did not impact it
					if (curState) {
						// Collapse
						$(this).removeClass('expanded').children('.SectionExpandableInside_content').height(0);
					} else {
						// Expand
						$(this).addClass('expanded').children('.SectionExpandableInside_content').height(auto);
					}
				}
			});
		};

		that.init = function () {
			$('.SectionExpandableInside').each(function () {
				let stat = $(this).hasClass('expanded');
				previewstat[$(this).attr('id')] = { client: stat, server: stat };
			});

			$('.SectionExpandableInside .SectionExpandableInside_header')
				.off('click')
				.on('click', function () {
					handleClick(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a',
			).click(function (event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.handleAjaxRefresh);
		};
	}

	const setOpenCloseClass = (id) => {
		id.click(function () {
			if (id.parent().hasClass('expanded')) {
				$(this).find('.HeaderIcon').removeClass('open').addClass('closed');
			} else {
				$(this).find('.HeaderIcon').removeClass('closed').addClass('open');
			}
		});
	};

	let instance = null;

	const create = () => {
		// It must be singleton because it stores information about all expandable sections
		if (instance == null) {
			instance = new SectionExpandableInside();
			instance.init();
		}
	};

	SapphireWidgets.SectionExpandableInside = {
		create,
		setOpenCloseClass,
	};
})(jQuery, window, SapphireWidgets);
