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

/***/ "./src/bascetHelper.js":
/*!*****************************!*\
  !*** ./src/bascetHelper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bascet\": () => (/* binding */ bascet)\n/* harmony export */ });\nvar bascet = (function () {\r\n    var methods = {};\r\n\r\n    methods.getItemsInBascet = function () {\r\n        let itemsStr = sessionStorage.getItem('bascet-items');\r\n        let items = [];\r\n\r\n        if (itemsStr) {\r\n            items = JSON.parse(itemsStr);\r\n        }\r\n\r\n        return items;\r\n    }\r\n\r\n    methods.containsElement = function (item_title) {\r\n        let itemsStr = sessionStorage.getItem('bascet-items')\r\n\r\n        if (itemsStr) {\r\n            let items = JSON.parse(itemsStr);\r\n\r\n            return items.includes(item_title);\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    methods.addElement = function (item) {\r\n        let items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n\r\n        if (!items) {\r\n            items = [];\r\n        }\r\n\r\n        items.push(item);\r\n\r\n        sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n    }\r\n\r\n    methods.deleteElement = function (item) {\r\n        let items = JSON.parse(sessionStorage.getItem('bascet-items'));\r\n\r\n        if (items) {\r\n            let index = items.indexOf(item);\r\n            if (index > -1) {\r\n                items.splice(index, 1)\r\n            }\r\n        }\r\n\r\n        sessionStorage.setItem('bascet-items', JSON.stringify(items));\r\n    }\r\n\r\n    return methods\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/bascetHelper.js?");

/***/ }),

/***/ "./src/categoriesHelper.js":
/*!*********************************!*\
  !*** ./src/categoriesHelper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": () => (/* binding */ categories)\n/* harmony export */ });\nvar categories = (function () {\r\n    var methods = {};\r\n\r\n    methods.getCategories = function () {\r\n        let categoriesStr = localStorage.getItem('categories');\r\n        let categories = [];\r\n\r\n        if (!categoriesStr) {\r\n            categories = [\r\n                { id: '1', name: \"Something nasty\" },\r\n                { id: '2', name: \"Something spicy\" },\r\n                { id: '3', name: \"Something delicious\" },\r\n            ];\r\n\r\n            localStorage.setItem('categories', JSON.stringify(categories));\r\n        } else {\r\n            categories = JSON.parse(categoriesStr);\r\n        }\r\n\r\n\r\n\r\n        return categories;\r\n    }\r\n\r\n    return methods;\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/categoriesHelper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bascetHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bascetHelper */ \"./src/bascetHelper.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _itemsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsHelper */ \"./src/itemsHelper.js\");\n/* harmony import */ var _renderCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderCategories */ \"./src/renderCategories.js\");\n/* harmony import */ var _renderProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProducts */ \"./src/renderProducts.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onscroll = function () { onScrollFooter() };\r\n\r\n// Get the header\r\nvar header = document.getElementById(\"header\");\r\n\r\n// Get the offset position of the navbar\r\nvar sticky = header.offsetTop;\r\n\r\n// Add the sticky class to the header when you reach its scroll position. Remove \"sticky\" when you leave the scroll position\r\nfunction onScrollFooter() {\r\n  if (window.pageYOffset > sticky) {\r\n    header.classList.add(\"sticky\");\r\n  } else {\r\n    header.classList.remove(\"sticky\");\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  document.getElementById(\"items-list\").innerHTML = (0,_renderProducts__WEBPACK_IMPORTED_MODULE_4__.renderProducts)();\r\n  document.getElementById(\"bascet-count\").innerHTML = _bascetHelper__WEBPACK_IMPORTED_MODULE_0__.bascet.getItemsInBascet().length;\r\n  document.getElementById('categories').innerHTML = (0,_renderCategories__WEBPACK_IMPORTED_MODULE_3__.renderCategories)();\r\n\r\n  document.querySelectorAll(\".main-contents-list-item_addToBascet\").forEach((button) => {\r\n\r\n    button.addEventListener(\"click\", (event) => {\r\n      let element = event.target;\r\n      let key = event.target.getAttribute(\"key\");\r\n\r\n      if (_bascetHelper__WEBPACK_IMPORTED_MODULE_0__.bascet.containsElement(key)) {\r\n        element.innerHTML = \"Add to bascet\";\r\n        _bascetHelper__WEBPACK_IMPORTED_MODULE_0__.bascet.deleteElement(key);\r\n      } else {\r\n        element.innerHTML = \"Added to bascet\";\r\n        _bascetHelper__WEBPACK_IMPORTED_MODULE_0__.bascet.addElement(key);\r\n      }\r\n\r\n      document.getElementById(\"bascet-count\").innerHTML = _bascetHelper__WEBPACK_IMPORTED_MODULE_0__.bascet.getItemsInBascet().length;\r\n    });\r\n\r\n  });\r\n});\n\n//# sourceURL=webpack://internet-shop/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\r\n    constructor(title, description, category, image) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.category = category;\r\n        this.image = image;\r\n    }\r\n}\n\n//# sourceURL=webpack://internet-shop/./src/item.js?");

/***/ }),

/***/ "./src/itemsHelper.js":
/*!****************************!*\
  !*** ./src/itemsHelper.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsHelper\": () => (/* binding */ itemsHelper)\n/* harmony export */ });\nvar itemsHelper = (function () {\r\n\r\n    var methods = {};\r\n\r\n    methods.addItem = function (item) {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        if (!items) {\r\n            items = [];\r\n        }\r\n\r\n        items.push(item);\r\n        console.log(items);\r\n\r\n        localStorage.setItem('items', JSON.stringify(items));\r\n    }\r\n\r\n    methods.deleteItem = function (item) {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        if (items) {\r\n            let index = items.indexOf(item);\r\n\r\n            if (index > -1) {\r\n                items.splice(index, 1)\r\n            }\r\n        }\r\n\r\n        localStorage.setItem(JSON.stringify(items))\r\n    }\r\n\r\n    methods.getItems = function () {\r\n        let items = JSON.parse(localStorage.getItem('items'));\r\n\r\n        return items;\r\n    }\r\n\r\n    return methods;\r\n})();\n\n//# sourceURL=webpack://internet-shop/./src/itemsHelper.js?");

