/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bascet.ts":
/*!***********************!*\
  !*** ./src/bascet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar bascetHelper_1 = __webpack_require__(/*! ./helpers/bascetHelper */ \"./src/helpers/bascetHelper.ts\");\r\nvar renderBascetProducts_1 = __webpack_require__(/*! ./renderers/renderBascetProducts */ \"./src/renderers/renderBascetProducts.ts\");\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    console.log(renderBascetProducts_1.default);\r\n    document.getElementById(\"items-list\").innerHTML = (0, renderBascetProducts_1.default)(bascetHelper_1.default.getItemsInBascet());\r\n});\r\n\n\n//# sourceURL=webpack://internet-shop/./src/bascet.ts?");

/***/ }),

/***/ "./src/helpers/bascetHelper.ts":
/*!*************************************!*\
  !*** ./src/helpers/bascetHelper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction getItemsInBascet() {\r\n    var itemsStr = sessionStorage.getItem('bascet-items');\r\n    var items = [];\r\n    if (itemsStr) {\r\n        items = JSON.parse(itemsStr);\r\n    }\r\n    return items;\r\n}\r\nfunction containsElement(item_title) {\r\n    var itemsStr = sessionStorage.getItem('bascet-items');\r\n    if (itemsStr) {\r\n        var items = JSON.parse(itemsStr);\r\n        return items.includes(item_title);\r\n    }\r\n    return false;\r\n}\r\nfunction addElement(item) {\r\n    var items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n    if (!items) {\r\n        items = [];\r\n    }\r\n    items.push(item);\r\n    sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n}\r\nfunction deleteElement(item) {\r\n    var items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n    if (items) {\r\n        var index = items.indexOf(item);\r\n        if (index > -1) {\r\n            items.splice(index, 1);\r\n        }\r\n    }\r\n    sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n}\r\nexports[\"default\"] = { getItemsInBascet: getItemsInBascet, containsElement: containsElement, addElement: addElement, deleteElement: deleteElement };\r\n\n\n//# sourceURL=webpack://internet-shop/./src/helpers/bascetHelper.ts?");

/***/ }),

/***/ "./src/helpers/itemsHelper.ts":
/*!************************************!*\
  !*** ./src/helpers/itemsHelper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction addItem(item) {\r\n    var items = JSON.parse(localStorage.getItem('items'));\r\n    if (!items) {\r\n        items = [];\r\n    }\r\n    items.push(item);\r\n    console.log(items);\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n}\r\nfunction deleteItem(item) {\r\n    var items = JSON.parse(localStorage.getItem('items'));\r\n    if (items) {\r\n        var index = items.indexOf(item);\r\n        if (index > -1) {\r\n            items.splice(index, 1);\r\n        }\r\n    }\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n}\r\nfunction getItems() {\r\n    var items = JSON.parse(localStorage.getItem('items'));\r\n    return items;\r\n}\r\nfunction getItem(itemTitle) {\r\n    var itemsStr = localStorage.getItem('items');\r\n    if (itemsStr) {\r\n        var items = JSON.parse(itemsStr);\r\n        return items.find(function (l) { return l.title === itemTitle; });\r\n    }\r\n    return false;\r\n}\r\nexports[\"default\"] = { addItem: addItem, deleteItem: deleteItem, getItems: getItems, getItem: getItem };\r\n\n\n//# sourceURL=webpack://internet-shop/./src/helpers/itemsHelper.ts?");

/***/ }),

/***/ "./src/renderers/renderBascetProducts.ts":
/*!***********************************************!*\
  !*** ./src/renderers/renderBascetProducts.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar itemsHelper_1 = __webpack_require__(/*! ../helpers/itemsHelper */ \"./src/helpers/itemsHelper.ts\");\r\nfunction renderBascetProducts(items) {\r\n    var html = \"\";\r\n    //itemsHelper.getItems\r\n    if (items) {\r\n        items.forEach(function (element) {\r\n            var elemten = itemsHelper_1.default.getItem(element);\r\n            html += renderBascetProduct(elemten);\r\n        });\r\n    }\r\n    return html;\r\n}\r\nexports[\"default\"] = renderBascetProducts;\r\nfunction renderBascetProduct(item) {\r\n    return \"<div class=\\\"main-contents-list-item\\\">\\n        <img src=\".concat(item.image, \" class=\\\"main-contents-list-item_image\\\">\\n        <h4 class=\\\"main-contents-list-item_title\\\"> \").concat(item.title, \"</h4>\\n            <p class=\\\"main-contents-list-item_description\\\">\\n                    \").concat(item.description, \"\\n            </p>\\n    </div>\");\r\n}\r\n\n\n//# sourceURL=webpack://internet-shop/./src/renderers/renderBascetProducts.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/bascet.ts");
/******/ 	
/******/ })()
;