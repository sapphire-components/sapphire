(function ($, window, SapphireWidgets) {
	const create = () => {
		const $widget = $('.RemoteAppointment');
		const $header = $widget.find('.RemoteAppointment__Header');
		const $minimize = $header.find('.Minimize');
		const $smallSize = $header.find('.Small');
		const $mediumSize = $header.find('.Medium');
		const $fullScreen = $header.find('.FullScreen');
		const $restoreWindow = $widget.find('.RemoteAppointment__RestoreWindow');

		let isPreviousSmall = $smallSize.is(':visible');

		$minimize.click(() => {
			isPreviousSmall = $mediumSize.is(':visible');

			//$widget.draggable({ disabled: true });

			$widget.addClass('RemoteAppointment--minimized');
			$minimize.hide();
			$mediumSize.show();

			$widget.animate(minimizedPosition($header.height()));
		});

		$smallSize.click(() => {
			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$smallSize.hide();
			$mediumSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: '510px',
				height: '425px',
			});
		});

		$mediumSize.click(() => {
			const isCallStarted = $widget.hasClass('RemoteAppointment--callStarted');

			//$widget.draggable('enable');

			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$mediumSize.hide();
			if (isCallStarted) $smallSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: isCallStarted ? '45vw' : '450px',
				height: isCallStarted ? '52vh' : '260px',
			});
		});

		$fullScreen.click(() => {
			const iframe = document.querySelector('.RemoteAppointment iframe');

			if (iframe.requestFullscreen) {
				iframe.requestFullscreen();
			} else if (iframe.webkitRequestFullscreen) {
				iframe.webkitRequestFullscreen();
			}
		});

		$restoreWindow.click(() => {
			if (isPreviousSmall) $smallSize.click();
			else $mediumSize.click();
		});

		$(document).ready(function () {
			$widget.draggable({
				containment: 'window',
				handle: $header,
				scroll: false,
				snap: true,
				iframeFix: true,
			});

			fakeAjaxRefresh();
		});

		checkIframeLoaded();
	};

	const minimizedPosition = (headerHeight = 48) => {
		return {
			top: $(window).height() - headerHeight - 16,
			right: '76px',
			left: $(window).width() - 280 - 60 - 16,
			width: '275px',
			height: '48px',
		};
	};

	const resizeWhenJoin = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');

		$smallSize.show();
		$widget.addClass('RemoteAppointment--callStarted');

		$widget.css({
			height: '52vh',
			width: '45vw',
		});

		const centerPx = ($(window.top).width() - $widget.width()) / 2;

		$widget.css({
			inset: `230px auto auto ${centerPx}px`,
		});

		let timeout;

		function warning(e) {
			timeout = setTimeout(function () {
				// Hack to keep the current tab selected if user doesn't go to another page
				const iframeContents = window.top.$('.MainContent > iframe').contents();
				const tabItems = iframeContents.find('.TabWrapper');

				tabItems.removeClass('Active');
				tabItems.first().addClass('Active');
			}, 1000);

			return (e.returnValue = 'You are leaving the page');
		}

		function noTimeout() {
			clearTimeout(timeout);
		}

		window.top.onbeforeunload = warning;
		window.top.unload = noTimeout;

		/*window.top.addEventListener('beforeunload', function(e) {
			e.preventDefault();
			e.returnValue = '123';
		});*/
	};

	const setInitialState = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');
		const $mediumSize = $widget.find('.Medium');

		$smallSize.hide();
		$mediumSize.hide();
		$widget.removeClass('RemoteAppointment--callStarted');

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.RemoteAppointment').css({
			display: 'initial',
			right: '22%',
			top: '30%',
			height: '260px',
			width: '450px',
		});
	};

	const setModalMinimized = () => {
		// To use only inside Sapphire iFrame pages
		const $modalRemoteAppt = window.top.$('.RemoteAppointment');

		if ($modalRemoteAppt.length) {
			const $minimizeModal = $modalRemoteAppt.find('.Minimize');
			$minimizeModal.click();
		}
	};

	const checkIframeLoaded = () => {
		const iframe = document.getElementsByClassName('SapphireFrame')[0];
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		if (iframeDoc.readyState == 'complete') {
			iframe.contentWindow.onload = function () {
				setInitialState();
			};

			return;
		}

		window.setTimeout(checkIframeLoaded, 100);
	};

	const setCallStarted = () => { };

	const fakeAjaxRefresh = () => {
		// Not sure what was the idea here, but it doesn't work because onbeforeunload only triggers the browser confirmation and ignores any code inside
		/*
		const $iframe = $('.SapphireFrame');

		$iframe.on('load', function() {
			$iframe[0].contentWindow.onbeforeunload = function(e) {
				$('.Feedback_AjaxWait').show();
			};

			$('.Feedback_AjaxWait').hide();
		});*/
	};

	const openModalLeaveContext = url => {
		SapphireWidgets.RemoteAppointment.leaveURL = url;

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.OpenModalLeaveContext').click();
	};

	SapphireWidgets.RemoteAppointment = {
		create,
		resizeWhenJoin,
		setCallStarted,
		setInitialState,
		fakeAjaxRefresh,
		setModalMinimized,
		openModalLeaveContext,
	};
})(jQuery, window, SapphireWidgets);
