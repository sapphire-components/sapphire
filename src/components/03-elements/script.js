/* Component Textarea */
(function($, window, document, SapphireWidgets) {
  
  $(document).ready(function() {
    window.parent.CallTextAreaAutoResize();
  });

  window.CallTextAreaAutoResize = function prepareTextAreaAutoResize(TextAreaId){
    
    if(TextAreaId==undefined){
      var textAreaInput = $('textarea');
    }else{
      var textAreaInput = $('#'+TextAreaId);
    }
    textAreaInput.each(function(){
      $(this).data('original-height', $(this)[0].scrollHeight);

      $(this).attr('rows',2);
      resizeTextArea($(this));
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this));
    });
  }

  function resizeTextArea ($textAreaInput) {
    const originalHeight = $textAreaInput.data('original-height');
    const scrollHeight = $textAreaInput[0].scrollHeight;
    
    if($textAreaInput[0].scrollHeight == 0){
      $textAreaInput.css('height', '60px');
    }else{
      if(scrollHeight >= originalHeight)
        $textAreaInput.css('height', $textAreaInput[0].scrollHeight + 'px');
    }
  }
})(jQuery, window, document, SapphireWidgets);