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

/***/ "./pages/Components/FileVersion.js":
/*!*****************************************!*\
  !*** ./pages/Components/FileVersion.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Create a reference to the file we want to download\nfunction FileVersion(props) {\n    _s();\n    var downloadFunction = function(fileVersionRefArgument) {\n        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(fileVersionRefArgument).then(function(url) {\n            // console.log(url)\n            return url;\n        // setDownloadUrl(url)\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.fileVersion), fileVersionData = ref1[0], setFileVersionData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), downloadURL = ref2[0], setDownloadUrl = ref2[1];\n    // const fileVersionRef = ref(storage, 'nooooo');\n    var log = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var fileVersionRef, url;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        fileVersionRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.storage, props.fileVersion.pathReference);\n                        _ctx.next = 3;\n                        return downloadFunction(fileVersionRef);\n                    case 3:\n                        url = _ctx.sent;\n                        console.log(url);\n                        setDownloadUrl(url);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function log() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var deleteFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempFileVersionsArray, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", fileVersionData.artistName); // create reference to document\n                        _ctx.next = 5;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 5:\n                        docSnap = _ctx.sent;\n                        // if (docSnap.exists() && docSnap.data().songs[props.fileVersionIndex].fileVersions) { // if the document exists\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // clone all the song's data in a local array \n                            ;\n                            tempArtistSongsArray[props.songIndex].fileVersions.splice(props.fileVersionIndex, 1) // remove the file version\n                            ;\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray // update doc with new data\n                        });\n                        setFileVersionData(null);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteFileVersion() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return fileVersionData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return log();\n                },\n                children: \"log\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return console.log(downloadURL);\n                },\n                children: \"check download url state\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: props.fileVersion.fileVersionName\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Artist name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: props.fileVersion.artistName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Song name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: props.fileVersion.songName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"dateAdded:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: Date(props.fileVersion.dateAdded)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Revision note:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: props.fileVersion.revisionNote\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return deleteFileVersion();\n                },\n                children: \"delete file version\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n};\n_s(FileVersion, \"vFRuU2Pkdt7+vjw+6kwii4LcI7A=\");\n_c = FileVersion;\nvar _c;\n$RefreshReg$(_c, \"FileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7aUJBQUE7MEJBQUUsMEJBQXdCOzs7OztvQkFBUzswQkFDOUUsOERBQUNxQixJQUFFOzBCQUFFakMsS0FBSyxDQUFDUyxXQUFXLENBQUN5QixlQUFlOzs7OztvQkFBTTswQkFDNUMsOERBQUNDLElBQUU7O2tDQUNDLDhEQUFDQyxJQUFFO2tDQUFDLDRFQUFDQyxRQUFNO3NDQUFDLGNBQVk7Ozs7O2dDQUFTOzs7Ozs0QkFBSztrQ0FDdEMsOERBQUNELElBQUU7a0NBQUVwQyxLQUFLLENBQUNTLFdBQVcsQ0FBQ1ksVUFBVTs7Ozs7NEJBQU07a0NBQ3ZDLDhEQUFDZSxJQUFFO2tDQUFDLDRFQUFDQyxRQUFNO3NDQUFDLFlBQVU7Ozs7O2dDQUFTOzs7Ozs0QkFBSztrQ0FDcEMsOERBQUNELElBQUU7a0NBQUVwQyxLQUFLLENBQUNTLFdBQVcsQ0FBQzZCLFFBQVE7Ozs7OzRCQUFNO2tDQUNyQyw4REFBQ0YsSUFBRTtrQ0FBQyw0RUFBQ0MsUUFBTTtzQ0FBQyxZQUFVOzs7OztnQ0FBUzs7Ozs7NEJBQUs7a0NBQ3BDLDhEQUFDRCxJQUFFO2tDQUFFRyxJQUFJLENBQUN2QyxLQUFLLENBQUNTLFdBQVcsQ0FBQytCLFNBQVMsQ0FBQzs7Ozs7NEJBQU07a0NBQzVDLDhEQUFDSixJQUFFO2tDQUFDLDRFQUFDQyxRQUFNO3NDQUFDLGdCQUFjOzs7OztnQ0FBUzs7Ozs7NEJBQUs7a0NBQ3hDLDhEQUFDRCxJQUFFO2tDQUFFcEMsS0FBSyxDQUFDUyxXQUFXLENBQUNnQyxZQUFZOzs7Ozs0QkFBTTs7Ozs7O29CQUV4QzswQkFhVCw4REFBQ1YsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFOzJCQUFNaEIsaUJBQWlCLEVBQUU7aUJBQUE7MEJBQUUscUJBQW1COzs7OztvQkFBUzs7Ozs7O1lBQ3JFLENBQ1I7Q0FDRjtHQTlFdUJqQixXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9GaWxlVmVyc2lvbi5qcz9jN2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIGdldERvYywgc2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyLCBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UtY29uZmlnJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgZ2V0RG93bmxvYWRVUkwgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG4vLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGZpbGUgd2Ugd2FudCB0byBkb3dubG9hZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlVmVyc2lvbihwcm9wcykge1xuICAgIGNvbnN0IGRvd25sb2FkRnVuY3Rpb24gPSAoZmlsZVZlcnNpb25SZWZBcmd1bWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwoZmlsZVZlcnNpb25SZWZBcmd1bWVudClcbiAgICAgICAgICAgICAgICAudGhlbigodXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybFxuICAgICAgICAgICAgICAgICAgICAvLyBzZXREb3dubG9hZFVybCh1cmwpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG4gICAgY29uc3QgW2ZpbGVWZXJzaW9uRGF0YSwgc2V0RmlsZVZlcnNpb25EYXRhXSA9IHVzZVN0YXRlKHByb3BzLmZpbGVWZXJzaW9uKVxuICAgIGNvbnN0IFtkb3dubG9hZFVSTCwgc2V0RG93bmxvYWRVcmxdID0gdXNlU3RhdGUoJycpXG4gICAgXG4gICAgLy8gY29uc3QgZmlsZVZlcnNpb25SZWYgPSByZWYoc3RvcmFnZSwgJ25vb29vbycpO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGxvZyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMuZmlsZVZlcnNpb24ucGF0aFJlZmVyZW5jZSlcbiAgICAgICAgY29uc3QgZmlsZVZlcnNpb25SZWYgPSByZWYoc3RvcmFnZSwgcHJvcHMuZmlsZVZlcnNpb24ucGF0aFJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGRvd25sb2FkRnVuY3Rpb24oZmlsZVZlcnNpb25SZWYpXG4gICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgc2V0RG93bmxvYWRVcmwodXJsKVxuXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZUZpbGVWZXJzaW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGxldCB0ZW1wRmlsZVZlcnNpb25zQXJyYXlcbiAgICAgICAgbGV0IHRlbXBBcnRpc3RTb25nc0FycmF5XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYXJ0aXN0c1wiLCBmaWxlVmVyc2lvbkRhdGEuYXJ0aXN0TmFtZSk7IC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gZG9jdW1lbnRcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpOyAvLyBnZXQgY3VycmVudCBkb2N1bWVudHMgZGF0YVxuICAgICAgICAvLyBpZiAoZG9jU25hcC5leGlzdHMoKSAmJiBkb2NTbmFwLmRhdGEoKS5zb25nc1twcm9wcy5maWxlVmVyc2lvbkluZGV4XS5maWxlVmVyc2lvbnMpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSApIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIGNsb25lIGFsbCB0aGUgc29uZydzIGRhdGEgaW4gYSBsb2NhbCBhcnJheSBcbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5W3Byb3BzLnNvbmdJbmRleF0uZmlsZVZlcnNpb25zLnNwbGljZShwcm9wcy5maWxlVmVyc2lvbkluZGV4LCAxKSAvLyByZW1vdmUgdGhlIGZpbGUgdmVyc2lvblxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHsgXG4gICAgICAgICAgICBzb25nczogdGVtcEFydGlzdFNvbmdzQXJyYXkgLy8gdXBkYXRlIGRvYyB3aXRoIG5ldyBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHNldEZpbGVWZXJzaW9uRGF0YShudWxsKVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgICAgZmlsZVZlcnNpb25EYXRhICYmXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9nKCl9PmxvZzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGRvd25sb2FkVVJMKX0+Y2hlY2sgZG93bmxvYWQgdXJsIHN0YXRlPC9idXR0b24+XG4gICAgICAgICAgICA8aDM+e3Byb3BzLmZpbGVWZXJzaW9uLmZpbGVWZXJzaW9uTmFtZX08L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkFydGlzdCBuYW1lOjwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntwcm9wcy5maWxlVmVyc2lvbi5hcnRpc3ROYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+U29uZyBuYW1lOjwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntwcm9wcy5maWxlVmVyc2lvbi5zb25nTmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPmRhdGVBZGRlZDo8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57RGF0ZShwcm9wcy5maWxlVmVyc2lvbi5kYXRlQWRkZWQpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UmV2aXNpb24gbm90ZTo8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57cHJvcHMuZmlsZVZlcnNpb24ucmV2aXNpb25Ob3RlfTwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIHsvKiA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsZVZlcnNpb25EYXRhKS5tYXAoKGZpbGVWZXJzaW9uRmllbGQsIGZpbGV2ZXJzaW9uRmllbGRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17ZmlsZXZlcnNpb25GaWVsZEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57ZmlsZVZlcnNpb25GaWVsZH08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57ZmlsZVZlcnNpb25EYXRhW2ZpbGVWZXJzaW9uRmllbGRdfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD4gKi99XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlRmlsZVZlcnNpb24oKX0+ZGVsZXRlIGZpbGUgdmVyc2lvbjwvYnV0dG9uPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwidXBkYXRlRG9jIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJzdG9yYWdlIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiRmlsZVZlcnNpb24iLCJwcm9wcyIsImRvd25sb2FkRnVuY3Rpb24iLCJmaWxlVmVyc2lvblJlZkFyZ3VtZW50IiwidGhlbiIsInVybCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmlsZVZlcnNpb24iLCJmaWxlVmVyc2lvbkRhdGEiLCJzZXRGaWxlVmVyc2lvbkRhdGEiLCJkb3dubG9hZFVSTCIsInNldERvd25sb2FkVXJsIiwiZmlsZVZlcnNpb25SZWYiLCJwYXRoUmVmZXJlbmNlIiwiZGVsZXRlRmlsZVZlcnNpb24iLCJ0ZW1wRmlsZVZlcnNpb25zQXJyYXkiLCJ0ZW1wQXJ0aXN0U29uZ3NBcnJheSIsImRvY1JlZiIsImRvY1NuYXAiLCJhcnRpc3ROYW1lIiwiZXhpc3RzIiwiZGF0YSIsInNvbmdzIiwic29uZ0luZGV4IiwiZmlsZVZlcnNpb25zIiwic3BsaWNlIiwiZmlsZVZlcnNpb25JbmRleCIsIm1haW4iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJmaWxlVmVyc2lvbk5hbWUiLCJ1bCIsImxpIiwic3Ryb25nIiwic29uZ05hbWUiLCJEYXRlIiwiZGF0ZUFkZGVkIiwicmV2aXNpb25Ob3RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/FileVersion.js\n"));

/***/ })

});