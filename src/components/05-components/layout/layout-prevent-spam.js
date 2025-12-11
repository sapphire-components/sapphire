/* Component LayoutPreventSpam */
(function ($, window, document, SapphireWidgets) {

  var create = function (config) {
    window[config.widgetId] = new LayoutPreventSpam(config);
    SapphireWidgets.LayoutPreventSpam.widgetId = config.widgetId;
  };


  var LayoutPreventSpam = function (config) {
    var _this = this;

    $(function () {
    });

    $(window).load(function () {
    });
  };

  SapphireWidgets.LayoutPreventSpam = {
    create,
  };

})(jQuery, window, document, SapphireWidgets);
