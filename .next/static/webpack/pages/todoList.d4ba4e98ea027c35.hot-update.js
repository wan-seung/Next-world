"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todoList",{

/***/ "./pages/todoList.js":
/*!***************************!*\
  !*** ./pages/todoList.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/todo */ \"./components/todo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// export const getServerSideProps = wrapper.getServerSideProps()\nvar TodoList = function() {\n    var _this1 = _this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var initialState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.list;\n    });\n    console.log(initialState);\n    // const state = useSelector(state => state.)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref[0], setInput = ref[1];\n    var checkId = function() {\n        return initialState.length;\n    };\n    var handleInput = function(e) {\n        setInput(e.target.value);\n        console.log(e.target.value);\n    };\n    var addItem = function() {\n        dispatch((0,_components_todo__WEBPACK_IMPORTED_MODULE_5__.todoCreate)({\n            title: input,\n            id: checkId()\n        }));\n    };\n    var deleteItem = function(item) {\n        console.log(item.target.value);\n        // dispatch({ type: TODO_DELETE, item });\n        dispatch((0,_components_todo__WEBPACK_IMPORTED_MODULE_5__.todoDelete)({\n            title: item.title,\n            id: item.id\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    type: \"button\",\n                    __source: {\n                        fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"홈으로\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        onChange: handleInput,\n                        value: input,\n                        __source: {\n                            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        type: \"button\",\n                        onClick: addItem,\n                        __source: {\n                            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"추가하기\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: initialState && initialState.map(function(todo1) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, {\n                        id: todo1.id,\n                        title: todo1.title,\n                        onClick: function(todo) {\n                            deleteItem(todo);\n                        },\n                        __source: {\n                            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        },\n                        __self: _this1\n                    }, todo1.id);\n                })\n            })\n        ]\n    }));\n};\n_s(TodoList, \"gb+BVtwN0Ls79SolMD4CNxXhUJw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar Item = function(param) {\n    var key = param.key, id = param.id, title = param.title, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        style: {\n            marginTop: \"50px\",\n            display: \"flex\"\n        },\n        id: key,\n        __source: {\n            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n            lineNumber: 67,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            \"순서 : \",\n            id,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                type: \"button\",\n                onClick: onClick,\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"삭제\"\n            })\n        ]\n    }));\n}; // const mapStateToProps = (state) => {\n //   return { todoList: state.todoLIst };\n // };\n_c1 = Item;\nvar _c, _c1;\n$RefreshReg$(_c, \"TodoList\");\n$RefreshReg$(_c1, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFGQSxFQUFFLEVBQUVELEtBQUssU0FBTEEsS0FBSyxFQUFFUyxPQUFPLFNBQVBBLE9BQU87SUFDckMsTUFBTSx1RUFDSEYsQ0FBRztRQUFDTyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxTQUFTLEVBQUUsQ0FBTTtZQUFFQyxPQUFPLEVBQUUsQ0FBTTtRQUFDLENBQUM7UUFBRWYsRUFBRSxFQUFFWSxHQUFHOzs7Ozs7OztZQUFFLENBQ3REO1lBQUtaLEVBQUU7aUZBQ1BnQixDQUFGOzs7Ozs7OzBCQUFFakIsS0FBSzs7aUZBQ1RLLENBQU07Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDRyxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7MEJBQUUsQ0FFeEM7Ozs7QUFHTixDQUFDLENBRUQsQ0FBdUM7QUFDdkMsQ0FBeUM7QUFDekMsQ0FBSztNQWRDRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9MaXN0LmpzPzgwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdG9yZVwiO1xuaW1wb3J0IHsgdG9kb0RlbGV0ZSwgdG9kb0NyZWF0ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RvZG9cIjtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKClcblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5saXN0KTtcbiAgY29uc29sZS5sb2coaW5pdGlhbFN0YXRlKTtcbiAgLy8gY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS4pXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY2hlY2tJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHRvZG9DcmVhdGUoeyB0aXRsZTogaW5wdXQsIGlkOiBjaGVja0lkKCkgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0udGFyZ2V0LnZhbHVlKTtcbiAgICAvLyBkaXNwYXRjaCh7IHR5cGU6IFRPRE9fREVMRVRFLCBpdGVtIH0pO1xuICAgIGRpc3BhdGNoKHRvZG9EZWxldGUoeyB0aXRsZTogaXRlbS50aXRsZSwgaWQ6IGl0ZW0uaWQgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPu2ZiOycvOuhnDwvYnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0fSB2YWx1ZT17aW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2FkZEl0ZW19PlxuICAgICAgICAgIOy2lOqwgO2VmOq4sFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2luaXRpYWxTdGF0ZSAmJlxuICAgICAgICAgIGluaXRpYWxTdGF0ZS5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgIGtleT17dG9kby5pZH1cbiAgICAgICAgICAgICAgaWQ9e3RvZG8uaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXt0b2RvLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0odG9kbyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcblxuY29uc3QgSXRlbSA9ICh7IGtleSwgaWQsIHRpdGxlLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1MHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19IGlkPXtrZXl9PlxuICAgICAg7Iic7IScIDoge2lkfVxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIOyCreygnFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbi8vICAgcmV0dXJuIHsgdG9kb0xpc3Q6IHN0YXRlLnRvZG9MSXN0IH07XG4vLyB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIndyYXBwZXIiLCJ0b2RvRGVsZXRlIiwidG9kb0NyZWF0ZSIsIlRvZG9MaXN0IiwiZGlzcGF0Y2giLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJzZXRJbnB1dCIsImNoZWNrSWQiLCJsZW5ndGgiLCJoYW5kbGVJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZEl0ZW0iLCJ0aXRsZSIsImlkIiwiZGVsZXRlSXRlbSIsIml0ZW0iLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsImRpdiIsIm9uQ2hhbmdlIiwib25DbGljayIsIm1hcCIsInRvZG8iLCJJdGVtIiwia2V5Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todoList.js\n");

/***/ })

});