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

/***/ "./src/Item.js":
/*!*********************!*\
  !*** ./src/Item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\r\n    constructor(title, description, category, image) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.category = category;\r\n        this.image = image;\r\n    }\r\n}\n\n//# sourceURL=webpack://internet-shop/./src/Item.js?");

/***/ }),

/***/ "./src/addItem.js":
/*!************************!*\
  !*** ./src/addItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_categoriesHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/categoriesHelper */ \"./src/helpers/categoriesHelper.js\");\n/* harmony import */ var _helpers_itemsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/itemsHelper */ \"./src/helpers/itemsHelper.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./src/Item.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    document.getElementsByName('category').item(0).innerHTML = _helpers_categoriesHelper__WEBPACK_IMPORTED_MODULE_0__.categories.getCategories().map(t => `<option value=\"${t.id}\">${t.name}</option>`)\r\n    const form = document.getElementById('add-form');\r\n\r\n    form.addEventListener('submit', function (event) {\r\n        event.preventDefault();\r\n        const formData = new FormData(event.target);\r\n        let title = formData.get('title')\r\n\r\n        if (_helpers_itemsHelper__WEBPACK_IMPORTED_MODULE_1__.itemsHelper.getItem(title)) {\r\n            alert('This title already exists!');\r\n            return;\r\n        }\r\n\r\n        _helpers_itemsHelper__WEBPACK_IMPORTED_MODULE_1__.itemsHelper.addItem(new _Item__WEBPACK_IMPORTED_MODULE_2__.Item(title, formData.get('description'), formData.get('category'), formData.get('image')));\r\n        form.reset();\r\n    })\r\n});\r\n\n\n//# sourceURL=webpack://internet-shop/./src/addItem.js?");

/***/ }),

/***/ "./src/helpers/categoriesHelper.js":
/*!*****************************************!*\
  !*** ./src/helpers/categoriesHelper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": () => (/* binding */ categories)\n/* harmony export */ });\nvar categories = (function () {\r\n    var methods = {};\r\n\r\n    methods.getCategories = function () {\r\n        let categoriesStr = localStorage.getItem('categories');\r\n        let categories = [];\r\n\r\n        if (!categoriesStr) {\r\n            categories = [\r\n                { id: '1', name: \"Something nasty\" },\r\n                { id: '2', name: \"Something spicy\" },\r\n                { id: '3', name: \"Something delicious\" },\r\n            ];\r\n\r\n            localStorage.setItem('categories', JSON.stringify(categories));\r\n        } else {\r\n            categories = JSON.parse(categoriesStr);\r\n        }\r\n\r\n        return categories;\r\n    }\r\n\r\n    methods.getItem = function (id) {\r\n        let itemsStr = localStorage.getItem('categories')\r\n\r\n\r\n        let items = JSON.parse(itemsStr);\r\n\r\n        return items.find(l => l.id === id);\r\n    }\r\n\r\n    return methods;\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/helpers/categoriesHelper.js?");

/***/ }),

/***/ "./src/helpers/itemsHelper.js":
/*!************************************!*\
  !*** ./src/helpers/itemsHelper.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsHelper\": () => (/* binding */ itemsHelper)\n/* harmony export */ });\nvar itemsHelper = (function () {\r\n\r\n    var methods = {};\r\n\r\n    methods.addItem = function (item) {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        if (!items) {\r\n            items = [];\r\n        }\r\n\r\n        items.push(item);\r\n        console.log(items);\r\n\r\n        localStorage.setItem('items', JSON.stringify(items));\r\n    }\r\n\r\n    methods.deleteItem = function (item) {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        if (items) {\r\n            let index = items.indexOf(item);\r\n\r\n            if (index > -1) {\r\n                items.splice(index, 1)\r\n            }\r\n        }\r\n\r\n        localStorage.setItem(JSON.stringify(items))\r\n    }\r\n\r\n    methods.getItems = function () {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        return items;\r\n    }\r\n\r\n    methods.getItem = function (itemTitle) {\r\n        let itemsStr = localStorage.getItem('items')\r\n\r\n        if (itemsStr) {\r\n            let items = JSON.parse(itemsStr);\r\n\r\n            return items.find(l => l.title === itemTitle);\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    return methods;\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/helpers/itemsHelper.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/addItem.js");
/******/ 	
/******/ })()
;