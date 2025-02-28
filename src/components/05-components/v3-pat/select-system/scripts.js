/* Component SelectSystem */
SapphireWidgets.SelectSystem = config => {
	$(function () {
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.WidgetId === '' && config.Class != '') {
			$WidgetIdentifier = $('.' + config.Class);
		} else {
			$WidgetIdentifier = $('#' + config.WidgetId);
		}

		if (config.locale === 'AR' || config.locale === 'FA') {
			Select2Options.dir = 'rtl';
		}
		Select2Options.theme = 'default SelectSystem';
		Select2Options.containerCssClass = 'select-hide ' + config.InputType; // Options: FIlters, Dropdown, Select2
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

		if (config.texts.noResults != '') {
			Select2Options.formatNoMatches = function () {
				return config.texts.noResults;
			};
		}

		if (config.InputType != '') {
			Select2Options.dropdownCssClass = config.InputType;
		}

		if (config.allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (config.MaximumLength != '') {
			Select2Options.maximumInputLength = config.MaximumLength;
		}

		if (config.texts.prompt != '') {
			Select2Options.placeholder = config.texts.prompt;
		}

		if (config.SelectType === '3') {
			// Select2 Ajax

			Select2Options.allowClear = false;

			Select2Options.templateSelection = function (repo) {
				if (!repo.element) {
					return config.texts.prompt;
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
				headers: { 'AuthInternal': config.Header_Value },
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

			if (config.isMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			if (config.SelectedValue !== '') {
				try {
					const data = JSON.parse(config.SelectedValue);
					const option = new Option(data.Value, data.Id, true, true);

					$WidgetIdentifier.append(option).trigger('change');
				} catch (error) {
					console.error(`Component SelectSystem (${config.WidgetId}): SelectedValue must be a valid JSON!`);
				}
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (config.SelectType === '2') {
			//Select2 with CheckBox

			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (config.WidgetId != '') {
				option = new Option(config.texts.selectAll, 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (config.HasSearch === 'True') {
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
					return config.texts.prompt;
					//return 'Select an option';
				} else if (selectedOptions < 4) {
					var activeValues = '';
					selectedOptionsList.each(function () {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				} else if (selectedOptions === totalOptions) {
					return config.texts.allSelected;
				} else {
					return config.texts.PartialSelection.replace("{SelectedOptions}", selectedOptions).replace("{TotalOptions}", totalOptions);
				}
			};
		}

		if (config.SelectType === '6') {
			// Select2 HtmlOptions

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

			if (config.SelectedValue != '') {
				$WidgetIdentifier.val(config.SelectedValue).trigger('change');
			} else {
				$WidgetIdentifier.val('').trigger('change');
			}
		}

		if (config.SelectType === '1') {
			// Select2 TagCustom
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			Select2Options.TokenSeparatos = [',', ' '];
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
		}

		if (config.SelectType === '5') {
			// Select2 TagMultiple
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
					newTag: true, // add additional parameters
				};
			};
		}

		if (config.HasSearch === 'False') {
			Select2Options.minimumResultsForSearch = -1;
		}

		$WidgetIdentifier.select2(Select2Options);

		if (config.OnUnSelectingJS != '' || config.OnSelectingJS != '') {
			$WidgetIdentifier
				.on('select2:unselecting', function (e) {
					$(this).data('unselecting', true);
					config.OnUnSelectingJS;
				})
				.on('select:selecting', function (e) {
					config.OnSelectingJS;
				})
				.on('select:opening', function (e) {
					if ($(this).data('unselecting')) {
						$(this).removeData('unselecting');
						e.preventDefault();
					}
				})
				.on('select:open', function (evt) {
					evt.preventDefault();
				})
				.on('select2:close', function (evt) {
					evt.preventDefault();
				});
		} else {
			if (config.SelectType === '2') {
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
						if (selectedOptions === totalOptions - 1 && $WidgetIdentifier.find('option:selected:first-child').length === 0) {
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
			}
		}

		if (config.SelectType === '4') {
			$WidgetIdentifier.on('select2:select', function (e) {
				if (e.target.selectedIndex !== 0) {
					$WidgetIdentifier.parent().addClass('SelectSystemFilter-Selected');
				} else {
					$WidgetIdentifier.parent().removeClass('SelectSystemFilter-Selected');
				}
			})
		}
	});
};
