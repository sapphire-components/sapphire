/* Component WindowNavigate */
(function ($, window, document, SapphireWidgets) {
	const go = (config) => {
		const targetWindow = config.top ? window.top : window;
		let finalUrl = config.url;
		if (config.queryString) {
			const params = JSON.parse(config.queryString);
			const urlObj = new URL(finalUrl, targetWindow.location.origin);
			if (Array.isArray(params)) {
				params.forEach(({ Key, Value }) => {
					if (Key != null && Value != null) {
						urlObj.searchParams.append(Key, Value);
					}
				});
			}
			finalUrl = urlObj.toString();
		}
		targetWindow.location.assign(finalUrl);
	};
	SapphireWidgets.WindowNavigate = {
		go: go,
	};
})(jQuery, window, document, SapphireWidgets);
