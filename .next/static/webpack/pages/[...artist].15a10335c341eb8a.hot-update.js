"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...artist]",{

/***/ "./pages/Components/SongShare.js":
/*!***************************************!*\
  !*** ./pages/Components/SongShare.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SongShare; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\n\nfunction SongShare(props) {\n    // const [songPathRef, setSongPathRef] = React.useState(props.songData.pathReference)\n    var getCurrentDownloadUrl = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pathRef) {\n            var indexOfMostRecentFileVersion, fileVersionRef;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (props.songData) {\n                            indexOfMostRecentFileVersion = props.songData.fileVersions.length - 1;\n                            fileVersionRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.storage, props.songData.fileVersions[indexOfMostRecentFileVersion].pathReference);\n                            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(fileVersionRef).then(function(url) {\n                                return url;\n                            }).catch(function(error) {\n                                console.log(error);\n                                return null;\n                            });\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getCurrentDownloadUrl(pathRef) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: props.songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            \"song name: \",\n                            props.songData.songMetadata.songName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            \"date of most recent edit: \",\n                            Date(props.songData.songMetadata.dateOfMostRecentEdit)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n};\n_c = SongShare;\nvar _c;\n$RefreshReg$(_c, \"SongShare\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmdTaGFyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF5QjtBQUNHO0FBQ3dDO0FBQ3VDO0FBQ3hDO0FBRXBELFNBQVNpQixTQUFTLENBQUNDLEtBQUssRUFBRTtJQUVyQyxxRkFBcUY7SUFJckYsSUFBTUMscUJBQXFCO21CQUFHLDJQQUFPQyxPQUFPLEVBQUs7Z0JBR25DQyw0QkFBNEIsRUFFNUJDLGNBQWM7Ozs7d0JBSnhCLElBQUlKLEtBQUssQ0FBQ0ssUUFBUSxFQUFFOzRCQUVWRiw0QkFBNEIsR0FBR0gsS0FBSyxDQUFDSyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7NEJBRXJFSCxjQUFjLEdBQUdQLHFEQUFHLENBQUNWLHFEQUFPLEVBQUVhLEtBQUssQ0FBQ0ssUUFBUSxDQUFDQyxZQUFZLENBQUNILDRCQUE0QixDQUFDLENBQUNLLGFBQWEsQ0FBQyxDQUFDOzRCQUM3R1YsZ0VBQWMsQ0FBQ00sY0FBYyxDQUFDLENBQzdCSyxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO2dDQUNYLE9BQU9BLEdBQUc7NkJBQ2IsQ0FBQyxDQUFDQyxLQUFLLENBQUMsU0FBQ0MsS0FBSyxFQUFLO2dDQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztnQ0FDbEIsT0FBTyxJQUFJOzZCQUNkLENBQUM7eUJBQ0w7Ozs7OztTQUNKO3dCQWRLWCxxQkFBcUIsQ0FBVUMsT0FBTzs7O09BYzNDO0lBQ0QscUJBQ0ksOERBQUNhLE1BQUk7a0JBRURmLEtBQUssQ0FBQ0ssUUFBUSxrQkFHbEIsOERBQUNXLEtBQUc7c0JBS0EsNEVBQUNDLElBQUU7O2tDQUNDLDhEQUFDQyxJQUFFOzs0QkFBQyxhQUFXOzRCQUFDbEIsS0FBSyxDQUFDSyxRQUFRLENBQUNjLFlBQVksQ0FBQ0MsUUFBUTs7Ozs7OzRCQUFNO2tDQUUxRCw4REFBQ0YsSUFBRTs7NEJBQUMsNEJBQTBCOzRCQUFDRyxJQUFJLENBQUNyQixLQUFLLENBQUNLLFFBQVEsQ0FBQ2MsWUFBWSxDQUFDRyxvQkFBb0IsQ0FBQzs7Ozs7OzRCQUFNOzs7Ozs7b0JBRTFGOzs7OztnQkFDSDs7Ozs7WUFFSCxDQUNSO0NBQ0Y7QUExQ3VCdkIsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1NvbmdTaGFyZS5qcz80YjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciwgc3RvcmFnZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBkb2MsIG9uU25hcHNob3QsIGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jLCBnZXREb2NzLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZ1NoYXJlKHByb3BzKSB7XG5cbiAgICAvLyBjb25zdCBbc29uZ1BhdGhSZWYsIHNldFNvbmdQYXRoUmVmXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLnNvbmdEYXRhLnBhdGhSZWZlcmVuY2UpXG4gICAgXG5cbiAgICBcbiAgICBjb25zdCBnZXRDdXJyZW50RG93bmxvYWRVcmwgPSBhc3luYyAocGF0aFJlZikgPT4ge1xuICAgICAgICBpZiAocHJvcHMuc29uZ0RhdGEpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5kZXhPZk1vc3RSZWNlbnRGaWxlVmVyc2lvbiA9IHByb3BzLnNvbmdEYXRhLmZpbGVWZXJzaW9ucy5sZW5ndGggLSAxXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpbGVWZXJzaW9uUmVmID0gcmVmKHN0b3JhZ2UsIHByb3BzLnNvbmdEYXRhLmZpbGVWZXJzaW9uc1tpbmRleE9mTW9zdFJlY2VudEZpbGVWZXJzaW9uXS5wYXRoUmVmZXJlbmNlKTtcbiAgICAgICAgICAgIGdldERvd25sb2FkVVJMKGZpbGVWZXJzaW9uUmVmKVxuICAgICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmxcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy5zb25nRGF0YSAmJlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9eydodHRwOi8vbG9jYWxob3N0OjMwMDAvJyArIHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZSArICcvJyArIHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6ICdibHVlJ319PnNob3cgb25seTwvYT5cbiAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPnNvbmcgbmFtZToge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIHsvKiA8bGk+ZGF0ZSByZWxlYXNlZDoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlUmVsZWFzZWR9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgPGxpPmRhdGUgb2YgbW9zdCByZWNlbnQgZWRpdDoge0RhdGUocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVPZk1vc3RSZWNlbnRFZGl0KX08L2xpPlxuICAgICAgICAgICAgICAgIHsvKiA8YXVkaW8gcHJlbG9hZD0nbm9uZScgY29udHJvbHMgc3JjPXtnZXRDdXJyZW50RG93bmxvYWRVcmwocHJvcHMuc29uZ0RhdGEucGF0aFJlZmVyZW5jZSl9PjwvYXVkaW8+ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsInN0b3JhZ2UiLCJkb2MiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiU29uZ1NoYXJlIiwicHJvcHMiLCJnZXRDdXJyZW50RG93bmxvYWRVcmwiLCJwYXRoUmVmIiwiaW5kZXhPZk1vc3RSZWNlbnRGaWxlVmVyc2lvbiIsImZpbGVWZXJzaW9uUmVmIiwic29uZ0RhdGEiLCJmaWxlVmVyc2lvbnMiLCJsZW5ndGgiLCJwYXRoUmVmZXJlbmNlIiwidGhlbiIsInVybCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImRpdiIsInVsIiwibGkiLCJzb25nTWV0YWRhdGEiLCJzb25nTmFtZSIsIkRhdGUiLCJkYXRlT2ZNb3N0UmVjZW50RWRpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/SongShare.js\n"));

/***/ })

});