/***/ }),

/***/ "./src/renderCategories.js":
/*!*********************************!*\
  !*** ./src/renderCategories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCategories\": () => (/* binding */ renderCategories)\n/* harmony export */ });\n/* harmony import */ var _categoriesHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoriesHelper */ \"./src/categoriesHelper.js\");\n\r\n\r\nfunction renderCategories() {\r\n    let html = \"\";\r\n    let cat = _categoriesHelper__WEBPACK_IMPORTED_MODULE_0__.categories.getCategories();\r\n    cat.forEach(element => {\r\n        html += `<a id='category-${element.id}' key=${element.id} href=\"#\" class=\"pill-link filter-category\">${element.name}</a>`;\r\n    });\r\n\r\n    return html;\r\n}\n\n//# sourceURL=webpack://internet-shop/./src/renderCategories.js?");

/***/ }),

/***/ "./src/renderProduct.js":
/*!******************************!*\
  !*** ./src/renderProduct.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderItem\": () => (/* binding */ renderItem)\n/* harmony export */ });\nfunction renderItem(item, isInBascet = false) {\r\n\r\n    const buttonContent = `<button id='item-${item.title}' key=${item.title} class=\"main-contents-list-item_addToBascet\">${isInBascet ? \"Added\" : \"Add to bascet\"}</button>`;\r\n\r\n    return (`<div class=\"main-contents-list-item\">\r\n        <img src='${item.image}' class=\"main-contents-list-item_image\" />\r\n        <h4 class=\"main-contents-list-item_title\">${item.title}</h4>\r\n        <p class=\"main-contents-list-item_description\">\r\n            ${item.description}\r\n        </p>\r\n        <p class=\"main-contents-list-item_category\">\r\n           Category: ${item.category}\r\n        </p>\r\n        ${buttonContent}\r\n    </div>`);\r\n}\n\n//# sourceURL=webpack://internet-shop/./src/renderProduct.js?");

/***/ }),

/***/ "./src/renderProducts.js":
/*!*******************************!*\
  !*** ./src/renderProducts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProducts\": () => (/* binding */ renderProducts)\n/* harmony export */ });\n/* harmony import */ var _bascetHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bascetHelper */ \"./src/bascetHelper.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _itemsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsHelper */ \"./src/itemsHelper.js\");\n/* harmony import */ var _renderProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProduct */ \"./src/renderProduct.js\");\n\r\n\r\n\r\n\r\n\r\nfunction renderProducts() {\r\n    let html = \"\";\r\n    //itemsHelper.getItems\r\n    let items = _itemsHelper__WEBPACK_IMPORTED_MODULE_2__.itemsHelper.getItems();\r\n\r\n    if (items) {\r\n        items.forEach(element => {\r\n            let isInBascet = _bascetHelper__WEBPACK_IMPORTED_MODULE_0__.bascet.containsElement(element.title);\r\n\r\n            html += (0,_renderProduct__WEBPACK_IMPORTED_MODULE_3__.renderItem)(element, isInBascet);\r\n        });\r\n    }\r\n\r\n    return html;\r\n}\n\n//# sourceURL=webpack://internet-shop/./src/renderProducts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;