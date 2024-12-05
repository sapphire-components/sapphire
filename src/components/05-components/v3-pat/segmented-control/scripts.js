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