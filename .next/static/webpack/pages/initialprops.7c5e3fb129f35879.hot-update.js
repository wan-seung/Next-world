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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// Page.getInitialProps\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// you can also use `connect()` instead of hooks\nvar Page = function() {\n    _s();\n    var tick = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state;\n    }).tick;\n    console.log(tick);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/wanie/Desktop/Next-world/pages/initialprops.js\",\n            lineNumber: 11,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: tick\n    }));\n};\n_s(Page, \"gYQXT+Mp3HbSO9c2LQ25AH2fwDc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Page;\nPage.getInitialProps = _components_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.getInitialPageProps(function(store) {\n    return function(param) {\n        var pathname = param.pathname, req = param.req, res = param.res;\n        console.log(\"2. Page.getInitialProps uses the store to dispatch things\");\n        store.dispatch({\n            type: \"TICK\",\n            payload: \"was set in error page \" + pathname\n        });\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbml0aWFscHJvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsRUFBdUI7QUFFaUI7QUFDQztBQUNJOzs7QUFFN0MsRUFBZ0Q7QUFDaEQsR0FBSyxDQUFDSSxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQUdDLElBQUksR0FBS0gsd0RBQVcsQ0FBQyxRQUFRLENBQVBJLEtBQUs7UUFBS0EsTUFBTSxDQUFOQSxLQUFLO09BQXJDRCxJQUFJO0lBQ1pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO0lBQ2hCLE1BQU0sc0VBQUVJLENBQUc7Ozs7Ozs7a0JBQUVKLElBQUk7O0FBQ25CLENBQUM7R0FKS0QsSUFBSTs7UUFDU0Ysb0RBQVc7OztLQUR4QkUsSUFBSTtBQU1WQSxJQUFJLENBQUNNLGVBQWUsR0FBR1AsMEVBQTJCLENBQ2hELFFBQVEsQ0FBUFMsS0FBSztJQUNKLE1BQU0sQ0FBTixRQUFRLFFBQW9CLENBQUM7WUFBMUJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsR0FBRyxTQUFIQSxHQUFHO1FBQ25CUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyRDtRQUN2RUksS0FBSyxDQUFDSSxRQUFRLENBQUMsQ0FBQztZQUNkQyxJQUFJLEVBQUUsQ0FBTTtZQUNaQyxPQUFPLEVBQUUsQ0FBd0IsMEJBQUdMLFFBQVE7UUFDOUMsQ0FBQztJQUNILENBQUM7O0FBR0wsK0RBQWVULElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbml0aWFscHJvcHMuanM/NzlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWdlLmdldEluaXRpYWxQcm9wc1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0b3JlXCI7XG5cbi8vIHlvdSBjYW4gYWxzbyB1c2UgYGNvbm5lY3QoKWAgaW5zdGVhZCBvZiBob29rc1xuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0aWNrIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcbiAgY29uc29sZS5sb2codGljayk7XG4gIHJldHVybiA8ZGl2Pnt0aWNrfTwvZGl2Pjtcbn07XG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gd3JhcHBlci5nZXRJbml0aWFsUGFnZVByb3BzKFxuICAoc3RvcmUpID0+XG4gICAgKHsgcGF0aG5hbWUsIHJlcSwgcmVzIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiMi4gUGFnZS5nZXRJbml0aWFsUHJvcHMgdXNlcyB0aGUgc3RvcmUgdG8gZGlzcGF0Y2ggdGhpbmdzXCIpO1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlRJQ0tcIixcbiAgICAgICAgcGF5bG9hZDogXCJ3YXMgc2V0IGluIGVycm9yIHBhZ2UgXCIgKyBwYXRobmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VTZWxlY3RvciIsIndyYXBwZXIiLCJQYWdlIiwidGljayIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQYWdlUHJvcHMiLCJzdG9yZSIsInBhdGhuYW1lIiwicmVxIiwicmVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/initialprops.js\n");

/***/ })

});