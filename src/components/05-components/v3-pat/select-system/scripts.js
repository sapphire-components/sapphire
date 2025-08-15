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
