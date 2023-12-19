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

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://coffeee-house/./src/fonts/fonts.css?");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://coffeee-house/./src/styles/globals.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://coffeee-house/./src/styles/style.css?");

/***/ }),

/***/ "./src/styles/variables.css":
/*!**********************************!*\
  !*** ./src/styles/variables.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://coffeee-house/./src/styles/variables.css?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((module) => {

eval("function getIndex(step, currentIndex, len) {\r\n  if (step == 'prev') {\r\n    let index = currentIndex - 1;\r\n    if (index < 0) {\r\n      index = len - 1;\r\n    }\r\n    return index;\r\n  } else {\r\n    let index = currentIndex + 1;\r\n    if (index >= len) {\r\n      index = 0;\r\n    }\r\n    return index;\r\n  }\r\n}\r\n\r\nmodule.exports = getIndex;\r\n\n\n//# sourceURL=webpack://coffeee-house/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/variables.css */ \"./src/styles/variables.css\");\n/* harmony import */ var _fonts_Inter_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Inter-Regular.woff */ \"./src/fonts/Inter-Regular.woff\");\n/* harmony import */ var _fonts_Inter_Regular_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/Inter-Regular.woff2 */ \"./src/fonts/Inter-Regular.woff2\");\n/* harmony import */ var _fonts_Inter_SemiBold_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Inter-SemiBold.woff */ \"./src/fonts/Inter-SemiBold.woff\");\n/* harmony import */ var _fonts_Inter_SemiBold_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonts/Inter-SemiBold.woff2 */ \"./src/fonts/Inter-SemiBold.woff2\");\n/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fonts/fonts.css */ \"./src/fonts/fonts.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _images_coffee_slider_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/coffee-slider-1.png */ \"./src/images/coffee-slider-1.png\");\n/* harmony import */ var _images_coffee_slider_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/coffee-slider-2.png */ \"./src/images/coffee-slider-2.png\");\n/* harmony import */ var _images_coffee_slider_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/coffee-slider-3.png */ \"./src/images/coffee-slider-3.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Фабрика для создания объектов Coffee\r\nclass CoffeeFactory {\r\n  createCoffee(name, description, cost, img) {\r\n    return new Coffee(name, description, cost, img);\r\n  }\r\n}\r\n\r\nclass Coffee {\r\n  constructor(name, description, cost, img) {\r\n    this.name = name;\r\n    this.img = img;\r\n    this.description = description;\r\n    this.cost = cost;\r\n  }\r\n}\r\n\r\nclass CoffeeSlider {\r\n  constructor(containerId, cardTemplateId, coffeeFactory) {\r\n    this.container = document.getElementById(containerId);\r\n    this.cardTemplate = document.getElementById(cardTemplateId).content;\r\n    this.coffeeFactory = coffeeFactory;\r\n  }\r\n\r\n  createCardElement(coffee) {\r\n    const cardElement = this.cardTemplate.querySelector('.choose__container').cloneNode(true);\r\n    cardElement.querySelector('.choose__img').src = coffee.img;\r\n    cardElement.querySelector('.coffee-name').textContent = coffee.name;\r\n    cardElement.querySelector('.coffee-description').textContent = coffee.description;\r\n    cardElement.querySelector('.cost').textContent = coffee.cost;\r\n    return cardElement;\r\n  }\r\n\r\n  render(coffees) {\r\n    coffees.forEach(coffeeData => {\r\n      // Используем фабрику для создания объектов Coffee\r\n      const coffee = this.coffeeFactory.createCoffee(coffeeData.name, coffeeData.description, coffeeData.cost, coffeeData.img);\r\n      const cardElement = this.createCardElement(coffee);\r\n      this.container.appendChild(cardElement);\r\n    });\r\n  }\r\n}\r\n\r\n\r\nconst coffeeFactory = new CoffeeFactory();\r\n\r\n\r\nconst slider = new CoffeeSlider('slider', 'sliderTemplate', coffeeFactory);\r\n\r\nconst sliderCoffeeData = [\r\n  { name: \"S’mores Frappuccino\", description: \"This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.\", cost: \"$5.50\", img: _images_coffee_slider_1_png__WEBPACK_IMPORTED_MODULE_9__ },\r\n  { name: \"Caramel Macchiato\", description: \"Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.\", cost: \"$5.00\", img: _images_coffee_slider_2_png__WEBPACK_IMPORTED_MODULE_10__ },\r\n  { name: \"Ice coffee\", description: \"A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.\", cost: \"$4.50\", img: _images_coffee_slider_3_png__WEBPACK_IMPORTED_MODULE_11__ },\r\n];\r\n\r\nslider.render(sliderCoffeeData);\r\n\r\n\r\nlet currentIndex = 0;\r\n\r\nfunction showImage(index) {\r\n  const containers = document.querySelectorAll('.choose__container');\r\n  containers[currentIndex].classList.remove('active');\r\n  containers[index].classList.add('active');\r\n  currentIndex = index;\r\n}\r\n\r\ndocument.querySelector('.slider__container').addEventListener('click', function (event) {\r\n  let index = currentIndex; \r\n  if (event.target.classList.contains('prev')) {\r\n    index = _helper_js__WEBPACK_IMPORTED_MODULE_0___default()('prev', currentIndex, containers.length);\r\n  } else if (event.target.classList.contains('next')) {\r\n    index = _helper_js__WEBPACK_IMPORTED_MODULE_0___default()('next', currentIndex, containers.length);\r\n  }\r\n  showImage(index);\r\n});\r\n\r\nconst containers = document.querySelectorAll('.choose__container');\r\ncontainers[currentIndex].classList.add('active');\n\n//# sourceURL=webpack://coffeee-house/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Inter-Regular.woff":
/*!**************************************!*\
  !*** ./src/fonts/Inter-Regular.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fdfaf61524fcecfcedf3.woff\";\n\n//# sourceURL=webpack://coffeee-house/./src/fonts/Inter-Regular.woff?");

/***/ }),

