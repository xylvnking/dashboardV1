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

/***/ "./pages/Auth.js":
/*!***********************!*\
  !*** ./pages/Auth.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var _api_fakeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/fakeData */ \"./pages/api/fakeData.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//  i think to fix the error:\n//  Import trace for requested module:\n//  just make this a component because right now it's a page. \n//  i think it has to be accessible from a link somewhere on the website or else it gives an error? unsure. \n//  no problems in use and build compiles fine but yeah, figure it out <3\nfunction Auth() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    var signInWithGoogle = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase_config__WEBPACK_IMPORTED_MODULE_4__.provider).then(function(result) {\n                            console.log(result.user);\n                            // checkIfNewClient(result.user)\n                            console.log(result.user.uid);\n                            if (result.user.uid == \"MLR7PcvjGDNtGsm8C44Zwkfz6X02\") {\n                                window.location.replace(\"/admin/dashboard\");\n                            } else {\n                                window.location.replace(\"/\");\n                            }\n                        }).catch(function(error) {\n                            console.error(\"there was an error signing in\", error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signInWithGoogle() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var signUserOut = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase_config__WEBPACK_IMPORTED_MODULE_4__.provider).then(function() {}).catch(function(error) {\n                            console.error(\"there was an error signing out\", error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signUserOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createFakeData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // fakeData.forEach(x => console.log(x))\n                        _api_fakeData__WEBPACK_IMPORTED_MODULE_5__.fakeData.forEach(function(x) {\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", x.metadata.artistName), x).catch(function(error) {\n                                console.log(error);\n                            });\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createFakeData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const date1 = new Date()\n    // console.log(date1)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return createFakeData();\n                },\n                children: \"reset database\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Auth.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            userAuth && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: signUserOut,\n                children: \" Sign Out\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Auth.js\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, this),\n            !userAuth && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: signInWithGoogle,\n                children: \" Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Auth.js\",\n                lineNumber: 74,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Auth.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n};\n_s(Auth, \"D7oJZClUxRgoLlN3lyqXuwPx7To=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = Auth;\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZOzs7QUFGN0NhLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXV0aC5qcz84ZmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBmYWtlRGF0YSB9IGZyb20gJy4vYXBpL2Zha2VEYXRhJ1xuXG5pbXBvcnQgeyBzaWduSW5XaXRoUG9wdXAsIHNpZ25PdXQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIGdldERvYywgc2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuXG5cbi8vICBpIHRoaW5rIHRvIGZpeCB0aGUgZXJyb3I6XG4vLyAgSW1wb3J0IHRyYWNlIGZvciByZXF1ZXN0ZWQgbW9kdWxlOlxuLy8gIGp1c3QgbWFrZSB0aGlzIGEgY29tcG9uZW50IGJlY2F1c2UgcmlnaHQgbm93IGl0J3MgYSBwYWdlLiBcbi8vICBpIHRoaW5rIGl0IGhhcyB0byBiZSBhY2Nlc3NpYmxlIGZyb20gYSBsaW5rIHNvbWV3aGVyZSBvbiB0aGUgd2Vic2l0ZSBvciBlbHNlIGl0IGdpdmVzIGFuIGVycm9yPyB1bnN1cmUuIFxuLy8gIG5vIHByb2JsZW1zIGluIHVzZSBhbmQgYnVpbGQgY29tcGlsZXMgZmluZSBidXQgeWVhaCwgZmlndXJlIGl0IG91dCA8M1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgoKSB7XG5cbiAgICBjb25zdCBbdXNlckF1dGgsIHVzZXJBdXRoSXNMb2FkaW5nLCB1c2VyQXV0aEVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICAgIFxuICAgIGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudXNlcilcbiAgICAgICAgICAgIC8vIGNoZWNrSWZOZXdDbGllbnQocmVzdWx0LnVzZXIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudXNlci51aWQpXG4gICAgICAgICAgICBpZiAocmVzdWx0LnVzZXIudWlkID09IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FETUlOX1VJRCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL2FkbWluL2Rhc2hib2FyZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidGhlcmUgd2FzIGFuIGVycm9yIHNpZ25pbmcgaW5cIiwgZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBzaWduVXNlck91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgc2lnbk91dChhdXRoLCBwcm92aWRlcikudGhlbigoKSA9PiB7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0aGVyZSB3YXMgYW4gZXJyb3Igc2lnbmluZyBvdXRcIiwgZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjcmVhdGVGYWtlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gZmFrZURhdGEuZm9yRWFjaCh4ID0+IGNvbnNvbGUubG9nKHgpKVxuICAgICAgICBmYWtlRGF0YS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgc2V0RG9jKGRvYyhkYiwgJ2FydGlzdHMnLCB4Lm1ldGFkYXRhLmFydGlzdE5hbWUpLCB4KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZTEpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVGYWtlRGF0YSgpfT5yZXNldCBkYXRhYmFzZTwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICB1c2VyQXV0aFxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25Vc2VyT3V0fT4gU2lnbiBPdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW5XaXRoR29vZ2xlfT4gU2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VyQXV0aFxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduVXNlck91dH0+IFNpZ24gT3V0PC9idXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIXVzZXJBdXRoXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PiBTaWduIEluPC9idXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXV0aFN0YXRlIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJmYWtlRGF0YSIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwidXBkYXRlRG9jIiwiQXV0aCIsInVzZXJBdXRoIiwidXNlckF1dGhJc0xvYWRpbmciLCJ1c2VyQXV0aEVycm9yIiwic2lnbkluV2l0aEdvb2dsZSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVpZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BRE1JTl9VSUQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJjYXRjaCIsImVycm9yIiwic2lnblVzZXJPdXQiLCJjcmVhdGVGYWtlRGF0YSIsImZvckVhY2giLCJ4IiwibWV0YWRhdGEiLCJhcnRpc3ROYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Auth.js\n"));

/***/ })

});