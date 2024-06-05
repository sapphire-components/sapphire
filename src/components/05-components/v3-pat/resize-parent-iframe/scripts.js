var SapphireWidgets = (window.SapphireWidgets = window.SapphireWidgets || {});

SapphireWidgets.ResizeParentIframe = function (options = {}) {
  $(window).load(function () {
    const _body = document.body;
    const _iframe = window.frameElement;

    var _resizeParentIframeResizeTimer;

    _body.classList.add('ResizeParentIframe');

    var _mutationHandler = function (mutations) {
      mutations.forEach(function (mutation, index) {
        clearTimeout(_resizeParentIframeResizeTimer);
        _resizeParentIframeResizeTimer = setTimeout(function () {
          SapphireWidgets.ResizeParentIframe.resize ? SapphireWidgets.ResizeParentIframe.resize() : resize();
        }, 300);
      });
    };

    var resize = function () {
      if (_iframe) {
        try {
          if (_iframe.id === "tooltipster-frame") {
            if (options.resizeWidth) {
              const _contentDocument = _iframe.contentDocument;
              _iframe.style.width = _contentDocument ? _contentDocument.querySelector(".ResizeIframeTooltip").getBoundingClientRect().width + "px" : "100%";
            }
            else {
              _iframe.style.width("100%");
            }
          }

          var _iframeHeight = _iframe.clientHeight;
          var _iframeParentViewportHeight = _iframe.ownerDocument.documentElement.clientHeight;

          // iframe is full height?
          if(_iframeHeight == _iframeParentViewportHeight) {
            //if full height, doesn't make sense to resize it.
            return;
          }
          
          let _bodyHeight = _body.scrollHeight;
          _iframe.style.height = _bodyHeight + "px";
        }
        catch (error) {
          console.error("Error trying to resize parent iframe: " + error.message);
        }
      }
      else {
        console.warn("Not an iframe, resize ignored.");
      }
    };

    var _observer = new ResizeObserver(_mutationHandler);

    if (_iframe) {
      _observer.observe(document.body, {
        box: "border-box"
      });
    }
    else {
      console.warn("Not an iframe, resize observer ignored.");
    }

    SapphireWidgets.ResizeParentIframe = {
      resize: resize,
    };

    osAjaxBackend.BindAfterAjaxRequest(function () {
      setTimeout(SapphireWidgets.ResizeParentIframe.resize, 500);
    });

    resize();
  });
};