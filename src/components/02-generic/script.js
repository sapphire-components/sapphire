/* Component Textarea */
(function($, window, document, SapphireWidgets) {
  
  $(window).load(function() {
    var textAreaInput = $('textarea');
    textAreaInput.each(function(){
        $(this).attr('rows',2);
        resizeTextArea($(this));
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this));
    });
  });

  function resizeTextArea ($textAreaInput) {
    $textAreaInput.css('height', 'auto');
    $textAreaInput.css('height', $textAreaInput[0].scrollHeight+'px');
  }
})(jQuery, window, document, SapphireWidgets);