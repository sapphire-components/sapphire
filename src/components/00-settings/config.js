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
	const iframes = document.querySelectorAll('iframe:not(#dicom)');
	iframes.forEach((iframe) => {
		const iframeWindow = iframe.contentWindow;
		const iframeDocument = iframe.contentDocument || iframeWindow.document;
		if (!iframeDocument?.body) return;
		iframeWindow.hideAllOverlays(initiatorWindow);
	});

	if (initiatorWindow === window) {
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
	// if (event.isTrusted) {
	// 	const isInsideSearchSD = event.target.closest('.SearchSD');
	// 	if (isInsideSearchSD) {
	// 		return;
	// 	}
	// 	try {
	// 		window.top.hideAllOverlays(window);
	// 	} catch (error) {}
	// }
});
