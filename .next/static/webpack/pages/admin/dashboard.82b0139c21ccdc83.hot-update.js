"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/dashboard",{

/***/ "./pages/Components/AddFileVersion.js":
/*!********************************************!*\
  !*** ./pages/Components/AddFileVersion.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFileVersion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AddFileVersion(props) {\n    console.log(props.songData.songMetadata.songName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"add a file version:\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"artistName\",\n                        children: \"artistName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"artistName\",\n                        name: \"artistName\",\n                        value: props.artistName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"songName\",\n                        children: \"songName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"songName\",\n                        name: \"songName\",\n                        value: props.songData.songMetadata.songName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"fileVersionName\",\n                        children: \"file version name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"fileVersionName\",\n                        name: \"fileVersionName\",\n                        defaultValue: \"filenamegoeshere\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"dateAdded\",\n                        children: \"dateAdded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"dateAdded\",\n                        name: \"dateAdded\",\n                        defaultValue: \"somedate, make this an actual date\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"revisionNote\",\n                        children: \"revisionNote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"revisionNote\",\n                        name: \"revisionNote\",\n                        defaultValue: \"no revision notes yet!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"jobType\",\n                        children: \"jobType\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"jobTyper\",\n                        name: \"jobType\",\n                        defaultValue: \"mix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n_c = AddFileVersion;\nvar _c;\n$RefreshReg$(_c, \"AddFileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FkZEZpbGVWZXJzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFVixTQUFTQyxjQUFjLENBQUNDLEtBQUssRUFBRTtJQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxDQUFDQyxZQUFZLENBQUNDLFFBQVEsQ0FBQztJQUNuRCxxQkFDRSw4REFBQ0MsTUFBSTtRQUFDQyxTQUFTLEVBQUMsYUFBYTs7MEJBQ3pCLDhEQUFDQyxJQUFFOzBCQUFDLHFCQUFtQjs7Ozs7b0JBQUs7MEJBQzVCLDhEQUFDQyxNQUFJO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUNDLE9BQU8sRUFBRSxNQUFNO29CQUFFQyxhQUFhLEVBQUUsUUFBUTtpQkFBQzs7a0NBRW5ELDhEQUFDQyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsWUFBWTtrQ0FBQyxZQUFVOzs7Ozs0QkFBUTtrQ0FDOUMsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsWUFBWTt3QkFBQ0MsSUFBSSxFQUFDLFlBQVk7d0JBQUNDLEtBQUssRUFBRW5CLEtBQUssQ0FBQ29CLFVBQVU7d0JBQUVDLFFBQVE7d0JBQUNDLFFBQVE7Ozs7OzRCQUFFO2tDQUVqRyw4REFBQ1QsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLFVBQVU7a0NBQUMsVUFBUTs7Ozs7NEJBQVE7a0NBQzFDLDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsRUFBRSxFQUFDLFVBQVU7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxLQUFLLEVBQUVuQixLQUFLLENBQUNHLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxRQUFRO3dCQUFFZ0IsUUFBUTt3QkFBQ0MsUUFBUTs7Ozs7NEJBQUU7a0NBRWpILDhEQUFDVCxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsaUJBQWlCO2tDQUFDLG1CQUFpQjs7Ozs7NEJBQVE7a0NBQzFELDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsRUFBRSxFQUFDLGlCQUFpQjt3QkFBQ0MsSUFBSSxFQUFDLGlCQUFpQjt3QkFBQ0ssWUFBWSxFQUFDLGtCQUFrQjt3QkFBQ0QsUUFBUTs7Ozs7NEJBQUU7a0NBRXpHLDhEQUFDVCxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsV0FBVztrQ0FBQyxXQUFTOzs7Ozs0QkFBUTtrQ0FDNUMsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsV0FBVzt3QkFBQ0MsSUFBSSxFQUFDLFdBQVc7d0JBQUNLLFlBQVksRUFBQyxvQ0FBb0M7Ozs7OzRCQUFFO2tDQUV0Ryw4REFBQ1YsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLGNBQWM7a0NBQUMsY0FBWTs7Ozs7NEJBQVE7a0NBQ2xELDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsRUFBRSxFQUFDLGNBQWM7d0JBQUNDLElBQUksRUFBQyxjQUFjO3dCQUFDSyxZQUFZLEVBQUMsd0JBQXdCOzs7Ozs0QkFBRTtrQ0FFaEcsOERBQUNWLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxTQUFTO2tDQUFDLFNBQU87Ozs7OzRCQUFRO2tDQUN4Qyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLEVBQUUsRUFBQyxVQUFVO3dCQUFDQyxJQUFJLEVBQUMsU0FBUzt3QkFBQ0ssWUFBWSxFQUFDLEtBQUs7Ozs7OzRCQUFFOzs7Ozs7b0JBQ2pFOzs7Ozs7WUFDSixDQUNSO0NBQ0Y7QUEzQnVCeEIsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FkZEZpbGVWZXJzaW9uLmpzP2NkMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRGaWxlVmVyc2lvbihwcm9wcykge1xuICAgIGNvbnNvbGUubG9nKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZSlcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J2xpZ2h0Qm9yZGVyJz5cbiAgICAgICAgPGgzPmFkZCBhIGZpbGUgdmVyc2lvbjo8L2gzPlxuICAgICAgICA8Zm9ybSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fT5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FydGlzdE5hbWUnPmFydGlzdE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdhcnRpc3ROYW1lJyBuYW1lPSdhcnRpc3ROYW1lJyB2YWx1ZT17cHJvcHMuYXJ0aXN0TmFtZX0gcmVhZE9ubHkgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nc29uZ05hbWUnPnNvbmdOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc29uZ05hbWUnIG5hbWU9J3NvbmdOYW1lJyB2YWx1ZT17cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfSByZWFkT25seSByZXF1aXJlZC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlVmVyc2lvbk5hbWUnPmZpbGUgdmVyc2lvbiBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZmlsZVZlcnNpb25OYW1lJyBuYW1lPSdmaWxlVmVyc2lvbk5hbWUnIGRlZmF1bHRWYWx1ZT0nZmlsZW5hbWVnb2VzaGVyZScgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZUFkZGVkJz5kYXRlQWRkZWQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdkYXRlQWRkZWQnIG5hbWU9J2RhdGVBZGRlZCcgZGVmYXVsdFZhbHVlPSdzb21lZGF0ZSwgbWFrZSB0aGlzIGFuIGFjdHVhbCBkYXRlJy8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdyZXZpc2lvbk5vdGUnPnJldmlzaW9uTm90ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3JldmlzaW9uTm90ZScgbmFtZT0ncmV2aXNpb25Ob3RlJyBkZWZhdWx0VmFsdWU9J25vIHJldmlzaW9uIG5vdGVzIHlldCEnLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2pvYlR5cGUnPmpvYlR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdqb2JUeXBlcicgbmFtZT0nam9iVHlwZScgZGVmYXVsdFZhbHVlPSdtaXgnLz5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRkRmlsZVZlcnNpb24iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzb25nRGF0YSIsInNvbmdNZXRhZGF0YSIsInNvbmdOYW1lIiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZm9ybSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImFydGlzdE5hbWUiLCJyZWFkT25seSIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/AddFileVersion.js\n"));

/***/ })

});