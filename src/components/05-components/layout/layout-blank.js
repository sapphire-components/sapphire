/* Component LayoutBlank */
$(function () {
	const pageEl = document.querySelector('.Page');
	if (pageEl.classList.contains('ar')) pageEl.classList.add('AR');

	if (window.frameElement) {
		if (!!$(this.frameElement).closest('.MainInteractiveCard').length) {
			$('.LayoutBlank.Page').addClass('MainInteractiveCard');
		}
	}
});
