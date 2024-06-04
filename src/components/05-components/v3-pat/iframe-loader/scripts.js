var inlineMenu_notifyWidget;
$.fn.menuInline = function (notifyId, type, isFullWidth = false, actionsClass, _backgroundColor) {
  /* type: INLINE; MENU; */
  var typeINLINE = "INLINE";
  var typeBALLON = "BALLON";
  var _id = this.attr('id');
  inlineMenu_notifyWidget = notifyId;
  var GetLinkHref = function (widget) {
    var linkHref;
    var isAButton = false;
    try {
      //Checks if the id is from a link or not
      linkHref = $(widget).attr('href');

      //Tests for visibility/existence
      if (typeof linkHref == 'undefined') {
        var onClick = widget.getAttribute('onclick');
        if (typeof onClick != 'undefined') {
          isAButton = true;
          if (onClick != null) {
            var hrefMatch;
            if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
              linkHref = hrefMatch[1];
            }
          }
        }
      } //else: throw ("Inexistent or Invisible button");
    } catch (e) { }
    return [linkHref, isAButton];
  }

  linkId = "#" + _id;

  var linkWidget;
  try { linkWidget = $(linkId).get(0); } catch (e) { }
  if (typeof linkWidget == 'undefined') {
    //Case the widget is inexistent or invisible, it will show no errors.
    return;
  }

  var getLinkResult = GetLinkHref(linkWidget);
  var linkHref = getLinkResult[0];
  var isAButton = getLinkResult[1];

  if (typeof linkHref == 'undefined' || linkHref == "" || linkHref == "#" || linkHref.indexOf("javascript:") == 0) {
    try {
      window.OsHandleException(new Error("Popup link id must be the id of a Link or Button Widget with Method Navigate."), outsystems.osErrorCodes.SystemJavascriptError, 'Popup_Editor');
    } catch (e) { }
    return;
  }

  if (isAButton) {
    //remove the existing on-click
    linkWidget.setAttribute('onclick', linkWidget.getAttribute('onclick').toString().replace('window.location.href=', 'return false;window.location.href='));
  }

  // if there's a confirmation message, store in an attribute the result
  if (linkWidget.getAttribute('onclick') != null) {
    linkWidget.setAttribute('onclick', linkWidget.getAttribute('onclick').toString().replace("if( ret != true )", "$('" + linkId + "').get(0).setAttribute('confirmed', ret); if( ret != true )"));
  }


  function menuPositionNotify(id, context) {
    //var _this = $(this);
    var _this = $("#" + id);
    var Xx = 0;
    var Yy = 0;
    var Ww = 0;
    var Hh = 0;

    /* Get the menu element. */
    var _el = $("div[menu-type=" + id + "]");

    /* Get the dimensions of the button. */
    buttonHh = _this.outerHeight();
    buttonWw = _this.outerWidth();

    var buttonY = (_this.position().top + buttonHh) - (buttonHh / 2);
    var buttonX = _this.offset().left - (buttonWw / 2);
    //var buttonX = _this.position().left;

    /* Get the distance of menu button and the parent element */
    var popupParentXx = (_this.offset().left - _this.position().left);

    var popupXx = _el.offset().left;
    var popupWw = _el.outerWidth();

    Xx = Math.abs(buttonX - $('body').scrollLeft() - popupParentXx);
    Yy = Math.abs((buttonHh - buttonY) - $('body').scrollTop());

    /* Check if clicked position plus the popup width exceed the window width. */
    if ((buttonX + popupWw - $('body').scrollLeft()) > $(context).width()) {
      Xx = ((buttonX - popupWw) - $('body').scrollLeft() - popupParentXx) + (buttonWw);
      //Xx = ($(window).width() - popupWw) - $('body').scrollLeft();
    }

    /* Set menu position. */
    _el.css({ 'left': Xx + 'px', 'top': buttonY + 'px' });

    /* Refresh value */
    popupXx = _el.offset().left;

    var _balloonEl = _el.children(".menu-inline").children(".menu-inline-balloon");

    var _balloonXx = _balloonEl.offset().left;
    var _balloonWw = _balloonEl.outerWidth();
    var _balloonPosXx = Math.abs(buttonX - Xx - popupParentXx);

    //console.log("res: " + (_balloonPosXx + _balloonWw) + " (" + _balloonXx + " or " + (_balloonPosXx + Xx) + " + " + _balloonWw + ") " + " > " + (Xx + popupWw) +  " (" + Xx + " + " + popupWw + ") ");

    /* Is the balloon icon positioned out of the popup menu? */
    if (((_balloonPosXx + Xx) + _balloonWw) > (Xx + popupWw)) {
      _balloonPosXx = (_balloonPosXx - _balloonWw);
    }

    /* Set position of the balloon effect. */
    _balloonEl.css('left', _balloonPosXx + 'px');

    inlineMenu_notifyWidget = notifyId;
  }

  function menuNotifyEvents(id) {
    var context = "MainWorkArea";
    menuPositionNotify(id, context);

    /* v *** Hide popup when click outside *** v */
    function PMClickOutside(event) {
      if (event.hasOwnProperty('target')) {
        var target = $(event.target);
        /*if ((target.parents().index($('a[sapphirehospital], .HospitalPopUp')) == -1)) {}*/
        if (!$(event.target).closest('.menu-inline, .os-internal-ui-autocomplete, .os-internal-ui-menu-item, .os-internal-ui-corner-all, ui-autocomplete-ite').length) {
          $('.menu-inline:visible').remove();
        }
      }
    }

    var _PMIsDrag = false;
    var _PMIsClick = false;
    $(document).on('touchstart', function (event) {
      _PMIsDrag = false;
      _PMIsClick = true;
    });
    $(document).on('touchmove', function (event) {
      _PMIsDrag = true;
    });
    $(document).on('click', function (event) {
      PMClickOutside(event);
      _PMIsDrag = false;
      _PMIsClick = false;
    });
    $(document).on('touchend', function (event) {
      if (!_PMIsDrag && _PMIsClick) {
        PMClickOutside(event);
      }
      _PMIsDrag = false;
      _PMIsClick = false;
    });
    /* ^ *** Hide popup when click outside *** ^ */
  }


  $(linkId).off('click').on('click', function (event) {
    if (type == typeBALLON) {
      /* Ensure to close all the opened menus in the page. */
      $("div.menu-inline-wrapper[menu-type]").html("");
    }

    var _linkId = $(this).attr('id');
    //The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
    //Variable is set to false in RichWidgets_Popup_Editor_resize function.
    /* if($.data(event.target,"os-internal-processing") == true){
        return false;
    } else {
        $.data(event.target,"os-internal-processing", true);
    }*/

    //Check if the clicked link is disabled
    if (linkWidget.getAttribute('disabled') != null) {
      var linkDisabled = linkWidget.getAttribute('disabled').toString().toLowerCase();
      if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
        return false;
      }
    }

    if (linkWidget.getAttribute("confirmed") == 'false') {
      return false;
    }
    if (OsIsIE()) {
      osFocusBackend.ClearFocusedElement();
    }

    var wrapper = $("#" + $("div[menu-type=" + _linkId + "]").attr("id"));
    wrapper.html("");
    var popupDiv;
    var _iframe;
    var pleaseWaitDiv;

    var _menu;
    var _menuContent;
    var waitText = "Loading...";

    if (type == typeINLINE) {
      popupDiv = $("<div class='iframe-loading' style='text-align: center;'></div>").appendTo(wrapper);
      _iframe = $('<iframe scrolling="auto" frameborder="0" src="javascript:void(0);" style="width: ' + (isFullWidth ? '100%' : '0') + '; height: 0;" />').appendTo(wrapper);

    }
    else if (type == typeBALLON) {
      wrapper.attr("class", "menu-inline-wrapper");

      _menu = $('<div class="menu-inline"></div>').appendTo(wrapper);
      var _menuBallon = $('<div class="menu-inline-balloon"></div>').appendTo(_menu);
      _menuContent = $('<div class="menu-inline-content"></div>').appendTo(_menu);
      popupDiv = $("<div class='iframe-loading' style='text-align: center;'></div>").appendTo(_menuContent);

      _iframe = $('<iframe scrolling="auto" frameborder="0" src="javascript:void(0);" style="width: ' + (isFullWidth ? '100%' : '0') + '; height: 0;" />').appendTo(_menuContent);
    }

    pleaseWaitDiv = popupDiv.prepend("<span style='margin-top: 25px;' class='Text_Note'>" + waitText + "</span>");

    //load target page
    var ohref = GetLinkHref(linkWidget)[0];
    var rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + (+ new Date().now) + "$2");
    var xhref = rhref + ((rhref == ohref) ? (rhref.indexOf('?') >= 0 ? "&" : "?") + "_=" + (+new Date) : '');

    _iframe.attr('src', xhref);
    (function (popupDiv) {
      _iframe.load(function () {
        var iframeContext = $(this).contents();

        const $header = iframeContext.find('.MainInteractiveCard-iframe-actions');

        if ($header.length && actionsClass) {
          $header.addClass(actionsClass);
        }

        iframeContext.find("head").append($("<style type='text/css'>" +
          "    html > body { background-color: " + _backgroundColor + "; min-width: " + (isFullWidth ? "100%" : "inherit") + "; display: inline-block; } " +
          "    html { width: inherit; display: inline-block; overflow-y: hidden; } " +
          "    html form { width: " + (isFullWidth ? "100%" : "inherit") + "; display: inline-block; } " +
          "</style>"));
        //after loading try to resize, if it is possible resize also after each ajax call
        popupDiv.remove();
        $(this).css({
          'width': (isFullWidth ? '100%' : (iframeContext.find('html form').outerWidth(true) + 1) + 'px'),
          'height': (iframeContext.find('html form').outerHeight(true) + 1) + 'px'
        });

        if (type == typeBALLON) {
          menuNotifyEvents(_linkId);
        }

      });
    })(popupDiv);


    return false;
  });
};