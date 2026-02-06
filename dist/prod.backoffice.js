/*! prod.backoffice.js || Version: 5.5.281 || Generated: Fri Feb 06 2026 15:36:24 GMT+0000 (Western European Standard Time) */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backoffice/01-components/layout/layout-backoffice.js":
/***/ (function() {

$(document).ready(function () {


  var regex = RegExp("Layout");
  var wordList = $('.Page').attr('class').split(" ").filter((elem, index) => {
    return regex.test(elem);
  })
  $('.ViewStateCounter > div').append(' ' + wordList);


  var isDesktop = $(".Page").hasClass("desktop");
  var isPhone = $(".Page").hasClass("phone");
  var UseSidebar = $(".Sidebar").css("display") != "none";

  if (isPhone) $(".Others_Menu ").detach().prependTo(".Application_Menu");

  // open responsive menu
  $("a.Header_ButtonMenu").click(function () {

    // if opened
    if ($(".Page").hasClass("active")) {
      $(".Page").removeClass("active");
    } else {
      $(".Page").addClass("active");
    }

    return false;
  });


  // close resposive menu when click out
  $(".Page.tablet > .Content").click(function () {
    $(".Page").removeClass("active");
  });

  // Open sidebar
  $("a.Header_ButtonSidebar").click(function () {

    // if open
    if ($(".Sidebar").hasClass("open")) {
      $(".Sidebar").removeClass("open");
    } else {
      $(".Sidebar").addClass("open");
    }

    return false;
  });


  // if sidebar
  if (UseSidebar) {
    $(".Page").addClass("UseSidebar");
  } else {

    // if fade active
    if ($(".Page").hasClass("UseHeaderFade")) {

      $header = $('.Header');
      $titleHeight = $(".Title_Section").outerHeight();
      var $headerBackground = $('.Header_background');

      var alpha = 0;
      var lastComma = "";
      $(window).scroll(function () {
        if ($(this).scrollTop() > $headerHeight) {
          $headerBackground.fadeIn();
        } else {
          $headerBackground.fadeOut();
        }
      });

    }
  }

  $(window).scroll(function () {
    /*     $('.Page thead th').css('top',$('.MainContent_others').outerHeight());
         $('.MainContent_others').css('padding-top','20px');*/

  });

  $('.Menu_TopMenu').on('click', 'a', function () {
    $(this).blur();
  });



  /* caj: solves the * in mandatory 
  $('input.Mandatory, select.Mandatory').parent().addClass('ListInputMandatory');*/

});

/***/ }),

