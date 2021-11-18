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

/***/ "./src/header.ts":
/*!***********************!*\
  !*** ./src/header.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.configureHeader = void 0;\r\nfunction configureHeader() {\r\n    window.onscroll = function () { return onScrollFooter(); };\r\n    // Get the header\r\n    var header = document.getElementById(\"header\");\r\n    // Get the offset position of the navbar\r\n    var sticky = header.offsetTop;\r\n    // Add the sticky class to the header when you reach its scroll position. Remove \"sticky\" when you leave the scroll position\r\n    function onScrollFooter() {\r\n        if (window.pageYOffset > sticky) {\r\n            header.classList.add(\"sticky\");\r\n        }\r\n        else {\r\n            header.classList.remove(\"sticky\");\r\n        }\r\n    }\r\n}\r\nexports.configureHeader = configureHeader;\r\n\n\n//# sourceURL=webpack://internet-shop/./src/header.ts?");

/***/ }),

/***/ "./src/helpers/bascetHelper.ts":
/*!*************************************!*\
  !*** ./src/helpers/bascetHelper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction getItemsInBascet() {\r\n    var itemsStr = sessionStorage.getItem('bascet-items');\r\n    var items = [];\r\n    if (itemsStr) {\r\n        items = JSON.parse(itemsStr);\r\n    }\r\n    return items;\r\n}\r\nfunction containsElement(item_title) {\r\n    var itemsStr = sessionStorage.getItem('bascet-items');\r\n    if (itemsStr) {\r\n        var items = JSON.parse(itemsStr);\r\n        return items.includes(item_title);\r\n    }\r\n    return false;\r\n}\r\nfunction addElement(item) {\r\n    var items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n    if (!items) {\r\n        items = [];\r\n    }\r\n    items.push(item);\r\n    sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n}\r\nfunction deleteElement(item) {\r\n    var items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n    if (items) {\r\n        var index = items.indexOf(item);\r\n        if (index > -1) {\r\n            items.splice(index, 1);\r\n        }\r\n    }\r\n    sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n}\r\nexports[\"default\"] = { getItemsInBascet: getItemsInBascet, containsElement: containsElement, addElement: addElement, deleteElement: deleteElement };\r\n\n\n//# sourceURL=webpack://internet-shop/./src/helpers/bascetHelper.ts?");

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

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar header_1 = __webpack_require__(/*! ./header */ \"./src/header.ts\");\r\nvar indexModule_1 = __webpack_require__(/*! ./indexModule */ \"./src/indexModule.ts\");\r\n(0, header_1.configureHeader)();\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    indexModule_1.default.InitElements();\r\n    document.querySelectorAll(\".main-contents-list-item_addToBascet\").forEach(function (button) {\r\n        button.addEventListener(\"click\", indexModule_1.default.clickBascetEvent);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://internet-shop/./src/index.ts?");

/***/ }),

/***/ "./src/indexModule.ts":
/*!****************************!*\
  !*** ./src/indexModule.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar renderCategories_1 = __webpack_require__(/*! ./renderers/renderCategories */ \"./src/renderers/renderCategories.ts\");\r\nvar renderProducts_1 = __webpack_require__(/*! ./renderers/renderProducts */ \"./src/renderers/renderProducts.ts\");\r\nvar bascetHelper_1 = __webpack_require__(/*! ./helpers/bascetHelper */ \"./src/helpers/bascetHelper.ts\");\r\nvar itemsHelper_1 = __webpack_require__(/*! ./helpers/itemsHelper */ \"./src/helpers/itemsHelper.ts\");\r\nvar categoriesHelper_1 = __webpack_require__(/*! ./helpers/categoriesHelper */ \"./src/helpers/categoriesHelper.ts\");\r\nfunction filterItems() {\r\n    var params = (new URL(document.location.toString())).searchParams;\r\n    var filter = params.get('filter');\r\n    var items = itemsHelper_1.default.getItems();\r\n    if (filter) {\r\n        items = items.filter(function (i) { return i.category === filter; });\r\n    }\r\n    return items;\r\n}\r\nfunction clickBascetEvent(event) {\r\n    var element = event.target;\r\n    var key = event.target.getAttribute(\"key\");\r\n    element.classList.toggle(\"main-contents-list-item_addedToBascet\");\r\n    if (bascetHelper_1.default.containsElement(key)) {\r\n        element.innerHTML = \"Add to bascet\";\r\n        bascetHelper_1.default.deleteElement(key);\r\n    }\r\n    else {\r\n        element.innerHTML = \"Added to bascet\";\r\n        bascetHelper_1.default.addElement(key);\r\n    }\r\n    document.getElementById(\"bascet-count\").innerHTML = bascetHelper_1.default.getItemsInBascet().length.toString();\r\n}\r\nfunction InitElements() {\r\n    var filteredItems = filterItems();\r\n    document.getElementById(\"items-list\").innerHTML = (0, renderProducts_1.default)(filteredItems);\r\n    document.getElementById(\"bascet-count\").innerHTML = bascetHelper_1.default.getItemsInBascet().length.toString();\r\n    document.getElementById('categories').innerHTML = (0, renderCategories_1.default)(categoriesHelper_1.default.getCategories());\r\n}\r\nexports[\"default\"] = { InitElements: InitElements, clickBascetEvent: clickBascetEvent, filterItems: filterItems };\r\n\n\n//# sourceURL=webpack://internet-shop/./src/indexModule.ts?");

