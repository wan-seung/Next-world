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
exports.id = "pages/serverside";
exports.ids = ["pages/serverside"];
exports.modules = {

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n// store.js\n\n\n// create your reducer\nconst reducer = (state = {\n    tick: 'init'\n}, action)=>{\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case 'TICK':\n            return {\n                ...state,\n                tick: action.payload\n            };\n        default:\n            return state;\n    }\n};\n// create a makeStore function\nconst makeStore = (context)=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer)\n;\n// export an assembled wrapper\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsRUFBVztBQUV3QjtBQUN3QjtBQUUzRCxFQUFzQjtBQUN0QixLQUFLLENBQUNHLE9BQU8sSUFBSUMsS0FBSyxHQUFHLENBQUM7SUFBQ0MsSUFBSSxFQUFFLENBQU07QUFBQyxDQUFDLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQ3JELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQ0wsdURBQU87WUFDVixNQUFNLENBQUMsQ0FBQzttQkFBSUUsS0FBSzttQkFBS0UsTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBTTtZQUNULE1BQU0sQ0FBQyxDQUFDO21CQUFJSixLQUFLO2dCQUFFQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ0UsT0FBTztZQUFDLENBQUM7O1lBRXpDLE1BQU0sQ0FBQ0osS0FBSzs7QUFFbEIsQ0FBQztBQUVELEVBQThCO0FBQzlCLEtBQUssQ0FBQ0ssU0FBUyxJQUFHQyxPQUFPLEdBQUlWLGtEQUFXLENBQUNHLE9BQU87O0FBRWhELEVBQThCO0FBQ3ZCLEtBQUssQ0FBQ1EsT0FBTyxHQUFHVixpRUFBYSxDQUFDUSxTQUFTLEVBQUUsQ0FBQztJQUFDRyxLQUFLLEVBQUUsSUFBSTtBQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JlLmpzPzNmODUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RvcmUuanNcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuLy8gY3JlYXRlIHlvdXIgcmVkdWNlclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHsgdGljazogJ2luaXQnIH0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVElDSyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGljazogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cbmNvbnN0IG1ha2VTdG9yZSA9IGNvbnRleHQgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwicmVkdWNlciIsInN0YXRlIiwidGljayIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWFrZVN0b3JlIiwiY29udGV4dCIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/store.js\n");

/***/ }),

/***/ "./pages/serverside.js":
/*!*****************************!*\
  !*** ./pages/serverside.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n\n// getServerSideProps\n\n\n\nconst getServerSideProps = _components_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.getServerSideProps((store)=>({ req , res , ...etc })=>{\n        console.log('2. Page.getServerSideProps uses the store to dispatch things');\n        store.dispatch({\n            type: 'TICK',\n            payload: 'was set in other page'\n        });\n    }\n);\n// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store\nconst Page = ({ tick  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/kimseung-wan/Desktop/NextWorld/pages/serverside.js\",\n            lineNumber: 18,\n            columnNumber: 28\n        },\n        __self: undefined,\n        children: tick\n    })\n;\n// you can also use Redux `useSelector` and other hooks instead of `connect()`\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)((state)=>state\n)(Page));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2ZXJzaWRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFxQjtBQUVJO0FBQ1k7QUFDUTtBQUV0QyxLQUFLLENBQUNHLGtCQUFrQixHQUFHRCx5RUFBMEIsRUFDMURFLEtBQUssSUFDRixDQUFDLENBQUNDLEdBQUcsR0FBRUMsR0FBRyxNQUFLQyxHQUFHLENBQUMsQ0FBQyxHQUFLLENBQUM7UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNULENBQThEO1FBRWhFTCxLQUFLLENBQUNNLFFBQVEsQ0FBQyxDQUFDO1lBQUNDLElBQUksRUFBRSxDQUFNO1lBQUVDLE9BQU8sRUFBRSxDQUF1QjtRQUFDLENBQUM7SUFDbkUsQ0FBQzs7QUFHTCxFQUE2SDtBQUM3SCxLQUFLLENBQUNDLElBQUksSUFBSSxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLHdFQUFNQyxDQUFHOzs7Ozs7O2tCQUFFRCxJQUFJOzs7QUFFckMsRUFBOEU7QUFDOUUsaUVBQWViLG9EQUFPLEVBQUNlLEtBQUssR0FBSUEsS0FBSztFQUFFSCxJQUFJLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3NlcnZlcnNpZGUuanM/NDFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXRTZXJ2ZXJTaWRlUHJvcHNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgc3RvcmUgPT5cbiAgICAoeyByZXEsIHJlcywgLi4uZXRjIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnMi4gUGFnZS5nZXRTZXJ2ZXJTaWRlUHJvcHMgdXNlcyB0aGUgc3RvcmUgdG8gZGlzcGF0Y2ggdGhpbmdzJ1xuICAgICAgKTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1RJQ0snLCBwYXlsb2FkOiAnd2FzIHNldCBpbiBvdGhlciBwYWdlJyB9KTtcbiAgICB9XG4pO1xuXG4vLyBQYWdlIGl0c2VsZiBpcyBub3QgY29ubmVjdGVkIHRvIFJlZHV4IFN0b3JlLCBpdCBoYXMgdG8gcmVuZGVyIFByb3ZpZGVyIHRvIGFsbG93IGNoaWxkIGNvbXBvbmVudHMgdG8gY29ubmVjdCB0byBSZWR1eCBTdG9yZVxuY29uc3QgUGFnZSA9ICh7IHRpY2sgfSkgPT4gPGRpdj57dGlja308L2Rpdj47XG5cbi8vIHlvdSBjYW4gYWxzbyB1c2UgUmVkdXggYHVzZVNlbGVjdG9yYCBhbmQgb3RoZXIgaG9va3MgaW5zdGVhZCBvZiBgY29ubmVjdCgpYFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoUGFnZSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwid3JhcHBlciIsImdldFNlcnZlclNpZGVQcm9wcyIsInN0b3JlIiwicmVxIiwicmVzIiwiZXRjIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJQYWdlIiwidGljayIsImRpdiIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/serverside.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/serverside.js"));
module.exports = __webpack_exports__;

})();