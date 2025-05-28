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
      $(this).attr('rows',2);

      $(this)[0].style.minHeight = '70px';
      resizeTextArea($(this)[0]);
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this)[0]);
    });
  }

  function resizeTextArea ($textAreaInput) {
    console.log($textAreaInput);    
    if($textAreaInput.scrollHeight == 0){
      $textAreaInput.style.height = '70px';
    }else{
      $textAreaInput.style.height = 'auto';
      $textAreaInput.style.height = $textAreaInput.scrollHeight + 'px';
    }
  }
})(jQuery, window, document, SapphireWidgets);