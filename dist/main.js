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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* #091d11;\r\n    #285430;\r\n*/\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n#content {\r\n    font-family: \"Montserrat\";\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-bottom: solid 1px #091d11;\r\n    margin-bottom: 20px;\r\n    padding: 20px;\r\n    /* width: 1000px; */\r\n}\r\n\r\n.nav ul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    width: 1000px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.nav ul a {\r\n    color: #285430;\r\n    font-size: 24px;\r\n    padding: 10px 30px;\r\n    border-radius: 5px;\r\n}\r\n.nav ul a:hover {\r\n    background-color: #285430;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n/* ============================================================== */\r\n/*Home Section  */\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n.homeContainer {\r\n    width: 1000px;\r\n    border: 1px solid black;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 10px;\r\n}\r\n.homeContainer h1 {\r\n    text-align: center;\r\n}\r\n\r\n.hoursOfOp {\r\n    text-align: center;\r\n}\r\n.location {\r\n    text-align: center;\r\n}\r\n\r\n.hoursOfOp ul {\r\n    list-style-type: none;\r\n}\r\n.hoursOfOp ul li {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n/* ================================================================== */\r\n/* Menu Section */\r\n.menuContainer {\r\n    border: 1px solid black;\r\n    width: 1000px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* text-align: center; */\r\n}\r\n.menuContainer h1 {\r\n    margin: 10px 0;\r\n}\r\n.menuContainer h2 {\r\n    text-align: center;\r\n    margin: 10px 0;\r\n}\r\n.cardMenuDiv {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.card {\r\n    border: 1px solid black;\r\n    width: 20%;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-items: ; */\r\n    justify-content: space-between;\r\n    border-radius: 5px;\r\n    /* width: auto; */\r\n}\r\n.card img {\r\n}\r\n.descDiv {\r\n    width: 100%;\r\n}\r\n.menuImage {\r\n    width: 100%;\r\n}\r\n/* ================================================================ */\r\n/* Contact Section */\r\n.contactContainer {\r\n    width: 1000px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.contactContainer h1 {\r\n    align-self: center;\r\n}\r\n.directContact {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    border: 1px solid #091d11;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.directContact ul {\r\n    list-style-type: none;\r\n}\r\n.image-div {\r\n    width: 20%;\r\n    border-radius: 5px;\r\n}\r\n.image-div img {\r\n    border-radius: 5px;\r\n}\r\n\r\n.socialMediaDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border: 1px solid #091d11;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.socialMediaDiv ul {\r\n    list-style-type: none;\r\n}\r\n.socialMediaDiv ul li a:hover {\r\n    color: #091d11;\r\n    cursor: pointer;\r\n}\r\n\r\n.footer {\r\n    text-align: center;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n.underlined {\r\n    border-bottom: solid 3px black;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactContent)\n/* harmony export */ });\n/* harmony import */ var _person_cooking_meats_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person-cooking-meats.png */ \"./src/person-cooking-meats.png\");\n\r\n\r\nfunction contactContent() {\r\n    const content = document.querySelector(\"#content\");\r\n    const contactContainer = document.createElement(\"div\");\r\n    const contactH1 = document.createElement(\"h1\");\r\n    contactContainer.setAttribute(\"class\", \"contactContainer\");\r\n\r\n    content.appendChild(contactContainer);\r\n    contactContainer.appendChild(contactH1);\r\n    contactH1.textContent = \"Contact Us\";\r\n\r\n    // =================== contact directly div\r\n    const directContact = document.createElement(\"div\");\r\n    const directContactInDiv = document.createElement(\"div\");\r\n    const directContactH2 = document.createElement(\"h2\");\r\n    directContact.setAttribute(\"class\", \"directContact\");\r\n\r\n    contactContainer.appendChild(directContact);\r\n    directContact.appendChild(directContactInDiv);\r\n\r\n    directContactInDiv.appendChild(directContactH2);\r\n    directContactH2.textContent = \"Contact us directly\";\r\n\r\n    // contact directly list\r\n    const directContactListUl = document.createElement(\"ul\");\r\n    const directContactList1 = document.createElement(\"li\");\r\n    const directContactList2 = document.createElement(\"li\");\r\n    const directContactList3 = document.createElement(\"li\");\r\n\r\n    // image\r\n    const imageDiv = document.createElement(\"div\");\r\n    imageDiv.setAttribute(\"class\", \"image-div\");\r\n    const mySteak = new Image();\r\n    mySteak.src = _person_cooking_meats_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    imageDiv.appendChild(mySteak);\r\n    directContact.appendChild(imageDiv);\r\n\r\n    directContactInDiv.appendChild(directContactListUl);\r\n    directContactListUl.appendChild(directContactList1);\r\n    directContactListUl.appendChild(directContactList2);\r\n    directContactListUl.appendChild(directContactList3);\r\n\r\n    directContactList1.textContent = \"Restaurant's Manager\";\r\n    directContactList2.textContent = \"Phone #: 012-345-6789\";\r\n    directContactList3.textContent =\r\n        \"Email: Stansdelicousfakerestaurant@gmail.com\";\r\n\r\n    // contact through our social media\r\n    const socialMediaDIv = document.createElement(\"div\");\r\n    const socialMediaH2 = document.createElement(\"h2\");\r\n\r\n    const socialMediaUl = document.createElement(\"ul\");\r\n    const socialMediaList1 = document.createElement(\"li\");\r\n    const socialMediaList2 = document.createElement(\"li\");\r\n    const socialMediaList3 = document.createElement(\"li\");\r\n\r\n    const socialMediaLink1 = document.createElement(\"a\");\r\n    const socialMediaLink2 = document.createElement(\"a\");\r\n    const socialMediaLink3 = document.createElement(\"a\");\r\n\r\n    socialMediaDIv.setAttribute(\"class\", \"socialMediaDiv\");\r\n\r\n    contactContainer.appendChild(socialMediaDIv);\r\n    socialMediaDIv.appendChild(socialMediaH2);\r\n    socialMediaDIv.appendChild(socialMediaUl);\r\n\r\n    socialMediaUl.appendChild(socialMediaList1);\r\n    socialMediaUl.appendChild(socialMediaList2);\r\n    socialMediaUl.appendChild(socialMediaList3);\r\n\r\n    socialMediaList1.appendChild(socialMediaLink1);\r\n    socialMediaList2.appendChild(socialMediaLink2);\r\n    socialMediaList3.appendChild(socialMediaLink3);\r\n\r\n    socialMediaH2.textContent = \"Our Social Medias\";\r\n    socialMediaLink1.textContent = \"Twitter\";\r\n    socialMediaLink2.textContent = \"Instangram\";\r\n    socialMediaLink3.textContent = \"Facebook Meta\";\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footerFunc)\n/* harmony export */ });\nfunction footerFunc() {\r\n    const footer = document.querySelector(\".footer\");\r\n    const footerH2 = document.querySelector(\"h2\");\r\n    footerH2.textContent = \"Footer Section\";\r\n    footer.appendChild(footerH2);\r\n    console.log(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeContent)\n/* harmony export */ });\n/* harmony import */ var _smallAboutUsParagraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smallAboutUsParagraph */ \"./src/smallAboutUsParagraph.js\");\n/* harmony import */ var _meat_with_vegetables_2_0_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meat-with-vegetables-2.0.png */ \"./src/meat-with-vegetables-2.0.png\");\n// import \"./style.css\";\r\n\r\n\r\n\r\nfunction homeContent() {\r\n    const homePageContent = document.querySelector(\"#content\");\r\n\r\n    const homeContainer = document.createElement(\"div\");\r\n    const restaurantName = document.createElement(\"h1\");\r\n    const restaurantPic = document.createElement(\"div\");\r\n    const aboutUs = document.createElement(\"div\");\r\n    const aboutUsH2 = document.createElement(\"h2\");\r\n    const aboutUsP = document.createElement(\"p\");\r\n    const hoursOfOp = document.createElement(\"div\");\r\n    const hourH2 = document.createElement(\"h2\");\r\n\r\n    const hoursList = document.createElement(\"ul\");\r\n    const listOfHours = document.createElement(\"li\");\r\n    const listOfHours2 = document.createElement(\"li\");\r\n    const listOfHours3 = document.createElement(\"li\");\r\n    const listOfHours4 = document.createElement(\"li\");\r\n    const listOfHours5 = document.createElement(\"li\");\r\n    const listOfHours6 = document.createElement(\"li\");\r\n    const listOfHours7 = document.createElement(\"li\");\r\n\r\n    const location = document.createElement(\"div\");\r\n    const locationH2 = document.createElement(\"h2\");\r\n    const locationP = document.createElement(\"p\");\r\n\r\n    console.log(homePageContent);\r\n\r\n    const mySteak = new Image();\r\n    mySteak.src = _meat_with_vegetables_2_0_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    restaurantPic.appendChild(mySteak);\r\n\r\n    hoursOfOp.setAttribute(\"class\", \"hoursOfOp\");\r\n    homePageContent.appendChild(homeContainer);\r\n\r\n    homeContainer.appendChild(restaurantName);\r\n    homeContainer.appendChild(restaurantPic);\r\n    homeContainer.appendChild(aboutUs);\r\n    homeContainer.appendChild(hoursOfOp);\r\n    homeContainer.appendChild(location);\r\n\r\n    aboutUs.appendChild(aboutUsH2);\r\n    aboutUs.appendChild(aboutUsP);\r\n\r\n    hoursOfOp.appendChild(hourH2);\r\n    hoursOfOp.appendChild(hoursList);\r\n    hoursList.appendChild(listOfHours);\r\n    hoursList.appendChild(listOfHours2);\r\n    hoursList.appendChild(listOfHours3);\r\n    hoursList.appendChild(listOfHours4);\r\n    hoursList.appendChild(listOfHours5);\r\n    hoursList.appendChild(listOfHours6);\r\n    hoursList.appendChild(listOfHours7);\r\n    // hoursList.appendChild(listOfHours6);\r\n\r\n    location.appendChild(locationH2);\r\n    location.appendChild(locationP);\r\n\r\n    homeContainer.setAttribute(\"class\", \"homeContainer\");\r\n    restaurantPic.setAttribute(\"class\", \"restaurantPic\");\r\n    location.setAttribute(\"class\", \"location\");\r\n\r\n    restaurantName.textContent = \"Stan's Delicious\";\r\n    aboutUsH2.textContent = \"About Us\";\r\n    aboutUsP.textContent = (0,_smallAboutUsParagraph__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    hourH2.textContent = \"Hours of Operation\";\r\n    listOfHours.textContent = \" Sunday: 8am - 11pm\";\r\n    listOfHours2.textContent = \" Monday: 8am - 11pm\";\r\n    listOfHours3.textContent = \" Tuesday: 8am - 11pm\";\r\n    listOfHours4.textContent = \" Wednesday: 8am - 11pm\";\r\n    listOfHours5.textContent = \" Thursday: 8am - 11pm\";\r\n    listOfHours6.textContent = \" Friday: 8am - 11pm\";\r\n    listOfHours7.textContent = \" Saturday: 8am - 11pm\";\r\n\r\n    locationH2.textContent = \"Location\";\r\n    locationP.textContent = `1234 Elm Street Cityville, Stateborough 56789 Countryland`;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuContent)\n/* harmony export */ });\n/* harmony import */ var _Oleato_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Oleato.jpg */ \"./src/Oleato.jpg\");\n/* harmony import */ var _hot_coffees_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hot-coffees.jpg */ \"./src/hot-coffees.jpg\");\n/* harmony import */ var _Tea_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tea.jpg */ \"./src/Tea.jpg\");\n/* harmony import */ var _cold_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cold-drinks.jpg */ \"./src/cold-drinks.jpg\");\n/* harmony import */ var _Bakery_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bakery.jpg */ \"./src/Bakery.jpg\");\n/* harmony import */ var _Breakfast_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Breakfast.jpg */ \"./src/Breakfast.jpg\");\n/* harmony import */ var _lunch_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lunch.jpg */ \"./src/lunch.jpg\");\n/* harmony import */ var _Steak_Unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Steak-Unsplash.jpg */ \"./src/Steak-Unsplash.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst drinkContentFunction = function (object) {\r\n    // ===================== drinks ============================\r\n    object.menuContainer.appendChild(object.drinkDiv);\r\n    object.drinkDiv.appendChild(object.drinkH2);\r\n    object.drinkH2.textContent = \"Drinks\";\r\n\r\n    // ================= drinklist =============================\r\n    object.drinkCardMenus.setAttribute(\"class\", \"cardMenuDiv\");\r\n\r\n    // cards\r\n    object.drinkCard1.setAttribute(\"class\", \"card drinkCard1\");\r\n    object.drinkCard2.setAttribute(\"class\", \"card drinkCard2\");\r\n    object.drinkCard3.setAttribute(\"class\", \"card drinkCard2\");\r\n    object.drinkCard4.setAttribute(\"class\", \"card drinkCard4\");\r\n\r\n    // descriptionDivs\r\n    object.drinkDescriptionDiv.setAttribute(\"class\", \"descDiv\");\r\n    object.drinkDescriptionDiv2.setAttribute(\"class\", \"descDiv\");\r\n    object.drinkDescriptionDiv3.setAttribute(\"class\", \"descDiv\");\r\n    object.drinkDescriptionDiv4.setAttribute(\"class\", \"descDiv\");\r\n\r\n    // inside of description\r\n\r\n    object.drinkCard1.appendChild(object.drinkDescriptionDiv);\r\n    object.drinkCard2.appendChild(object.drinkDescriptionDiv2);\r\n    object.drinkCard3.appendChild(object.drinkDescriptionDiv3);\r\n    object.drinkCard4.appendChild(object.drinkDescriptionDiv4);\r\n\r\n    // first card\r\n    object.drinkDescriptionDiv.appendChild(object.drinkName);\r\n    object.drinkDescriptionDiv.appendChild(object.drinkPrice);\r\n    object.drinkDescriptionDiv.appendChild(object.drinkDescription);\r\n    object.drinkName.textContent = \"Stan's Coffee\";\r\n    object.drinkPrice.textContent = \"$4\";\r\n    object.drinkDescription.textContent = ` \r\n     Stan's coffee is often enjoyed with various additions like milk,\r\n     sugar, or flavored syrups, making it a versatile and beloved \r\n     in our restaurant enjoyed by people all from diferent spots in the world.`;\r\n\r\n    // second card\r\n    object.drinkDescriptionDiv2.appendChild(object.drinkName2);\r\n    object.drinkDescriptionDiv2.appendChild(object.drinkPrice2);\r\n    object.drinkDescriptionDiv2.appendChild(object.drinkDescription2);\r\n    object.drinkName2.textContent = \"Coffee\";\r\n    object.drinkPrice2.textContent = \"$2\";\r\n    object.drinkDescription2.textContent = `\r\n     The original coffee is typically served hot and has a rich, dark color with a pleasant and energizing taste.\r\n     The flavor can vary depending on the type of coffee bean, roast level, and brewing method used.\r\n    `;\r\n\r\n    // third card\r\n    object.drinkDescriptionDiv3.appendChild(object.drinkName3);\r\n    object.drinkDescriptionDiv3.appendChild(object.drinkPrice3);\r\n    object.drinkDescriptionDiv3.appendChild(object.drinkDescription3);\r\n    object.drinkName3.textContent = \"Tea\";\r\n    object.drinkPrice3.textContent = \"$2\";\r\n    object.drinkDescription3.textContent = `\r\n    from robust and earthy to delicate and floral, \r\n    depending on the type and preparation. Enjoyed our tea hot or cold.\r\n    `;\r\n\r\n    // fourth card\r\n    object.drinkDescriptionDiv4.appendChild(object.drinkName4);\r\n    object.drinkDescriptionDiv4.appendChild(object.drinkPrice4);\r\n    object.drinkDescriptionDiv4.appendChild(object.drinkDescription4);\r\n    object.drinkName4.textContent = \"Cold Drinks\";\r\n    object.drinkPrice4.textContent = \"$5\";\r\n    object.drinkDescription4.textContent = `\r\n    Our cold drinks menus contains: iced coffee, ice tea,lemonade\r\n    soft drinks, ice latte, smoothies,cold water infusion, and milk shakes.\r\n    `;\r\n\r\n    // creating images\r\n    object.myOleato.src = _Oleato_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    object.myCoffees.src = _hot_coffees_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    object.myTea.src = _Tea_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    object.myColdDrinks.src = _cold_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n    // for Image\r\n\r\n    object.drinkMenuImageDiv.setAttribute(\"class\", \"menuImage\");\r\n    object.drinkMenuImageDiv2.setAttribute(\"class\", \"menuImage\");\r\n    object.drinkMenuImageDiv3.setAttribute(\"class\", \"menuImage\");\r\n    object.drinkMenuImageDiv4.setAttribute(\"class\", \"menuImage\");\r\n\r\n    object.drinkCard1.appendChild(object.drinkMenuImageDiv);\r\n    object.drinkCard2.appendChild(object.drinkMenuImageDiv2);\r\n    object.drinkCard3.appendChild(object.drinkMenuImageDiv3);\r\n    object.drinkCard4.appendChild(object.drinkMenuImageDiv4);\r\n\r\n    object.drinkMenuImageDiv.appendChild(object.myOleato);\r\n    object.drinkMenuImageDiv2.appendChild(object.myCoffees);\r\n    object.drinkMenuImageDiv3.appendChild(object.myTea);\r\n    object.drinkMenuImageDiv4.appendChild(object.myColdDrinks);\r\n\r\n    // Card menu divs\r\n    object.drinkDiv.appendChild(object.drinkCardMenus);\r\n    object.drinkCardMenus.appendChild(object.drinkCard1);\r\n    object.drinkCardMenus.appendChild(object.drinkCard2);\r\n    object.drinkCardMenus.appendChild(object.drinkCard3);\r\n    object.drinkCardMenus.appendChild(object.drinkCard4);\r\n\r\n    // Cards with 2 divs\r\n    object.drinkCard1.appendChild(object.drinkDescriptionDiv);\r\n    object.drinkCard1.appendChild(object.drinkMenuImageDiv);\r\n\r\n    object.drinkCard2.appendChild(object.drinkDescriptionDiv2);\r\n    object.drinkCard2.appendChild(object.drinkMenuImageDiv2);\r\n\r\n    object.drinkCard3.appendChild(object.drinkDescriptionDiv3);\r\n    object.drinkCard3.appendChild(object.drinkMenuImageDiv3);\r\n\r\n    object.drinkCard4.appendChild(object.drinkDescriptionDiv4);\r\n    object.drinkCard4.appendChild(object.drinkMenuImageDiv4);\r\n    console.log(object.drinkCardMenus);\r\n};\r\n\r\nfunction menuContent() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const menuContainer = document.createElement(\"div\");\r\n    const menuH1 = document.createElement(\"h1\");\r\n    menuContainer.setAttribute(\"class\", \"menuContainer\");\r\n\r\n    content.appendChild(menuContainer);\r\n    menuContainer.appendChild(menuH1);\r\n    menuH1.textContent = \"Menu\";\r\n\r\n    // // ===================== drinks ============================\r\n    const drinkDiv = document.createElement(\"div\");\r\n    const drinkH2 = document.createElement(\"h2\");\r\n\r\n    // // ================= drinklist =============================\r\n    const drinkListDiv = document.createElement(\"div\");\r\n    const drinkCardMenus = document.createElement(\"div\");\r\n\r\n    // // cards\r\n    const drinkCard1 = document.createElement(\"div\");\r\n    const drinkCard2 = document.createElement(\"div\");\r\n    const drinkCard3 = document.createElement(\"div\");\r\n    const drinkCard4 = document.createElement(\"div\");\r\n\r\n    // // descriptionDivs\r\n    const drinkDescriptionDiv = document.createElement(\"div\");\r\n    const drinkDescriptionDiv2 = document.createElement(\"div\");\r\n    const drinkDescriptionDiv3 = document.createElement(\"div\");\r\n    const drinkDescriptionDiv4 = document.createElement(\"div\");\r\n\r\n    // // inside of description\r\n    const drinkName = document.createElement(\"h2\");\r\n    const drinkPrice = document.createElement(\"h2\");\r\n    const drinkDescription = document.createElement(\"p\");\r\n\r\n    const drinkName2 = document.createElement(\"h2\");\r\n    const drinkPrice2 = document.createElement(\"h2\");\r\n    const drinkDescription2 = document.createElement(\"p\");\r\n\r\n    const drinkName3 = document.createElement(\"h2\");\r\n    const drinkPrice3 = document.createElement(\"h2\");\r\n    const drinkDescription3 = document.createElement(\"p\");\r\n\r\n    const drinkName4 = document.createElement(\"h2\");\r\n    const drinkPrice4 = document.createElement(\"h2\");\r\n    const drinkDescription4 = document.createElement(\"p\");\r\n\r\n    // // creating images\r\n    const myOleato = new Image();\r\n    const myCoffees = new Image();\r\n    const myTea = new Image();\r\n    const myColdDrinks = new Image();\r\n\r\n    // // for Image\r\n    const drinkMenuImageDiv = document.createElement(\"div\");\r\n    const drinkMenuImageDiv2 = document.createElement(\"div\");\r\n    const drinkMenuImageDiv3 = document.createElement(\"div\");\r\n    const drinkMenuImageDiv4 = document.createElement(\"div\");\r\n\r\n    const drinkObject = {\r\n        id: \"drink\",\r\n        menuContainer,\r\n        drinkDiv,\r\n        drinkH2,\r\n        drinkCardMenus,\r\n        drinkCard1,\r\n        drinkCard2,\r\n        drinkCard3,\r\n        drinkCard4,\r\n        drinkDescriptionDiv,\r\n        drinkDescriptionDiv2,\r\n        drinkDescriptionDiv3,\r\n        drinkDescriptionDiv4,\r\n        drinkName,\r\n        drinkName2,\r\n        drinkName3,\r\n        drinkName4,\r\n        drinkPrice,\r\n        drinkPrice2,\r\n        drinkPrice3,\r\n        drinkPrice4,\r\n        drinkDescription,\r\n        drinkDescription2,\r\n        drinkDescription3,\r\n        drinkDescription4,\r\n        myOleato,\r\n        myCoffees,\r\n        myTea,\r\n        myColdDrinks,\r\n        drinkMenuImageDiv,\r\n        drinkMenuImageDiv2,\r\n        drinkMenuImageDiv3,\r\n        drinkMenuImageDiv4,\r\n    };\r\n\r\n    drinkContentFunction(drinkObject);\r\n    //============ food section ======================\r\n\r\n    const foodDiv = document.createElement(\"div\");\r\n    const foodH2 = document.createElement(\"h2\");\r\n    menuContainer.appendChild(foodDiv);\r\n    foodDiv.appendChild(foodH2);\r\n    foodH2.textContent = \"Food\";\r\n\r\n    // ================= foodlist =============================\r\n    const foodListDiv = document.createElement(\"div\");\r\n    const foodMenuDiv = document.createElement(\"div\");\r\n    foodMenuDiv.setAttribute(\"class\", \"cardMenuDiv\");\r\n\r\n    const foodCard1 = document.createElement(\"div\");\r\n    foodCard1.setAttribute(\"class\", \"card\");\r\n    const foodCard2 = document.createElement(\"div\");\r\n    foodCard2.setAttribute(\"class\", \"card\");\r\n    const foodCard3 = document.createElement(\"div\");\r\n    foodCard3.setAttribute(\"class\", \"card\");\r\n    const foodCard4 = document.createElement(\"div\");\r\n    foodCard4.setAttribute(\"class\", \"card\");\r\n\r\n    foodDiv.appendChild(foodMenuDiv);\r\n    foodMenuDiv.appendChild(foodCard1);\r\n    foodMenuDiv.appendChild(foodCard2);\r\n    foodMenuDiv.appendChild(foodCard3);\r\n    foodMenuDiv.appendChild(foodCard4);\r\n\r\n    // description divs\r\n    const foodDescriptionDiv = document.createElement(\"div\");\r\n    foodDescriptionDiv.setAttribute(\"class\", \"descDiv\");\r\n\r\n    const foodDescriptionDiv2 = document.createElement(\"div\");\r\n    foodDescriptionDiv2.setAttribute(\"class\", \"descDiv\");\r\n\r\n    const foodDescriptionDiv3 = document.createElement(\"div\");\r\n    foodDescriptionDiv3.setAttribute(\"class\", \"descDiv\");\r\n\r\n    const foodDescriptionDiv4 = document.createElement(\"div\");\r\n    foodDescriptionDiv4.setAttribute(\"class\", \"descDiv\");\r\n\r\n    // inside of description\r\n    const foodName = document.createElement(\"h2\");\r\n    const foodPrice = document.createElement(\"h2\");\r\n    const foodDescription = document.createElement(\"p\");\r\n\r\n    const foodName2 = document.createElement(\"h2\");\r\n    const foodPrice2 = document.createElement(\"h2\");\r\n    const foodDescription2 = document.createElement(\"p\");\r\n\r\n    const foodName3 = document.createElement(\"h2\");\r\n    const foodPrice3 = document.createElement(\"h2\");\r\n    const foodDescription3 = document.createElement(\"p\");\r\n\r\n    const foodName4 = document.createElement(\"h2\");\r\n    const foodPrice4 = document.createElement(\"h2\");\r\n    const foodDescription4 = document.createElement(\"p\");\r\n\r\n    foodCard1.appendChild(foodDescriptionDiv);\r\n    foodCard2.appendChild(foodDescriptionDiv2);\r\n    foodCard3.appendChild(foodDescriptionDiv3);\r\n    foodCard4.appendChild(foodDescriptionDiv4);\r\n\r\n    // first food card\r\n    foodDescriptionDiv.appendChild(foodName);\r\n    foodDescriptionDiv.appendChild(foodPrice);\r\n    foodDescriptionDiv.appendChild(foodDescription);\r\n    foodName.textContent = \"Bakery\";\r\n    foodPrice.textContent = \"$8\";\r\n    foodDescription.textContent = `\r\n    Our bakery area is filled with the delightful aroma of freshly baked goods,\r\n    offering an array of delicious pastries, bread, and cakes to satisfy any sweet craving.`;\r\n\r\n    // second food card\r\n    foodDescriptionDiv2.appendChild(foodName2);\r\n    foodDescriptionDiv2.appendChild(foodPrice2);\r\n    foodDescriptionDiv2.appendChild(foodDescription2);\r\n    foodName2.textContent = \"Breakfast\";\r\n    foodPrice2.textContent = \"$12\";\r\n    foodDescription2.textContent = `\r\n    A wholesome and delightful morning meal,\r\n    consisting of various dishes such as eggs, \r\n    toast, cereal, fruits, and beverages like coffee or tea.\r\n    `;\r\n\r\n    // third card\r\n    foodDescriptionDiv3.appendChild(foodName3);\r\n    foodDescriptionDiv3.appendChild(foodPrice3);\r\n    foodDescriptionDiv3.appendChild(foodDescription3);\r\n    foodName3.textContent = \"Lunch\";\r\n    foodPrice3.textContent = \"$20\";\r\n    foodDescription3.textContent = `\r\n     Our midday meal that offers a variety of savory options,\r\n     ranging from sandwiches, salads, soups, and main courses, providing nourishment and satisfaction.`;\r\n\r\n    // fourth card\r\n    foodDescriptionDiv4.appendChild(foodName4);\r\n    foodDescriptionDiv4.appendChild(foodPrice4);\r\n    foodDescriptionDiv4.appendChild(foodDescription4);\r\n    foodName4.textContent = \"Special Dish\";\r\n    foodPrice4.textContent = \"$25\";\r\n    foodDescription4.textContent = `Our special dish is one of the best meal a person could eat, forever thats how\r\n    that's how good it is.\r\n    `;\r\n\r\n    // creating images\r\n    const myBakery = new Image();\r\n    myBakery.src = _Bakery_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\n    const myBreakFast = new Image();\r\n    myBreakFast.src = _Breakfast_jpg__WEBPACK_IMPORTED_MODULE_5__;\r\n\r\n    const myLunch = new Image();\r\n    myLunch.src = _lunch_jpg__WEBPACK_IMPORTED_MODULE_6__;\r\n\r\n    const mySteak = new Image();\r\n    mySteak.src = _Steak_Unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__;\r\n\r\n    // image divs\r\n    const foodMenuImageDiv = document.createElement(\"div\");\r\n    const foodMenuImageDiv2 = document.createElement(\"div\");\r\n    const foodMenuImageDiv3 = document.createElement(\"div\");\r\n    const foodMenuImageDiv4 = document.createElement(\"div\");\r\n\r\n    foodMenuImageDiv.setAttribute(\"class\", \"menuImage\");\r\n    foodMenuImageDiv2.setAttribute(\"class\", \"menuImage\");\r\n    foodMenuImageDiv3.setAttribute(\"class\", \"menuImage\");\r\n    foodMenuImageDiv4.setAttribute(\"class\", \"menuImage\");\r\n\r\n    foodCard1.appendChild(foodMenuImageDiv);\r\n    foodCard2.appendChild(foodMenuImageDiv2);\r\n    foodCard3.appendChild(foodMenuImageDiv3);\r\n    foodCard4.appendChild(foodMenuImageDiv4);\r\n\r\n    foodMenuImageDiv.appendChild(myBakery);\r\n    foodMenuImageDiv2.appendChild(myBreakFast);\r\n    foodMenuImageDiv3.appendChild(myLunch);\r\n    foodMenuImageDiv4.appendChild(mySteak);\r\n\r\n    // Card menu divs\r\n    foodDiv.appendChild(foodMenuDiv);\r\n    foodMenuDiv.appendChild(foodCard1);\r\n    foodMenuDiv.appendChild(foodCard2);\r\n    foodMenuDiv.appendChild(foodCard3);\r\n    foodMenuDiv.appendChild(foodCard4);\r\n\r\n    // Cards with 2 divs\r\n    foodCard1.appendChild(foodDescriptionDiv);\r\n    foodCard1.appendChild(foodMenuImageDiv);\r\n\r\n    foodCard2.appendChild(foodDescriptionDiv2);\r\n    foodCard2.appendChild(foodMenuImageDiv2);\r\n\r\n    foodCard3.appendChild(foodDescriptionDiv3);\r\n    foodCard3.appendChild(foodMenuImageDiv3);\r\n\r\n    foodCard4.appendChild(foodDescriptionDiv4);\r\n    foodCard4.appendChild(foodMenuImageDiv4);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navbar: () => (/* binding */ navbar)\n/* harmony export */ });\nconst navbar = function () {\r\n    const nav = document.querySelector(\".nav\");\r\n    const navUl = document.createElement(\"ul\");\r\n    const home = document.createElement(\"li\");\r\n    const menu = document.createElement(\"li\");\r\n    const contact = document.createElement(\"li\");\r\n\r\n    const homeLink = document.createElement(\"a\");\r\n    const menuLink = document.createElement(\"a\");\r\n    const contactLink = document.createElement(\"a\");\r\n\r\n    nav.appendChild(navUl);\r\n    navUl.appendChild(home);\r\n    navUl.appendChild(menu);\r\n    navUl.appendChild(contact);\r\n\r\n    home.appendChild(homeLink);\r\n    menu.appendChild(menuLink);\r\n    contact.appendChild(contactLink);\r\n\r\n    homeLink.setAttribute(\"class\", \"homeLink\");\r\n    menuLink.setAttribute(\"class\", \"menuLink\");\r\n    contactLink.setAttribute(\"class\", \"contactLink\");\r\n\r\n    homeLink.textContent = \"Home\";\r\n    menuLink.textContent = \"Menu\";\r\n    contactLink.textContent = \"Contact\";\r\n    console.log(nav);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction pageLoad() {\r\n    (0,_nav__WEBPACK_IMPORTED_MODULE_0__.navbar)();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n    const homeLinkBtn = document.querySelector(\".homeLink\");\r\n    const menuLinkBtn = document.querySelector(\".menuLink\");\r\n    const contactLinkBtn = document.querySelector(\".contactLink\");\r\n\r\n    const homeContainer = document.querySelector(\".homeContainer\");\r\n    const menuContainer = document.querySelector(\".menuContainer\");\r\n    const contactContainer = document.querySelector(\".contactContainer\");\r\n\r\n    // console.log(contactContainer);\r\n    menuContainer.classList.remove(\"hidden\");\r\n    contactContainer.classList.add(\"hidden\");\r\n    homeContainer.classList.add(\"hidden\");\r\n\r\n    homeLinkBtn.addEventListener(\"click\", (event) => {\r\n        homeContainer.classList.remove(\"hidden\");\r\n        menuContainer.classList.add(\"hidden\");\r\n        contactContainer.classList.add(\"hidden\");\r\n\r\n        console.log(\"works\");\r\n    });\r\n\r\n    menuLinkBtn.addEventListener(\"click\", (event) => {\r\n        homeContainer.classList.add(\"hidden\");\r\n        menuContainer.classList.remove(\"hidden\");\r\n        contactContainer.classList.add(\"hidden\");\r\n    });\r\n\r\n    contactLinkBtn.addEventListener(\"click\", (event) => {\r\n        homeContainer.classList.add(\"hidden\");\r\n        menuContainer.classList.add(\"hidden\");\r\n        contactContainer.classList.remove(\"hidden\");\r\n    });\r\n    // console.log(homeLinkBtn);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/smallAboutUsParagraph.js":
/*!**************************************!*\
  !*** ./src/smallAboutUsParagraph.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smallP)\n/* harmony export */ });\nfunction smallP() {\r\n    return `Welcome to our delightful buffet restaurant! Indulge in a wide array of delectable dishes crafted by talented chefs using fresh, locally sourced ingredients. From mouthwatering appetizers to succulent mains and tempting desserts, our buffet offers something for every palate. Immerse yourself in a warm ambiance and enjoy a memorable dining experience with our friendly staff. Join us for a culinary journey celebrating taste, variety, and the joy of shared meals.`;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/smallAboutUsParagraph.js?");

/***/ }),

