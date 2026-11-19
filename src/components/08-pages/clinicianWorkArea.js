SapphireWidgets.ClinicianWorkArea = function (containerID) {
	$(document).ready(function () {
		const $container = $(`#${containerID}`);

		if ($container.find('.SectionExpandable-toggler').length !== 1) return;

		// OutSystems ajax refreshes (e.g. saving a Quick Note) replace inner nodes,
		// so elements are always re-queried instead of cached.
		const getToggler = () => $container.find('.SectionExpandable-toggler');
		const getContent = () => $container.find('.SectionExpandable-toggled');

		let togglerState = false;

		const reset = function () {
			const $toggler = getToggler();

			togglerState = false;

			getContent().hide();
			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
			$toggler.show();
		};

		const open = function () {
			const $toggler = getToggler();

			togglerState = true;

			getContent().show();
			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));
			$toggler.hide();
		};

		// Delegated handlers survive ajax refreshes of the toggler / content / cancel button
		$container
			.off('click.clinicianWorkArea')
			.on('click.clinicianWorkArea', '.SectionExpandable-toggler', function (evt) {
				evt.stopPropagation();
				togglerState ? reset() : open();
			})
			.on('click.clinicianWorkArea', '.SectionExpandable-toggled .ButtonCancelSearch', reset);

		// Expose global reset
		SapphireWidgets.ClinicianWorkAreaReset = reset;

		// Initial state
		reset();
	});
};
