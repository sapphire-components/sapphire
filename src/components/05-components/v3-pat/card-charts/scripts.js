/* Component CardCharts */
SapphireWidgets.CardChartsPopup = () => {
	$(document).ready(function () {
		window['CardChartsScroll'] = {};
		const isInsideIframe = window.frameElement != undefined || false;

		let $component = $('.CardCharts');
		let $header = $component.find('.CardCharts__Header');
		let $content = $component.find('.CardCharts__Content');
		let $properties = $component.find('.CardCharts__Properties');
		let $headerDiv = $component.find('.CardCharts__HeaderChart > div');
		let $fakeColumns = $('.FakeColumns');
		let $bodyContent = $('.LayoutPopup__body');

		let timeoutHeight = null;

		if (isInsideIframe && !$fakeColumns.length) {
			$headerDiv.append(`<div class='FakeColumns'></div>`);
		}

		if (isInsideIframe) {
			$fakeColumns = $('.FakeColumns');

			$content.on('scroll', () => {
				clearTimeout(window['CardChartsScroll'].scrollFinished);
				window['CardChartsScroll'].scrollFinished = setTimeout(function () {
					if ($content.scrollTop() > 0) $header.addClass('ShadowMedium');
					else $header.removeClass('ShadowMedium');
				}, 50);
			});
		}

		$(window).resize(function () {
			clearTimeout(timeoutHeight);

			$component = $('.CardCharts');
			$header = $component.find('.CardCharts__Header');
			$content = $component.find('.CardCharts__Content');
			$properties = $component.find('.CardCharts__Properties');
			$fakeColumns = $('.FakeColumns');
			$bodyContent = $('.LayoutPopup__body');

			// let headerTitleHeight = 63;
			// const headerPropertiesHeight = 56;

			const $charts = $content.find('.CardCharts__Charts .OSChart');

			$charts.each(function () {
				const $chart = $(this);

				const newWidth = $content.width() - $properties.width() + 40;
				$chart.highcharts().setSize(newWidth, $chart.height());
			});

			if (isInsideIframe) {
				timeoutHeight = setTimeout(() => {
					// const $headerTitle = $component.find('.CardCharts__HeaderTitle');
					// headerTitleHeight = $headerTitle.length ? $headerTitle.outerHeight() : headerTitleHeight - 6;
					// const newHeight = $(window.frameElement).height() - headerTitleHeight;
					// $fakeColumns.css('height', `${newHeight + headerPropertiesHeight}px`);
					// $content.css('height', `${newHeight - headerPropertiesHeight}px`);
					clearTimeout(timeoutHeight);
				}, 500);
			}
		});

		// See MutationObserver (LayoutPopup)
		SapphireWidgets.PopupsToAvoidMutations = ['ChartsPopup'];
	});
};
