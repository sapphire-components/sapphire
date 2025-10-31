/*! prod.styleguide.js || Version: 5.5.242 || Generated: Fri Oct 31 2025 11:38:45 GMT+0200 (Itä-Euroopan normaaliaika) */
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

eval("__webpack_require__(/*! ./styles.scss */ \"./src/styleguide/styles.scss\");\n\n(function ($, window, SapphireWidgets) {\n\tconst create = config => {\n\t\tthis.$aside = $('.DesignSystem__Aside');\n\t\tthis.$filterInput = $('#' + config.filterInput);\n\t\tthis.$filterClear = this.$filterInput.parent().find('.icon');\n\n\t\tthis.bindEvents();\n\t};\n\n\tconst setRTLmode = () => {\n\t\t$('body').toggleClass('AR');\n\t\t$('body').toggleClass('Page');\n\t\t$('.DesignSystem.Page').toggleClass('AR');\n\t};\n\n\tconst setLastNoteAdded = value => {\n\t\tlocalStorage.setItem('lastNoteAdded', value);\n\n\t\tthis.verifyNewNotes();\n\t};\n\n\tfilterTerm = term => {\n\t\tconst $menu = $('.DesignSystem__MenuSection');\n\t\t$('.DesignSystem__MenuSubSection').addClass('DesignSystem__MenuSubSection--inactive');\n\t\t$menu.find('a').each((i, el) => {\n\t\t\tif (\n\t\t\t\t$(el)\n\t\t\t\t\t.text()\n\t\t\t\t\t.toLowerCase()\n\t\t\t\t\t.includes(term.toLowerCase())\n\t\t\t) {\n\t\t\t\t$(el).show();\n\t\t\t\t$(el)\n\t\t\t\t\t.parent()\n\t\t\t\t\t.addClass('DesignSystem__MenuSubSection--expanded')\n\t\t\t\t\t.removeClass('DesignSystem__MenuSubSection--inactive');\n\t\t\t} else {\n\t\t\t\t$(el).hide();\n\t\t\t}\n\t\t});\n\t};\n\n\tbindEvents = () => {\n\t\tthis.$aside.on('click', '.DesignSystem__MenuItemSection', e => {\n\t\t\t$(e.target)\n\t\t\t\t.parent()\n\t\t\t\t.toggleClass('DesignSystem__MenuSubSection--expanded');\n\t\t});\n\n\t\tthis.$aside.on('click', '.DesignSystem__Menu a[title]', e => {\n\t\t\te.preventDefault();\n\t\t\tlet url = $(e.target).attr('href');\n\t\t\tlet title = $(e.target).attr('title');\n\t\t\twindow.location.href = `${url}#${title}`;\n\t\t});\n\n\t\tthis.$filterInput.on('keydown', evt => {\n\t\t\tif (evt.key === 'Enter') return false;\n\t\t});\n\n\t\tthis.$filterInput.on('input', evt => {\n\t\t\tif (this.$filterInput.val().length > 2) {\n\t\t\t\tthis.filterTerm(evt.target.value);\n\t\t\t\tthis.$filterClear.show();\n\t\t\t} else {\n\t\t\t\tconst $menu = $('.DesignSystem__MenuSection');\n\t\t\t\t$menu.find('a, .DesignSystem__MenuSection, .DesignSystem__MenuSubSection').show();\n\t\t\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');\n\t\t\t\tif (this.$filterInput.val().length > 0) {\n\t\t\t\t\tthis.$filterClear.show();\n\t\t\t\t} else {\n\t\t\t\t\tthis.$filterClear.hide();\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tthis.$filterClear.on('click', () => {\n\t\t\tthis.$filterInput.val('').trigger('input');\n\t\t});\n\n\t\tthis.$aside.on('click', 'a[ui=\"button-expand-all\"]', () => openAll());\n\n\t\tthis.$aside.on('click', 'a[ui=\"button-collapse-all\"]', () => closeAll());\n\n\t\t$(window).load(() => {\n\t\t\tconst hash = window.location.hash.slice(1);\n\t\t\tconst pathname = window.location.pathname.replace('/StyleGuideV2_UI/', '');\n\n\t\t\tif (!!hash) {\n\t\t\t\tlet $content = $('.DesignSystem__Content').find('[title=\"' + hash + '\"]');\n\t\t\t\tif (!!$content.length) $(window).scrollTop($content.offset().top);\n\t\t\t}\n\n\t\t\tif (pathname === 'WhatsNew.aspx') {\n\t\t\t\t$('.DesignSystem__FabButton').hide();\n\n\t\t\t\tlocalStorage.setItem('lastNoteViewed', localStorage.getItem('lastNoteAdded'));\n\t\t\t}\n\n\t\t\tmarkAsideMenu(true);\n\t\t\tscrollToHashTarget();\n\t\t});\n\n\t\t$(window).on('hashchange', () => {\n\t\t\tscrollToHashTarget();\n\t\t});\n\t};\n\n\tscrollToHashTarget = () => {\n\t\tlet targetById = $('.DesignSystem__Content').find('[id=\"' + window.location.hash.slice(1) + '\"]');\n\t\tlet targetByTitle = $('.DesignSystem__Content').find('[title=\"' + window.location.hash.slice(1) + '\"]');\n\n\t\tif (!!targetById.length) {\n\t\t\t$(window).scrollTop(targetById.offset().top);\n\t\t} else if (!!targetByTitle.length) {\n\t\t\t$(window).scrollTop(targetByTitle.offset().top);\n\t\t}\n\n\t\tmarkAsideMenu(false);\n\t};\n\n\tmarkAsideMenu = doScroll => {\n\t\tconst hash = window.location.hash.slice(1);\n\t\tlet pathname = window.location.pathname.replace('/StyleGuideV2_UI/', '');\n\n\t\t$('.DesignSystem__MenuSection a').each((i, el) => {\n\t\t\tlet url = $(el)\n\t\t\t\t.attr('href')\n\t\t\t\t.split('?')[0];\n\t\t\tlet title = $(el).attr('title');\n\n\t\t\tif (url === pathname) {\n\t\t\t\tif (hash === title || (!hash && !title)) {\n\t\t\t\t\t$(el).addClass('active');\n\n\t\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t\tif (!!$(el).closest('.DesignSystem__MenuSubSection').length) {\n\t\t\t\t\t\t\t$(el)\n\t\t\t\t\t\t\t\t.closest('.DesignSystem__MenuSubSection')\n\t\t\t\t\t\t\t\t.addClass('DesignSystem__MenuSubSection--expanded');\n\n\t\t\t\t\t\t\tif (doScroll) {\n\t\t\t\t\t\t\t\tlet linkTopPosition = $(el).closest('.DesignSystem__MenuSubSection')[0].offsetTop;\n\t\t\t\t\t\t\t\t$('.DesignSystem__Menu')[0].scroll(0, linkTopPosition - 230);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, 150);\n\t\t\t\t} else $(el).removeClass('active');\n\t\t\t} else $(el).removeClass('active');\n\t\t});\n\t};\n\n\topenAll = () => {\n\t\t$('.DesignSystem__MenuSubSection').addClass('DesignSystem__MenuSubSection--expanded');\n\t\t$('.DesignSystem__Menu')[0].scroll(0, 0);\n\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');\n\t};\n\n\tcloseAll = () => {\n\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--expanded');\n\t\t$('.DesignSystem__Menu')[0].scroll(0, 0);\n\t\t$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');\n\t};\n\n\tverifyNewNotes = () => {\n\t\tconst lastAdded = localStorage.getItem('lastNoteAdded');\n\t\tconst lastViewed = localStorage.getItem('lastNoteViewed');\n\n\t\tif (+lastAdded > +lastViewed) {\n\t\t\t$('.DesignSystem__FabAlert').addClass('DesignSystem__FabAlert--new');\n\t\t}\n\t};\n\n\tSapphireWidgets.DesignSystem = {\n\t\tcreate,\n\t\topenAll,\n\t\tcloseAll,\n\t\tsetRTLmode,\n\t\tsetLastNoteAdded,\n\t};\n})(jQuery, window, SapphireWidgets);\n\n\n//# sourceURL=webpack://sapphire/./src/styleguide/scripts.js?");

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