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

/***/ "./pages/admin/dashboard.js":
/*!**********************************!*\
  !*** ./pages/admin/dashboard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ dashboard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var _Components_AudioNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/AudioNav */ \"./pages/Components/AudioNav.js\");\n/* harmony import */ var _Components_AddSong__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/AddSong */ \"./pages/Components/AddSong.js\");\n/* harmony import */ var _Components_AddArtist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/AddArtist */ \"./pages/Components/AddArtist.js\");\n/* harmony import */ var _Components_ArtistOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/ArtistOverview */ \"./pages/Components/ArtistOverview.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { getDocs } from 'firebase/firestore';\n\nfunction dashboard() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), allArtistData = ref1[0], setAllArtistData = ref1[1];\n    // console.log(userAuth)\n    // console.log(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID)\n    // check if admin and stuff\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (userAuth) {\n            console.log(userAuth.uid);\n            // console.log('get a list of users here and pass it into the AddX components')\n            var getListOfUsers = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var arrayOfUsersTemp, documentsToGet, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                arrayOfUsersTemp = [];\n                                documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\"));\n                                _ctx.next = 4;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDocs)(documentsToGet);\n                            case 4:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    arrayOfUsersTemp.push(doc.data());\n                                // console.log(doc.data())\n                                });\n                                setAllArtistData(arrayOfUsersTemp);\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getListOfUsers() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getListOfUsers();\n        }\n    }, [\n        userAuth\n    ]);\n    // console.log(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_AudioNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return console.log(allArtistData);\n                },\n                children: \"log all users\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            allArtistData && allArtistData.map(function(artist, artistIndex) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_ArtistOverview__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    artistData: artist\n                }, artistIndex, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                        children: \"add artist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_AddArtist__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n                open: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                        children: \"add song\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    allArtistData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_AddSong__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        allArtistData: allArtistData\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/admin/dashboard.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_s(dashboard, \"eUtmFkTDseB5SHwCy7FPzjrZ4YY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUFnRDtBQUNNO0FBQ0s7QUFFZDtBQUNGO0FBQ0k7QUFDVTtBQUV6RCxnREFBZ0Q7QUFDMkQ7QUFFNUYsU0FBU21CLFNBQVMsR0FBRzs7O0lBQ2hDLElBQXFEaEIsR0FBa0IscUZBQWxCQSx1RUFBWSxDQUFDRSxrREFBSSxDQUFDLE1BQWhFZSxRQUFRLEdBQXNDakIsR0FBa0IsR0FBeEQsRUFBRWtCLGlCQUFpQixHQUFtQmxCLEdBQWtCLEdBQXJDLEVBQUVtQixhQUFhLEdBQUluQixHQUFrQixHQUF0QjtJQUNqRCxJQUEwQ0YsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTdDc0IsYUFBYSxHQUFzQnRCLElBQVUsR0FBaEMsRUFBRXVCLGdCQUFnQixHQUFJdkIsSUFBVSxHQUFkO0lBQ3RDLHdCQUF3QjtJQUN4QiwwREFBMEQ7SUFFMUQsMkJBQTJCO0lBQzNCQyxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJa0IsUUFBUSxFQUFFO1lBQ1ZLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUNPLEdBQUcsQ0FBQztZQUN6QiwrRUFBK0U7WUFDL0UsSUFBTUMsY0FBYzsyQkFBRyw4UEFBWTt3QkFDekJDLGdCQUFnQixFQUNoQkMsY0FBYyxFQUNkQyxhQUFhOzs7O2dDQUZiRixnQkFBZ0IsR0FBRyxFQUFFO2dDQUNyQkMsY0FBYyxHQUFHaEIseURBQUssQ0FBQ0QsOERBQVUsQ0FBQ1QsZ0RBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDOzt1Q0FDNUJhLDJEQUFPLENBQUNhLGNBQWMsQ0FBQzs7Z0NBQTdDQyxhQUFhLFlBQWdDO2dDQUNuREEsYUFBYSxDQUFDQyxPQUFPLENBQUMsU0FBQ3JCLEdBQUcsRUFBSztvQ0FDM0JrQixnQkFBZ0IsQ0FBQ0ksSUFBSSxDQUFDdEIsR0FBRyxDQUFDdUIsSUFBSSxFQUFFLENBQUM7Z0NBQ2pDLDBCQUEwQjtpQ0FDN0IsQ0FBQztnQ0FDRlYsZ0JBQWdCLENBQUNLLGdCQUFnQixDQUFDOzs7Ozs7aUJBQ3JDO2dDQVRLRCxjQUFjOzs7ZUFTbkI7WUFDREEsY0FBYyxFQUFFO1NBQ25CO0tBQ0osRUFBQztRQUFDUixRQUFRO0tBQUMsQ0FBQztJQUViLDBEQUEwRDtJQUc1RCxxQkFDRSw4REFBQ2UsTUFBSTs7MEJBQ0QsOERBQUM1Qiw0REFBUTs7OztvQkFBRTswQkFDWCw4REFBQzZCLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTVosT0FBTyxDQUFDQyxHQUFHLENBQUNILGFBQWEsQ0FBQztpQkFBQTswQkFBRSxlQUFhOzs7OztvQkFBUztZQUVyRUEsYUFBYSxJQUNiQSxhQUFhLENBQUNlLEdBQUcsQ0FBQyxTQUFDQyxNQUFNLEVBQUVDLFdBQVcsRUFBSztnQkFDdkMscUJBRUksOERBQUM5QixrRUFBYztvQkFFWCtCLFVBQVUsRUFBRUYsTUFBTTttQkFEYkMsV0FBVzs7Ozt5QkFFbEIsQ0FjTDthQUNKLENBQUM7MEJBR04sOERBQUNFLFNBQU87O2tDQUNKLDhEQUFDQyxTQUFPO2tDQUFDLFlBQVU7Ozs7OzRCQUFVO2tDQUM3Qiw4REFBQ2xDLDZEQUFTOzs7OzRCQUFHOzs7Ozs7b0JBQ1A7MEJBRVYsOERBQUNpQyxTQUFPO2dCQUFDRSxJQUFJLEVBQUUsSUFBSTs7a0NBQ2YsOERBQUNELFNBQU87a0NBQUMsVUFBUTs7Ozs7NEJBQVU7b0JBQzFCcEIsYUFBYSxrQkFDZCw4REFBQ2YsMkRBQU87d0JBQ0plLGFBQWEsRUFBRUEsYUFBYTs7Ozs7NEJBQzlCOzs7Ozs7b0JBQ0k7Ozs7OztZQUdQLENBQ1I7Q0FDRjtHQTFFdUJKLFNBQVM7O1FBQ3dCaEIsbUVBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmpzP2I4YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UtY29uZmlnJztcblxuaW1wb3J0IEF1ZGlvTmF2IGZyb20gJy4uL0NvbXBvbmVudHMvQXVkaW9OYXYnXG5pbXBvcnQgQWRkU29uZyBmcm9tICcuLi9Db21wb25lbnRzL0FkZFNvbmcnXG5pbXBvcnQgQWRkQXJ0aXN0IGZyb20gJy4uL0NvbXBvbmVudHMvQWRkQXJ0aXN0J1xuaW1wb3J0IEFydGlzdE92ZXJ2aWV3IGZyb20gJy4uL0NvbXBvbmVudHMvQXJ0aXN0T3ZlcnZpZXcnXG5cbi8vIGltcG9ydCB7IGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvYywgZ2V0RG9jcywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgW3VzZXJBdXRoLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbYWxsQXJ0aXN0RGF0YSwgc2V0QWxsQXJ0aXN0RGF0YV0gPSB1c2VTdGF0ZSgpXG4gICAgLy8gY29uc29sZS5sb2codXNlckF1dGgpXG4gICAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQURNSU5fVUlEKVxuXG4gICAgLy8gY2hlY2sgaWYgYWRtaW4gYW5kIHN0dWZmXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJBdXRoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyQXV0aC51aWQpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0IGEgbGlzdCBvZiB1c2VycyBoZXJlIGFuZCBwYXNzIGl0IGludG8gdGhlIEFkZFggY29tcG9uZW50cycpXG4gICAgICAgICAgICBjb25zdCBnZXRMaXN0T2ZVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheU9mVXNlcnNUZW1wID0gW11cbiAgICAgICAgICAgICAgICBjb25zdCBkb2N1bWVudHNUb0dldCA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZG9jdW1lbnRzVG9HZXQpXG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZlVzZXJzVGVtcC5wdXNoKGRvYy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRBbGxBcnRpc3REYXRhKGFycmF5T2ZVc2Vyc1RlbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRMaXN0T2ZVc2VycygpXG4gICAgICAgIH1cbiAgICB9LFt1c2VyQXV0aF0pXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BRE1JTl9VSUQpXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgICA8QXVkaW9OYXYvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGFsbEFydGlzdERhdGEpfT5sb2cgYWxsIHVzZXJzPC9idXR0b24+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsbEFydGlzdERhdGEgJiZcbiAgICAgICAgICAgIGFsbEFydGlzdERhdGEubWFwKChhcnRpc3QsIGFydGlzdEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpc3RPdmVydmlldyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YXJ0aXN0SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpc3REYXRhPXthcnRpc3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIC8vIDx1bCBrZXk9e2FydGlzdEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxsaT57YXJ0aXN0Lm1ldGFkYXRhLmFydGlzdE5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDx1bD57YXJ0aXN0LnNvbmdzLm1hcCgoc29uZywgc29uZ0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPHVsIGtleT17c29uZ0luZGV4fT5cblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGBvcGVuICR7c29uZy5zb25nTWV0YWRhdGEuc29uZ05hbWV9YCl9Pntzb25nLnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhgREVMRVRFICR7c29uZy5zb25nTWV0YWRhdGEuc29uZ05hbWV9YCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pfTwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gPC91bD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICA8c3VtbWFyeT5hZGQgYXJ0aXN0PC9zdW1tYXJ5PlxuICAgICAgICAgICAgPEFkZEFydGlzdCAvPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHMgb3Blbj17dHJ1ZX0+XG4gICAgICAgICAgICA8c3VtbWFyeT5hZGQgc29uZzwvc3VtbWFyeT5cbiAgICAgICAgICAgIHthbGxBcnRpc3REYXRhICYmXG4gICAgICAgICAgICA8QWRkU29uZyBcbiAgICAgICAgICAgICAgICBhbGxBcnRpc3REYXRhPXthbGxBcnRpc3REYXRhfVxuICAgICAgICAgICAgLz59XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICBcbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXV0aFN0YXRlIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJBdWRpb05hdiIsIkFkZFNvbmciLCJBZGRBcnRpc3QiLCJBcnRpc3RPdmVydmlldyIsImRvYyIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvYyIsImdldERvY3MiLCJ1cGRhdGVEb2MiLCJkYXNoYm9hcmQiLCJ1c2VyQXV0aCIsInVzZXJBdXRoSXNMb2FkaW5nIiwidXNlckF1dGhFcnJvciIsImFsbEFydGlzdERhdGEiLCJzZXRBbGxBcnRpc3REYXRhIiwiY29uc29sZSIsImxvZyIsInVpZCIsImdldExpc3RPZlVzZXJzIiwiYXJyYXlPZlVzZXJzVGVtcCIsImRvY3VtZW50c1RvR2V0IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwiZGF0YSIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiYXJ0aXN0IiwiYXJ0aXN0SW5kZXgiLCJhcnRpc3REYXRhIiwiZGV0YWlscyIsInN1bW1hcnkiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/dashboard.js\n"));

/***/ })

});