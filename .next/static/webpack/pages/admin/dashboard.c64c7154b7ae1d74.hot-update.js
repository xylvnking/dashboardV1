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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Create a reference to the file we want to download\nfunction FileVersion(props) {\n    _s();\n    var _$ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.fileVersion), fileVersionData = _$ref[0], setFileVersionData = _$ref[1];\n    var _$ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), getDownloadURL = _$ref1[0], setDownloadUrl = _$ref1[1];\n    var fileVersionRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.storage, props.fileVersion.pathRefernece);\n    var log = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // const storage = getStorage();\n                        // getDownloadURL\n                        console.log(fileVersionRef);\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // getDownloadURL(fileVersionRef)\n        // .then((url) => {\n        //     setDownloadUrl(url)\n        // }).catch((error) => {\n        //     console.log(error)\n        // })\n        }));\n        return function log() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var deleteFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempFileVersionsArray, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", fileVersionData.artistName); // create reference to document\n                        _ctx.next = 5;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 5:\n                        docSnap = _ctx.sent;\n                        // if (docSnap.exists() && docSnap.data().songs[props.fileVersionIndex].fileVersions) { // if the document exists\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // clone all the song's data in a local array \n                            ;\n                            tempArtistSongsArray[props.songIndex].fileVersions.splice(props.fileVersionIndex, 1) // remove the file version\n                            ;\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray // update doc with new data\n                        });\n                        setFileVersionData(null);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteFileVersion() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return fileVersionData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return log();\n                },\n                children: \"log\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: props.fileVersion.fileVersionName\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Artist name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: props.fileVersion.artistName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Song name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: props.fileVersion.songName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"dateAdded:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: Date(props.fileVersion.dateAdded)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Revision note:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: props.fileVersion.revisionNote\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return deleteFileVersion();\n                },\n                children: \"delete file version\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/FileVersion.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n};\n_s(FileVersion, \"vFRuU2Pkdt7+vjw+6kwii4LcI7A=\");\n_c = FileVersion;\nvar _c;\n$RefreshReg$(_c, \"FileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQU07a0NBQ3JDLDhEQUFDRixJQUFFO2tDQUFDLDRFQUFDQyxRQUFNO3NDQUFDLFlBQVU7Ozs7O2dDQUFTOzs7Ozs0QkFBSztrQ0FDcEMsOERBQUNELElBQUU7a0NBQUVHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDZ0MsU0FBUyxDQUFDOzs7Ozs0QkFBTTtrQ0FDNUMsOERBQUNKLElBQUU7a0NBQUMsNEVBQUNDLFFBQU07c0NBQUMsZ0JBQWM7Ozs7O2dDQUFTOzs7Ozs0QkFBSztrQ0FDeEMsOERBQUNELElBQUU7a0NBQUU3QixLQUFLLENBQUNDLFdBQVcsQ0FBQ2lDLFlBQVk7Ozs7OzRCQUFNOzs7Ozs7b0JBRXhDOzBCQWFULDhEQUFDVixRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1oQixpQkFBaUIsRUFBRTtpQkFBQTswQkFBRSxxQkFBbUI7Ozs7O29CQUFTOzs7Ozs7WUFDckUsQ0FDUjtDQUNGO0dBcEV1QlYsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvRmlsZVZlcnNpb24uanM/YzdhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgZG9jLCBnZXREb2MsIHNldERvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiOyBcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciwgc3RvcmFnZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBmaWxlIHdlIHdhbnQgdG8gZG93bmxvYWRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZVZlcnNpb24ocHJvcHMpIHtcbiAgICBjb25zdCBbZmlsZVZlcnNpb25EYXRhLCBzZXRGaWxlVmVyc2lvbkRhdGFdID0gdXNlU3RhdGUocHJvcHMuZmlsZVZlcnNpb24pXG4gICAgY29uc3QgW2dldERvd25sb2FkVVJMLCBzZXREb3dubG9hZFVybF0gPSB1c2VTdGF0ZSgnJylcbiAgICBcbiAgICBjb25zdCBmaWxlVmVyc2lvblJlZiA9IHJlZihzdG9yYWdlLCBwcm9wcy5maWxlVmVyc2lvbi5wYXRoUmVmZXJuZWNlKTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBsb2cgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgICAgIC8vIGdldERvd25sb2FkVVJMXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVWZXJzaW9uUmVmKVxuICAgICAgICAvLyBnZXREb3dubG9hZFVSTChmaWxlVmVyc2lvblJlZilcbiAgICAgICAgLy8gLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAvLyAgICAgc2V0RG93bmxvYWRVcmwodXJsKVxuICAgICAgICAvLyB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAvLyB9KVxuXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZUZpbGVWZXJzaW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGxldCB0ZW1wRmlsZVZlcnNpb25zQXJyYXlcbiAgICAgICAgbGV0IHRlbXBBcnRpc3RTb25nc0FycmF5XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYXJ0aXN0c1wiLCBmaWxlVmVyc2lvbkRhdGEuYXJ0aXN0TmFtZSk7IC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gZG9jdW1lbnRcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpOyAvLyBnZXQgY3VycmVudCBkb2N1bWVudHMgZGF0YVxuICAgICAgICAvLyBpZiAoZG9jU25hcC5leGlzdHMoKSAmJiBkb2NTbmFwLmRhdGEoKS5zb25nc1twcm9wcy5maWxlVmVyc2lvbkluZGV4XS5maWxlVmVyc2lvbnMpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSApIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIGNsb25lIGFsbCB0aGUgc29uZydzIGRhdGEgaW4gYSBsb2NhbCBhcnJheSBcbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5W3Byb3BzLnNvbmdJbmRleF0uZmlsZVZlcnNpb25zLnNwbGljZShwcm9wcy5maWxlVmVyc2lvbkluZGV4LCAxKSAvLyByZW1vdmUgdGhlIGZpbGUgdmVyc2lvblxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHsgXG4gICAgICAgICAgICBzb25nczogdGVtcEFydGlzdFNvbmdzQXJyYXkgLy8gdXBkYXRlIGRvYyB3aXRoIG5ldyBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHNldEZpbGVWZXJzaW9uRGF0YShudWxsKVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgICAgZmlsZVZlcnNpb25EYXRhICYmXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9nKCl9PmxvZzwvYnV0dG9uPlxuICAgICAgICAgICAgPGgzPntwcm9wcy5maWxlVmVyc2lvbi5maWxlVmVyc2lvbk5hbWV9PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5BcnRpc3QgbmFtZTo8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57cHJvcHMuZmlsZVZlcnNpb24uYXJ0aXN0TmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlNvbmcgbmFtZTo8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57cHJvcHMuZmlsZVZlcnNpb24uc29uZ05hbWV9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5kYXRlQWRkZWQ6PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+e0RhdGUocHJvcHMuZmlsZVZlcnNpb24uZGF0ZUFkZGVkKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlJldmlzaW9uIG5vdGU6PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+e3Byb3BzLmZpbGVWZXJzaW9uLnJldmlzaW9uTm90ZX08L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICB7LyogPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpbGVWZXJzaW9uRGF0YSkubWFwKChmaWxlVmVyc2lvbkZpZWxkLCBmaWxldmVyc2lvbkZpZWxkSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2ZpbGV2ZXJzaW9uRmllbGRJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+e2ZpbGVWZXJzaW9uRmllbGR9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2ZpbGVWZXJzaW9uRGF0YVtmaWxlVmVyc2lvbkZpZWxkXX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+ICovfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZpbGVWZXJzaW9uKCl9PmRlbGV0ZSBmaWxlIHZlcnNpb248L2J1dHRvbj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29sbGVjdGlvbiIsImFkZERvYyIsImRvYyIsImdldERvYyIsInNldERvYyIsInVwZGF0ZURvYyIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwic3RvcmFnZSIsImdldFN0b3JhZ2UiLCJyZWYiLCJnZXREb3dubG9hZFVSTCIsIkZpbGVWZXJzaW9uIiwicHJvcHMiLCJmaWxlVmVyc2lvbiIsImZpbGVWZXJzaW9uRGF0YSIsInNldEZpbGVWZXJzaW9uRGF0YSIsInNldERvd25sb2FkVXJsIiwiZmlsZVZlcnNpb25SZWYiLCJwYXRoUmVmZXJuZWNlIiwibG9nIiwiY29uc29sZSIsImRlbGV0ZUZpbGVWZXJzaW9uIiwidGVtcEZpbGVWZXJzaW9uc0FycmF5IiwidGVtcEFydGlzdFNvbmdzQXJyYXkiLCJkb2NSZWYiLCJkb2NTbmFwIiwiYXJ0aXN0TmFtZSIsImV4aXN0cyIsImRhdGEiLCJzb25ncyIsInNvbmdJbmRleCIsImZpbGVWZXJzaW9ucyIsInNwbGljZSIsImZpbGVWZXJzaW9uSW5kZXgiLCJtYWluIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiZmlsZVZlcnNpb25OYW1lIiwidWwiLCJsaSIsInN0cm9uZyIsInNvbmdOYW1lIiwiRGF0ZSIsImRhdGVBZGRlZCIsInJldmlzaW9uTm90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/FileVersion.js\n"));

/***/ })

});