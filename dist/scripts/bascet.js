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

/***/ "./src/bascet.js":
/*!***********************!*\
  !*** ./src/bascet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { bascet } = __webpack_require__(/*! ./helpers/bascetHelper */ \"./src/helpers/bascetHelper.js\");\r\nconst { renderBascetProducts } = __webpack_require__(/*! ./renderBascetProducts */ \"./src/renderBascetProducts.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    document.getElementById(\"items-list\").innerHTML = renderBascetProducts(bascet.getItemsInBascet());\r\n});\n\n//# sourceURL=webpack://internet-shop/./src/bascet.js?");

/***/ }),

/***/ "./src/helpers/bascetHelper.js":
/*!*************************************!*\
  !*** ./src/helpers/bascetHelper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bascet\": () => (/* binding */ bascet)\n/* harmony export */ });\nvar bascet = (function () {\r\n    var methods = {};\r\n\r\n    methods.getItemsInBascet = function () {\r\n        let itemsStr = sessionStorage.getItem('bascet-items');\r\n        let items = [];\r\n\r\n        if (itemsStr) {\r\n            items = JSON.parse(itemsStr);\r\n        }\r\n\r\n        return items;\r\n    }\r\n\r\n    methods.containsElement = function (item_title) {\r\n        let itemsStr = sessionStorage.getItem('bascet-items')\r\n\r\n        if (itemsStr) {\r\n            let items = JSON.parse(itemsStr);\r\n\r\n            return items.includes(item_title);\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    methods.addElement = function (item) {\r\n        let items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n\r\n        if (!items) {\r\n            items = [];\r\n        }\r\n\r\n        items.push(item);\r\n\r\n        sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n    }\r\n\r\n    methods.deleteElement = function (item) {\r\n        let items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n\r\n        if (items) {\r\n            let index = items.indexOf(item);\r\n            if (index > -1) {\r\n                items.splice(index, 1)\r\n            }\r\n        }\r\n\r\n        sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n    }\r\n\r\n    return methods\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/helpers/bascetHelper.js?");

/***/ }),

/***/ "./src/helpers/itemsHelper.js":
/*!************************************!*\
  !*** ./src/helpers/itemsHelper.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsHelper\": () => (/* binding */ itemsHelper)\n/* harmony export */ });\nvar itemsHelper = (function () {\r\n\r\n    var methods = {};\r\n\r\n    methods.addItem = function (item) {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        if (!items) {\r\n            items = [];\r\n        }\r\n\r\n        items.push(item);\r\n        console.log(items);\r\n\r\n        localStorage.setItem('items', JSON.stringify(items));\r\n    }\r\n\r\n    methods.deleteItem = function (item) {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        if (items) {\r\n            let index = items.indexOf(item);\r\n\r\n            if (index > -1) {\r\n                items.splice(index, 1)\r\n            }\r\n        }\r\n\r\n        localStorage.setItem(JSON.stringify(items))\r\n    }\r\n\r\n    methods.getItems = function () {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        return items;\r\n    }\r\n\r\n    methods.getItem = function (itemTitle) {\r\n        let itemsStr = localStorage.getItem('items')\r\n\r\n        if (itemsStr) {\r\n            let items = JSON.parse(itemsStr);\r\n\r\n            return items.find(l => l.title === itemTitle);\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    return methods;\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/helpers/itemsHelper.js?");

/***/ }),

/***/ "./src/renderBascetProducts.js":
/*!*************************************!*\
  !*** ./src/renderBascetProducts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBascetProducts\": () => (/* binding */ renderBascetProducts)\n/* harmony export */ });\n/* harmony import */ var _helpers_itemsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/itemsHelper */ \"./src/helpers/itemsHelper.js\");\n\r\n\r\nfunction renderBascetProducts(items) {\r\n    let html = \"\";\r\n    //itemsHelper.getItems\r\n\r\n    if (items) {\r\n        items.forEach(element => {\r\n            let elemten = _helpers_itemsHelper__WEBPACK_IMPORTED_MODULE_0__.itemsHelper.getItem(element);\r\n\r\n            html += renderBascetProduct(elemten);\r\n        });\r\n    }\r\n\r\n    return html;\r\n}\r\nfunction renderBascetProduct(item) {\r\n    return `<div class=\"main-contents-list-item\">\r\n        <img src=${item.image} class=\"main-contents-list-item_image\">\r\n        <h4 class=\"main-contents-list-item_title\"> ${item.title}</h4>\r\n            <p class=\"main-contents-list-item_description\">\r\n                    ${item.description}\r\n            </p>\r\n    </div>`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://internet-shop/./src/renderBascetProducts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/bascet.js");
/******/ 	
/******/ })()
;