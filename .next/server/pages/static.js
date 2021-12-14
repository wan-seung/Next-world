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
exports.id = "pages/static";
exports.ids = ["pages/static"];
exports.modules = {

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n// store.js\n\n\n// create your reducer\nconst reducer = (state = {\n    tick: 'init'\n}, action)=>{\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case 'TICK':\n            return {\n                ...state,\n                tick: action.payload\n            };\n        default:\n            return state;\n    }\n};\n// create a makeStore function\nconst makeStore = (context)=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer)\n;\n// export an assembled wrapper\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsRUFBVztBQUV3QjtBQUN3QjtBQUUzRCxFQUFzQjtBQUN0QixLQUFLLENBQUNHLE9BQU8sSUFBSUMsS0FBSyxHQUFHLENBQUM7SUFBQ0MsSUFBSSxFQUFFLENBQU07QUFBQyxDQUFDLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQ3JELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQ0wsdURBQU87WUFDVixNQUFNLENBQUMsQ0FBQzttQkFBSUUsS0FBSzttQkFBS0UsTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBTTtZQUNULE1BQU0sQ0FBQyxDQUFDO21CQUFJSixLQUFLO2dCQUFFQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ0UsT0FBTztZQUFDLENBQUM7O1lBRXpDLE1BQU0sQ0FBQ0osS0FBSzs7QUFFbEIsQ0FBQztBQUVELEVBQThCO0FBQzlCLEtBQUssQ0FBQ0ssU0FBUyxJQUFHQyxPQUFPLEdBQUlWLGtEQUFXLENBQUNHLE9BQU87O0FBRWhELEVBQThCO0FBQ3ZCLEtBQUssQ0FBQ1EsT0FBTyxHQUFHVixpRUFBYSxDQUFDUSxTQUFTLEVBQUUsQ0FBQztJQUFDRyxLQUFLLEVBQUUsSUFBSTtBQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JlLmpzPzNmODUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RvcmUuanNcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuLy8gY3JlYXRlIHlvdXIgcmVkdWNlclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHsgdGljazogJ2luaXQnIH0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVElDSyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGljazogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cbmNvbnN0IG1ha2VTdG9yZSA9IGNvbnRleHQgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwicmVkdWNlciIsInN0YXRlIiwidGljayIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWFrZVN0b3JlIiwiY29udGV4dCIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/store.js\n");

/***/ }),

/***/ "./pages/static.js":
/*!*************************!*\
  !*** ./pages/static.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n\n// getStaticProps\n\n\n\nconst getStaticProps = _components_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.getStaticProps((store)=>({ preview  })=>{\n        console.log('2. Page.getStaticProps uses the store to dispatch things');\n        store.dispatch({\n            type: 'TICK',\n            payload: 'was set in other page ' + preview\n        });\n    }\n);\n// you can also use `connect()` instead of hooks\nconst Page = ()=>{\n    const { tick  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state\n    );\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/kimseung-wan/Desktop/NextWorld/pages/static.js\",\n            lineNumber: 18,\n            columnNumber: 10\n        },\n        __self: undefined,\n        children: tick\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGF0aWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLEVBQWlCO0FBRVE7QUFDZ0I7QUFDSTtBQUV0QyxLQUFLLENBQUNHLGNBQWMsR0FBR0QscUVBQXNCLEVBQUNFLEtBQUssSUFBSyxDQUFDLENBQUNDLE9BQU8sRUFBQyxDQUFDLEdBQUssQ0FBQztRQUM5RUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBMEQ7UUFDdEVILEtBQUssQ0FBQ0ksUUFBUSxDQUFDLENBQUM7WUFDZEMsSUFBSSxFQUFFLENBQU07WUFDWkMsT0FBTyxFQUFFLENBQXdCLDBCQUFHTCxPQUFPO1FBQzdDLENBQUM7SUFDSCxDQUFDOztBQUVELEVBQWdEO0FBQ2hELEtBQUssQ0FBQ00sSUFBSSxPQUFTLENBQUM7SUFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR1gsd0RBQVcsRUFBQ1ksS0FBSyxHQUFJQSxLQUFLOztJQUMzQyxNQUFNLHNFQUFFQyxDQUFHOzs7Ozs7O2tCQUFFRixJQUFJOztBQUNuQixDQUFDO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0YXRpYy5qcz9jYzFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGdldFN0YXRpY1Byb3BzXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyhzdG9yZSA9PiAoeyBwcmV2aWV3IH0pID0+IHtcbiAgY29uc29sZS5sb2coJzIuIFBhZ2UuZ2V0U3RhdGljUHJvcHMgdXNlcyB0aGUgc3RvcmUgdG8gZGlzcGF0Y2ggdGhpbmdzJyk7XG4gIHN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnVElDSycsXG4gICAgcGF5bG9hZDogJ3dhcyBzZXQgaW4gb3RoZXIgcGFnZSAnICsgcHJldmlldyxcbiAgfSk7XG59KTtcblxuLy8geW91IGNhbiBhbHNvIHVzZSBgY29ubmVjdCgpYCBpbnN0ZWFkIG9mIGhvb2tzXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHRpY2sgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKTtcbiAgcmV0dXJuIDxkaXY+e3RpY2t9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlbGVjdG9yIiwid3JhcHBlciIsImdldFN0YXRpY1Byb3BzIiwic3RvcmUiLCJwcmV2aWV3IiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJQYWdlIiwidGljayIsInN0YXRlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/static.js\n");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = (__webpack_exec__("./pages/static.js"));
module.exports = __webpack_exports__;

})();