/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1R0FBNkMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStrapiURL\": function() { return /* binding */ getStrapiURL; },\n/* harmony export */   \"fetchAPI\": function() { return /* binding */ fetchAPI; }\n/* harmony export */ });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/**\n * Get full Strapi URL from path\n * @param {string} path Path of the URL\n * @returns {string} Full Strapi URL\n */\n\nfunction getStrapiURL(path = \"\") {\n  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || \"http://localhost:1337\"}${path}`;\n}\n/**\n * Helper to make GET requests to Strapi API endpoints\n * @param {string} path Path of the API route\n * @param {Object} urlParamsObject URL params object, will be stringified\n * @param {Object} options Options passed to fetch\n * @returns Parsed API call response\n */\n\nasync function fetchAPI(path, urlParamsObject = {}, options = {}, isAuthNavigation = false) {\n  const token = \"424b2a7aa2789f777c9b51e2c2d5e1baa18fc494fce472c8881c82a4d9ffe5fc16871ee78937367d957cb63f5eb0b5835cf1b0995a16cc6487224dc521683d38f4b813dd3a0afae78083adc411568f8be4be35173f464e0e501a77f2ca028bfeacdd3ac9d0eb32f4c2b3b5846f98bff6680c4578f4932566908f6a8271fd5710\"; // Merge default and user options\n\n  const mergedOptions = _objectSpread({\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: isAuthNavigation ? `Bearer ${token}` : \"\"\n    }\n  }, options); // Build request URL\n\n\n  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);\n  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : \"\"}`)}`; // Trigger API call\n\n  const response = await fetch(requestUrl, mergedOptions); // Handle response\n\n  if (!response.ok) {\n    console.error(response.statusText); // throw new Error(`An error occured please try again`)\n\n    return Promise.resolve({\n      data: []\n    });\n  }\n\n  const data = await response.json();\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzP2FhODUiXSwibmFtZXMiOlsiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsImlzQXV0aE5hdmlnYXRpb24iLCJ0b2tlbiIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsSUFBSSxHQUFHLEVBQTdCLEVBQWlDO0FBQ3RDLFNBQVEsR0FDTkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQUFaLElBQTBDLHVCQUMzQyxHQUFFSCxJQUFLLEVBRlI7QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLGVBQWVJLFFBQWYsQ0FDTEosSUFESyxFQUVMSyxlQUFlLEdBQUcsRUFGYixFQUdMQyxPQUFPLEdBQUcsRUFITCxFQUlMQyxnQkFBZ0IsR0FBRyxLQUpkLEVBS0w7QUFDQSxRQUFNQyxLQUFLLEdBQ1Qsa1FBREYsQ0FEQSxDQUlBOztBQUNBLFFBQU1DLGFBQWE7QUFDakJDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQixrQkFEVDtBQUVQQyxtQkFBYSxFQUFFSixnQkFBZ0IsR0FBSSxVQUFTQyxLQUFNLEVBQW5CLEdBQXVCO0FBRi9DO0FBRFEsS0FLZEYsT0FMYyxDQUFuQixDQUxBLENBYUE7OztBQUNBLFFBQU1NLFdBQVcsR0FBR0MsbURBQUEsQ0FBYVIsZUFBYixDQUFwQjtBQUNBLFFBQU1TLFVBQVUsR0FBSSxHQUFFZixZQUFZLENBQy9CLE9BQU1DLElBQUssR0FBRVksV0FBVyxHQUFJLElBQUdBLFdBQVksRUFBbkIsR0FBdUIsRUFBRyxFQURuQixDQUVoQyxFQUZGLENBZkEsQ0FtQkE7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsVUFBRCxFQUFhTCxhQUFiLENBQTVCLENBcEJBLENBc0JBOztBQUNBLE1BQUksQ0FBQ00sUUFBUSxDQUFDRSxFQUFkLEVBQWtCO0FBQ2hCQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0osUUFBUSxDQUFDSyxVQUF2QixFQURnQixDQUVoQjs7QUFDQSxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBaEIsQ0FBUDtBQUNEOztBQUNELFFBQU1BLElBQUksR0FBRyxNQUFNUixRQUFRLENBQUNTLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbi8qKlxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgfSR7cGF0aH1gXG59XG5cbi8qKlxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXNPYmplY3QgVVJMIHBhcmFtcyBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKFxuICBwYXRoLFxuICB1cmxQYXJhbXNPYmplY3QgPSB7fSxcbiAgb3B0aW9ucyA9IHt9LFxuICBpc0F1dGhOYXZpZ2F0aW9uID0gZmFsc2Vcbikge1xuICBjb25zdCB0b2tlbiA9XG4gICAgXCI0MjRiMmE3YWEyNzg5Zjc3N2M5YjUxZTJjMmQ1ZTFiYWExOGZjNDk0ZmNlNDcyYzg4ODFjODJhNGQ5ZmZlNWZjMTY4NzFlZTc4OTM3MzY3ZDk1N2NiNjNmNWViMGI1ODM1Y2YxYjA5OTVhMTZjYzY0ODcyMjRkYzUyMTY4M2QzOGY0YjgxM2RkM2EwYWZhZTc4MDgzYWRjNDExNTY4ZjhiZTRiZTM1MTczZjQ2NGUwZTUwMWE3N2YyY2EwMjhiZmVhY2RkM2FjOWQwZWIzMmY0YzJiM2I1ODQ2Zjk4YmZmNjY4MGM0NTc4ZjQ5MzI1NjY5MDhmNmE4MjcxZmQ1NzEwXCJcblxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGlzQXV0aE5hdmlnYXRpb24gPyBgQmVhcmVyICR7dG9rZW59YCA6IFwiXCIsXG4gICAgfSxcbiAgICAuLi5vcHRpb25zLFxuICB9XG5cbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxuICApfWBcblxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcblxuICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGRhdGE6IFtdIH0pXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStrapiMedia\": function() { return /* binding */ getStrapiMedia; }\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./lib/api.js\");\n\nfunction getStrapiMedia(media) {\n  const {\n    url\n  } = media.data.attributes;\n  const imageUrl = url.startsWith(\"/\") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;\n  return imageUrl;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvbWVkaWEuanM/YWI4YSJdLCJuYW1lcyI6WyJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwidXJsIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiLCJnZXRTdHJhcGlVUkwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUNwQyxRQUFNO0FBQUVDO0FBQUYsTUFBVUQsS0FBSyxDQUFDRSxJQUFOLENBQVdDLFVBQTNCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHSCxHQUFHLENBQUNJLFVBQUosQ0FBZSxHQUFmLElBQXNCQyxrREFBWSxDQUFDTCxHQUFELENBQWxDLEdBQTBDQSxHQUEzRDtBQUNBLFNBQU9HLFFBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9tZWRpYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuL2FwaVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCB7IHVybCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzXG4gIGNvbnN0IGltYWdlVXJsID0gdXJsLnN0YXJ0c1dpdGgoXCIvXCIpID8gZ2V0U3RyYXBpVVJMKHVybCkgOiB1cmxcbiAgcmV0dXJuIGltYWdlVXJsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/media.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, pageProps);\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/MDc5NSJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImRlZmF1bHQiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JBQXhCO0FBQTJDSyxHQUFHLENBQUNNLGVBQUosR0FBb0JYLGtCQUFwQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.css */ \"./assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n\n\nvar _jsxFileName = \"/Users/joao.bordalo/Documents/Work/fe/sandbox/strapi-poc/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // Store Strapi Global object in context\n\nconst GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const {\n    global\n  } = pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"shortcut icon\",\n        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(global.attributes.favicon)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n      value: global.attributes,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n}; // getInitialProps disables automatic static optimization for pages that don't\n// have getStaticProps. So article, category and home pages still get SSG.\n// Hopefully we can replace this with getStaticProps once this issue is fixed:\n// https://github.com/vercel/next.js/discussions/10949\n\n\nMyApp.getInitialProps = async ctx => {\n  // Calls page's `getInitialProps` and fills `appProps.pageProps`\n  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi\n\n  const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.fetchAPI)(\"/global\", {\n    populate: {\n      favicon: \"*\",\n      defaultSeo: {\n        populate: \"*\"\n      }\n    }\n  }); // Pass the data to our page via props\n\n  return _objectSpread(_objectSpread({}, appProps), {}, {\n    pageProps: {\n      global: globalRes.data\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbCIsImdldFN0cmFwaU1lZGlhIiwiYXR0cmlidXRlcyIsImZhdmljb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJhcHBQcm9wcyIsIkFwcCIsImdsb2JhbFJlcyIsImZldGNoQVBJIiwicG9wdWxhdGUiLCJkZWZhdWx0U2VvIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ08sTUFBTUEsYUFBYSxnQkFBR0Msb0RBQWEsQ0FBQyxFQUFELENBQW5DOztBQUVQLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzFDLFFBQU07QUFBRUM7QUFBRixNQUFhRCxTQUFuQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBQyxlQUROO0FBRUUsWUFBSSxFQUFFRSwwREFBYyxDQUFDRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLE9BQW5CO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0UsOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsV0FBSyxFQUFFSCxNQUFNLENBQUNFLFVBQXRDO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLGtCQURGO0FBYUQsQ0FoQkQsQyxDQWtCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FGLEtBQUssQ0FBQ08sZUFBTixHQUF3QixNQUFPQyxHQUFQLElBQWU7QUFDckM7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUEsQ0FBb0JGLEdBQXBCLENBQXZCLENBRnFDLENBR3JDOztBQUNBLFFBQU1HLFNBQVMsR0FBRyxNQUFNQyxrREFBUSxDQUFDLFNBQUQsRUFBWTtBQUMxQ0MsWUFBUSxFQUFFO0FBQ1JQLGFBQU8sRUFBRSxHQUREO0FBRVJRLGdCQUFVLEVBQUU7QUFDVkQsZ0JBQVEsRUFBRTtBQURBO0FBRko7QUFEZ0MsR0FBWixDQUFoQyxDQUpxQyxDQVlyQzs7QUFDQSx5Q0FBWUosUUFBWjtBQUFzQlAsYUFBUyxFQUFFO0FBQUVDLFlBQU0sRUFBRVEsU0FBUyxDQUFDSTtBQUFwQjtBQUFqQztBQUNELENBZEQ7O0FBZ0JBLCtEQUFlZixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5cbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWwuYXR0cmlidXRlcy5mYXZpY29uKX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWwuYXR0cmlidXRlc30+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBnZXRJbml0aWFsUHJvcHMgZGlzYWJsZXMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24gZm9yIHBhZ2VzIHRoYXQgZG9uJ3Rcbi8vIGhhdmUgZ2V0U3RhdGljUHJvcHMuIFNvIGFydGljbGUsIGNhdGVnb3J5IGFuZCBob21lIHBhZ2VzIHN0aWxsIGdldCBTU0cuXG4vLyBIb3BlZnVsbHkgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGdldFN0YXRpY1Byb3BzIG9uY2UgdGhpcyBpc3N1ZSBpcyBmaXhlZDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9kaXNjdXNzaW9ucy8xMDk0OVxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIEZldGNoIGdsb2JhbCBzaXRlIHNldHRpbmdzIGZyb20gU3RyYXBpXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7XG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgZGVmYXVsdFNlbzoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIC8vIFBhc3MgdGhlIGRhdGEgdG8gb3VyIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCBwYWdlUHJvcHM6IHsgZ2xvYmFsOiBnbG9iYWxSZXMuZGF0YSB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/MDJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();