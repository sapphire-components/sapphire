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

hideAllOverlays = (initiatorWindow) => {
	//console.log(new Date(), 'hideAllOverlays', window.location.pathname);

	// window.document.querySelectorAll('iframe').forEach((iframe, index) => {
	// 	const iframeWindow = iframe.contentWindow;
	// 	const iframeDocument = iframe.contentDocument || iframeWindow.document;
	// 	if (!iframeDocument?.body) return;
	// 	iframeWindow.hideAllOverlays(window);
	// });

	if (initiatorWindow === window) {
		//console.log('exiting...', window.location.pathname);
		return;
	}

	// window.document.body.dispatchEvent(
	// 	new MouseEvent('click', {
	// 		bubbles: true,
	// 		cancelable: true,
	// 	}),
	// );

	// window.document.body.dispatchEvent(
	// 	new MouseEvent('mouseup', {
	// 		bubbles: true,
	// 		cancelable: true,
	// 	}),
	// );

	// document.querySelectorAll('.DateTimeRangePicker').forEach((element) => {
	// 	window[element.id].picker.hide();
	// });
};

document.body.addEventListener('click', (event) => {
	// if (event.target.closest('.windowpanel-linktoopen')) {
	// 	console.log('you clicked on a window open', event.target);
	// 	const targetLink = event.target.closest('a');
	// 	console.log('targetLink.initialized', !!targetLink.dataset.initialized);
	// 	if (!!targetLink.dataset.initialized) {
	// 		return;
	// 	} else {
	// 		console.log('programatically opening window panel', window.location.pathname);
	// 		window.minhacena.init();
	// 		//window.minhacena.open();
	// 	}
	// }
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
