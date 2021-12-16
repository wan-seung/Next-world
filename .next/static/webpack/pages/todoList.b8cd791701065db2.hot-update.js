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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/store */ \"./components/store.js\");\n/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/todo */ \"./components/todo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// export const getServerSideProps = wrapper.getServerSideProps()\nvar TodoList = function() {\n    var _this1 = _this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var initialState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.list;\n    });\n    console.log(initialState);\n    // const state = useSelector(state => state.)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState), todoList = ref1[0], setTodoList = ref1[1];\n    var handleInput = function(e) {\n        setInput(e.target.value);\n        console.log(e.target.value);\n    };\n    var addItem = function() {\n        dispatch(todoCreate(input));\n    };\n    var deleteItem = function(item) {\n        dispatch({\n            type: TODO_DELETE,\n            item: item\n        });\n        dispatch((0,_components_todo__WEBPACK_IMPORTED_MODULE_5__.todoDelete)(item));\n    };\n    // useEffect(() => {}, [todoList]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    type: \"button\",\n                    __source: {\n                        fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"홈으로\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        onChange: handleInput,\n                        value: input,\n                        __source: {\n                            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        type: \"button\",\n                        onClick: addItem,\n                        __source: {\n                            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"추가하기\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: todoList && todoList.map(function(todo1) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, {\n                        id: todo1.id,\n                        title: todo1.title,\n                        onClick: function(todo) {\n                            deleteItem(todo);\n                        },\n                        __source: {\n                            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        },\n                        __self: _this1\n                    }, todo1.id);\n                })\n            })\n        ]\n    }));\n};\n_s(TodoList, \"EnDqyByZOqx8s4zE80OnZll0BZ4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar Item = function(param) {\n    var key = param.key, id = param.id, title = param.title, onClick = param.onClick;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        style: {\n            marginTop: \"50px\",\n            display: \"flex\"\n        },\n        id: key,\n        __source: {\n            fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n            lineNumber: 65,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            \"순서 : \",\n            id,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                type: \"button\",\n                onClick: onClick,\n                __source: {\n                    fileName: \"/Users/wanie/Desktop/Next-world/pages/todoList.js\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"삭제\"\n            })\n        ]\n    }));\n}; // const mapStateToProps = (state) => {\n //   return { todoList: state.todoLIst };\n // };\n_c1 = Item;\nvar _c, _c1;\n$RefreshReg$(_c, \"TodoList\");\n$RefreshReg$(_c1, \"Item\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztZQUFDQyxTQUFTLEVBQUUsQ0FBTTtZQUFFQyxPQUFPLEVBQUUsQ0FBTTtRQUFDLENBQUM7UUFBRUwsRUFBRSxFQUFFRSxHQUFHOzs7Ozs7OztZQUFFLENBQ3REO1lBQUtGLEVBQUU7aUZBQ1BNLENBQUY7Ozs7Ozs7MEJBQUVMLEtBQUs7O2lGQUNUUixDQUFNO2dCQUFDSCxJQUFJLEVBQUMsQ0FBUTtnQkFBQ00sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OzBCQUFFLENBRXhDOzs7O0FBR04sQ0FBQyxDQUVELENBQXVDO0FBQ3ZDLENBQXlDO0FBQ3pDLENBQUs7TUFkQ0csSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2RvTGlzdC5qcz84MGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RvcmVcIjtcbmltcG9ydCB7IHRvZG9EZWxldGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90b2RvXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygpXG5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubGlzdCk7XG4gIGNvbnNvbGUubG9nKGluaXRpYWxTdGF0ZSk7XG4gIC8vIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZSkgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh0b2RvQ3JlYXRlKGlucHV0KSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBUT0RPX0RFTEVURSwgaXRlbSB9KTtcbiAgICBkaXNwYXRjaCh0b2RvRGVsZXRlKGl0ZW0pKTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge30sIFt0b2RvTGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPu2ZiOycvOuhnDwvYnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0fSB2YWx1ZT17aW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2FkZEl0ZW19PlxuICAgICAgICAgIOy2lOqwgO2VmOq4sFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3RvZG9MaXN0ICYmXG4gICAgICAgICAgdG9kb0xpc3QubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICBrZXk9e3RvZG8uaWR9XG4gICAgICAgICAgICAgIGlkPXt0b2RvLmlkfVxuICAgICAgICAgICAgICB0aXRsZT17dG9kby50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtKHRvZG8pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG5cbmNvbnN0IEl0ZW0gPSAoeyBrZXksIGlkLCB0aXRsZSwgb25DbGljayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fSBpZD17a2V5fT5cbiAgICAgIOyInOyEnCA6IHtpZH1cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICDsgq3soJxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgIHJldHVybiB7IHRvZG9MaXN0OiBzdGF0ZS50b2RvTElzdCB9O1xuLy8gfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ3cmFwcGVyIiwidG9kb0RlbGV0ZSIsIlRvZG9MaXN0IiwiZGlzcGF0Y2giLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJzZXRJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZEl0ZW0iLCJ0b2RvQ3JlYXRlIiwiZGVsZXRlSXRlbSIsIml0ZW0iLCJ0eXBlIiwiVE9ET19ERUxFVEUiLCJocmVmIiwiYnV0dG9uIiwiZGl2Iiwib25DaGFuZ2UiLCJvbkNsaWNrIiwibWFwIiwidG9kbyIsIkl0ZW0iLCJpZCIsInRpdGxlIiwia2V5Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todoList.js\n");

/***/ })

});