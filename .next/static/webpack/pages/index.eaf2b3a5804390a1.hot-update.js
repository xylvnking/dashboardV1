"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/[...artist].js":
/*!******************************!*\
  !*** ./pages/[...artist].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artist; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Dashboard.module.scss */ \"./styles/Dashboard.module.scss\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// this page needs to be able to read from firebase using the router query, if it exists\n// collection would be artist[0]\n// document names are predetermined\n// songName would be either artist[1] or song (from the ?song=somesongname parameter)\n// then allow writes if they are authorized\n// http://localhost:3000/artistname?song=songname\n// the artists will be created by me when I actually upload files to them, so I can enter anything I want\n// .collection(\"artists\").where(\"metadata.artistName\", \"==\", \"artistNameFromQuery\")\n// you get access to their uid when they log in, so you could search for the document which contains that\n// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine\n// .collection(\"artists\").where(\"uid\", \"==\", \"the uid of the signed in artist\")\n// need to get reference to their artist name when they sign in\nvar artistTemp = \"artistName1\";\nfunction Artist(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), artistData = ref1[0], setArtistData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _query = router.query, artist = _query.artist, song = _query.song, ok = _query.ok;\n    console.log(artist);\n    // console.log(artist)\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (userAuth) {\n            var getDataAuthorized = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var q, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"metadata.uid\", \"==\", userAuth.uid));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    console.log(doc.id, \" => \", doc.data());\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getDataAuthorized() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getDataAuthorized();\n        } else {\n            var getDataPublic = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var q, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"metadata.artistName\", \"==\", artist));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    console.log(doc.id, \" => \", doc.data());\n                                    setArtistData(doc.data());\n                                    console.log(\"eyeeeeeeee\");\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getDataPublic() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getDataPublic();\n        }\n    }, [\n        userAuth\n    ]);\n    // console.log(artistData)\n    var check = function() {\n    // console.log(artistData)\n    // console.log('yerr')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar),\n                children: [\n                    artistData && artistData.metadata.artistName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: song\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: props.artistName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \" this should have no style\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n};\n_s(Artist, \"UFoE6/Kvk4mNU/nnbknQVfBomJo=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Artist;\nvar _c;\n$RefreshReg$(_c, \"Artist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Ozs7OztpQkFDSjtnQ0FSS1EsYUFBYTs7O2VBUWxCO1lBQ0RBLGFBQWEsRUFBRTtTQUNoQjtLQUVGLEVBQUU7UUFBQ2xCLFFBQVE7S0FBQyxDQUFDO0lBR2QsMEJBQTBCO0lBSTFCLElBQU1tQixLQUFLLEdBQUcsV0FBTTtJQUNsQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0tBQ3ZCO0lBQ0QscUJBQ0UsOERBQUNDLE1BQUk7OzBCQUNILDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1ILEtBQUssRUFBRTtpQkFBQTswQkFBRSxPQUFLOzs7OztvQkFBUzswQkFDOUMsOERBQUNJLFNBQU87Z0JBQUNDLFNBQVMsRUFBRXJDLDZFQUFpQjs7b0JBRWpDZ0IsVUFBVSxJQUNWQSxVQUFVLENBQUN1QixRQUFRLENBQUNDLFVBQVU7a0NBRWhDLDhEQUFDQyxJQUFFO2tDQUFFdEIsTUFBTTs7Ozs7NEJBQU07a0NBQ2pCLDhEQUFDc0IsSUFBRTtrQ0FBRXJCLElBQUk7Ozs7OzRCQUFNO2tDQUNmLDhEQUFDcUIsSUFBRTtrQ0FBRTdCLEtBQUssQ0FBQzRCLFVBQVU7Ozs7OzRCQUFNOzs7Ozs7b0JBQ25COzBCQUNWLDhEQUFDQyxJQUFFOzBCQUFDLDRCQUEwQjs7Ozs7b0JBQUs7Ozs7OztZQUM5QixDQUNSO0NBQ0Y7R0E1RHVCOUIsTUFBTTs7UUFFeUJiLG1FQUFZO1FBRWxERCxrREFBUzs7O0FBSkZjLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvWy4uLmFydGlzdF0uanM/ZDBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBkYXNoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLnNjc3MnXG5cbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBkb2MsIG9uU25hcHNob3QsIGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuXG5cblxuXG5cblxuXG4vLyB0aGlzIHBhZ2UgbmVlZHMgdG8gYmUgYWJsZSB0byByZWFkIGZyb20gZmlyZWJhc2UgdXNpbmcgdGhlIHJvdXRlciBxdWVyeSwgaWYgaXQgZXhpc3RzXG4vLyBjb2xsZWN0aW9uIHdvdWxkIGJlIGFydGlzdFswXVxuICAvLyBkb2N1bWVudCBuYW1lcyBhcmUgcHJlZGV0ZXJtaW5lZFxuICAgIC8vIHNvbmdOYW1lIHdvdWxkIGJlIGVpdGhlciBhcnRpc3RbMV0gb3Igc29uZyAoZnJvbSB0aGUgP3Nvbmc9c29tZXNvbmduYW1lIHBhcmFtZXRlcilcblxuLy8gdGhlbiBhbGxvdyB3cml0ZXMgaWYgdGhleSBhcmUgYXV0aG9yaXplZFxuXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXJ0aXN0bmFtZT9zb25nPXNvbmduYW1lXG5cblxuXG4vLyB0aGUgYXJ0aXN0cyB3aWxsIGJlIGNyZWF0ZWQgYnkgbWUgd2hlbiBJIGFjdHVhbGx5IHVwbG9hZCBmaWxlcyB0byB0aGVtLCBzbyBJIGNhbiBlbnRlciBhbnl0aGluZyBJIHdhbnRcblxuLy8gLmNvbGxlY3Rpb24oXCJhcnRpc3RzXCIpLndoZXJlKFwibWV0YWRhdGEuYXJ0aXN0TmFtZVwiLCBcIj09XCIsIFwiYXJ0aXN0TmFtZUZyb21RdWVyeVwiKVxuXG4vLyB5b3UgZ2V0IGFjY2VzcyB0byB0aGVpciB1aWQgd2hlbiB0aGV5IGxvZyBpbiwgc28geW91IGNvdWxkIHNlYXJjaCBmb3IgdGhlIGRvY3VtZW50IHdoaWNoIGNvbnRhaW5zIHRoYXRcblxuLy8gaXQncyBhIGxpdHRsZSBzY3VmZmVkIG9mIGEgd29ya2Zsb3cgYnV0IGF0IHRoaXMgc2NhbGUgc2luY2UgaXQncyBzcGVjaWZpYyB0byBtZSBpdCB3b3JrcyBmaW5lXG5cbi8vIC5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKS53aGVyZShcInVpZFwiLCBcIj09XCIsIFwidGhlIHVpZCBvZiB0aGUgc2lnbmVkIGluIGFydGlzdFwiKVxuXG5cblxuXG5cbi8vIG5lZWQgdG8gZ2V0IHJlZmVyZW5jZSB0byB0aGVpciBhcnRpc3QgbmFtZSB3aGVuIHRoZXkgc2lnbiBpblxuXG5jb25zdCBhcnRpc3RUZW1wID0gJ2FydGlzdE5hbWUxJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aXN0KHByb3BzKSB7XG5cbiAgY29uc3QgW3VzZXJBdXRoLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgY29uc3QgW2FydGlzdERhdGEsIHNldEFydGlzdERhdGFdID0gdXNlU3RhdGUoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGFydGlzdCwgc29uZywgb2sgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zb2xlLmxvZyhhcnRpc3QpXG5cbiAgLy8gY29uc29sZS5sb2coYXJ0aXN0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7IC8vIGNvdWxkIHlvdSB0dXJuIHRoaXMgaW50byBhIG5leHQgYXBpIGNhbGw/XG5cbiAgICBpZiAodXNlckF1dGgpIHtcbiAgICAgIGNvbnN0IGdldERhdGFBdXRob3JpemVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgXCJhcnRpc3RzXCIpLCB3aGVyZShgbWV0YWRhdGEudWlkYCwgXCI9PVwiLCB1c2VyQXV0aC51aWQpKTsgXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGdldERhdGFBdXRob3JpemVkKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2V0RGF0YVB1YmxpYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSwgd2hlcmUoYG1ldGFkYXRhLmFydGlzdE5hbWVgLCBcIj09XCIsIGFydGlzdCkpO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBzZXRBcnRpc3REYXRhKGRvYy5kYXRhKCkpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2V5ZWVlZWVlZWUnKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGdldERhdGFQdWJsaWMoKVxuICAgIH1cblxuICB9LCBbdXNlckF1dGhdKVxuXG5cbiAgLy8gY29uc29sZS5sb2coYXJ0aXN0RGF0YSlcblxuXG5cbiAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYXJ0aXN0RGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygneWVycicpXG4gIH1cbiAgcmV0dXJuICggIFxuICAgIDxtYWluPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGVjaygpfT5DSEVDSzwvYnV0dG9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtkYXNoU3R5bGVzLm5hdmJhcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBhcnRpc3REYXRhICYmXG4gICAgICAgICAgYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lXG4gICAgICAgIH1cbiAgICAgICAgPGgxPnthcnRpc3R9PC9oMT5cbiAgICAgICAgPGgxPntzb25nfTwvaDE+XG4gICAgICAgIDxoMT57cHJvcHMuYXJ0aXN0TmFtZX08L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGgxPiB0aGlzIHNob3VsZCBoYXZlIG5vIHN0eWxlPC9oMT5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aFN0YXRlIiwic3R5bGVzIiwiZGFzaFN0eWxlcyIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsImFydGlzdFRlbXAiLCJBcnRpc3QiLCJwcm9wcyIsInVzZXJBdXRoIiwidXNlckF1dGhJc0xvYWRpbmciLCJ1c2VyQXV0aEVycm9yIiwiYXJ0aXN0RGF0YSIsInNldEFydGlzdERhdGEiLCJyb3V0ZXIiLCJhcnRpc3QiLCJzb25nIiwib2siLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YUF1dGhvcml6ZWQiLCJxIiwicXVlcnlTbmFwc2hvdCIsInVpZCIsImZvckVhY2giLCJpZCIsImRhdGEiLCJnZXREYXRhUHVibGljIiwiY2hlY2siLCJtYWluIiwiYnV0dG9uIiwib25DbGljayIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJtZXRhZGF0YSIsImFydGlzdE5hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[...artist].js\n"));

/***/ })

});