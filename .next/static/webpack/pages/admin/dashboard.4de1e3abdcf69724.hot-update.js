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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song2; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\nfunction Song2(props) {\n    var _this = this;\n    var deleteSong = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempArtistSongsArray;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        console.log(props.songData.songMetadata.artistName);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // const docRef = doc(db, \"artists\", artistSelected); // create reference to document\n        // const docSnap = await getDoc(docRef); // get current documents data\n        // if (docSnap.exists()) { // if the document exists\n        //     tempArtistSongsArray = (docSnap.data().songs) // store document data in scoped local array\n        //     tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array\n        //     console.log(tempArtistSongsArray)\n        //   }\n        }));\n        return function deleteSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"song index is \",\n                        props.songIndex\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this),\n                Object.keys(props.songData.songMetadata).map(function(metadataField, metadataFieldIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                    children: metadataField\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: props.songData.songMetadata[metadataField]\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, metadataFieldIndex, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return deleteSong();\n                    },\n                    children: \"delete song\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n_c = Song2;\nvar _c;\n$RefreshReg$(_c, \"Song2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmcyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBeUI7QUFDMkI7QUFHckMsU0FBU0csS0FBSyxDQUFDQyxLQUFLLEVBQUU7O0lBRWpDLElBQU1DLFVBQVU7bUJBQUcsNlBBQVk7Z0JBT3ZCQyxvQkFBb0I7Ozs7eUJBQUE7d0JBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsVUFBVSxDQUFDOzs7Ozs7UUFDbkQscUZBQXFGO1FBQ3JGLHNFQUFzRTtRQUN0RSxvREFBb0Q7UUFDcEQsaUdBQWlHO1FBQ2pHLHlHQUF5RztRQUN6Ryx3Q0FBd0M7UUFDeEMsTUFBTTtTQUlUO3dCQW5CS04sVUFBVTs7O09BbUJmO0lBRUgscUJBQ0UsOERBQUNPLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7a0JBQ3pCLDRFQUFDQyxJQUFFOzs4QkFDQyw4REFBQ0MsSUFBRTs7d0JBQUMsZ0JBQWM7d0JBQUNYLEtBQUssQ0FBQ1ksU0FBUzs7Ozs7O3dCQUFNO2dCQUVwQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNkLEtBQUssQ0FBQ0ssUUFBUSxDQUFDQyxZQUFZLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLGFBQWEsRUFBRUMsa0JBQWtCLEVBQUs7b0JBQ2hGLHFCQUNJLDhEQUFDUCxJQUFFOzswQ0FDQyw4REFBQ1EsSUFBRTswQ0FBQyw0RUFBQ0MsUUFBTTs4Q0FBRUgsYUFBYTs7Ozs7eUNBQVU7Ozs7O3FDQUFLOzBDQUN6Qyw4REFBQ0UsSUFBRTswQ0FBRWxCLEtBQUssQ0FBQ0ssUUFBUSxDQUFDQyxZQUFZLENBQUNVLGFBQWEsQ0FBQzs7Ozs7cUNBQU07O3VCQUZoREMsa0JBQWtCOzs7OzZCQUd0QixDQUNSO2lCQUNKLENBQUM7OEJBRU4sOERBQUNHLFFBQU07b0JBQUNDLE9BQU8sRUFBRTsrQkFBTXBCLFVBQVUsRUFBRTtxQkFBQTs4QkFBRSxhQUFXOzs7Ozt3QkFBUzs7Ozs7O2dCQUN4RDs7Ozs7WUFDRixDQUNSO0NBQ0Y7QUF6Q3VCRixLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvU29uZzIuanM/MWM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkb2MsIGRlbGV0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb25nMihwcm9wcykge1xuXG4gICAgY29uc3QgZGVsZXRlU29uZyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAvLyBmZXRjaCgnL2FwaS9maXJlYmFzZScpXG4gICAgICAgIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHgpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHgpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIGxldCB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuYXJ0aXN0TmFtZSlcbiAgICAgICAgLy8gY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcImFydGlzdHNcIiwgYXJ0aXN0U2VsZWN0ZWQpOyAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGRvY3VtZW50XG4gICAgICAgIC8vIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTsgLy8gZ2V0IGN1cnJlbnQgZG9jdW1lbnRzIGRhdGFcbiAgICAgICAgLy8gaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAvLyAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIHN0b3JlIGRvY3VtZW50IGRhdGEgaW4gc2NvcGVkIGxvY2FsIGFycmF5XG4gICAgICAgIC8vICAgICB0ZW1wQXJ0aXN0U29uZ3NBcnJheS5wdXNoKG5ld1NvbmdEYXRhRnJvbUZvcm1Ub0FkZCkgLy8gcHVzaCB0aGUgc29uZyB3ZSBhcmUgYWRkaW5nIGludG8gdGhhdCBhcnJheVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGVtcEFydGlzdFNvbmdzQXJyYXkpXG4gICAgICAgIC8vICAgfVxuXG5cblxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nbGlnaHRCb3JkZXInPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8aDE+c29uZyBpbmRleCBpcyB7cHJvcHMuc29uZ0luZGV4fTwvaDE+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhKS5tYXAoKG1ldGFkYXRhRmllbGQsIG1ldGFkYXRhRmllbGRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17bWV0YWRhdGFGaWVsZEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57bWV0YWRhdGFGaWVsZH08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhW21ldGFkYXRhRmllbGRdfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU29uZygpfT5kZWxldGUgc29uZzwvYnV0dG9uPlxuICAgICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZG9jIiwiZGVsZXRlRG9jIiwiU29uZzIiLCJwcm9wcyIsImRlbGV0ZVNvbmciLCJ0ZW1wQXJ0aXN0U29uZ3NBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJzb25nRGF0YSIsInNvbmdNZXRhZGF0YSIsImFydGlzdE5hbWUiLCJtYWluIiwiY2xhc3NOYW1lIiwidWwiLCJoMSIsInNvbmdJbmRleCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJtZXRhZGF0YUZpZWxkIiwibWV0YWRhdGFGaWVsZEluZGV4IiwibGkiLCJzdHJvbmciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Song2.js\n"));

/***/ })

});