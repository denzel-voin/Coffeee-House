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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://coffeee-house/./src/styles/style.css?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((module) => {

eval("function getIndex(step, currentIndex, len) {\n  if (step == 'prev') {\n    let index = currentIndex - 1;\n    if (index < 0) {\n      index = len - 1;\n    }\n    return index;\n  } else {\n    let index = currentIndex + 1;\n    if (index >= len) {\n      index = 0;\n    }\n    return index;\n  }\n}\n\nmodule.exports = getIndex;\n\n\n//# sourceURL=webpack://coffeee-house/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n \n\nclass Coffee {\n  constructor(name, img, description, cost) {\n    this.name = name;\n    this.img = img;\n    this.description = description;\n    this.cost = cost;\n  }\n}\n\nclass CoffeeSlider {\n  constructor(containerId, cardTemplateId) {\n    this.container = document.getElementById(containerId);\n    this.cardTemplate = document.getElementById(cardTemplateId).content;\n  }\n\n  createCardElement(coffee) {\n    const cardElement = this.cardTemplate.querySelector('.choose__container').cloneNode(true);\n    cardElement.querySelector('.choose__img').src = coffee.img;\n    cardElement.querySelector('.coffee-name').textContent = coffee.name;\n    cardElement.querySelector('.coffee-description').textContent = coffee.description;\n    cardElement.querySelector('.cost').textContent = coffee.cost;\n    return cardElement;\n  }\n\n  render(cards) {\n    cards.forEach(coffee => {\n      const cardElement = this.createCardElement(coffee);\n      this.container.appendChild(cardElement);\n    });\n  }\n}\n\nconst slider = new CoffeeSlider('slider', 'sliderTemplate');\n\nconst sliderCoffee = [\n  new Coffee(\"S’mores Frappuccino\", \"<%=require('./images/coffee-slider-1.png')%>\", \"This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.\", \"$5.50\"),\n  new Coffee(\"Caramel Macchiato\", \"<%=require('./images/coffee-slider-2.png')%>\", \"Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.\", \"$5.00\"),\n  new Coffee(\"Ice coffee\", \"<%=require('./images/coffee-slider-3.png')%>\", \"A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.\", \"$4.50\"),\n];\n\nslider.render(sliderCoffee);\n\nlet currentIndex = 0;\n\nfunction showImage(index) {\n  const containers = document.querySelectorAll('.choose__container');\n  containers[currentIndex].classList.remove('active');\n  containers[index].classList.add('active');\n  currentIndex = index;\n}\n\ndocument.querySelector('.slider__container').addEventListener('click', function (event) {\n  console.log('abcdeft eee');\n  let index = currentIndex; \n  console.log('abcdeft eee');\n  if (event.target.classList.contains('prev')) {\n    index = _helper_js__WEBPACK_IMPORTED_MODULE_0___default()('prev', currentIndex, containers.length);\n  } else if (event.target.classList.contains('next')) {\n    index = _helper_js__WEBPACK_IMPORTED_MODULE_0___default()('next', currentIndex, containers.length);\n  }\n  console.log(index);\n  showImage(index);\n});\n\nconst containers = document.querySelectorAll('.choose__container');\ncontainers[currentIndex].classList.add('active');\n\n//# sourceURL=webpack://coffeee-house/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;