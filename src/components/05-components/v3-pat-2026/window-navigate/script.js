/* Component WindowNavigate */
(function ($, window, document, SapphireWidgets) {
	const go = (config) => {
		console.log('WindowNavigate go', config);
		const targetWindow = config.top ? window.top : window;
		targetWindow.location.assign(config.url);
	};

	SapphireWidgets.WindowNavigate = {
		go: go,
	};
})(jQuery, window, document, SapphireWidgets);
