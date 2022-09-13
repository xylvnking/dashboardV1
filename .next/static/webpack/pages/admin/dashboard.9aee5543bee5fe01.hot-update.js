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

/***/ "./pages/Components/FileVersion.js":
/*!*****************************************!*\
  !*** ./pages/Components/FileVersion.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FileVersion(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.fileVersion), fileVersionData = ref[0], setFileVersionData = ref[1];\n    var deleteFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempFileVersionsArray, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", fileVersionData.artistName); // create reference to document\n                        _ctx.next = 5;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 5:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempFileVersionsArray = docSnap.data().songs[props.fileVersionIndex].fileVersions // store document data in scoped local array\n                            ;\n                            tempFileVersionsArray.splice(props.fileVersionIndex, 1);\n                            console.log(tempFileVersionsArray);\n                            tempArtistSongsArray = docSnap.data().songs;\n                            tempArtistSongsArray.fileVersions.splice(props.fileVersionIndex, 1);\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            // \"songs[props.songIndex.fileVersions]\": tempFileVersionsArray\n                            songs: tempArtistSongsArray\n                        });\n                        setFileVersionData(null);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteFileVersion() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return fileVersionData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: props.fileVersion.fileVersionName\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: Object.keys(fileVersionData).map(function(fileVersionField, fileversionFieldIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                    children: fileVersionField\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: fileVersionData[fileVersionField]\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                                lineNumber: 46,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, fileversionFieldIndex, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return deleteFileVersion();\n                },\n                children: \"delete file version\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n};\n_s(FileVersion, \"BZ26ZtxkJnMopdF9WEiMPc7UnVo=\");\n_c = FileVersion;\nvar _c;\n$RefreshReg$(_c, \"FileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0ZpbGVWZXJzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFnRDtBQUN3QztBQUM3QjtBQUU1QyxTQUFTWSxXQUFXLENBQUNDLEtBQUssRUFBRTs7O0lBQ3ZDLElBQThDWixHQUEyQixHQUEzQkEsK0NBQVEsQ0FBQ1ksS0FBSyxDQUFDQyxXQUFXLENBQUMsRUFBbEVDLGVBQWUsR0FBd0JkLEdBQTJCLEdBQW5ELEVBQUVlLGtCQUFrQixHQUFJZixHQUEyQixHQUEvQjtJQUUxQyxJQUFNZ0IsaUJBQWlCO21CQUFHLDZQQUFZO2dCQUU5QkMscUJBQXFCLEVBQ3JCQyxvQkFBb0IsRUFFbEJDLE1BQU0sRUFDTkMsT0FBTzs7Ozt5QkFKWTt5QkFDRDt3QkFFbEJELE1BQU0sR0FBR2YsdURBQUcsQ0FBQ0ksZ0RBQUUsRUFBRSxTQUFTLEVBQUVNLGVBQWUsQ0FBQ08sVUFBVSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7OytCQUN4RWhCLDBEQUFNLENBQUNjLE1BQU0sQ0FBQzs7d0JBQTlCQyxPQUFPLFlBQXVCO3dCQUNwQyxJQUFJQSxPQUFPLENBQUNFLE1BQU0sRUFBRSxFQUFFOzRCQUVsQkwscUJBQXFCLEdBQUlHLE9BQU8sQ0FBQ0csSUFBSSxFQUFFLENBQUNDLEtBQUssQ0FBQ1osS0FBSyxDQUFDYSxnQkFBZ0IsQ0FBQyxDQUFDQyxZQUFZLENBQUUsNENBQTRDOzRCQUE3Qzs0QkFDbkZULHFCQUFxQixDQUFDVSxNQUFNLENBQUNmLEtBQUssQ0FBQ2EsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOzRCQUN2REcsT0FBTyxDQUFDQyxHQUFHLENBQUNaLHFCQUFxQixDQUFDOzRCQUVsQ0Msb0JBQW9CLEdBQUlFLE9BQU8sQ0FBQ0csSUFBSSxFQUFFLENBQUNDLEtBQUs7NEJBQzVDTixvQkFBb0IsQ0FBQ1EsWUFBWSxDQUFDQyxNQUFNLENBQUNmLEtBQUssQ0FBQ2EsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO3lCQUVwRTt3QkFDSGxCLDZEQUFTLENBQUNZLE1BQU0sRUFBRTs0QkFDZCwrREFBK0Q7NEJBQy9ESyxLQUFLLEVBQUVOLG9CQUFvQjt5QkFDOUIsQ0FBQzt3QkFDRkgsa0JBQWtCLENBQUMsSUFBSSxDQUFDOzs7Ozs7U0FLM0I7d0JBMUJLQyxpQkFBaUI7OztPQTBCdEI7SUFFSCxPQUNJRixlQUFlLGtCQUNqQiw4REFBQ2dCLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7OzBCQUNyQiw4REFBQ0MsSUFBRTswQkFBRXBCLEtBQUssQ0FBQ0MsV0FBVyxDQUFDb0IsZUFBZTs7Ozs7b0JBQU07MEJBQ2hELDhEQUFDQyxJQUFFOzBCQUVLQyxNQUFNLENBQUNDLElBQUksQ0FBQ3RCLGVBQWUsQ0FBQyxDQUFDdUIsR0FBRyxDQUFDLFNBQUNDLGdCQUFnQixFQUFFQyxxQkFBcUIsRUFBSztvQkFDMUUscUJBQ0ksOERBQUNMLElBQUU7OzBDQUNDLDhEQUFDTSxJQUFFOzBDQUFDLDRFQUFDQyxRQUFNOzhDQUFFSCxnQkFBZ0I7Ozs7O3lDQUFVOzs7OztxQ0FBSzswQ0FDNUMsOERBQUNFLElBQUU7MENBQUUxQixlQUFlLENBQUN3QixnQkFBZ0IsQ0FBQzs7Ozs7cUNBQU07O3VCQUZ2Q0MscUJBQXFCOzs7OzZCQUd6QixDQUNSO2lCQUNKLENBQUM7Ozs7O29CQUVMOzBCQUNMLDhEQUFDRyxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU0zQixpQkFBaUIsRUFBRTtpQkFBQTswQkFBRSxxQkFBbUI7Ozs7O29CQUFTOzs7Ozs7WUFDckUsQ0FDUjtDQUNGO0dBbER1QkwsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvRmlsZVZlcnNpb24uanM/YzdhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgZG9jLCBnZXREb2MsIHNldERvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiOyBcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVWZXJzaW9uKHByb3BzKSB7XG4gICAgY29uc3QgW2ZpbGVWZXJzaW9uRGF0YSwgc2V0RmlsZVZlcnNpb25EYXRhXSA9IHVzZVN0YXRlKHByb3BzLmZpbGVWZXJzaW9uKVxuXG4gICAgY29uc3QgZGVsZXRlRmlsZVZlcnNpb24gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgbGV0IHRlbXBGaWxlVmVyc2lvbnNBcnJheVxuICAgICAgICBsZXQgdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJhcnRpc3RzXCIsIGZpbGVWZXJzaW9uRGF0YS5hcnRpc3ROYW1lKTsgLy8gY3JlYXRlIHJlZmVyZW5jZSB0byBkb2N1bWVudFxuICAgICAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7IC8vIGdldCBjdXJyZW50IGRvY3VtZW50cyBkYXRhXG4gICAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7IC8vIGlmIHRoZSBkb2N1bWVudCBleGlzdHNcblxuICAgICAgICAgICAgdGVtcEZpbGVWZXJzaW9uc0FycmF5ID0gKGRvY1NuYXAuZGF0YSgpLnNvbmdzW3Byb3BzLmZpbGVWZXJzaW9uSW5kZXhdLmZpbGVWZXJzaW9ucykgLy8gc3RvcmUgZG9jdW1lbnQgZGF0YSBpbiBzY29wZWQgbG9jYWwgYXJyYXlcbiAgICAgICAgICAgIHRlbXBGaWxlVmVyc2lvbnNBcnJheS5zcGxpY2UocHJvcHMuZmlsZVZlcnNpb25JbmRleCwgMSkgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wRmlsZVZlcnNpb25zQXJyYXkpXG5cbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5ID0gKGRvY1NuYXAuZGF0YSgpLnNvbmdzKVxuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkuZmlsZVZlcnNpb25zLnNwbGljZShwcm9wcy5maWxlVmVyc2lvbkluZGV4LCAxKVxuXG4gICAgICAgICAgfVxuICAgICAgICB1cGRhdGVEb2MoZG9jUmVmLCB7XG4gICAgICAgICAgICAvLyBcInNvbmdzW3Byb3BzLnNvbmdJbmRleC5maWxlVmVyc2lvbnNdXCI6IHRlbXBGaWxlVmVyc2lvbnNBcnJheVxuICAgICAgICAgICAgc29uZ3M6IHRlbXBBcnRpc3RTb25nc0FycmF5XG4gICAgICAgIH0pXG4gICAgICAgIHNldEZpbGVWZXJzaW9uRGF0YShudWxsKVxuICAgICAgICBcbiAgICAgICAgXG5cblxuICAgIH1cblxuICByZXR1cm4gKFxuICAgICAgZmlsZVZlcnNpb25EYXRhICYmXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgICAgICA8aDM+e3Byb3BzLmZpbGVWZXJzaW9uLmZpbGVWZXJzaW9uTmFtZX08L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsZVZlcnNpb25EYXRhKS5tYXAoKGZpbGVWZXJzaW9uRmllbGQsIGZpbGV2ZXJzaW9uRmllbGRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17ZmlsZXZlcnNpb25GaWVsZEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57ZmlsZVZlcnNpb25GaWVsZH08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57ZmlsZVZlcnNpb25EYXRhW2ZpbGVWZXJzaW9uRmllbGRdfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWxlVmVyc2lvbigpfT5kZWxldGUgZmlsZSB2ZXJzaW9uPC9idXR0b24+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsIkZpbGVWZXJzaW9uIiwicHJvcHMiLCJmaWxlVmVyc2lvbiIsImZpbGVWZXJzaW9uRGF0YSIsInNldEZpbGVWZXJzaW9uRGF0YSIsImRlbGV0ZUZpbGVWZXJzaW9uIiwidGVtcEZpbGVWZXJzaW9uc0FycmF5IiwidGVtcEFydGlzdFNvbmdzQXJyYXkiLCJkb2NSZWYiLCJkb2NTbmFwIiwiYXJ0aXN0TmFtZSIsImV4aXN0cyIsImRhdGEiLCJzb25ncyIsImZpbGVWZXJzaW9uSW5kZXgiLCJmaWxlVmVyc2lvbnMiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZmlsZVZlcnNpb25OYW1lIiwidWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZmlsZVZlcnNpb25GaWVsZCIsImZpbGV2ZXJzaW9uRmllbGRJbmRleCIsImxpIiwic3Ryb25nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/FileVersion.js\n"));

/***/ })

});