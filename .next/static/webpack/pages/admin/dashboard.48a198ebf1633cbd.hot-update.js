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

/***/ "./pages/Components/Song2.js":
/*!***********************************!*\
  !*** ./pages/Components/Song2.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song2; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n\n\n\n\n\n\nfunction Song2(props) {\n    var _this = this;\n    var deleteSong = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.songData.songMetadata.artistName); // create reference to document\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 4:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray);\n                        // tempArtistSongsArray.splice(props.songIndex, 1) // push the song we are adding into that array\n                        // console.log(tempArtistSongsArray)\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"song index is \",\n                        props.songIndex\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this),\n                Object.keys(props.songData.songMetadata).map(function(metadataField, metadataFieldIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                    children: metadataField\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: props.songData.songMetadata[metadataField]\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 42,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, metadataFieldIndex, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return deleteSong();\n                    },\n                    children: \"delete song\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n};\n_c = Song2;\nvar _c;\n$RefreshReg$(_c, \"Song2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmcyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXlCO0FBRStEO0FBQzdCO0FBRzVDLFNBQVNVLEtBQUssQ0FBQ0MsS0FBSyxFQUFFOztJQUVqQyxJQUFNQyxVQUFVO21CQUFHLDZQQUFZO2dCQU92QkMsb0JBQW9CLEVBR2xCQyxNQUFNLEVBQ05DLE9BQU87Ozs7eUJBSlc7d0JBR2xCRCxNQUFNLEdBQUdYLHVEQUFHLENBQUNJLGdEQUFFLEVBQUUsU0FBUyxFQUFFSSxLQUFLLENBQUNLLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxVQUFVLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7K0JBQ3BGZCwwREFBTSxDQUFDVSxNQUFNLENBQUM7O3dCQUE5QkMsT0FBTyxZQUF1Qjt3QkFDcEMsSUFBSUEsT0FBTyxDQUFDSSxNQUFNLEVBQUUsRUFBRTs0QkFDbEJOLG9CQUFvQixHQUFJRSxPQUFPLENBQUNLLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUUsNENBQTRDOzRCQUE3Qzs0QkFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixvQkFBb0IsQ0FBQzt3QkFDakMsaUdBQWlHO3dCQUNqRyxvQ0FBb0M7eUJBQ3JDOzs7Ozs7U0FLTjt3QkF0QktELFVBQVU7OztPQXNCZjtJQUVILHFCQUNFLDhEQUFDWSxNQUFJO1FBQUNDLFNBQVMsRUFBQyxhQUFhO2tCQUN6Qiw0RUFBQ0MsSUFBRTs7OEJBQ0MsOERBQUNDLElBQUU7O3dCQUFDLGdCQUFjO3dCQUFDaEIsS0FBSyxDQUFDaUIsU0FBUzs7Ozs7O3dCQUFNO2dCQUVwQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNuQixLQUFLLENBQUNLLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLENBQUNjLEdBQUcsQ0FBQyxTQUFDQyxhQUFhLEVBQUVDLGtCQUFrQixFQUFLO29CQUNoRixxQkFDSSw4REFBQ1AsSUFBRTs7MENBQ0MsOERBQUNRLElBQUU7MENBQUMsNEVBQUNDLFFBQU07OENBQUVILGFBQWE7Ozs7O3lDQUFVOzs7OztxQ0FBSzswQ0FDekMsOERBQUNFLElBQUU7MENBQUV2QixLQUFLLENBQUNLLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDZSxhQUFhLENBQUM7Ozs7O3FDQUFNOzt1QkFGaERDLGtCQUFrQjs7Ozs2QkFHdEIsQ0FDUjtpQkFDSixDQUFDOzhCQUVOLDhEQUFDRyxRQUFNO29CQUFDQyxPQUFPLEVBQUU7K0JBQU16QixVQUFVLEVBQUU7cUJBQUE7OEJBQUUsYUFBVzs7Ozs7d0JBQVM7Ozs7OztnQkFDeEQ7Ozs7O1lBQ0YsQ0FDUjtDQUNGO0FBNUN1QkYsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1NvbmcyLmpzPzFjNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbmcyKHByb3BzKSB7XG5cbiAgICBjb25zdCBkZWxldGVTb25nID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIC8vIGZldGNoKCcvYXBpL2ZpcmViYXNlJylcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC8vICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coeClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgbGV0IHRlbXBBcnRpc3RTb25nc0FycmF5XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5hcnRpc3ROYW1lKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcImFydGlzdHNcIiwgcHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmFydGlzdE5hbWUpOyAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTsgLy8gZ2V0IGN1cnJlbnQgZG9jdW1lbnRzIGRhdGFcbiAgICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIHN0b3JlIGRvY3VtZW50IGRhdGEgaW4gc2NvcGVkIGxvY2FsIGFycmF5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheSlcbiAgICAgICAgICAgIC8vIHRlbXBBcnRpc3RTb25nc0FycmF5LnNwbGljZShwcm9wcy5zb25nSW5kZXgsIDEpIC8vIHB1c2ggdGhlIHNvbmcgd2UgYXJlIGFkZGluZyBpbnRvIHRoYXQgYXJyYXlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlbXBBcnRpc3RTb25nc0FycmF5KVxuICAgICAgICAgIH1cbiAgICAgICAgXG5cblxuXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxoMT5zb25nIGluZGV4IGlzIHtwcm9wcy5zb25nSW5kZXh9PC9oMT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEpLm1hcCgobWV0YWRhdGFGaWVsZCwgbWV0YWRhdGFGaWVsZEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXttZXRhZGF0YUZpZWxkSW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnttZXRhZGF0YUZpZWxkfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGFbbWV0YWRhdGFGaWVsZF19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTb25nKCl9PmRlbGV0ZSBzb25nPC9idXR0b24+XG4gICAgICAgIDwvdWw+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwidXBkYXRlRG9jIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJTb25nMiIsInByb3BzIiwiZGVsZXRlU29uZyIsInRlbXBBcnRpc3RTb25nc0FycmF5IiwiZG9jUmVmIiwiZG9jU25hcCIsInNvbmdEYXRhIiwic29uZ01ldGFkYXRhIiwiYXJ0aXN0TmFtZSIsImV4aXN0cyIsImRhdGEiLCJzb25ncyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwidWwiLCJoMSIsInNvbmdJbmRleCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJtZXRhZGF0YUZpZWxkIiwibWV0YWRhdGFGaWVsZEluZGV4IiwibGkiLCJzdHJvbmciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Song2.js\n"));

/***/ })

});