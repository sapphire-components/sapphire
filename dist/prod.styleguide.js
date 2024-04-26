/*! prod.styleguide.js || Version: 5.5.51 || Generated: Fri Apr 26 2024 21:11:55 GMT+0100 (Western European Summer Time) */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styleguide/styles.scss":
/*!************************************!*\
  !*** ./src/styleguide/styles.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sapphire/./src/styleguide/styles.scss?");

/***/ }),

/***/ "./src/styleguide/scripts.js":
/*!***********************************!*\
  !*** ./src/styleguide/scripts.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./styles.scss */ \"./src/styleguide/styles.scss\");\r\n\r\n(function ($, window, SapphireWidgets) {\r\n\tconst create = config => {\r\n\t\tthis.$aside = $('.DesignSystem__Aside');\r\n\t\tthis.$filterInput = $('#' + config.filterInput);\r\n\t\tthis.$filterClear = this.$filterInput.parent().find('.icon');\r\n\r\n\t\tthis.bindEvents();\r\n\t};\r\n\r\n\tconst setRTLmode = () => {\r\n\t\t$('body').toggleClass('AR');\r\n\t\t$('body').toggleClass('Page');\r\n\t\t$('.DesignSystem.Page').toggleClass('AR');\r\n\t};\r\n\r\n\tconst setLastNoteAdded = value => {\r\n\t\tlocalStorage.setItem('lastNoteAdded', value);\r\n\r\n\t\tthis.verifyNewNotes();\r\n\t};\r\n\r\n\tfilterTerm = term => {\r\n\t\tconst $menu = $('.DesignSystem__MenuSection');\r\n\t\t$('.DesignSystem__MenuSubSection').addClass('DesignSystem__MenuSubSection--inactive');\r\n\t\t$menu.find('a').each((i, el) => {\r\n\t\t\tif (\r\n\t\t\t\t$(el)\r\n\t\t\t\t\t.text()\r\n\t\t\t\t\t.toLowerCase()\r\n\t\t\t\t\t.includes(term.toLowerCase())\r\n\t\t\t) {\r\n\t\t\t\t$(el).show();\r\n\t\t\t\t$(el)\r\n\t\t\t\t\t.parent()\r\n\t\t\t\t\t.addClass('DesignSystem__MenuSubSection--expanded')\r\n\t\t\t\t\t.removeClass('DesignSystem__MenuSubSection--inactive');\r\n\t\t\t} else {\r\n\t\t\t\t$(el).hide();\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\r\n\tbindEvents = () => {\r\n\t\tthis.$aside.on('click', '.DesignSystem__MenuItemSection', e => {\r\n\t\t\t$(e.target)\r\n\t\t\t\t.parent()\r\n\t\t\t\t.toggleClass('DesignSystem__MenuSubSection--expanded');\r\n\t\t});\r\n\r\n\t\tthis.$aside.on('click', '.DesignSystem__Menu a[title]', e => {\r\n\t\t\te.preventDefault();\r\n\t\t\tlet url = $(e.target).attr('href');\r\n\t\t\tlet title = $(e.target).attr('title');\r\n\t\t\twindow.location.href = `${url}#${title}`;\r\n\t\t});\r\n\r\n\t\tthis.$filterInput.on('keydown', evt => {\r\n\t\t\tif (evt.key === 'Enter') return false;\r\n\t\t});\r\n\r\n\t\tthis.$filterInput.on('input', evt => {\r\n\t\t\tif (this.$filterInput.val().length > 2) {\r\n\t\t\t\tthis.filterTerm(evt.target.value);\r\n\t\t\t\tthis.$filterClear.show();\r\n\t\t\t} else {\r\n\t\t\t\tconst $menu = $('.DesignSystem__MenuSection');\r\n\t\t\t\t$menu.find('a, .DesignSystem__MenuSection, .DesignSystem__MenuSubSection').show();\r\n\t\t\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');\r\n\t\t\t\tif (this.$filterInput.val().length > 0) {\r\n\t\t\t\t\tthis.$filterClear.show();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.$filterClear.hide();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tthis.$filterClear.on('click', () => {\r\n\t\t\tthis.$filterInput.val('').trigger('input');\r\n\t\t});\r\n\r\n\t\tthis.$aside.on('click', 'a[ui=\"button-expand-all\"]', () => openAll());\r\n\r\n\t\tthis.$aside.on('click', 'a[ui=\"button-collapse-all\"]', () => closeAll());\r\n\r\n\t\t$(window).load(() => {\r\n\t\t\tconst hash = window.location.hash.slice(1);\r\n\t\t\tconst pathname = window.location.pathname.replace('/StyleGuideV2_UI/', '');\r\n\r\n\t\t\tif (!!hash) {\r\n\t\t\t\tlet $content = $('.DesignSystem__Content').find('[title=\"' + hash + '\"]');\r\n\t\t\t\tif (!!$content.length) $(window).scrollTop($content.offset().top);\r\n\t\t\t}\r\n\r\n\t\t\tif (pathname === 'WhatsNew.aspx') {\r\n\t\t\t\t$('.DesignSystem__FabButton').hide();\r\n\r\n\t\t\t\tlocalStorage.setItem('lastNoteViewed', localStorage.getItem('lastNoteAdded'));\r\n\t\t\t}\r\n\r\n\t\t\tmarkAsideMenu(true);\r\n\t\t\tscrollToHashTarget();\r\n\t\t});\r\n\r\n\t\t$(window).on('hashchange', () => {\r\n\t\t\tscrollToHashTarget();\r\n\t\t});\r\n\t};\r\n\r\n\tscrollToHashTarget = () => {\r\n\t\tlet targetById = $('.DesignSystem__Content').find('[id=\"' + window.location.hash.slice(1) + '\"]');\r\n\t\tlet targetByTitle = $('.DesignSystem__Content').find('[title=\"' + window.location.hash.slice(1) + '\"]');\r\n\r\n\t\tif (!!targetById.length) {\r\n\t\t\t$(window).scrollTop(targetById.offset().top);\r\n\t\t} else if (!!targetByTitle.length) {\r\n\t\t\t$(window).scrollTop(targetByTitle.offset().top);\r\n\t\t}\r\n\r\n\t\tmarkAsideMenu(false);\r\n\t};\r\n\r\n\tmarkAsideMenu = doScroll => {\r\n\t\tconst hash = window.location.hash.slice(1);\r\n\t\tlet pathname = window.location.pathname.replace('/StyleGuideV2_UI/', '');\r\n\r\n\t\t$('.DesignSystem__MenuSection a').each((i, el) => {\r\n\t\t\tlet url = $(el)\r\n\t\t\t\t.attr('href')\r\n\t\t\t\t.split('?')[0];\r\n\t\t\tlet title = $(el).attr('title');\r\n\r\n\t\t\tif (url === pathname) {\r\n\t\t\t\tif (hash === title || (!hash && !title)) {\r\n\t\t\t\t\t$(el).addClass('active');\r\n\r\n\t\t\t\t\tsetTimeout(function () {\r\n\t\t\t\t\t\tif (!!$(el).closest('.DesignSystem__MenuSubSection').length) {\r\n\t\t\t\t\t\t\t$(el)\r\n\t\t\t\t\t\t\t\t.closest('.DesignSystem__MenuSubSection')\r\n\t\t\t\t\t\t\t\t.addClass('DesignSystem__MenuSubSection--expanded');\r\n\r\n\t\t\t\t\t\t\tif (doScroll) {\r\n\t\t\t\t\t\t\t\tlet linkTopPosition = $(el).closest('.DesignSystem__MenuSubSection')[0].offsetTop;\r\n\t\t\t\t\t\t\t\t$('.DesignSystem__Menu')[0].scroll(0, linkTopPosition - 230);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, 150);\r\n\t\t\t\t} else $(el).removeClass('active');\r\n\t\t\t} else $(el).removeClass('active');\r\n\t\t});\r\n\t};\r\n\r\n\topenAll = () => {\r\n\t\t$('.DesignSystem__MenuSubSection').addClass('DesignSystem__MenuSubSection--expanded');\r\n\t\t$('.DesignSystem__Menu')[0].scroll(0, 0);\r\n\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');\r\n\t};\r\n\r\n\tcloseAll = () => {\r\n\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--expanded');\r\n\t\t$('.DesignSystem__Menu')[0].scroll(0, 0);\r\n\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');\r\n\t};\r\n\r\n\tverifyNewNotes = () => {\r\n\t\tconst lastAdded = localStorage.getItem('lastNoteAdded');\r\n\t\tconst lastViewed = localStorage.getItem('lastNoteViewed');\r\n\r\n\t\tif (+lastAdded > +lastViewed) {\r\n\t\t\t$('.DesignSystem__FabAlert').addClass('DesignSystem__FabAlert--new');\r\n\t\t}\r\n\t};\r\n\r\n\tSapphireWidgets.DesignSystem = {\r\n\t\tcreate,\r\n\t\topenAll,\r\n\t\tcloseAll,\r\n\t\tsetRTLmode,\r\n\t\tsetLastNoteAdded,\r\n\t};\r\n})(jQuery, window, SapphireWidgets);\r\n\n\n//# sourceURL=webpack://sapphire/./src/styleguide/scripts.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styleguide/scripts.js");
/******/ 	
/******/ })()
;