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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song2; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var _FileVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileVersion */ \"./pages/Components/FileVersion.js\");\n/* harmony import */ var _AddFileVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddFileVersion */ \"./pages/Components/AddFileVersion.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Song2(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.songData), songData = ref[0], setSongData = ref[1];\n    var deleteSong2 = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.songData.songMetadata.artistName); // create reference to document\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 4:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray);\n                            tempArtistSongsArray.splice(props.songIndex, 1);\n                            console.log(tempArtistSongsArray);\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                        setSongData(null);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteSong2() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"song index is \",\n                        props.songIndex\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                        children: \"Artist name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: songData.songMetadata.artistName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                        children: \"Song name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: songData.songMetadata.songName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                        children: \"Date of most recent edit:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: Date(songData.songMetadata.dateOfMostRecentEdit)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                            children: \"more metadata\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, this),\n                        // Object.keys(props.songData.songMetadata).map((metadataField, metadataFieldIndex) => {\n                        Object.keys(songData.songMetadata).map(function(metadataField, metadataFieldIndex) {\n                            if (typeof props.songData.songMetadata[metadataField] == \"string\") {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                                children: metadataField\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 41\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: props.songData.songMetadata[metadataField]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, metadataFieldIndex, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                }, _this);\n                            }\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AddFileVersion__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    artistName: props.artistName,\n                    songData: songData,\n                    songIndex: props.songIndex\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this),\n                songData.fileVersions.map(function(fileVersion, fileVersionIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_FileVersion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fileVersion: fileVersion,\n                        fileVersionIndex: fileVersionIndex,\n                        songIndex: props.songIndex\n                    }, fileVersionIndex, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return deleteSong2(props.songData.songMetadata.artistName);\n                    },\n                    children: \"delete song within song\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return props.deleteSong(props.songIndex);\n                    },\n                    children: \"delete song by calling prop function\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 97,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return console.log(songData.fileVersions);\n                    },\n                    children: \"check\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n_s(Song2, \"cygDzOrPgGkqfQM4e66cHOqeBPs=\");\n_c = Song2;\nvar _c;\n$RefreshReg$(_c, \"Song2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1NvbmcyLmpzPzFjNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgZG9jLCBnZXREb2MsIHNldERvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiOyBcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5cbmltcG9ydCBGaWxlVmVyc2lvbiBmcm9tICcuL0ZpbGVWZXJzaW9uJztcbmltcG9ydCBBZGRGaWxlVmVyc2lvbiBmcm9tICcuL0FkZEZpbGVWZXJzaW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb25nMihwcm9wcykge1xuXG4gICAgY29uc3QgW3NvbmdEYXRhLCBzZXRTb25nRGF0YV0gPSB1c2VTdGF0ZShwcm9wcy5zb25nRGF0YSlcbiAgICBcblxuICAgIGNvbnN0IGRlbGV0ZVNvbmcyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIC8vIGZldGNoKCcvYXBpL2ZpcmViYXNlJylcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC8vICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coeClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgbGV0IHRlbXBBcnRpc3RTb25nc0FycmF5XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5hcnRpc3ROYW1lKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcImFydGlzdHNcIiwgcHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmFydGlzdE5hbWUpOyAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTsgLy8gZ2V0IGN1cnJlbnQgZG9jdW1lbnRzIGRhdGFcbiAgICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIHN0b3JlIGRvY3VtZW50IGRhdGEgaW4gc2NvcGVkIGxvY2FsIGFycmF5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheSlcbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5LnNwbGljZShwcm9wcy5zb25nSW5kZXgsIDEpIFxuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcEFydGlzdFNvbmdzQXJyYXkpXG4gICAgICAgICAgfVxuICAgICAgICB1cGRhdGVEb2MoZG9jUmVmLCB7XG4gICAgICAgICAgICBzb25nczogdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0U29uZ0RhdGEobnVsbClcbiAgICAgICAgXG4gICAgICAgIFxuXG5cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICAgICAgICAgIHNvbmdEYXRhICYmXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxoMT5zb25nIGluZGV4IGlzIHtwcm9wcy5zb25nSW5kZXh9PC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+QXJ0aXN0IG5hbWU6PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgIDxsaT57c29uZ0RhdGEuc29uZ01ldGFkYXRhLmFydGlzdE5hbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT48c3Ryb25nPlNvbmcgbmFtZTo8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgPGxpPntzb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT48c3Ryb25nPkRhdGUgb2YgbW9zdCByZWNlbnQgZWRpdDo8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgPGxpPntEYXRlKHNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlT2ZNb3N0UmVjZW50RWRpdCl9PC9saT5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pm1vcmUgbWV0YWRhdGE8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3Qua2V5cyhwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEpLm1hcCgobWV0YWRhdGFGaWVsZCwgbWV0YWRhdGFGaWVsZEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvbmdEYXRhLnNvbmdNZXRhZGF0YSkubWFwKChtZXRhZGF0YUZpZWxkLCBtZXRhZGF0YUZpZWxkSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGFbbWV0YWRhdGFGaWVsZF0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXttZXRhZGF0YUZpZWxkSW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+e21ldGFkYXRhRmllbGR9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhW21ldGFkYXRhRmllbGRdfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPEFkZEZpbGVWZXJzaW9uIFxuICAgICAgICAgICAgICAgIGFydGlzdE5hbWU9e3Byb3BzLmFydGlzdE5hbWV9XG4gICAgICAgICAgICAgICAgc29uZ0RhdGE9e3NvbmdEYXRhfVxuICAgICAgICAgICAgICAgIHNvbmdJbmRleD17cHJvcHMuc29uZ0luZGV4fVxuXG4gICAgICAgICAgICAvPlxuXG5cbiAgICAgICAgICAgIHtzb25nRGF0YS5maWxlVmVyc2lvbnMubWFwKChmaWxlVmVyc2lvbiwgZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPEZpbGVWZXJzaW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmaWxlVmVyc2lvbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVZlcnNpb249e2ZpbGVWZXJzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVZlcnNpb25JbmRleD17ZmlsZVZlcnNpb25JbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbmdJbmRleD17cHJvcHMuc29uZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuXG5cblxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVNvbmcyKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5hcnRpc3ROYW1lKX0+ZGVsZXRlIHNvbmcgd2l0aGluIHNvbmc8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlU29uZyhwcm9wcy5zb25nSW5kZXgpfT5kZWxldGUgc29uZyBieSBjYWxsaW5nIHByb3AgZnVuY3Rpb248L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgc29uZ0RhdGEuZmlsZVZlcnNpb25zXG4gICAgICAgICAgICApfT5jaGVjazwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU29uZzIocHJvcHMuc29uZ0luZGV4KX0+ZGVsZXRlIHNvbmc8L2J1dHRvbj4gKi99XG4gICAgICAgIDwvdWw+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsIkZpbGVWZXJzaW9uIiwiQWRkRmlsZVZlcnNpb24iLCJTb25nMiIsInByb3BzIiwic29uZ0RhdGEiLCJzZXRTb25nRGF0YSIsImRlbGV0ZVNvbmcyIiwidGVtcEFydGlzdFNvbmdzQXJyYXkiLCJkb2NSZWYiLCJkb2NTbmFwIiwic29uZ01ldGFkYXRhIiwiYXJ0aXN0TmFtZSIsImV4aXN0cyIsImRhdGEiLCJzb25ncyIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJzb25nSW5kZXgiLCJtYWluIiwiY2xhc3NOYW1lIiwidWwiLCJoMSIsImxpIiwic3Ryb25nIiwic29uZ05hbWUiLCJEYXRlIiwiZGF0ZU9mTW9zdFJlY2VudEVkaXQiLCJkZXRhaWxzIiwic3VtbWFyeSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJtZXRhZGF0YUZpZWxkIiwibWV0YWRhdGFGaWVsZEluZGV4IiwiZmlsZVZlcnNpb25zIiwiZmlsZVZlcnNpb24iLCJmaWxlVmVyc2lvbkluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImRlbGV0ZVNvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Song2.js\n"));

/***/ })

});