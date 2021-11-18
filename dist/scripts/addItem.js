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

/***/ "./src/addItem.ts":
/*!************************!*\
  !*** ./src/addItem.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar categoriesHelper_1 = __webpack_require__(/*! ./helpers/categoriesHelper */ \"./src/helpers/categoriesHelper.ts\");\r\nvar itemsHelper_1 = __webpack_require__(/*! ./helpers/itemsHelper */ \"./src/helpers/itemsHelper.ts\");\r\nvar form = document.getElementById('add-form');\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    document.getElementsByName('category').item(0).innerHTML = categoriesHelper_1.default.getCategories().map(function (t) { return \"<option value=\\\"\".concat(t.id, \"\\\">\").concat(t.name, \"</option>\"); }).toString();\r\n    form.addEventListener('submit', onClick(form));\r\n});\r\nfunction onClick(form) {\r\n    return function (event) {\r\n        event.preventDefault();\r\n        var formData = new FormData(event.target);\r\n        var title = formData.get('title').valueOf();\r\n        if (itemsHelper_1.default.getItem(title)) {\r\n            alert('This title already exists!');\r\n            return;\r\n        }\r\n        var description = formData.get('description').valueOf(), category = formData.get('category').valueOf(), image = formData.get('image').valueOf();\r\n        var item = { title: title, descritpion: description, category: category, image: image };\r\n        // title, , formData.get('category'), formData.get('image'))\r\n        itemsHelper_1.default.addItem(item);\r\n        form.reset();\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://internet-shop/./src/addItem.ts?");

/***/ }),

/***/ "./src/helpers/categoriesHelper.ts":
/*!*****************************************!*\
  !*** ./src/helpers/categoriesHelper.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction getCategories() {\r\n    var categoriesStr = localStorage.getItem('categories');\r\n    var categories = [];\r\n    if (!categoriesStr) {\r\n        categories = [\r\n            { id: '1', name: \"Something nasty\" },\r\n            { id: '2', name: \"Something spicy\" },\r\n            { id: '3', name: \"Something delicious\" },\r\n        ];\r\n        localStorage.setItem('categories', JSON.stringify(categories));\r\n    }\r\n    else {\r\n        categories = JSON.parse(categoriesStr);\r\n    }\r\n    return categories;\r\n}\r\nfunction getItem(id) {\r\n    var itemsStr = localStorage.getItem('categories');\r\n    var items = JSON.parse(itemsStr);\r\n    return items.find(function (l) { return l.id === id; });\r\n}\r\nexports[\"default\"] = { getCategories: getCategories, getItem: getItem };\r\n\n\n//# sourceURL=webpack://internet-shop/./src/helpers/categoriesHelper.ts?");

/***/ }),

/***/ "./src/helpers/itemsHelper.ts":
/*!************************************!*\
  !*** ./src/helpers/itemsHelper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction addItem(item) {\r\n    var items = JSON.parse(localStorage.getItem('items'));\r\n    if (!items) {\r\n        items = [];\r\n    }\r\n    items.push(item);\r\n    console.log(items);\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n}\r\nfunction deleteItem(item) {\r\n    var items = JSON.parse(localStorage.getItem('items'));\r\n    if (items) {\r\n        var index = items.indexOf(item);\r\n        if (index > -1) {\r\n            items.splice(index, 1);\r\n        }\r\n    }\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n}\r\nfunction getItems() {\r\n    var items = JSON.parse(localStorage.getItem('items'));\r\n    return items;\r\n}\r\nfunction getItem(itemTitle) {\r\n    var itemsStr = localStorage.getItem('items');\r\n    if (itemsStr) {\r\n        var items = JSON.parse(itemsStr);\r\n        return items.find(function (l) { return l.title === itemTitle; });\r\n    }\r\n    return false;\r\n}\r\nexports[\"default\"] = { addItem: addItem, deleteItem: deleteItem, getItems: getItems, getItem: getItem };\r\n\n\n//# sourceURL=webpack://internet-shop/./src/helpers/itemsHelper.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/addItem.ts");
/******/ 	
/******/ })()
;