/***/ "./src/backoffice/styles.scss":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/03-elements/script.js":
/***/ (function() {

/* Component Textarea */
(function($, window, document, SapphireWidgets) {
  
  $(document).ready(function() {
    CallTextAreaAutoResize();
  });

  window.CallTextAreaAutoResize = function prepareTextAreaAutoResize(TextAreaId){
    
    if(TextAreaId==undefined){
      var textAreaInput = $('textarea');
    }else{
      var textAreaInput = $('#'+TextAreaId);
    }
    textAreaInput.each(function(){
      $(this).attr('rows',2);

      $(this)[0].style.minHeight = '70px';
      resizeTextArea($(this)[0]);
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this)[0]);
    });
  }

  function resizeTextArea ($textAreaInput) {
    if($textAreaInput.scrollHeight == 0){
      $textAreaInput.style.height = '70px';
    }else{
      $textAreaInput.style.height = 'auto';
      $textAreaInput.style.height = $textAreaInput.scrollHeight + 'px';
    }
  }
})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/***/ (function() {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/***/ (function() {

/* Component DateTimeRangePicker */
(function ($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function (config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function (config) {

		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		// Just to force kuwait arabic version
		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		}
		else {
			moment.locale(config.currentLocale)
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.isRTL && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, ' + config.dateTimeStringConnection + ']';

		if (config.timePicker) {
			//if (!this.config.attachToInput) //changed by Diogo Ribeiro so date picker has a placeholder even if its attached to input (otherwise it never showed)
			this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' HH:mm'
					: 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' hh:mm A'
					: 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			//if (!this.config.attachToInput) 
			this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText
			? 'ddd[, ]' + this.config.formatLabel
			: this.config.formatLabel;

		options.locale = {
			direction: config.isRTL ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: this.config.cancelLabel,
			applyLabel: this.config.applyLabel,
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some(i => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some(i => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some(i => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function (date) {
				return disabledWeekDays.includes(
					moment(date)
						.day()
						.toString()
				);
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function (startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function () {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function () {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function (event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after(
						'<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' +
						_this.config.goTodayLabel +
						'</td></tr>'
					);
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function () {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function (event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function (event, picker) {
			// ONYX20792 Added START
			if (_this.config.autoApply && _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model.trigger('change');
			}
			// ONYX20792 END

			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function (event, picker) { });

		this.$input.on('outsideClick.daterangepicker', function (event, picker) { });

		this.$input.on('timechanged.daterangepicker', function (event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function (event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function (event, picker) {
			_this.updateLabeling(); // ONYX20792 This line was moved here. Previously it was right before _this.sendNotification().
			if (_this.config.attachToInput) {
				_this.$model.trigger('change'); //same fix as below for when the date is the same/today, when input is attached it seems we also need this extra step
			}
			_this.$input.trigger('change'); // Fix to call the change when the date is the same/today
			_this.$clear.removeClass('disabled');
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function () {
		var _this = this;
		this.$label.off('click').on('click', function (event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function (event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function () {
			if (_this.config.timePicker24Hour) {
				_this.$calendar
					.find('.hourselect')
					.val('0')
					.trigger('change');
			} else {
				_this.$calendar
					.find('.hourselect')
					.val('12')
					.trigger('change');
			}
			_this.$calendar
				.find('.minuteselect')
				.val('0')
				.trigger('change');
			_this.$calendar
				.find('.ampmselect')
				.val('AM')
				.trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function () {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());

			_this.picker.hide();

			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model && _this.$model.trigger('change');
			}

			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function () {
				window.setTimeout(function () {
					_this.updateParentIframe();
				}, 50);
			});
		}
	};

	DateTimeRangePicker.prototype.updateLabeling = function () {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
						if (this.config.timePicker) {
							this.$model && this.$model.val(this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`));
						} else {
							this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
						}
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function () {
		if (
			window.frameElement
			&& (
				$(window.frameElement.parentElement).hasClass('tooltipster-content')
				|| $(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content')
			)
		) {
			return;
		}

		if (!this.isInViewport()) {

			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar
					.removeClass('drop-up')
					.addClass('drop-down')
					.css('top', point);
			}
			else if (
				!this.$calendar.hasClass('drop-up')
				&& this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)
			) {
				if (!window.frameElement || (coords.height + this.$input.height() + 7) < document.body.offsetHeight) {
					var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
					this.$calendar.addClass('drop-up').css('top', point);
				}
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function () {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return (
			bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5)
		);
	};

	DateTimeRangePicker.prototype.clear = function (sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function () {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function () {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function () {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function (sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');

			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(
					this.config.dateTimeRangePickerFakeNotifyId,
					this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour
				);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour
					);
				} else {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour
					);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function () {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function () {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/***/ (function() {

/* Component Dropzone */
(function ($, window, document, SapphireWidgets) {
	const create = function (config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function () {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function () {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function () {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function (file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val('OK:' + responseText);
						$notifyInput.trigger('change');
					});

					this.on('error', function (file, responseText) {
						prevFile = file;

						$notifyInput.val('ER:' + responseText);
						$notifyInput.trigger('change');
					});
				},
			});
		});
	};

	const bindEvents = function (config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/***/ (function() {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/***/ (function() {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/***/ (function() {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/***/ (function() {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function ($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function ($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) { }

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) { }

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function (event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function () {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function (popupDiv) {
						popupDiv.find('iframe').load(function () {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function () {
				setTimeout(function () {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {

		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) { }

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function () {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function () {

				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function () {
					_dialog.find('iframe').empty();
					_dialog.empty();

					document.querySelectorAll('.SapphirePopup').forEach(el => el.remove());

				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/segmented-control/scripts.js":
/***/ (function() {

/* Component SegmentedControl */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
    $(document).ready(function() {
      const $inputSegmented = $(`#${config.widgetId}`).find('.SegmentedControl');
      const $labels = $(`#${config.widgetId}`).find('.SegmentedControl_Label');

      if($inputSegmented){
        if(config.hasError == true) {
          $inputSegmented.addClass('Invalid');
          Array.from($labels).forEach(label => {$(label).addClass('ColorRedText')});
        }
        else {
          $inputSegmented.removeClass('Invalid');
          Array.from($labels).forEach(label => {$(label).removeClass('ColorRedText')})
        }
      }
    });
  };

SapphireWidgets.SegmentedControl = {
  create,
};
})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/***/ (function() {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = (config) => {
	$(function () {
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.WidgetId === '' && config.WidgetClass != '') {
			$WidgetIdentifier = $('.' + config.WidgetClass);
		} else {
			$WidgetIdentifier = $('#' + config.WidgetId);
		}

		if (config.IsRTL) {
			Select2Options.dir = 'rtl';
		}
		Select2Options.theme = 'default SelectSystem';
		Select2Options.width = $WidgetIdentifier.hasClass('OSFillParent') ? '100%' : 'resolve'; // DE72304

		/*  
					Change select2 search display 
									-Multiple Select2 search UI like Single Select2
			*/
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function (Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function () {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
						'<input class="select2-search__field" placeholder="' +
						placeholder +
						'" type="search"' +
						' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
						' spellcheck="false" role="textbox" />' +
						'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		// Other possible values are inputTooLong, inputTooShort and maximumSelected (you can find in Select2 sources).
		Select2Options.language = {
			errorLoading: function () {
				return config.Texts.errorLoading ?? 'Results could not be loaded.';
			},
			loadingMore: function () {
				return config.Texts.loadingMore ?? 'Loading more results…';
			},
			noResults: function () {
				return config.Texts.noResults ?? 'No results found.';
			},
			searching: function () {
				return config.Texts.searching ?? 'Searching…';
			},
			removeAllItems: function () {
				return config.Texts.removeAllItems ?? 'Remove all items';
			},
		};

		if (config.DropdownClass != '') {
			Select2Options.dropdownCssClass = config.DropdownClass;
		}

		if (config.allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (config.MaximumLength != '') {
			Select2Options.maximumInputLength = config.MaximumLength;
		}

		if (config.Texts.prompt != '') {
			Select2Options.placeholder = config.Texts.prompt;
		}

		if (config.SelectType === 'Ajax') {
			Select2Options.allowClear = false;

			Select2Options.templateSelection = function (repo) {
				if (!repo.element) {
					return config.Texts.prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function (repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			Select2Options.ajax = {
				url: config.AjaxURL,
				dataType: 'json',
				delay: config.AjaxDelay,
				headers: { AuthInternal: config.Header_Value },
				data: function (params) {
					var Select2AjaxOpt = {};
					var SplitParameter = config.SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = config.PageAmount;

					SplitParameter.forEach(function (el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function (data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * config.PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			};

			Select2Options.minimumInputLength = config.MinimumInputLenght;

			Select2Options.escapeMarkup = function (markup) {
				return markup;
			};

			if (config.IsMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (config.SelectType === 'Checkbox') {
			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (config.WidgetId != '') {
				option = new Option(config.Texts.selectAll, 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (config.HasSearch) {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = function (result) {
				var selectedOptionsList = $WidgetIdentifier.find('option:selected:not(".SelectedAll")');
				var selectedOptions = selectedOptionsList.length;
				var totalOptions = $WidgetIdentifier.find('option:not(".SelectedAll")').length;

				if (selectedOptions === 0) {
					return config.Texts.prompt;
					//return 'Select an option';
				} else if (selectedOptions < 4) {
					var activeValues = '';
					selectedOptionsList.each(function () {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				} else if (selectedOptions === totalOptions) {
					return config.Texts.allSelected;
				} else {
					return config.Texts.partialSelection
						.replace('{SelectedOptions}', selectedOptions)
						.replace('{TotalOptions}', totalOptions);
				}
			};
		}

		if (config.SelectType === 'HtmlOptions') {
			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function (key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function (markup) {
				return markup;
			};
		}

		if (config.SelectType === 'TagCustom') {
			Select2Options.tags = config.HasTags;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			// According to documentation, this has been replaced with createTag, but this signature looks like for insertTag.
			// No sure how this is supposed to be. See https://select2.org/upgrading/migrating-from-35#renamed-createsearchchoice.
			Select2Options.createSearchChoice = function (term, data) {
				if (
					$(data).filter(function () {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};


			// Set up ResizeObserver to track height changes
			const updateLineTimelineTitlePosition = () => {
				const newHeight = 125 + $('.ResizableContainer').outerHeight();
				document.documentElement.style.setProperty('--line-title-top', newHeight + 'px');
			};

			const resizeObserver = new ResizeObserver(() => {
				updateLineTimelineTitlePosition();
			});

			const $resizeContainer = $('.ResizableContainer');
			if ($resizeContainer.length) {
				resizeObserver.observe($resizeContainer[0]);
			}
		}

		if (config.SelectType === 'TagMultiple') {
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function (params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true,
				};
			};
		}

		if (!config.HasSearch) {
			Select2Options.minimumResultsForSearch = -1;
		}

		$WidgetIdentifier.select2(Select2Options);


		if (!config.AutoHeight) {
			let renderedElement = $WidgetIdentifier.next()[0];
			renderedElement.querySelector('.select2-selection__rendered').style.height = '35px';
			renderedElement.querySelector('.select2-selection__rendered').style.overflowY = 'overlay';
		}


		if (config.OnChange) {
			$WidgetIdentifier.on('change', config.OnChange);
		}

		if (config.SelectType === 'Checkbox') {
			$WidgetIdentifier.on('select2:select', function (e) {
				if (e.params.data.id === 'All') {
					var selectedItems = [];
					var allOptions = $WidgetIdentifier.find('option');
					allOptions.each(function () {
						selectedItems.push($(this).val());
					});
					$WidgetIdentifier.select2('destroy');
					$WidgetIdentifier.val(selectedItems).trigger('change');
					$WidgetIdentifier.select2(Select2Options);
					$WidgetIdentifier.select2('open');
				} else {
					var selectedOptions = $WidgetIdentifier.find('option:selected').length;
					var totalOptions = $WidgetIdentifier.find('option').length;
					if (
						selectedOptions === totalOptions - 1 &&
						$WidgetIdentifier.find('option:selected:first-child').length === 0
					) {
						var selectedItems = [];
						var allOptions = $WidgetIdentifier.find('option');
						allOptions.each(function () {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				}
			});

			$WidgetIdentifier.on('select2:unselect', function (e) {
				if (e.params.data.id === 'All') {
					$WidgetIdentifier.find('option').removeAttr('selected');
					$WidgetIdentifier.select2('destroy');
					$WidgetIdentifier.select2(Select2Options);
					$WidgetIdentifier.select2('open');
					$WidgetIdentifier.val('').trigger('change');
				} else {
					$WidgetIdentifier.find('option:first-child').removeAttr('selected');
					$WidgetIdentifier.select2(Select2Options);
					$WidgetIdentifier.select2('open');
				}
			});
		} else if (config.SelectType === 'Select2') {
			$WidgetIdentifier.on('select2:select', function (e) {
				if (e.target.selectedIndex !== 0) {
					$WidgetIdentifier.parent().addClass('SelectSystemFilter-Selected');
				} else {
					$WidgetIdentifier.parent().removeClass('SelectSystemFilter-Selected');
				}
			});
		} else if (config.SelectType === 'HtmlOptions' || config.SelectType === 'Ajax') {
			// Problem with the title is that it is always escaped, which looks bad when we have HTML there.
			// It should be possible to customize how title is built, but for this we need extra field in source data.
			const removeSelectionTitle = function () {
				$WidgetIdentifier.next().find('.select2-selection__rendered').removeAttr('title');
			};
			$WidgetIdentifier.on('select2:select select2:unselect', removeSelectionTitle);
			removeSelectionTitle();
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/***/ (function() {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					if (config.hideErrorMessage == true && (isNaN(inputValueInt) || inputValueInt == 0))
						$errorMessage.css('display', 'none' );
						else if(arrayToSpin.indexOf(inputValueInt) === -1) {
						$errorMessage.css('display', 'block' );
						} else {
						$errorMessage.css('display', 'none' );
						}
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			} else {
				$inputSpinner.blur();
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
__webpack_require__("./src/backoffice/styles.scss");

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

__webpack_require__("./src/backoffice/01-components/layout/layout-backoffice.js");

__webpack_require__("./src/components/05-components/v3-pat/country-phone/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/datetime-range-picker/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/hour-picker/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/panel/confirmation-popup.js");
__webpack_require__("./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__("./src/components/05-components/v3-pat/sapphire-popup/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/select-system/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/spinner-vertical/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/dropzone/dropzone.js");
__webpack_require__("./src/components/03-elements/script.js");
__webpack_require__("./src/components/05-components/v3-pat/segmented-control/scripts.js")
}();
/******/ })()
;