/***/ "./src/Bakery.jpg":
/*!************************!*\
  !*** ./src/Bakery.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf0d3f7be5131eb8bcb8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Bakery.jpg?");

/***/ }),

/***/ "./src/Breakfast.jpg":
/*!***************************!*\
  !*** ./src/Breakfast.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63196f20e2a0262e1d15.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Breakfast.jpg?");

/***/ }),

/***/ "./src/Oleato.jpg":
/*!************************!*\
  !*** ./src/Oleato.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa1e71151a168e99479c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Oleato.jpg?");

/***/ }),

/***/ "./src/Steak-Unsplash.jpg":
/*!********************************!*\
  !*** ./src/Steak-Unsplash.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d6009b5f106d3bb0c13.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Steak-Unsplash.jpg?");

/***/ }),

/***/ "./src/Tea.jpg":
/*!*********************!*\
  !*** ./src/Tea.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c87394861381230608ff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Tea.jpg?");

/***/ }),

/***/ "./src/cold-drinks.jpg":
/*!*****************************!*\
  !*** ./src/cold-drinks.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6e7705971e44c36927c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/cold-drinks.jpg?");

/***/ }),

/***/ "./src/hot-coffees.jpg":
/*!*****************************!*\
  !*** ./src/hot-coffees.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8a3832948567b6954b6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/hot-coffees.jpg?");

/***/ }),

/***/ "./src/lunch.jpg":
/*!***********************!*\
  !*** ./src/lunch.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7573a0ee0face671819.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lunch.jpg?");

/***/ }),

/***/ "./src/meat-with-vegetables-2.0.png":
/*!******************************************!*\
  !*** ./src/meat-with-vegetables-2.0.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d2ccde1e488dae043f1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/meat-with-vegetables-2.0.png?");

/***/ }),

/***/ "./src/person-cooking-meats.png":
/*!**************************************!*\
  !*** ./src/person-cooking-meats.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9683b7d0240a475fccc6.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/person-cooking-meats.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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