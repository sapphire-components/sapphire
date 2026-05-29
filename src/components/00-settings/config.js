SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

const style = document.createElement('style');
style.textContent = `
.select2 .select2-selection::after {
  background-image: url(${window.location.origin}/Sapphire_Resources/img/upDownArrows.png);
}
.Dropdown {
	background-image: url(${window.location.origin}/Sapphire_Resources/img/upDownArrows.png)!important;
}
`;
document.head.appendChild(style);

/* hideAllOverlays */
hideAllOverlays = (initiatorWindow) => {
	console.log('---> hideAllOverlays', window.location.pathname, initiatorWindow.location.pathname);

	document.querySelectorAll('iframe').forEach((iframe) => {
		const iframeWindow = iframe.contentWindow;
		const iframeDocument = iframe.contentDocument || iframeWindow.document;
		if (!iframeDocument?.body) return;
		mark('iframe found', iframeWindow.location.pathname);
		iframeWindow.hideAllOverlays(initiatorWindow);
	});

	if (initiatorWindow.location.pathname === window.location.pathname) {
		console.log('exiting...', window.location.pathname);

		return;
	}

	window.document.body.dispatchEvent(
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		}),
	);

	window.document.body.dispatchEvent(
		new MouseEvent('mouseup', {
			bubbles: true,
			cancelable: true,
		}),
	);

	document.querySelectorAll('.DateTimeRangePicker').forEach((element) => {
		window[element.id].picker.hide();
	});
};

document.body.addEventListener('click', (event) => {
	if (event.isTrusted) {
		const isInsideSearchSD = event.target.closest('.SearchSD');
		if (isInsideSearchSD) {
			console.log('isInsideSearchSD', event.target);
			return;
		}
		try {
			mark('initiator click', window.location.pathname);
			window.top.hideAllOverlays(window);
		} catch (error) {}
	}
});

const mark = (() => {
	let last = performance.now();
	return (label = '', pathname) => {
		const now = performance.now();
		const diff = now - last;
		console.log(`${label} | +${diff.toFixed(2)}ms | ${now.toFixed(2)}ms | ${pathname}`);
		last = now;
	};
})();
