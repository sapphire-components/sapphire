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

// hideAllOverlays = (initiatorWindow) => {
// 	window.document.querySelectorAll('iframe').forEach((iframe, index) => {
// 		const iframeWindow = iframe.contentWindow;
// 		const iframeDocument = iframe.contentDocument || iframeWindow.document;

// 		if (!iframeDocument?.body) return;

// 		iframeWindow.hideAllOverlays(window);
// 	});

// 	if (initiatorWindow === window) {
// 		return;
// 	}

// 	window.document.body.dispatchEvent(
// 		new MouseEvent('click', {
// 			bubbles: true,
// 			cancelable: true,
// 		}),
// 	);

// 	window.document.body.dispatchEvent(
// 		new MouseEvent('mouseup', {
// 			bubbles: true,
// 			cancelable: true,
// 		}),
// 	);

// 	document.querySelectorAll('.DateTimeRangePicker').forEach((element) => {
// 		window[element.id].picker.hide();
// 	});
// };

// document.body.addEventListener('click', (event) => {
// 	if (event.isTrusted) {
// 		try {
// 			window.top.hideAllOverlays(window);
// 		} catch (error) {}
// 	}
// });
