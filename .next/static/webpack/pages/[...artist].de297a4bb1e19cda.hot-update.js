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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artist; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Default.module.scss */ \"./styles/Default.module.scss\");\n/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/AudioNav */ \"./pages/Components/AudioNav.js\");\n/* harmony import */ var _Components_Song__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/Song */ \"./pages/Components/Song.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n// import styles from '../styles/Home.module.css'\n\n\n\n\n\n\n\n\n\nvar artistTemp = \"artistName1\";\nvar revisionTypingTimeout;\nfunction Artist(props) {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), artistData = ref1[0], setArtistData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), artistIsLoggedInAndOnTheirOwnPage = ref2[0], setArtistIsLoggedInAndOnTheirOwnPage = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _query = router.query, artist = _query.artist, song = _query.song, ok = _query.ok;\n    // get data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (artist) {\n            var getDataPublic = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var documentsToGet, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(\"metadata.artistName\", \"==\", artist[0]));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(documentsToGet);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    setArtistData(doc.data());\n                                // console.log(doc.id, \" => \", doc.data());\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getDataPublic() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getDataPublic();\n        } else if (userAuth) {\n            var getDataAuthorized = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var documentsToGet, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(\"metadata.uid\", \"==\", userAuth.uid));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(documentsToGet);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    // console.log(doc.id, \" => \", doc.data());\n                                    setArtistData(doc.data());\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getDataAuthorized() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getDataAuthorized();\n        }\n        // check if the artist is logged in AND at their own url\n        if (artist && userAuth && artist[0] == userAuth.uid) {\n            // console.log('user is on thier own')\n            setArtistIsLoggedInAndOnTheirOwnPage(true);\n        }\n    }, [\n        userAuth,\n        artist\n    ]);\n    var check = function() {\n    // console.log(artistData)\n    // console.log(dataTest)\n    // console.log(userAuth)\n    // console.log(artist[0])\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return check();\n                        },\n                        children: \"CHECK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    artistData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default().profilePhotoIcon),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: artistData.metadata.profilePhoto,\n                                    className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default().profilePhotoIcon),\n                                    alt: \"User Photo\",\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    style: {\n                                        borderRadius: \"50%\"\n                                    }\n                                }, artistData.metadata.uid, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 18\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"artist name stylized: \",\n                                    artistData.metadata.artistNameStylized\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: artistIsLoggedInAndOnTheirOwnPage ? artistData.songs.map(function(x, songIndex) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Song__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        songData: x,\n                                        artistData: artistData,\n                                        setArtistData: setArtistData,\n                                        songIndex: songIndex\n                                    }, songIndex, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                        lineNumber: 110,\n                                        columnNumber: 25\n                                    }, _this);\n                                }) : null\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Artist, \"ZUlssjy6O3dusQgSTL4WBHEdBYU=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Artist;\nvar _c;\n$RefreshReg$(_c, \"Artist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzt3Q0FDWGxDLFVBQVUsRUFBRUEsVUFBVTt3Q0FDdEJDLGFBQWEsRUFBRUEsYUFBYTt3Q0FDNUJrQyxTQUFTLEVBQUVBLFNBQVM7dUNBSmZBLFNBQVM7Ozs7NkNBS2QsQ0FDSDtpQ0FDRixDQUFDLEdBR0osSUFBSTs7Ozs7b0NBRUE7Ozs7Ozs0QkF5Q0o7Ozs7OztvQkFLTDs7b0JBQ04sQ0FDSjtDQUNGO0dBbkp1QnhDLE1BQU07O1FBRXlCakIsbUVBQVk7UUFJbERMLGtEQUFTOzs7QUFORnNCLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvWy4uLmFydGlzdF0uanM/ZDBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBkYXNoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLnNjc3MnXG5pbXBvcnQgZGVmYXVsdFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvRGVmYXVsdC5tb2R1bGUuc2NzcydcbmltcG9ydCBhcnRpc3RTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGlzdC5tb2R1bGUuc2NzcydcblxuXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UtY29uZmlnJztcbmltcG9ydCB7IGRvYywgb25TbmFwc2hvdCwgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2MsIGdldERvY3MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuaW1wb3J0IEF1ZGlvTmF2IGZyb20gJy4vQ29tcG9uZW50cy9BdWRpb05hdic7XG5pbXBvcnQgU29uZyBmcm9tICcuL0NvbXBvbmVudHMvU29uZyc7XG5cbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcblxuY29uc3QgYXJ0aXN0VGVtcCA9ICdhcnRpc3ROYW1lMSdcblxubGV0IHJldmlzaW9uVHlwaW5nVGltZW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpc3QocHJvcHMpIHtcblxuICBjb25zdCBbdXNlckF1dGgsIHVzZXJBdXRoSXNMb2FkaW5nLCB1c2VyQXV0aEVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICBjb25zdCBbYXJ0aXN0RGF0YSwgc2V0QXJ0aXN0RGF0YV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFthcnRpc3RJc0xvZ2dlZEluQW5kT25UaGVpck93blBhZ2UsIHNldEFydGlzdElzTG9nZ2VkSW5BbmRPblRoZWlyT3duUGFnZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgYXJ0aXN0LCBzb25nLCBvayB9ID0gcm91dGVyLnF1ZXJ5XG5cblxuICAvLyBnZXQgZGF0YVxuICB1c2VFZmZlY3QoKCkgPT4geyAvLyBjb3VsZCB5b3UgdHVybiB0aGlzIGludG8gYSBuZXh0IGFwaSBjYWxsP1xuXG4gICAgaWYgKGFydGlzdCl7XG4gICAgICBjb25zdCBnZXREYXRhUHVibGljID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkb2N1bWVudHNUb0dldCA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSwgd2hlcmUoYG1ldGFkYXRhLmFydGlzdE5hbWVgLCBcIj09XCIsIGFydGlzdFswXSkpO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhkb2N1bWVudHNUb0dldCk7XG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgc2V0QXJ0aXN0RGF0YShkb2MuZGF0YSgpKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGdldERhdGFQdWJsaWMoKVxuICAgIH1cbiAgICBlbHNlIGlmICh1c2VyQXV0aCkge1xuICAgICAgY29uc3QgZ2V0RGF0YUF1dGhvcml6ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJBdXRoLnVpZClcbiAgICAgICAgY29uc3QgZG9jdW1lbnRzVG9HZXQgPSBxdWVyeShjb2xsZWN0aW9uKGRiLCBcImFydGlzdHNcIiksIHdoZXJlKGBtZXRhZGF0YS51aWRgLCBcIj09XCIsIHVzZXJBdXRoLnVpZCkpOyBcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZG9jdW1lbnRzVG9HZXQpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgICAgICAgIHNldEFydGlzdERhdGEoZG9jLmRhdGEoKSlcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIGdldERhdGFBdXRob3JpemVkKClcbiAgICB9IFxuICAgIFxuICAgIC8vIGNoZWNrIGlmIHRoZSBhcnRpc3QgaXMgbG9nZ2VkIGluIEFORCBhdCB0aGVpciBvd24gdXJsXG4gICAgaWYgKGFydGlzdCAmJiB1c2VyQXV0aCAmJiBhcnRpc3RbMF0gPT0gdXNlckF1dGgudWlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndXNlciBpcyBvbiB0aGllciBvd24nKVxuICAgICAgc2V0QXJ0aXN0SXNMb2dnZWRJbkFuZE9uVGhlaXJPd25QYWdlKHRydWUpXG4gICAgfVxuICB9LCBbdXNlckF1dGgsIGFydGlzdF0pXG5cbiAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYXJ0aXN0RGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhVGVzdClcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyQXV0aClcbiAgICAvLyBjb25zb2xlLmxvZyhhcnRpc3RbMF0pXG4gIH1cbiAgcmV0dXJuICggIFxuICAgIDw+XG4gICAgXG4gICAgPEF1ZGlvTmF2Lz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKCl9PkNIRUNLPC9idXR0b24+XG4gICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IH0+bm90aGluZyBybjwvYnV0dG9uPiAqL31cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFydGlzdERhdGEgJiZcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkZWZhdWx0U3R5bGVzLnByb2ZpbGVQaG90b0ljb259PlxuICAgICAgICAgICAgICAgIHs8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICBrZXk9e2FydGlzdERhdGEubWV0YWRhdGEudWlkfVxuICAgICAgICAgICAgICAgICAgc3JjPXthcnRpc3REYXRhLm1ldGFkYXRhLnByb2ZpbGVQaG90b30gXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2RlZmF1bHRTdHlsZXMucHJvZmlsZVBob3RvSWNvbn1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXIgUGhvdG9cIiBcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9IFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMTAwJSd9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlclJhZGl1czogJzUwJSd9fVxuICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+YXJ0aXN0IG5hbWUgc3R5bGl6ZWQ6IHthcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWVTdHlsaXplZH08L2gxPlxuICAgICAgICAgICAgICAgIHsvKiA8aDE+dWlkOiB7YXJ0aXN0RGF0YS5tZXRhZGF0YS51aWR9PC9oMT4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxoMT5lbWFpbDoge2FydGlzdERhdGEubWV0YWRhdGEuZW1haWx9PC9oMT4gKi99XG4gICAgICAgICAgICAgICAgey8qIHthcnRpc3REYXRhLnNvbmdzLm1hcCgoeCwgc29uZ0luZGV4KSA9PiB7ICovfVxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhcnRpc3RJc0xvZ2dlZEluQW5kT25UaGVpck93blBhZ2VcbiAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhcnRpc3REYXRhLnNvbmdzLm1hcCgoeCwgc29uZ0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb25nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NvbmdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc29uZ0RhdGE9e3h9IC8vIHBhc3NpbmcgdGhlIHNvbmcgZGF0YSBoZXJlIGlzIGVhc2llciB0aGFuIHJlLWdldHRpbmcgaXQgd2l0aGluIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aXN0RGF0YT17YXJ0aXN0RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJ0aXN0RGF0YT17c2V0QXJ0aXN0RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc29uZ0luZGV4PXtzb25nSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lyoge2FydGlzdERhdGEuc29uZ3MubWFwKCh4LCBzb25nSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTb25nIFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c29uZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHNvbmdEYXRhPXt4fSAvLyBwYXNzaW5nIHRoZSBzb25nIGRhdGEgaGVyZSBpcyBlYXNpZXIgdGhhbiByZS1nZXR0aW5nIGl0IHdpdGhpbiB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgYXJ0aXN0RGF0YT17YXJ0aXN0RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRBcnRpc3REYXRhPXtzZXRBcnRpc3REYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIHNvbmdJbmRleD17c29uZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfSAqL31cblxuICAgICAgICAgICAgICAgIHsvKiB7YXJ0aXN0RGF0YS5zb25ncy5tYXAoKHgsIHNvbmdJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGtleT0ge3NvbmdJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPnNvbmcgbmFtZToge3guc29uZ01ldGFkYXRhLnNvbmdOYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPnBhaWQgZm9yOiB7eC5zb25nTWV0YWRhdGEucGFpZEZvciA/ICd5ZXMnIDogJ25vJ308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5kYXRlIHJhdyBmaWxlcyByZWNlaXZlZDoge3guc29uZ01ldGFkYXRhLmRhdGVSYXdGaWxlc1JlY2VpdmVkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPmRhdGUgcmVsZWFzZWQ6IHt4LnNvbmdNZXRhZGF0YS5kYXRlUmVsZWFzZWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+YmFja3VwIGxvY2F0aW9uOiB7eC5zb25nTWV0YWRhdGEuYmFja3VwTG9jYXRpb259PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+ZGF0ZSBvZiBtb3N0IHJlY2VudCBlZGl0OiB7eC5zb25nTWV0YWRhdGEuZGF0ZU9mTW9zdFJlY2VudEVkaXR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3guZmlsZVZlcnNpb25zLm1hcCgoeCwgZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtmaWxlVmVyc2lvbkluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmZpbGUgdmVyc2lvbiBuYW1lOiB7eC5maWxlVmVyc2lvbk5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRhdGUgYWRkZWQ6IHt4LmRhdGVBZGRlZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmV2aXNpb24gbm90ZToge3gucmV2aXNpb25Ob3RlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt4LnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJ0aXN0U3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNhdmVSZXZpc2lvbk5vdGUoZS50YXJnZXQudmFsdWUsIHNvbmdJbmRleCwgZmlsZVZlcnNpb25JbmRleCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Sm9iIHR5cGU6IHt4LmpvYlR5cGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX0gKi99XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7LyogPGgxPntzb25nfTwvaDE+XG4gICAgICAgICAgPGgxPntwcm9wcy5hcnRpc3ROYW1lfTwvaDE+ICovfVxuXG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiSW1hZ2UiLCJkYXNoU3R5bGVzIiwiZGVmYXVsdFN0eWxlcyIsImFydGlzdFN0eWxlcyIsInVzZUF1dGhTdGF0ZSIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInVwZGF0ZURvYyIsIkF1ZGlvTmF2IiwiU29uZyIsIlRleHRhcmVhQXV0b3NpemUiLCJhcnRpc3RUZW1wIiwicmV2aXNpb25UeXBpbmdUaW1lb3V0IiwiQXJ0aXN0IiwicHJvcHMiLCJ1c2VyQXV0aCIsInVzZXJBdXRoSXNMb2FkaW5nIiwidXNlckF1dGhFcnJvciIsImFydGlzdERhdGEiLCJzZXRBcnRpc3REYXRhIiwiYXJ0aXN0SXNMb2dnZWRJbkFuZE9uVGhlaXJPd25QYWdlIiwic2V0QXJ0aXN0SXNMb2dnZWRJbkFuZE9uVGhlaXJPd25QYWdlIiwicm91dGVyIiwiYXJ0aXN0Iiwic29uZyIsIm9rIiwiZ2V0RGF0YVB1YmxpYyIsImRvY3VtZW50c1RvR2V0IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkYXRhIiwiZ2V0RGF0YUF1dGhvcml6ZWQiLCJ1aWQiLCJjaGVjayIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZVBob3RvSWNvbiIsInNyYyIsIm1ldGFkYXRhIiwicHJvZmlsZVBob3RvIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImgxIiwiYXJ0aXN0TmFtZVN0eWxpemVkIiwic29uZ3MiLCJtYXAiLCJ4Iiwic29uZ0luZGV4Iiwic29uZ0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...artist].js\n"));

/***/ })

});