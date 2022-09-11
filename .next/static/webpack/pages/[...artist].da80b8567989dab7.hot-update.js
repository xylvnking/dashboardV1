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

/***/ "./pages/Components/Song.js":
/*!**********************************!*\
  !*** ./pages/Components/Song.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Artist.module.scss */ \"./styles/Artist.module.scss\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar revisionTypingTimeout2;\nfunction Song(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isTyping = ref[0], setIsTyping = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), textAreaIsActive = ref1[0], setTextAreaIsActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), fileVersionIndexSelected = ref2[0], setFileVersionIndexSelected = ref2[1];\n    var handleTyping = function(eventValue, songIndex, fileVersionIndex) {\n        var artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state\n        ;\n        setIsTyping(true);\n        console.log(artistDataClone);\n        clearTimeout(revisionTypingTimeout2) // clear timer\n        ;\n        revisionTypingTimeout2 = setTimeout(function() {\n            // updateDoc(docRef, artistDataClone) // update firebase\n            // props.saveRevisionNote(eventValue, songIndex, fileVersionIndex)\n            setIsTyping(false);\n        }, 500);\n    };\n    var selectTextArea = function(fileVersionIndex) {\n        setTextAreaIsActive(true);\n        setFileVersionIndexSelected(fileVersionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            open: props.songIndex == 0 && true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: props.songData.songMetadata.songName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"song name: \",\n                                props.songData.songMetadata.songName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"paid for: \",\n                                props.songData.songMetadata.paidFor ? \"yes\" : \"no\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date raw files received: \",\n                                props.songData.songMetadata.dateRawFilesReceived\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date released: \",\n                                props.songData.songMetadata.dateReleased\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"backup location: \",\n                                props.songData.songMetadata.backupLocation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date of most recent edit: \",\n                                props.songData.songMetadata.dateOfMostRecentEdit\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, this),\n                        props.songData.fileVersions.map(function(x, fileVersionIndex) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                className: \"\".concat(fileVersionIndex > 0 && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_2___default().oldFileVersion)),\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        children: x.fileVersionName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"file version name: \",\n                                                    x.fileVersionName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"date added: \",\n                                                    x.dateAdded\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Job type: \",\n                                                    x.jobType\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"file version index \",\n                                                    fileVersionIndex\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 41\n                                            }, _this),\n                                            fileVersionIndex == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                defaultValue: x.revisionNote,\n                                                onFocus: function() {\n                                                    return selectTextArea(fileVersionIndex);\n                                                },\n                                                className: \"\".concat((_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_2___default().revisionTextArea), \" \").concat(isTyping && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_2___default().revisionTextAreaIsTyping)),\n                                                onChange: function(e) {\n                                                    return handleTyping(e.target.value, props.songIndex, fileVersionIndex);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 45\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Revision note: \",\n                                                    x.revisionNote\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 45\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 37\n                                    }, _this)\n                                ]\n                            }, fileVersionIndex, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 54,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    ]\n                }, props.songIndex, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_s(Song, \"KPUREI2fY91eDUvyO5xGbJTza84=\");\n_c = Song;\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzs7Ozs7NkNBRTNDOzsrQkExQkpyQyxnQkFBZ0I7Ozs7cUNBNkJmLENBQ2I7eUJBQ0osQ0FBQzs7bUJBMUNBVixLQUFLLENBQUNTLFNBQVM7Ozs7d0JBNkNwQjs7Ozs7O2dCQUNDOzs7OztZQUNQLENBQ1I7Q0FDRjtHQXRGdUJWLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1NvbmcuanM/ZTk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcbmltcG9ydCBhcnRpc3RTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0FydGlzdC5tb2R1bGUuc2NzcydcblxubGV0IHJldmlzaW9uVHlwaW5nVGltZW91dDJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZyhwcm9wcykge1xuXG4gICAgY29uc3QgW2lzVHlwaW5nLCBzZXRJc1R5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdGV4dEFyZWFJc0FjdGl2ZSwgc2V0VGV4dEFyZWFJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZmlsZVZlcnNpb25JbmRleFNlbGVjdGVkLCBzZXRGaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWRdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50VmFsdWUsIHNvbmdJbmRleCwgZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGFydGlzdERhdGFDbG9uZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvcHMuYXJ0aXN0RGF0YSkpIC8vIGNsb25lIHN0YXRlXG4gICAgICAgIHNldElzVHlwaW5nKHRydWUpXG5cbiAgICAgICAgY29uc29sZS5sb2coYXJ0aXN0RGF0YUNsb25lKVxuXG4gICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQocmV2aXNpb25UeXBpbmdUaW1lb3V0MikgLy8gY2xlYXIgdGltZXJcbiAgICAgICAgcmV2aXNpb25UeXBpbmdUaW1lb3V0MiA9IHNldFRpbWVvdXQoKCkgPT4geyAvLyB1c2UgdGltZXJcbiAgICAgICAgICAgIC8vIHVwZGF0ZURvYyhkb2NSZWYsIGFydGlzdERhdGFDbG9uZSkgLy8gdXBkYXRlIGZpcmViYXNlXG4gICAgICAgICAgICAvLyBwcm9wcy5zYXZlUmV2aXNpb25Ob3RlKGV2ZW50VmFsdWUsIHNvbmdJbmRleCwgZmlsZVZlcnNpb25JbmRleClcbiAgICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0VGV4dEFyZWEgPSAoZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICBzZXRUZXh0QXJlYUlzQWN0aXZlKHRydWUpXG4gICAgICAgIHNldEZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZChmaWxlVmVyc2lvbkluZGV4KVxuXG4gICAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgICAgey8qIHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9ICovfVxuICAgICAgICB7LyogPHVsIGtleT0ge3Byb3BzLnNvbmdJbmRleH0gb25Gb2N1cz17KCkgPT4gc2V0QmdDb2woJ2dyZWVuJyl9IG9uQmx1cj17KCkgPT4gc2V0QmdDb2woJ2JsYWNrJyl9PiAqL31cbiAgICAgICAgPGRldGFpbHNcbiAgICAgICAgICAgIG9wZW49e3Byb3BzLnNvbmdJbmRleCA9PSAwICYmIHRydWV9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzdW1tYXJ5Pntwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgPHVsIGtleT0ge3Byb3BzLnNvbmdJbmRleH0+XG4gICAgICAgICAgICAgICAgPGgyPnNvbmcgbmFtZToge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxsaT5wYWlkIGZvcjoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5wYWlkRm9yID8gJ3llcycgOiAnbm8nfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPmRhdGUgcmF3IGZpbGVzIHJlY2VpdmVkOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVSYXdGaWxlc1JlY2VpdmVkfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPmRhdGUgcmVsZWFzZWQ6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuZGF0ZVJlbGVhc2VkfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPmJhY2t1cCBsb2NhdGlvbjoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5iYWNrdXBMb2NhdGlvbn08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5kYXRlIG9mIG1vc3QgcmVjZW50IGVkaXQ6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuZGF0ZU9mTW9zdFJlY2VudEVkaXR9PC9saT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNvbmdEYXRhLmZpbGVWZXJzaW9ucy5tYXAoKHgsIGZpbGVWZXJzaW9uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRldGFpbHMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZmlsZVZlcnNpb25JbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZmlsZVZlcnNpb25JbmRleCA+IDAgJiYgYXJ0aXN0U3R5bGVzLm9sZEZpbGVWZXJzaW9ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e3guZmlsZVZlcnNpb25OYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2V5PXtmaWxlVmVyc2lvbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5maWxlIHZlcnNpb24gbmFtZToge3guZmlsZVZlcnNpb25OYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmRhdGUgYWRkZWQ6IHt4LmRhdGVBZGRlZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Kb2IgdHlwZToge3guam9iVHlwZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5maWxlIHZlcnNpb24gaW5kZXgge2ZpbGVWZXJzaW9uSW5kZXh9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ly8gT05MWSBTSE9XIFRFWFQgQVJFQSBGT1IgTU9TVCBSRUNFTlQgRklMRSBWRVJTSU9OIFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlVmVyc2lvbkluZGV4ID09IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt4LnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNlbGVjdFRleHRBcmVhKGZpbGVWZXJzaW9uSW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthcnRpc3RTdHlsZXMucmV2aXNpb25UZXh0QXJlYX0gJHtpc1R5cGluZyAmJiBhcnRpc3RTdHlsZXMucmV2aXNpb25UZXh0QXJlYUlzVHlwaW5nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVR5cGluZyhlLnRhcmdldC52YWx1ZSwgcHJvcHMuc29uZ0luZGV4LCBmaWxlVmVyc2lvbkluZGV4KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJldmlzaW9uIG5vdGU6IHt4LnJldmlzaW9uTm90ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXh0YXJlYUF1dG9zaXplIiwiYXJ0aXN0U3R5bGVzIiwicmV2aXNpb25UeXBpbmdUaW1lb3V0MiIsIlNvbmciLCJwcm9wcyIsImlzVHlwaW5nIiwic2V0SXNUeXBpbmciLCJ0ZXh0QXJlYUlzQWN0aXZlIiwic2V0VGV4dEFyZWFJc0FjdGl2ZSIsImZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZCIsInNldEZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZCIsImhhbmRsZVR5cGluZyIsImV2ZW50VmFsdWUiLCJzb25nSW5kZXgiLCJmaWxlVmVyc2lvbkluZGV4IiwiYXJ0aXN0RGF0YUNsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYXJ0aXN0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0VGV4dEFyZWEiLCJtYWluIiwiZGV0YWlscyIsIm9wZW4iLCJzdW1tYXJ5Iiwic29uZ0RhdGEiLCJzb25nTWV0YWRhdGEiLCJzb25nTmFtZSIsInVsIiwiaDIiLCJsaSIsInBhaWRGb3IiLCJkYXRlUmF3RmlsZXNSZWNlaXZlZCIsImRhdGVSZWxlYXNlZCIsImJhY2t1cExvY2F0aW9uIiwiZGF0ZU9mTW9zdFJlY2VudEVkaXQiLCJmaWxlVmVyc2lvbnMiLCJtYXAiLCJ4IiwiY2xhc3NOYW1lIiwib2xkRmlsZVZlcnNpb24iLCJzdHlsZSIsImN1cnNvciIsImZpbGVWZXJzaW9uTmFtZSIsImRhdGVBZGRlZCIsImpvYlR5cGUiLCJkZWZhdWx0VmFsdWUiLCJyZXZpc2lvbk5vdGUiLCJvbkZvY3VzIiwicmV2aXNpb25UZXh0QXJlYSIsInJldmlzaW9uVGV4dEFyZWFJc1R5cGluZyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Song.js\n"));

/***/ })

});