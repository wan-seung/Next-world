"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/initialprops",{

/***/ "./pages/initialprops.js":
/*!*******************************!*\
  !*** ./pages/initialprops.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// Page.getInitialProps\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// you can also use `connect()` instead of hooks\nvar Page = function() {\n    _s();\n    var tick = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state;\n    }).tick;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/wanie/Desktop/Next-world/pages/initialprops.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/initialprops.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: tick\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/initialprops.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"hello\"\n            })\n        ]\n    }));\n};\n_s(Page, \"gYQXT+Mp3HbSO9c2LQ25AH2fwDc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Page;\nPage.getInitialProps = _components_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.getInitialPageProps(function(store) {\n    return function(param) {\n        var pathname = param.pathname, req = param.req, res = param.res;\n        console.log(\"2. Page.getInitialProps uses the store to dispatch things\");\n        store.dispatch({\n            type: \"TICK\",\n            payload: \"was set in error page \" + pathname\n        });\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbml0aWFscHJvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsRUFBdUI7QUFFaUI7QUFDQztBQUNJOzs7QUFFN0MsRUFBZ0Q7QUFDaEQsR0FBSyxDQUFDSSxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQUdDLElBQUksR0FBS0gsd0RBQVcsQ0FBQyxRQUFRLENBQVBJLEtBQUs7UUFBS0EsTUFBTSxDQUFOQSxLQUFLO09BQXJDRCxJQUFJO0lBQ1osTUFBTSx1RUFDSEUsQ0FBRzs7Ozs7Ozs7aUZBQ0RBLENBQUc7Ozs7Ozs7MEJBQUVGLElBQUk7O2lGQUNURSxDQUFHOzs7Ozs7OzBCQUFDLENBQUs7Ozs7QUFHaEIsQ0FBQztHQVJLSCxJQUFJOztRQUNTRixvREFBVzs7O0tBRHhCRSxJQUFJO0FBVVZBLElBQUksQ0FBQ0ksZUFBZSxHQUFHTCwwRUFBMkIsQ0FDaEQsUUFBUSxDQUFQTyxLQUFLO0lBQ0osTUFBTSxDQUFOLFFBQVEsUUFBb0IsQ0FBQztZQUExQkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTJEO1FBQ3ZFTCxLQUFLLENBQUNNLFFBQVEsQ0FBQyxDQUFDO1lBQ2RDLElBQUksRUFBRSxDQUFNO1lBQ1pDLE9BQU8sRUFBRSxDQUF3QiwwQkFBR1AsUUFBUTtRQUM5QyxDQUFDO0lBQ0gsQ0FBQzs7QUFHTCwrREFBZVAsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luaXRpYWxwcm9wcy5qcz83OWYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBhZ2UuZ2V0SW5pdGlhbFByb3BzXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RvcmVcIjtcblxuLy8geW91IGNhbiBhbHNvIHVzZSBgY29ubmVjdCgpYCBpbnN0ZWFkIG9mIGhvb2tzXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHRpY2sgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2Pnt0aWNrfTwvZGl2PlxuICAgICAgPGRpdj5oZWxsbzwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFnZS5nZXRJbml0aWFsUHJvcHMgPSB3cmFwcGVyLmdldEluaXRpYWxQYWdlUHJvcHMoXG4gIChzdG9yZSkgPT5cbiAgICAoeyBwYXRobmFtZSwgcmVxLCByZXMgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCIyLiBQYWdlLmdldEluaXRpYWxQcm9wcyB1c2VzIHRoZSBzdG9yZSB0byBkaXNwYXRjaCB0aGluZ3NcIik7XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiVElDS1wiLFxuICAgICAgICBwYXlsb2FkOiBcIndhcyBzZXQgaW4gZXJyb3IgcGFnZSBcIiArIHBhdGhuYW1lLFxuICAgICAgfSk7XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwid3JhcHBlciIsIlBhZ2UiLCJ0aWNrIiwic3RhdGUiLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUGFnZVByb3BzIiwic3RvcmUiLCJwYXRobmFtZSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/initialprops.js\n");

/***/ })

});