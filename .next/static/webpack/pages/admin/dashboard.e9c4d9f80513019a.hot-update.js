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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song2; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var _FileVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileVersion */ \"./pages/Components/FileVersion.js\");\n/* harmony import */ var _AddFileVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddFileVersion */ \"./pages/Components/AddFileVersion.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Song2(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.songData), songData = ref[0], setSongData = ref[1];\n    var deleteSong2 = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.songData.songMetadata.artistName); // create reference to document\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 4:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray);\n                            tempArtistSongsArray.splice(props.songIndex, 1);\n                            console.log(tempArtistSongsArray);\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                        setSongData(null);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteSong2() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"song index is \",\n                        props.songIndex\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this),\n                // Object.keys(props.songData.songMetadata).map((metadataField, metadataFieldIndex) => {\n                Object.keys(songData.songMetadata).map(function(metadataField, metadataFieldIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                    children: metadataField\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 54,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: props.songData.songMetadata[metadataField]\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 55,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, metadataFieldIndex, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AddFileVersion__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    artistName: props.artistName,\n                    songData: songData\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this),\n                songData.fileVersions.map(function(fileVersion, fileVersionIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FileVersion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fileVersion: fileVersion,\n                        fileVersionIndex: fileVersionIndex,\n                        songIndex: props.songIndex\n                    }, fileVersionIndex, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return deleteSong2(props.songData.songMetadata.artistName);\n                    },\n                    children: \"delete song within song\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return props.deleteSong(props.songIndex);\n                    },\n                    children: \"delete song by calling prop function\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return console.log(songData.fileVersions);\n                    },\n                    children: \"check\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n_s(Song2, \"cygDzOrPgGkqfQM4e66cHOqeBPs=\");\n_c = Song2;\nvar _c;\n$RefreshReg$(_c, \"Song2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1Qjs7Ozs7d0JBQVM7OEJBQzVHLDhEQUFDc0IsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFOytCQUFNL0IsS0FBSyxDQUFDZ0MsVUFBVSxDQUFDaEMsS0FBSyxDQUFDZSxTQUFTLENBQUM7cUJBQUE7OEJBQUUsc0NBQW9DOzs7Ozt3QkFBUzs4QkFDdkcsOERBQUNlLFFBQU07b0JBQUNDLE9BQU8sRUFBRTsrQkFBTW5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUM5QlosUUFBUSxDQUFDMEIsWUFBWSxDQUN4QjtxQkFBQTs4QkFBRSxPQUFLOzs7Ozt3QkFBUzs7Ozs7O2dCQUVoQjs7Ozs7WUFDRixDQUNSO0NBQ0Y7R0EzRnVCNUIsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvU29uZzIuanM/MWM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIGdldERvYywgc2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UtY29uZmlnJztcblxuaW1wb3J0IEZpbGVWZXJzaW9uIGZyb20gJy4vRmlsZVZlcnNpb24nO1xuaW1wb3J0IEFkZEZpbGVWZXJzaW9uIGZyb20gJy4vQWRkRmlsZVZlcnNpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbmcyKHByb3BzKSB7XG5cbiAgICBjb25zdCBbc29uZ0RhdGEsIHNldFNvbmdEYXRhXSA9IHVzZVN0YXRlKHByb3BzLnNvbmdEYXRhKVxuICAgIFxuXG4gICAgY29uc3QgZGVsZXRlU29uZzIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgLy8gZmV0Y2goJy9hcGkvZmlyZWJhc2UnKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLy8gICAgIC50aGVuKCh4KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh4KVxuICAgICAgICAvLyB9KVxuICAgICAgICBsZXQgdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmFydGlzdE5hbWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYXJ0aXN0c1wiLCBwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuYXJ0aXN0TmFtZSk7IC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gZG9jdW1lbnRcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpOyAvLyBnZXQgY3VycmVudCBkb2N1bWVudHMgZGF0YVxuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkgeyAvLyBpZiB0aGUgZG9jdW1lbnQgZXhpc3RzXG4gICAgICAgICAgICB0ZW1wQXJ0aXN0U29uZ3NBcnJheSA9IChkb2NTbmFwLmRhdGEoKS5zb25ncykgLy8gc3RvcmUgZG9jdW1lbnQgZGF0YSBpbiBzY29wZWQgbG9jYWwgYXJyYXlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBBcnRpc3RTb25nc0FycmF5KVxuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkuc3BsaWNlKHByb3BzLnNvbmdJbmRleCwgMSkgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheSlcbiAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHtcbiAgICAgICAgICAgIHNvbmdzOiB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuICAgICAgICB9KVxuICAgICAgICBzZXRTb25nRGF0YShudWxsKVxuICAgICAgICBcbiAgICAgICAgXG5cblxuICAgIH1cblxuICByZXR1cm4gKFxuICAgICAgICAgICAgc29uZ0RhdGEgJiZcbiAgICA8bWFpbiBjbGFzc05hbWU9J2xpZ2h0Qm9yZGVyJz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDE+c29uZyBpbmRleCBpcyB7cHJvcHMuc29uZ0luZGV4fTwvaDE+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gT2JqZWN0LmtleXMocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhKS5tYXAoKG1ldGFkYXRhRmllbGQsIG1ldGFkYXRhRmllbGRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvbmdEYXRhLnNvbmdNZXRhZGF0YSkubWFwKChtZXRhZGF0YUZpZWxkLCBtZXRhZGF0YUZpZWxkSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e21ldGFkYXRhRmllbGRJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+e21ldGFkYXRhRmllbGR9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YVttZXRhZGF0YUZpZWxkXX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgIC8vIE9iamVjdC5rZXlzKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YSkubWFwKChtZXRhZGF0YUZpZWxkLCBtZXRhZGF0YUZpZWxkSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb25nRGF0YS5zb25nTWV0YWRhdGEpLm1hcCgobWV0YWRhdGFGaWVsZCwgbWV0YWRhdGFGaWVsZEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXttZXRhZGF0YUZpZWxkSW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnttZXRhZGF0YUZpZWxkfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGFbbWV0YWRhdGFGaWVsZF19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgIDxBZGRGaWxlVmVyc2lvbiBcbiAgICAgICAgICAgICAgICBhcnRpc3ROYW1lPXtwcm9wcy5hcnRpc3ROYW1lfVxuICAgICAgICAgICAgICAgIHNvbmdEYXRhPXtzb25nRGF0YX1cbiAgICAgICAgICAgIC8+XG5cblxuICAgICAgICAgICAge3NvbmdEYXRhLmZpbGVWZXJzaW9ucy5tYXAoKGZpbGVWZXJzaW9uLCBmaWxlVmVyc2lvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgICAgICA8RmlsZVZlcnNpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGVWZXJzaW9uSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVmVyc2lvbj17ZmlsZVZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVmVyc2lvbkluZGV4PXtmaWxlVmVyc2lvbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgc29uZ0luZGV4PXtwcm9wcy5zb25nSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG5cblxuXG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU29uZzIocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmFydGlzdE5hbWUpfT5kZWxldGUgc29uZyB3aXRoaW4gc29uZzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5kZWxldGVTb25nKHByb3BzLnNvbmdJbmRleCl9PmRlbGV0ZSBzb25nIGJ5IGNhbGxpbmcgcHJvcCBmdW5jdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBzb25nRGF0YS5maWxlVmVyc2lvbnNcbiAgICAgICAgICAgICl9PmNoZWNrPC9idXR0b24+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTb25nMihwcm9wcy5zb25nSW5kZXgpfT5kZWxldGUgc29uZzwvYnV0dG9uPiAqL31cbiAgICAgICAgPC91bD5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29sbGVjdGlvbiIsImFkZERvYyIsImRvYyIsImdldERvYyIsInNldERvYyIsInVwZGF0ZURvYyIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiRmlsZVZlcnNpb24iLCJBZGRGaWxlVmVyc2lvbiIsIlNvbmcyIiwicHJvcHMiLCJzb25nRGF0YSIsInNldFNvbmdEYXRhIiwiZGVsZXRlU29uZzIiLCJ0ZW1wQXJ0aXN0U29uZ3NBcnJheSIsImRvY1JlZiIsImRvY1NuYXAiLCJzb25nTWV0YWRhdGEiLCJhcnRpc3ROYW1lIiwiZXhpc3RzIiwiZGF0YSIsInNvbmdzIiwiY29uc29sZSIsImxvZyIsInNwbGljZSIsInNvbmdJbmRleCIsIm1haW4iLCJjbGFzc05hbWUiLCJ1bCIsImgxIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1ldGFkYXRhRmllbGQiLCJtZXRhZGF0YUZpZWxkSW5kZXgiLCJsaSIsInN0cm9uZyIsImZpbGVWZXJzaW9ucyIsImZpbGVWZXJzaW9uIiwiZmlsZVZlcnNpb25JbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkZWxldGVTb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Song2.js\n"));

/***/ })

});