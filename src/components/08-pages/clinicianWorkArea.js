SapphireWidgets.ClinicianWorkArea = function(containerID) {
	$(document).ready(function() {
		const $container = $(`#${containerID}`);
		const $toggler = $container.find('.SectionExpandable-toggler');

		if ($toggler.length === 1) {
			let $togglerState = false;

			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

			$toggler.off('click').on('click', function(evt) {
				evt.stopPropagation();

				buttonClick();
			});

			const buttonClick = function() {
				$togglerState = !$togglerState;

				if ($togglerState) {
					$container.find('.SectionExpandable-toggled').show();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));

					$toggler.hide();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.click(() => buttonClick());
				} else {
					$container.find('.SectionExpandable-toggled').hide();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

					$toggler.show();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.off('click');
				}
			};
		}
	});
};
