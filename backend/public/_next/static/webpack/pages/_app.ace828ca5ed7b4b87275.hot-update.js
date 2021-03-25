webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/hooks/useTodo/TodoProviderContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/hooks/useTodo/TodoProviderContainer.tsx ***!
  \*****************************************************/
/*! exports provided: TodoStateContext, TodoDispatchContext, TodoProviderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoStateContext\", function() { return TodoStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoDispatchContext\", function() { return TodoDispatchContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoProviderContainer\", function() { return TodoProviderContainer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useTodoCore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTodoCore */ \"./src/hooks/useTodo/useTodoCore.tsx\");\n\n\nvar _jsxFileName = \"/usr/src/app/src/hooks/useTodo/TodoProviderContainer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar TodoStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nvar TodoDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nvar TodoProviderContainer = function TodoProviderContainer(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useTodoCore = Object(_useTodoCore__WEBPACK_IMPORTED_MODULE_2__[\"useTodoCore\"])(),\n      state = _useTodoCore.state,\n      handleChangeStatus = _useTodoCore.handleChangeStatus;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TodoStateContext.Provider, {\n    value: state,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TodoDispatchContext.Provider, {\n      value: {\n        handleChangeStatus: handleChangeStatus\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoProviderContainer, \"gHM4fKoDoz1L8rbJQsAnr6OLoCg=\", false, function () {\n  return [_useTodoCore__WEBPACK_IMPORTED_MODULE_2__[\"useTodoCore\"]];\n});\n\n_c = TodoProviderContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"TodoProviderContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRvZG8vVG9kb1Byb3ZpZGVyQ29udGFpbmVyLnRzeD8wNWZmIl0sIm5hbWVzIjpbIlRvZG9TdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVG9kb0Rpc3BhdGNoQ29udGV4dCIsIlRvZG9Qcm92aWRlckNvbnRhaW5lciIsImNoaWxkcmVuIiwidXNlVG9kb0NvcmUiLCJzdGF0ZSIsImhhbmRsZUNoYW5nZVN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBWSxJQUFaLENBQXRDO0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHRCwyREFBYSxDQUFNLElBQU4sQ0FBekM7QUFFQSxJQUFNRSxxQkFBK0IsR0FBRyxTQUFsQ0EscUJBQWtDLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLHFCQUN6QkMsZ0VBQVcsRUFEYztBQUFBLE1BQ3ZEQyxLQUR1RCxnQkFDdkRBLEtBRHVEO0FBQUEsTUFDaERDLGtCQURnRCxnQkFDaERBLGtCQURnRDs7QUFFL0Qsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFRCxLQUFsQztBQUFBLDJCQUNFLHFFQUFDLG1CQUFELENBQXFCLFFBQXJCO0FBQThCLFdBQUssRUFBRTtBQUFFQywwQkFBa0IsRUFBbEJBO0FBQUYsT0FBckM7QUFBQSxnQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FUTTs7R0FBTUQscUI7VUFDMkJFLHdEOzs7S0FEM0JGLHFCIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZVRvZG8vVG9kb1Byb3ZpZGVyQ29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVG9kb0NvcmUsIFRvZG9TdGF0ZSB9IGZyb20gJy4vdXNlVG9kb0NvcmUnO1xuXG5leHBvcnQgY29uc3QgVG9kb1N0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VG9kb1N0YXRlPihudWxsKTtcbmV4cG9ydCBjb25zdCBUb2RvRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgVG9kb1Byb3ZpZGVyQ29udGFpbmVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgaGFuZGxlQ2hhbmdlU3RhdHVzIH0gPSB1c2VUb2RvQ29yZSgpO1xuICByZXR1cm4gKFxuICAgIDxUb2RvU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICA8VG9kb0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBoYW5kbGVDaGFuZ2VTdGF0dXMgfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVG9kb0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RvZG9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useTodo/TodoProviderContainer.tsx\n");

/***/ })

})