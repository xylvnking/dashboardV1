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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artist; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Dashboard.module.scss */ \"./styles/Dashboard.module.scss\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// this page needs to be able to read from firebase using the router query, if it exists\n// collection would be artist[0]\n// document names are predetermined\n// songName would be either artist[1] or song (from the ?song=somesongname parameter)\n// then allow writes if they are authorized\n// http://localhost:3000/artistname?song=songname\n// the artists will be created by me when I actually upload files to them, so I can enter anything I want\n// .collection(\"artists\").where(\"metadata.artistName\", \"==\", \"artistNameFromQuery\")\n// you get access to their uid when they log in, so you could search for the document which contains that\n// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine\n// .collection(\"artists\").where(\"uid\", \"==\", \"the uid of the signed in artist\")\n// need to get reference to their artist name when they sign in\nvar artistTemp = \"artistName1\";\nfunction Artist(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (userAuth) {\n            var getData = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var q, querySnapshot;\n                    return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"metadata.uid\", \"==\", userAuth.uid));\n                                _ctx.next = 3;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n                            case 3:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    // doc.data() is never undefined for query doc snapshots\n                                    console.log(doc.id, \" => \", doc.data());\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function getData() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getData();\n        }\n    }, [\n        userAuth\n    ]);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), artistData = ref1[0], setArtistData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _query = router.query, artist = _query.artist, song = _query.song, ok = _query.ok;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: song\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: props.artistName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \" this should have no style\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n_s(Artist, \"woUYGIrCvHFB56+wMCtY8lxSKHc=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Artist;\nvar _c;\n$RefreshReg$(_c, \"Artist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uYXJ0aXN0XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQWdEO0FBQ1Q7QUFDZTtBQUNSO0FBQ1U7QUFFQTtBQUNnQztBQVN4Rix3RkFBd0Y7QUFDeEYsZ0NBQWdDO0FBQzlCLG1DQUFtQztBQUNqQyxxRkFBcUY7QUFFekYsMkNBQTJDO0FBRTNDLGlEQUFpRDtBQUlqRCx5R0FBeUc7QUFFekcsbUZBQW1GO0FBRW5GLHlHQUF5RztBQUV6RyxnR0FBZ0c7QUFFaEcsK0VBQStFO0FBTS9FLCtEQUErRDtBQUUvRCxJQUFNZ0IsVUFBVSxHQUFHLGFBQWE7QUFJakIsU0FBU0MsTUFBTSxDQUFDQyxLQUFLLEVBQUU7O0lBRXBDLElBQXFEZCxHQUFrQixvRkFBbEJBLHVFQUFZLENBQUNJLGtEQUFJLENBQUMsTUFBaEVXLFFBQVEsR0FBc0NmLEdBQWtCLEdBQXhELEVBQUVnQixpQkFBaUIsR0FBbUJoQixHQUFrQixHQUFyQyxFQUFFaUIsYUFBYSxHQUFJakIsR0FBa0IsR0FBdEI7SUFFakRGLGdEQUFTLENBQUMsV0FBTTtRQUVkLElBQUlpQixRQUFRLEVBQUU7WUFDWixJQUFNRyxPQUFPOzJCQUFHLDZQQUFZO3dCQUlwQkMsQ0FBQyxFQUNEQyxhQUFhOzs7O2dDQURiRCxDQUFDLEdBQUdWLHlEQUFLLENBQUNELDhEQUFVLENBQUNMLGdEQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUVPLHlEQUFLLENBQUUsY0FBWSxFQUFHLElBQUksRUFBRUssUUFBUSxDQUFDTSxHQUFHLENBQUMsQ0FBQyxDQUFDOzt1Q0FDMURWLDJEQUFPLENBQUNRLENBQUMsQ0FBQzs7Z0NBQWhDQyxhQUFhLFlBQW1CO2dDQUN0Q0EsYUFBYSxDQUFDRSxPQUFPLENBQUMsU0FBQ2hCLEdBQUcsRUFBSztvQ0FDN0Isd0RBQXdEO29DQUN4RGlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEIsR0FBRyxDQUFDbUIsRUFBRSxFQUFFLE1BQU0sRUFBRW5CLEdBQUcsQ0FBQ29CLElBQUksRUFBRSxDQUFDLENBQUM7aUNBQ3pDLENBQUMsQ0FBQzs7Ozs7O2lCQUNKO2dDQVZLUixPQUFPOzs7ZUFVWjtZQUVEQSxPQUFPLEVBQUU7U0FDVjtLQUVGLEVBQUU7UUFBQ0gsUUFBUTtLQUFDLENBQUM7SUFHZCxJQUFvQ2xCLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBekM4QixVQUFVLEdBQW1COUIsSUFBWSxHQUEvQixFQUFFK0IsYUFBYSxHQUFJL0IsSUFBWSxHQUFoQjtJQUdoQyxJQUFNZ0MsTUFBTSxHQUFHOUIsc0RBQVMsRUFBRTtJQUMxQixJQUE2QjhCLE1BQVksR0FBWkEsTUFBTSxDQUFDcEIsS0FBSyxFQUFqQ3FCLE1BQU0sR0FBZUQsTUFBWSxDQUFqQ0MsTUFBTSxFQUFFQyxJQUFJLEdBQVNGLE1BQVksQ0FBekJFLElBQUksRUFBRUMsRUFBRSxHQUFLSCxNQUFZLENBQW5CRyxFQUFFO0lBS3hCLHFCQUNFLDhEQUFDQyxNQUFJOzswQkFDSCw4REFBQ0MsU0FBTztnQkFBQ0MsU0FBUyxFQUFFakMsNkVBQWlCOztrQ0FFbkMsOERBQUNtQyxJQUFFO2tDQUFFUCxNQUFNOzs7Ozs0QkFBTTtrQ0FDakIsOERBQUNPLElBQUU7a0NBQUVOLElBQUk7Ozs7OzRCQUFNO2tDQUNmLDhEQUFDTSxJQUFFO2tDQUFFdkIsS0FBSyxDQUFDd0IsVUFBVTs7Ozs7NEJBQU07Ozs7OztvQkFDbkI7MEJBQ1YsOERBQUNELElBQUU7MEJBQUMsNEJBQTBCOzs7OztvQkFBSzs7Ozs7O1lBQzlCLENBQ1I7Q0FDRjtHQTdDdUJ4QixNQUFNOztRQUV5QmIsbUVBQVk7UUEwQmxERCxrREFBUzs7O0FBNUJGYyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1suLi5hcnRpc3RdLmpzP2QwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZGFzaFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5zY3NzJ1xuXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cblxuXG5cblxuXG5cblxuLy8gdGhpcyBwYWdlIG5lZWRzIHRvIGJlIGFibGUgdG8gcmVhZCBmcm9tIGZpcmViYXNlIHVzaW5nIHRoZSByb3V0ZXIgcXVlcnksIGlmIGl0IGV4aXN0c1xuLy8gY29sbGVjdGlvbiB3b3VsZCBiZSBhcnRpc3RbMF1cbiAgLy8gZG9jdW1lbnQgbmFtZXMgYXJlIHByZWRldGVybWluZWRcbiAgICAvLyBzb25nTmFtZSB3b3VsZCBiZSBlaXRoZXIgYXJ0aXN0WzFdIG9yIHNvbmcgKGZyb20gdGhlID9zb25nPXNvbWVzb25nbmFtZSBwYXJhbWV0ZXIpXG5cbi8vIHRoZW4gYWxsb3cgd3JpdGVzIGlmIHRoZXkgYXJlIGF1dGhvcml6ZWRcblxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FydGlzdG5hbWU/c29uZz1zb25nbmFtZVxuXG5cblxuLy8gdGhlIGFydGlzdHMgd2lsbCBiZSBjcmVhdGVkIGJ5IG1lIHdoZW4gSSBhY3R1YWxseSB1cGxvYWQgZmlsZXMgdG8gdGhlbSwgc28gSSBjYW4gZW50ZXIgYW55dGhpbmcgSSB3YW50XG5cbi8vIC5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKS53aGVyZShcIm1ldGFkYXRhLmFydGlzdE5hbWVcIiwgXCI9PVwiLCBcImFydGlzdE5hbWVGcm9tUXVlcnlcIilcblxuLy8geW91IGdldCBhY2Nlc3MgdG8gdGhlaXIgdWlkIHdoZW4gdGhleSBsb2cgaW4sIHNvIHlvdSBjb3VsZCBzZWFyY2ggZm9yIHRoZSBkb2N1bWVudCB3aGljaCBjb250YWlucyB0aGF0XG5cbi8vIGl0J3MgYSBsaXR0bGUgc2N1ZmZlZCBvZiBhIHdvcmtmbG93IGJ1dCBhdCB0aGlzIHNjYWxlIHNpbmNlIGl0J3Mgc3BlY2lmaWMgdG8gbWUgaXQgd29ya3MgZmluZVxuXG4vLyAuY29sbGVjdGlvbihcImFydGlzdHNcIikud2hlcmUoXCJ1aWRcIiwgXCI9PVwiLCBcInRoZSB1aWQgb2YgdGhlIHNpZ25lZCBpbiBhcnRpc3RcIilcblxuXG5cblxuXG4vLyBuZWVkIHRvIGdldCByZWZlcmVuY2UgdG8gdGhlaXIgYXJ0aXN0IG5hbWUgd2hlbiB0aGV5IHNpZ24gaW5cblxuY29uc3QgYXJ0aXN0VGVtcCA9ICdhcnRpc3ROYW1lMSdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdChwcm9wcykge1xuXG4gIGNvbnN0IFt1c2VyQXV0aCwgdXNlckF1dGhJc0xvYWRpbmcsIHVzZXJBdXRoRXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHVzZXJBdXRoKSB7XG4gICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJBdXRoLnVpZClcbiAgICAgICAgLy8gY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSwgd2hlcmUoXCJ1aWRcIiwgXCI9PVwiLCB1c2VyQXV0aC51aWQpKTtcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSwgd2hlcmUoYG1ldGFkYXRhLnVpZGAsIFwiPT1cIiwgdXNlckF1dGgudWlkKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBnZXREYXRhKClcbiAgICB9XG5cbiAgfSwgW3VzZXJBdXRoXSlcblxuXG4gIGNvbnN0IFthcnRpc3REYXRhLCBzZXRBcnRpc3REYXRhXSA9IHVzZVN0YXRlKHt9KVxuXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBhcnRpc3QsIHNvbmcsIG9rIH0gPSByb3V0ZXIucXVlcnlcblxuXG5cblxuICByZXR1cm4gKCAgXG4gICAgPG1haW4+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Rhc2hTdHlsZXMubmF2YmFyfT5cblxuICAgICAgICA8aDE+e2FydGlzdH08L2gxPlxuICAgICAgICA8aDE+e3Nvbmd9PC9oMT5cbiAgICAgICAgPGgxPntwcm9wcy5hcnRpc3ROYW1lfTwvaDE+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8aDE+IHRoaXMgc2hvdWxkIGhhdmUgbm8gc3R5bGU8L2gxPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoU3RhdGUiLCJzdHlsZXMiLCJkYXNoU3R5bGVzIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJkb2MiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2NzIiwiYXJ0aXN0VGVtcCIsIkFydGlzdCIsInByb3BzIiwidXNlckF1dGgiLCJ1c2VyQXV0aElzTG9hZGluZyIsInVzZXJBdXRoRXJyb3IiLCJnZXREYXRhIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ1aWQiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSIsImFydGlzdERhdGEiLCJzZXRBcnRpc3REYXRhIiwicm91dGVyIiwiYXJ0aXN0Iiwic29uZyIsIm9rIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJoMSIsImFydGlzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...artist].js\n"));

/***/ })

});