/***/ }),

/***/ "./src/renderers/renderCategories.ts":
/*!*******************************************!*\
  !*** ./src/renderers/renderCategories.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction renderCategories(categories) {\r\n    var html = '<a id=\"all-categories\" key=\"category-unknown\" href=\"?\" class=\"pill-link filter-category\">All</a>';\r\n    categories.forEach(function (element) {\r\n        html += \"<a id='category-\".concat(element.id, \"' key=\").concat(element.id, \" href=\\\"?filter=\").concat(element.id, \"\\\" class=\\\"pill-link filter-category\\\">\").concat(element.name, \"</a>\");\r\n    });\r\n    return html;\r\n}\r\nexports[\"default\"] = renderCategories;\r\n\n\n//# sourceURL=webpack://internet-shop/./src/renderers/renderCategories.ts?");

/***/ }),

/***/ "./src/renderers/renderProduct.ts":
/*!****************************************!*\
  !*** ./src/renderers/renderProduct.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar categoriesHelper_1 = __webpack_require__(/*! ../helpers/categoriesHelper */ \"./src/helpers/categoriesHelper.ts\");\r\nfunction renderItem(item, isInBascet) {\r\n    if (isInBascet === void 0) { isInBascet = false; }\r\n    var categoryName = categoriesHelper_1.default.getItem(item.category);\r\n    var buttonContent = \"<button id='item-\".concat(item.title, \"' key=\").concat(item.title, \" \\n    class=\\\"main-contents-list-item_addToBascet \").concat(isInBascet ? \"main-contents-list-item_addedToBascet\" : \"\", \"\\\">\\n        \").concat(isInBascet ? \"Added to bascet\" : \"Add to bascet\", \"\\n    </button>\");\r\n    return (\"<div class=\\\"main-contents-list-item\\\">\\n        <img src='\".concat(item.image, \"' class=\\\"main-contents-list-item_image\\\" />\\n        <h4 class=\\\"main-contents-list-item_title\\\">\").concat(item.title, \"</h4>\\n        <p class=\\\"main-contents-list-item_description\\\">\\n            \").concat(item.description, \"\\n        </p>\\n        <p class=\\\"main-contents-list-item_category\\\">\\n           Category: \").concat(categoryName.name, \"\\n        </p>\\n        \").concat(buttonContent, \"\\n    </div>\"));\r\n}\r\nexports[\"default\"] = renderItem;\r\n\n\n//# sourceURL=webpack://internet-shop/./src/renderers/renderProduct.ts?");

/***/ }),

/***/ "./src/renderers/renderProducts.ts":
/*!*****************************************!*\
  !*** ./src/renderers/renderProducts.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar bascetHelper_1 = __webpack_require__(/*! ../helpers/bascetHelper */ \"./src/helpers/bascetHelper.ts\");\r\nvar renderProduct_1 = __webpack_require__(/*! ./renderProduct */ \"./src/renderers/renderProduct.ts\");\r\nfunction renderProducts(items) {\r\n    var html = \"\";\r\n    if (items) {\r\n        items.forEach(function (element) {\r\n            var isInBascet = bascetHelper_1.default.containsElement(element.title);\r\n            html += (0, renderProduct_1.default)(element, isInBascet);\r\n        });\r\n    }\r\n    return html;\r\n}\r\nexports[\"default\"] = renderProducts;\r\n\n\n//# sourceURL=webpack://internet-shop/./src/renderers/renderProducts.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;