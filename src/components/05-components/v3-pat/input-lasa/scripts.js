/* Component InputLASA */
/* This extends MarkWordsFromList, which is in Javascript_Lib */
(function () {
	var setupInput = function (config) {
		$('#' + config.inputId).addClass('OSFillParent');
		$('#' + config.labelId).addClass('OSFillParent');

		SapphireWidgets.MarkWordsFromList.switchView(config);
		window.setTimeout(function () {
			SapphireWidgets.MarkWordsFromList.updateLabel(config);
		}, 250);

		$('#' + config.labelId).on('click', function () {
			SapphireWidgets.MarkWordsFromList.switchView(config, true, true);
		});

		$('#' + config.inputId)
			.on('focus', function () {
				SapphireWidgets.MarkWordsFromList.switchView(config, true);
			})
			.on('blur', function () {
				SapphireWidgets.MarkWordsFromList.switchView(config);
				SapphireWidgets.MarkWordsFromList.updateLabel(config);
			})
			.on('change input', function () {
				SapphireWidgets.MarkWordsFromList.updateLabel(config);
			});
	};

	var updateLabel = function (config) {
		var input = $('#' + config.inputId);
		var label = $('#' + config.labelId);
		if (input.val()) {
			label.text(input.val()).css('color', '');
			window.setTimeout(function () {
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: config.labelId });
			}, 250);
		} else {
			label.text(input.prop('placeholder')).css('color', '#999');
		}
	};

	var switchView = function (config, showInput, focusInput) {
		var input = $('#' + config.inputId);
		var label = $('#' + config.labelId);
		if (showInput) {
			label.hide();
			input.show();
			if (focusInput) {
				input.focus();
			}
		} else {
			input.hide();
			label.show();
		}
	};

	SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList || {};
	SapphireWidgets.MarkWordsFromList.setupInput = setupInput;
	SapphireWidgets.MarkWordsFromList.updateLabel = updateLabel;
	SapphireWidgets.MarkWordsFromList.switchView = switchView;
})();
