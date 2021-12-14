"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n// store.js\n\n\n// create your reducer\nconst reducer = (state = {\n    tick: 'init'\n}, action)=>{\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case 'TICK':\n            return {\n                ...state,\n                tick: action.payload\n            };\n        default:\n            return state;\n    }\n};\n// create a makeStore function\nconst makeStore = (context)=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer)\n;\n// export an assembled wrapper\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsRUFBVztBQUV3QjtBQUN3QjtBQUUzRCxFQUFzQjtBQUN0QixLQUFLLENBQUNHLE9BQU8sSUFBSUMsS0FBSyxHQUFHLENBQUM7SUFBQ0MsSUFBSSxFQUFFLENBQU07QUFBQyxDQUFDLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQ3JELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQ0wsdURBQU87WUFDVixNQUFNLENBQUMsQ0FBQzttQkFBSUUsS0FBSzttQkFBS0UsTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBTTtZQUNULE1BQU0sQ0FBQyxDQUFDO21CQUFJSixLQUFLO2dCQUFFQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ0UsT0FBTztZQUFDLENBQUM7O1lBRXpDLE1BQU0sQ0FBQ0osS0FBSzs7QUFFbEIsQ0FBQztBQUVELEVBQThCO0FBQzlCLEtBQUssQ0FBQ0ssU0FBUyxJQUFHQyxPQUFPLEdBQUlWLGtEQUFXLENBQUNHLE9BQU87O0FBRWhELEVBQThCO0FBQ3ZCLEtBQUssQ0FBQ1EsT0FBTyxHQUFHVixpRUFBYSxDQUFDUSxTQUFTLEVBQUUsQ0FBQztJQUFDRyxLQUFLLEVBQUUsSUFBSTtBQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JlLmpzPzNmODUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RvcmUuanNcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuLy8gY3JlYXRlIHlvdXIgcmVkdWNlclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHsgdGljazogJ2luaXQnIH0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVElDSyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGljazogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cbmNvbnN0IG1ha2VTdG9yZSA9IGNvbnRleHQgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwicmVkdWNlciIsInN0YXRlIiwidGljayIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWFrZVN0b3JlIiwiY29udGV4dCIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n\n// getStaticProps\n\n\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/Users/kimseung-wan/Desktop/NextWorld/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 45\n        },\n        __self: undefined\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxFQUFpQjtBQUVRO0FBQ29CO0FBRTdDLEtBQUssQ0FBQ0UsS0FBSyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyx3RUFBTUQsU0FBUztXQUFLQyxTQUFTOzs7Ozs7Ozs7QUFFcEUsaUVBQWVILGdFQUFpQixDQUFDQyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXRTdGF0aWNQcm9wc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RvcmUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIndyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();