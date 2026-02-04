var SapphireWidgets = (window.SapphireWidgets = window.SapphireWidgets || {});

SapphireWidgets.ResizeParentIframe = function (options = {}) {
	$(window).load(function () {
		const _body = document.body;
		const _iframe = window.frameElement;
		const DATA_BODY_RESIZE_ATTRIBUTE_NAME = 'data-resize-parent-iframe-top';
		const DATA_ELEMENT_CAUSED_BODY_OFFSET = 'data-element-caused-body-offset';
		const RESIZE_TOP_OFFSET = 5;

		_body.classList.add('ResizeParentIframe');

		let mutationTimeout = null;

		var _mutationHandler = function (mutations) {
			clearTimeout(mutationTimeout);

			mutationTimeout = setTimeout(() => {
				console.log('mutationHandler');
				_clearBodyTop();
				var _elementOutsideBodyTop = _checkAnyElementOutsideBodyTop();
				if (_elementOutsideBodyTop != null) {
					_setBodyTop(_elementOutsideBodyTop.getBoundingClientRect().top * -1);
				}

				SapphireWidgets.ResizeParentIframe.resize ? SapphireWidgets.ResizeParentIframe.resize() : resize();

				clearTimeout(mutationTimeout);
			}, 200);
		};

		/* This mutation handler observes for changes in the DOM (that make the iframe
		 ** change its size), and simulates a resize event that triggers the
		 ** repositioning of the iframe
		 */
		var _iframeMutationHandler = function (mutations) {
			setTimeout(() => {
				window.parent.dispatchEvent(new Event('resize'));
			}, 300);
		};

		var _setBodyTop = function (top) {
			_body.removeAttribute(DATA_BODY_RESIZE_ATTRIBUTE_NAME);
			_body.style.marginTop = top + 'px';

			if (top == 0) return;

			_body.setAttribute(DATA_BODY_RESIZE_ATTRIBUTE_NAME, top);
		};

		var _getBodyTop = function () {
			return parseFloat(_body.getAttribute(DATA_BODY_RESIZE_ATTRIBUTE_NAME) || 0);
		};

		var _clearBodyTop = function () {
			if (document.querySelectorAll('[' + DATA_ELEMENT_CAUSED_BODY_OFFSET + ']').length > 0) return;

			_setBodyTop(0);
		};

		var _checkAnyElementOutsideBodyTop = function () {
			var _topMostElement = null;
			var _topMostY = 0;

			for (let index = 0; index <= window.document.body.clientWidth; index += 10) {
				var _elementFromPoint = document.elementFromPoint(index, 0);
				var _elementFromPointY = _elementFromPoint != null ? _elementFromPoint.getBoundingClientRect().top * -1 : 0;

				if (_elementFromPoint != document.body && _elementFromPointY > _topMostY) {
					_topMostElement = _elementFromPoint;
					_topMostY = _elementFromPointY;
				}
			}

			return _topMostElement;
		};

		var resize = function (addedNodes) {
			if (_iframe) {
				try {
					if (_iframe.id === 'tooltipster-frame') {
						if (options.resizeWidth) {
							const _contentDocument = _iframe.contentDocument;
							_iframe.style.width = _contentDocument ? _contentDocument.querySelector('.ResizeIframeTooltip').getBoundingClientRect().width + 'px' : '100%';
						} else {
							_iframe.style.width = '100%';
						}
					}

					var _iframeHeight = _iframe.clientHeight;
					var _iframeParentViewportHeight = _iframe.ownerDocument.documentElement.clientHeight;

					// iframe is full height?
					if (_iframeHeight === _iframeParentViewportHeight || document.querySelector('.Page').classList.contains('SidebarIframe')) {
						//if full height, doesn't make sense to resize it.
						return;
					}

					let _bodyHeight = _body.scrollHeight + _getBodyTop();
					_bodyHeight += window.innerHeight - document.documentElement.clientHeight; // Adding scrollbar height in case it exists.
					_iframe.style.height = _bodyHeight + 'px';
				} catch (error) {
					console.error('Error trying to resize parent iframe: ' + error.message);
				}
			} else {
				console.warn('Not an iframe, resize ignored.');
			}
		};

		var _mutationObserver = new MutationObserver(_mutationHandler);
		var _iframeMutationObserver = new MutationObserver(_iframeMutationHandler);
		var _resizeObserver = new ResizeObserver(_mutationHandler);

		if (_iframe) {
			_mutationObserver.observe(document.body, {
				childList: true,
				subtree: true,
			});

			_iframeMutationObserver.observe(_iframe.contentDocument, {
				childList: true,
				subtree: true,
			});

			_resizeObserver.observe(document.body, {
				box: 'border-box',
			});
		} else {
			console.warn('Not an iframe, resize observer ignored.');
		}

		SapphireWidgets.ResizeParentIframe = {
			resize: resize,
		};

		osAjaxBackend.BindAfterAjaxRequest(function () {
			setTimeout(SapphireWidgets.ResizeParentIframe.resize, 500);
		});

		resize();
	});
};
