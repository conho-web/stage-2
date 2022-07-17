/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html>\\n\\n<head>\\n  <meta charset=\\\"utf-8\\\">\\n  <title>Stage 2 | Webpack</title>\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n</head>\\n\\n<body>\\n  <main>\\n    <section id=\\\"sliper\\\">\\n      <div class=\\\"wrapper\\\">\\n        <h2 class=\\\"slider__title\\\">J1: Swiper</h2>\\n\\n        <div class=\\\"slider__container\\\">\\n          <div class=\\\"slider__slide\\\">\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 1</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 2</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 3</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 4</p>\\n            </div>\\n          </div>\\n\\n          <div class=\\\"slider__slide\\\">\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 5</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 6</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 7</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 8</p>\\n            </div>\\n          </div>\\n\\n          <div class=\\\"slider__slide\\\">\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 9</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 10</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 11</p>\\n            </div>\\n            <div class=\\\"slider__block\\\">\\n              <p class=\\\"slider__text\\\">SLIDE 12</p>\\n            </div>\\n          </div>\\n\\n          <button class=\\\"slider__button-prev\\\">prev</button>\\n          <button class=\\\"slider__button-next\\\">next</button>\\n        </div>\\n      </div>\\n    </section>\\n  </main>\\n\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://stage-2/./index.html?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://stage-2/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/j-1.js":
/*!***********************!*\
  !*** ./src/js/j-1.js ***!
  \***********************/
/***/ (() => {

eval("let slides = document.querySelectorAll(\".slider__slide\");\nlet buttonPrev = document.querySelector(\".slider__button-prev\");\nlet buttonNext = document.querySelector(\".slider__button-next\");\n\nlet counter = 0;\n\nfunction recursion(number) {\n  for (let i = 0; i < slides.length; i++) {\n    slides[i] === slides[number]\n      ? (slides[i].style.display = \"flex\")\n      : (slides[i].style.display = \"none\")\n  }\n  \n  buttonNext.onclick = () => {\n    number++;\n\n    if (number >= 3) {\n      number = 0;\n    }\n\n    recursion(number);\n  }\n\n  buttonPrev.onclick = () => {\n    number--;\n\n    if (number < 0) {\n      number = 2;\n    }\n\n    recursion(number);\n  }\n}\n\nrecursion(counter);\n\n//# sourceURL=webpack://stage-2/./src/js/j-1.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _j_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./j-1.js */ \"./src/js/j-1.js\");\n/* harmony import */ var _j_1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_j_1_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../index.html */ \"./index.html\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n// js\n\n\n// html\n\n\n// scss\n\n\n//# sourceURL=webpack://stage-2/./src/js/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;