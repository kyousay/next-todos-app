webpackHotUpdate_N_E("pages/index",{

/***/ "./src/hooks/useTodo/useTodoCore.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useTodo/useTodoCore.tsx ***!
  \*******************************************/
/*! exports provided: useTodoCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useTodoCore\", function() { return useTodoCore; });\n/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _usr_src_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_usr_src_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n// Action\nvar changeStatus = function changeStatus(status) {\n  return {\n    type: 'TODO/CHANGE_STATUS',\n    payload: {\n      status: status\n    }\n  };\n};\n\n// InitialState\nvar initialStateFactory = function initialStateFactory(initialState) {\n  return _objectSpread({\n    status: 'ALL'\n  }, initialState);\n}; // Reducer\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'TODO/CHANGE_STATUS':\n      {\n        var _status = action.payload.status;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          status: _status\n        });\n      }\n\n    default:\n      {\n        return _objectSpread({}, state);\n      }\n  }\n}; // UseTodoCore\n\n\nfunction useTodoCore(initialState) {\n  _s();\n\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(reducer, initialStateFactory(initialState)),\n      _React$useReducer2 = Object(_usr_src_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n      state = _React$useReducer2[0],\n      dispatch = _React$useReducer2[1];\n\n  var handleChangeStatus = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (status) {\n    dispatch(changeStatus(status));\n  }, [dispatch]);\n  return {\n    state: state,\n    handleChangeStatus: handleChangeStatus\n  };\n}\n\n_s(useTodoCore, \"TGpkj1F6ij+pBjRIRl/v/Z436jM=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRvZG8vdXNlVG9kb0NvcmUudHN4P2RhMWEiXSwibmFtZXMiOlsiY2hhbmdlU3RhdHVzIiwic3RhdHVzIiwidHlwZSIsInBheWxvYWQiLCJpbml0aWFsU3RhdGVGYWN0b3J5IiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXNlVG9kb0NvcmUiLCJSZWFjdCIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImhhbmRsZUNoYW5nZVN0YXR1cyIsInVzZUNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFVQTtBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQ7QUFBQSxTQUEyQjtBQUM5Q0MsUUFBSSxFQUFFLG9CQUR3QztBQUU5Q0MsV0FBTyxFQUFFO0FBQ1BGLFlBQU0sRUFBTkE7QUFETztBQUZxQyxHQUEzQjtBQUFBLENBQXJCOztBQVNBO0FBQ0EsSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxZQUFEO0FBQUE7QUFDMUJKLFVBQU0sRUFBRTtBQURrQixLQUV2QkksWUFGdUI7QUFBQSxDQUE1QixDLENBS0E7OztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBbUJDLE1BQW5CLEVBQWlEO0FBQy9ELFVBQVFBLE1BQU0sQ0FBQ04sSUFBZjtBQUNFLFNBQUssb0JBQUw7QUFBMkI7QUFBQSxZQUNqQkQsT0FEaUIsR0FDTk8sTUFBTSxDQUFDTCxPQURELENBQ2pCRixNQURpQjtBQUV6QiwrQ0FDS00sS0FETDtBQUVFTixnQkFBTSxFQUFOQTtBQUZGO0FBSUQ7O0FBQ0Q7QUFBUztBQUNQLGlDQUFZTSxLQUFaO0FBQ0Q7QUFWSDtBQVlELENBYkQsQyxDQWVBOzs7QUFDTyxTQUFTRSxXQUFULENBQ0xKLFlBREssRUFLTDtBQUFBOztBQUFBLDBCQUMwQkssNENBQUssQ0FBQ0MsVUFBTixDQUN4QkwsT0FEd0IsRUFFeEJGLG1CQUFtQixDQUFDQyxZQUFELENBRkssQ0FEMUI7QUFBQTtBQUFBLE1BQ09FLEtBRFA7QUFBQSxNQUNjSyxRQURkOztBQUtBLE1BQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUNwQyxVQUFDYixNQUFELEVBQTBCO0FBQ3hCVyxZQUFRLENBQUNaLFlBQVksQ0FBQ0MsTUFBRCxDQUFiLENBQVI7QUFDRCxHQUhtQyxFQUlwQyxDQUFDVyxRQUFELENBSm9DLENBQXRDO0FBT0EsU0FBTztBQUNMTCxTQUFLLEVBQUxBLEtBREs7QUFFTE0sc0JBQWtCLEVBQWxCQTtBQUZLLEdBQVA7QUFJRDs7R0FyQmVKLFciLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVG9kby91c2VUb2RvQ29yZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIFN0YXR1c1N0cmluZyA9ICdBTEwnIHwgJ05PVFlFVCcgfCAnRE9ORSc7XG5cbmV4cG9ydCB0eXBlIFRvZG9TdGF0ZSA9IHtcbiAgc3RhdHVzOiBTdGF0dXNTdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBUb2RvRGlzcGF0Y2ggPSAoc3RhdHVzOiBTdGF0dXNTdHJpbmcpID0+IHZvaWQ7XG5cbi8vIEFjdGlvblxuY29uc3QgY2hhbmdlU3RhdHVzID0gKHN0YXR1czogU3RhdHVzU3RyaW5nKSA9PiAoe1xuICB0eXBlOiAnVE9ETy9DSEFOR0VfU1RBVFVTJyBhcyBjb25zdCxcbiAgcGF5bG9hZDoge1xuICAgIHN0YXR1cyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBY3Rpb24gPSBSZXR1cm5UeXBlPHR5cGVvZiBjaGFuZ2VTdGF0dXM+O1xuXG4vLyBJbml0aWFsU3RhdGVcbmNvbnN0IGluaXRpYWxTdGF0ZUZhY3RvcnkgPSAoaW5pdGlhbFN0YXRlPzogUGFydGlhbDxUb2RvU3RhdGU+KTogVG9kb1N0YXRlID0+ICh7XG4gIHN0YXR1czogJ0FMTCcsXG4gIC4uLmluaXRpYWxTdGF0ZSxcbn0pO1xuXG4vLyBSZWR1Y2VyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBUb2RvU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogVG9kb1N0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1RPRE8vQ0hBTkdFX1NUQVRVUyc6IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuLy8gVXNlVG9kb0NvcmVcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2RvQ29yZShcbiAgaW5pdGlhbFN0YXRlPzogUGFydGlhbDxUb2RvU3RhdGU+LFxuKToge1xuICBzdGF0ZTogVG9kb1N0YXRlO1xuICBoYW5kbGVDaGFuZ2VTdGF0dXM6IFRvZG9EaXNwYXRjaDtcbn0ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXG4gICAgcmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGVGYWN0b3J5KGluaXRpYWxTdGF0ZSksXG4gICk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN0YXR1cyA9IHVzZUNhbGxiYWNrKFxuICAgIChzdGF0dXM6IFN0YXR1c1N0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goY2hhbmdlU3RhdHVzKHN0YXR1cykpO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIGhhbmRsZUNoYW5nZVN0YXR1cyxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useTodo/useTodoCore.tsx\n");

/***/ })

})