/***/ "./src/fonts/Inter-Regular.woff2":
/*!***************************************!*\
  !*** ./src/fonts/Inter-Regular.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"245d093fadb721900b1d.woff2\";\n\n//# sourceURL=webpack://coffeee-house/./src/fonts/Inter-Regular.woff2?");

/***/ }),

/***/ "./src/fonts/Inter-SemiBold.woff":
/*!***************************************!*\
  !*** ./src/fonts/Inter-SemiBold.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6ee235b11d48180bcaed.woff\";\n\n//# sourceURL=webpack://coffeee-house/./src/fonts/Inter-SemiBold.woff?");

/***/ }),

/***/ "./src/fonts/Inter-SemiBold.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Inter-SemiBold.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e29a4972cbc1a45790be.woff2\";\n\n//# sourceURL=webpack://coffeee-house/./src/fonts/Inter-SemiBold.woff2?");

/***/ }),

/***/ "./src/images/coffee-slider-1.png":
/*!****************************************!*\
  !*** ./src/images/coffee-slider-1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"842c336c4584c3c1aa34.png\";\n\n//# sourceURL=webpack://coffeee-house/./src/images/coffee-slider-1.png?");

/***/ }),

/***/ "./src/images/coffee-slider-2.png":
/*!****************************************!*\
  !*** ./src/images/coffee-slider-2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a7f025aba0f59decfcc6.png\";\n\n//# sourceURL=webpack://coffeee-house/./src/images/coffee-slider-2.png?");

/***/ }),

/***/ "./src/images/coffee-slider-3.png":
/*!****************************************!*\
  !*** ./src/images/coffee-slider-3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9968c2a14bd3e2d1e4dd.png\";\n\n//# sourceURL=webpack://coffeee-house/./src/images/coffee-slider-3.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;