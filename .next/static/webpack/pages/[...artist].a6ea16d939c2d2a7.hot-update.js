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

/***/ "./pages/[...artist].js":
/*!******************************!*\
  !*** ./pages/[...artist].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artist; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Default.module.scss */ \"./styles/Default.module.scss\");\n/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/AudioNav */ \"./pages/Components/AudioNav.js\");\n/* harmony import */ var _Components_Song__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/Song */ \"./pages/Components/Song.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n// import styles from '../styles/Home.module.css'\n\n\n\n\n\n\n\n\n\n// this page needs to be able to read from firebase using the router query, if it exists\n// collection would be artist[0]\n// document names are predetermined\n// songName would be either artist[1] or song (from the ?song=somesongname parameter)\n// then allow writes if they are authorized\n// http://localhost:3000/artistname?song=songname\n// the artists will be created by me when I actually upload files to them, so I can enter anything I want\n// .collection(\"artists\").where(\"metadata.artistName\", \"==\", \"artistNameFromQuery\")\n// you get access to their uid when they log in, so you could search for the document which contains that\n// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine\n// .collection(\"artists\").where(\"uid\", \"==\", \"the uid of the signed in artist\")\n// need to get reference to their artist name when they sign in\nvar artistTemp = \"artistName1\";\nvar revisionTypingTimeout;\nfunction Artist(props) {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), artistData = ref1[0], setArtistData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), artistIsLoggedInAndOnTheirOwnPage = ref2[0], setArtistIsLoggedInAndOnTheirOwnPage = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _query = router.query, artist = _query.artist, song = _query.song, ok = _query.ok;\n    // get data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (artist) {\n            var getDataPublic = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var documentsToGet, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(\"metadata.artistName\", \"==\", artist[0]));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(documentsToGet);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    setArtistData(doc.data());\n                                // console.log(doc.id, \" => \", doc.data());\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getDataPublic() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getDataPublic();\n        } else if (userAuth) {\n            var getDataAuthorized = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var documentsToGet, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(\"metadata.uid\", \"==\", userAuth.uid));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(documentsToGet);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    // console.log(doc.id, \" => \", doc.data());\n                                    setArtistData(doc.data());\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getDataAuthorized() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getDataAuthorized();\n        }\n        if (artist && userAuth && artist[0] == userAuth.uid) {\n            // console.log('user is on thier own')\n            setArtistIsLoggedInAndOnTheirOwnPage(true);\n        }\n    }, [\n        userAuth,\n        artist\n    ]);\n    var check = function() {\n    // console.log(artistData)\n    // console.log(dataTest)\n    // console.log(userAuth)\n    // console.log(artist[0])\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 107,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return check();\n                        },\n                        children: \"CHECK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    artistData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default().profilePhotoIcon),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: artistData.metadata.profilePhoto,\n                                    className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default().profilePhotoIcon),\n                                    alt: \"User Photo\",\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    style: {\n                                        borderRadius: \"50%\"\n                                    }\n                                }, artistData.metadata.uid, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                    lineNumber: 116,\n                                    columnNumber: 18\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"artist name stylized: \",\n                                    artistData.metadata.artistNameStylized\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"uid: \",\n                                    artistData.metadata.uid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"email: \",\n                                    artistData.metadata.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 128,\n                                columnNumber: 17\n                            }, this),\n                            artistData.songs.map(function(x, songIndex) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Song__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    songData: x,\n                                    artistData: artistData,\n                                    setArtistData: setArtistData,\n                                    songIndex: songIndex\n                                }, songIndex, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                    lineNumber: 134,\n                                    columnNumber: 21\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Artist, \"ZUlssjy6O3dusQgSTL4WBHEdBYU=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Artist;\nvar _c;\n$RefreshReg$(_c, \"Artist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkUsOERBQUNELElBQUU7O29DQUFDLE9BQUs7b0NBQUM5QixVQUFVLENBQUN1QixRQUFRLENBQUNULEdBQUc7Ozs7OztvQ0FBTTswQ0FDdkMsOERBQUNnQixJQUFFOztvQ0FBQyxTQUFPO29DQUFDOUIsVUFBVSxDQUFDdUIsUUFBUSxDQUFDUyxLQUFLOzs7Ozs7b0NBQU07NEJBSTFDaEMsVUFBVSxDQUFDaUMsS0FBSyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxTQUFTLEVBQUs7Z0NBQ3RDLHFCQUNFLDhEQUFDN0Msd0RBQUk7b0NBRUg4QyxRQUFRLEVBQUVGLENBQUM7b0NBQ1huQyxVQUFVLEVBQUVBLFVBQVU7b0NBQ3RCQyxhQUFhLEVBQUVBLGFBQWE7b0NBQzVCbUMsU0FBUyxFQUFFQSxTQUFTO21DQUpmQSxTQUFTOzs7O3lDQUtkLENBRUg7NkJBRUYsQ0FBQzs7Ozs7OzRCQThCQTs7Ozs7O29CQUtMOztvQkFDTixDQUNKO0NBQ0Y7R0FsSXVCekMsTUFBTTs7UUFFeUJqQixtRUFBWTtRQUlsREwsa0RBQVM7OztBQU5Gc0IsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bLi4uYXJ0aXN0XS5qcz9kMGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGRhc2hTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCBkZWZhdWx0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EZWZhdWx0Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGFydGlzdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXJ0aXN0Lm1vZHVsZS5zY3NzJ1xuXG5cbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvYywgZ2V0RG9jcywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5pbXBvcnQgQXVkaW9OYXYgZnJvbSAnLi9Db21wb25lbnRzL0F1ZGlvTmF2JztcbmltcG9ydCBTb25nIGZyb20gJy4vQ29tcG9uZW50cy9Tb25nJztcblxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xuXG4vLyB0aGlzIHBhZ2UgbmVlZHMgdG8gYmUgYWJsZSB0byByZWFkIGZyb20gZmlyZWJhc2UgdXNpbmcgdGhlIHJvdXRlciBxdWVyeSwgaWYgaXQgZXhpc3RzXG4vLyBjb2xsZWN0aW9uIHdvdWxkIGJlIGFydGlzdFswXVxuICAvLyBkb2N1bWVudCBuYW1lcyBhcmUgcHJlZGV0ZXJtaW5lZFxuICAgIC8vIHNvbmdOYW1lIHdvdWxkIGJlIGVpdGhlciBhcnRpc3RbMV0gb3Igc29uZyAoZnJvbSB0aGUgP3Nvbmc9c29tZXNvbmduYW1lIHBhcmFtZXRlcilcblxuLy8gdGhlbiBhbGxvdyB3cml0ZXMgaWYgdGhleSBhcmUgYXV0aG9yaXplZFxuXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXJ0aXN0bmFtZT9zb25nPXNvbmduYW1lXG5cblxuXG4vLyB0aGUgYXJ0aXN0cyB3aWxsIGJlIGNyZWF0ZWQgYnkgbWUgd2hlbiBJIGFjdHVhbGx5IHVwbG9hZCBmaWxlcyB0byB0aGVtLCBzbyBJIGNhbiBlbnRlciBhbnl0aGluZyBJIHdhbnRcblxuLy8gLmNvbGxlY3Rpb24oXCJhcnRpc3RzXCIpLndoZXJlKFwibWV0YWRhdGEuYXJ0aXN0TmFtZVwiLCBcIj09XCIsIFwiYXJ0aXN0TmFtZUZyb21RdWVyeVwiKVxuXG4vLyB5b3UgZ2V0IGFjY2VzcyB0byB0aGVpciB1aWQgd2hlbiB0aGV5IGxvZyBpbiwgc28geW91IGNvdWxkIHNlYXJjaCBmb3IgdGhlIGRvY3VtZW50IHdoaWNoIGNvbnRhaW5zIHRoYXRcblxuLy8gaXQncyBhIGxpdHRsZSBzY3VmZmVkIG9mIGEgd29ya2Zsb3cgYnV0IGF0IHRoaXMgc2NhbGUgc2luY2UgaXQncyBzcGVjaWZpYyB0byBtZSBpdCB3b3JrcyBmaW5lXG5cbi8vIC5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKS53aGVyZShcInVpZFwiLCBcIj09XCIsIFwidGhlIHVpZCBvZiB0aGUgc2lnbmVkIGluIGFydGlzdFwiKVxuXG5cblxuXG5cbi8vIG5lZWQgdG8gZ2V0IHJlZmVyZW5jZSB0byB0aGVpciBhcnRpc3QgbmFtZSB3aGVuIHRoZXkgc2lnbiBpblxuXG5jb25zdCBhcnRpc3RUZW1wID0gJ2FydGlzdE5hbWUxJ1xuXG5sZXQgcmV2aXNpb25UeXBpbmdUaW1lb3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdChwcm9wcykge1xuXG4gIGNvbnN0IFt1c2VyQXV0aCwgdXNlckF1dGhJc0xvYWRpbmcsIHVzZXJBdXRoRXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gIGNvbnN0IFthcnRpc3REYXRhLCBzZXRBcnRpc3REYXRhXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2FydGlzdElzTG9nZ2VkSW5BbmRPblRoZWlyT3duUGFnZSwgc2V0QXJ0aXN0SXNMb2dnZWRJbkFuZE9uVGhlaXJPd25QYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBhcnRpc3QsIHNvbmcsIG9rIH0gPSByb3V0ZXIucXVlcnlcblxuXG4gIC8vIGdldCBkYXRhXG4gIHVzZUVmZmVjdCgoKSA9PiB7IC8vIGNvdWxkIHlvdSB0dXJuIHRoaXMgaW50byBhIG5leHQgYXBpIGNhbGw/XG5cbiAgICBpZiAoYXJ0aXN0KXtcbiAgICAgIGNvbnN0IGdldERhdGFQdWJsaWMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50c1RvR2V0ID0gcXVlcnkoY29sbGVjdGlvbihkYiwgXCJhcnRpc3RzXCIpLCB3aGVyZShgbWV0YWRhdGEuYXJ0aXN0TmFtZWAsIFwiPT1cIiwgYXJ0aXN0WzBdKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGRvY3VtZW50c1RvR2V0KTtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBzZXRBcnRpc3REYXRhKGRvYy5kYXRhKCkpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZ2V0RGF0YVB1YmxpYygpXG4gICAgfVxuICAgIGVsc2UgaWYgKHVzZXJBdXRoKSB7XG4gICAgICBjb25zdCBnZXREYXRhQXV0aG9yaXplZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlckF1dGgudWlkKVxuICAgICAgICBjb25zdCBkb2N1bWVudHNUb0dldCA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSwgd2hlcmUoYG1ldGFkYXRhLnVpZGAsIFwiPT1cIiwgdXNlckF1dGgudWlkKSk7IFxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhkb2N1bWVudHNUb0dldCk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0QXJ0aXN0RGF0YShkb2MuZGF0YSgpKVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgZ2V0RGF0YUF1dGhvcml6ZWQoKVxuICAgIH0gXG4gICAgXG4gICAgaWYgKGFydGlzdCAmJiB1c2VyQXV0aCAmJiBhcnRpc3RbMF0gPT0gdXNlckF1dGgudWlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndXNlciBpcyBvbiB0aGllciBvd24nKVxuICAgICAgc2V0QXJ0aXN0SXNMb2dnZWRJbkFuZE9uVGhlaXJPd25QYWdlKHRydWUpXG4gICAgfVxuICAgIFxuXG4gIH0sIFt1c2VyQXV0aCwgYXJ0aXN0XSlcblxuICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcnRpc3REYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFUZXN0KVxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJBdXRoKVxuICAgIC8vIGNvbnNvbGUubG9nKGFydGlzdFswXSlcbiAgfVxuICByZXR1cm4gKCAgXG4gICAgPD5cbiAgICBcbiAgICA8QXVkaW9OYXYvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hlY2soKX0+Q0hFQ0s8L2J1dHRvbj5cbiAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gfT5ub3RoaW5nIHJuPC9idXR0b24+ICovfVxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXJ0aXN0RGF0YSAmJlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RlZmF1bHRTdHlsZXMucHJvZmlsZVBob3RvSWNvbn0+XG4gICAgICAgICAgICAgICAgezxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIGtleT17YXJ0aXN0RGF0YS5tZXRhZGF0YS51aWR9XG4gICAgICAgICAgICAgICAgICBzcmM9e2FydGlzdERhdGEubWV0YWRhdGEucHJvZmlsZVBob3RvfSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGVmYXVsdFN0eWxlcy5wcm9maWxlUGhvdG9JY29ufVxuICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlciBQaG90b1wiIFxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ30gXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eycxMDAlJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319XG4gICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5hcnRpc3QgbmFtZSBzdHlsaXplZDoge2FydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZVN0eWxpemVkfTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPnVpZDoge2FydGlzdERhdGEubWV0YWRhdGEudWlkfTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxPmVtYWlsOiB7YXJ0aXN0RGF0YS5tZXRhZGF0YS5lbWFpbH08L2gxPlxuICAgICAgICAgICAgICAgIHsvKiB7YXJ0aXN0RGF0YS5zb25ncy5tYXAoKHgsIHNvbmdJbmRleCkgPT4geyAqL31cblxuICAgICAgICAgICAgICAgIHsvKiBUSElTIFNIT1VMRCBCRSBJVFMgT1dOIENPTVBPTkVOVCBTTyBJVCBDQU4gSEFWRSBJVFMgT1dOIFNUQVRFICovfVxuICAgICAgICAgICAgICAgIHthcnRpc3REYXRhLnNvbmdzLm1hcCgoeCwgc29uZ0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U29uZyBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NvbmdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBzb25nRGF0YT17eH0gLy8gcGFzc2luZyB0aGUgc29uZyBkYXRhIGhlcmUgaXMgZWFzaWVyIHRoYW4gcmUtZ2V0dGluZyBpdCB3aXRoaW4gdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIGFydGlzdERhdGE9e2FydGlzdERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QXJ0aXN0RGF0YT17c2V0QXJ0aXN0RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBzb25nSW5kZXg9e3NvbmdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7Lyoge2FydGlzdERhdGEuc29uZ3MubWFwKCh4LCBzb25nSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9IHtzb25nSW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5zb25nIG5hbWU6IHt4LnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5wYWlkIGZvcjoge3guc29uZ01ldGFkYXRhLnBhaWRGb3IgPyAneWVzJyA6ICdubyd9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+ZGF0ZSByYXcgZmlsZXMgcmVjZWl2ZWQ6IHt4LnNvbmdNZXRhZGF0YS5kYXRlUmF3RmlsZXNSZWNlaXZlZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5kYXRlIHJlbGVhc2VkOiB7eC5zb25nTWV0YWRhdGEuZGF0ZVJlbGVhc2VkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPmJhY2t1cCBsb2NhdGlvbjoge3guc29uZ01ldGFkYXRhLmJhY2t1cExvY2F0aW9ufTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPmRhdGUgb2YgbW9zdCByZWNlbnQgZWRpdDoge3guc29uZ01ldGFkYXRhLmRhdGVPZk1vc3RSZWNlbnRFZGl0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt4LmZpbGVWZXJzaW9ucy5tYXAoKHgsIGZpbGVWZXJzaW9uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17ZmlsZVZlcnNpb25JbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5maWxlIHZlcnNpb24gbmFtZToge3guZmlsZVZlcnNpb25OYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kYXRlIGFkZGVkOiB7eC5kYXRlQWRkZWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJldmlzaW9uIG5vdGU6IHt4LnJldmlzaW9uTm90ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17eC5yZXZpc2lvbk5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FydGlzdFN0eWxlcy5yZXZpc2lvblRleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzYXZlUmV2aXNpb25Ob3RlKGUudGFyZ2V0LnZhbHVlLCBzb25nSW5kZXgsIGZpbGVWZXJzaW9uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkpvYiB0eXBlOiB7eC5qb2JUeXBlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9ICovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgey8qIDxoMT57c29uZ308L2gxPlxuICAgICAgICAgIDxoMT57cHJvcHMuYXJ0aXN0TmFtZX08L2gxPiAqL31cblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkltYWdlIiwiZGFzaFN0eWxlcyIsImRlZmF1bHRTdHlsZXMiLCJhcnRpc3RTdHlsZXMiLCJ1c2VBdXRoU3RhdGUiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsImRvYyIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvYyIsImdldERvY3MiLCJ1cGRhdGVEb2MiLCJBdWRpb05hdiIsIlNvbmciLCJUZXh0YXJlYUF1dG9zaXplIiwiYXJ0aXN0VGVtcCIsInJldmlzaW9uVHlwaW5nVGltZW91dCIsIkFydGlzdCIsInByb3BzIiwidXNlckF1dGgiLCJ1c2VyQXV0aElzTG9hZGluZyIsInVzZXJBdXRoRXJyb3IiLCJhcnRpc3REYXRhIiwic2V0QXJ0aXN0RGF0YSIsImFydGlzdElzTG9nZ2VkSW5BbmRPblRoZWlyT3duUGFnZSIsInNldEFydGlzdElzTG9nZ2VkSW5BbmRPblRoZWlyT3duUGFnZSIsInJvdXRlciIsImFydGlzdCIsInNvbmciLCJvayIsImdldERhdGFQdWJsaWMiLCJkb2N1bWVudHNUb0dldCIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZGF0YSIsImdldERhdGFBdXRob3JpemVkIiwidWlkIiwiY2hlY2siLCJtYWluIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGVQaG90b0ljb24iLCJzcmMiLCJtZXRhZGF0YSIsInByb2ZpbGVQaG90byIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJoMSIsImFydGlzdE5hbWVTdHlsaXplZCIsImVtYWlsIiwic29uZ3MiLCJtYXAiLCJ4Iiwic29uZ0luZGV4Iiwic29uZ0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...artist].js\n"));

/***/ })

});