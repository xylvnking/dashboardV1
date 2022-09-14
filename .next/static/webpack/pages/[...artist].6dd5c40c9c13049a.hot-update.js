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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Artist.module.scss */ \"./styles/Artist.module.scss\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar revisionTypingTimeout2;\nfunction Song(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isTyping = ref[0], setIsTyping = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), textAreaIsActive = ref1[0], setTextAreaIsActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), fileVersionIndexSelected = ref2[0], setFileVersionIndexSelected = ref2[1];\n    var handleTyping = function(eventValue, songIndex, fileVersionIndex) {\n        setIsTyping(true);\n        var artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state\n        ;\n        artistDataClone.songs[songIndex].fileVersions[fileVersionIndex].revisionNote = eventValue;\n        props.setArtistData(artistDataClone);\n        var docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, \"artists\", props.artistData.metadata.artistName); // get reference to doc\n        // console.log(artistDataClone)\n        clearTimeout(revisionTypingTimeout2) // clear timer\n        ;\n        revisionTypingTimeout2 = setTimeout(function() {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, artistDataClone);\n            setIsTyping(false);\n        }, 500);\n    };\n    var selectTextArea = function(fileVersionIndex) {\n        setTextAreaIsActive(true);\n        setFileVersionIndexSelected(fileVersionIndex);\n    };\n    var getShareableLink = function() {\n        navigator.clipboard.writeText(\"http://localhost:3000/\" + props.artistData.metadata.artistName + \"/\" + props.songData.songMetadata.songName);\n    };\n    // console.log(props.artistData)\n    return props.songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().song),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            open: props.songIndex == 0 && true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    children: props.songData.songMetadata.songName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"http://localhost:3000/\" + props.artistData.metadata.artistName + \"/\" + props.songData.songMetadata.songName,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: {\n                            color: \"blue\"\n                        },\n                        children: \"go to shareable version\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shareButton),\n                    onClick: function() {\n                        return getShareableLink();\n                    },\n                    children: [\n                        \"copy share link\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            height: \"20\",\n                            width: \"20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 73,\n                                columnNumber: 95\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 73,\n                            columnNumber: 32\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"song name: \",\n                                props.songData.songMetadata.songName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"paid for: \",\n                                props.songData.songMetadata.paidFor ? \"yes\" : \"no\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date released: \",\n                                Date(props.songData.songMetadata.dateUploaded)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"backup location: \",\n                                props.songData.songMetadata.backupLocation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this),\n                        props.songData.fileVersions.map(function(x, fileVersionIndex) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                className: \"\".concat(fileVersionIndex > 0 && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().oldFileVersion)),\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                open: fileVersionIndex == 0 && true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        children: x.fileVersionName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"file version name: \",\n                                                    x.fileVersionName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"date added: \",\n                                                    Date(x.dateAdded)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Job type: \",\n                                                    x.jobType\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 37\n                                            }, _this),\n                                            fileVersionIndex == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                defaultValue: x.revisionNote,\n                                                onFocus: function() {\n                                                    return selectTextArea(fileVersionIndex);\n                                                },\n                                                className: \"\".concat((_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().revisionTextArea), \" \").concat(isTyping && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().revisionTextAreaIsTyping)),\n                                                onChange: function(e) {\n                                                    return handleTyping(e.target.value, props.songIndex, fileVersionIndex);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 41\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Revision note: \",\n                                                    x.revisionNote\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, fileVersionIndex, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    ]\n                }, props.songIndex, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Song, \"KPUREI2fY91eDUvyO5xGbJTza84=\");\n_c = Song;\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDLENBQUMzQyxZQUFZOzs7Ozs7cURBQU07Ozs7Ozs2Q0FFM0M7OytCQXhCQVIsZ0JBQWdCOzs7O3FDQXlCZixDQUNiO3lCQUNKLENBQUM7O21CQXRDQVYsS0FBSyxDQUFDUyxTQUFTOzs7O3dCQXlDcEI7Ozs7OztnQkFDQzs7Ozs7WUFDUCxDQUNSO0NBQ0Y7R0EzR3VCVixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Tb25nLmpzP2U5OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XG5pbXBvcnQgYXJ0aXN0U3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BcnRpc3QubW9kdWxlLnNjc3MnXG5cbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBkb2MsIG9uU25hcHNob3QsIGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jLCBnZXREb2NzLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5sZXQgcmV2aXNpb25UeXBpbmdUaW1lb3V0MlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb25nKHByb3BzKSB7XG5cbiAgICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt0ZXh0QXJlYUlzQWN0aXZlLCBzZXRUZXh0QXJlYUlzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWQsIHNldEZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVUeXBpbmcgPSAoZXZlbnRWYWx1ZSwgc29uZ0luZGV4LCBmaWxlVmVyc2lvbkluZGV4KSA9PiB7XG4gICAgICAgIHNldElzVHlwaW5nKHRydWUpXG5cbiAgICAgICAgY29uc3QgYXJ0aXN0RGF0YUNsb25lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9wcy5hcnRpc3REYXRhKSkgLy8gY2xvbmUgc3RhdGVcbiAgICAgICAgYXJ0aXN0RGF0YUNsb25lLnNvbmdzW3NvbmdJbmRleF0uZmlsZVZlcnNpb25zW2ZpbGVWZXJzaW9uSW5kZXhdLnJldmlzaW9uTm90ZSA9IGV2ZW50VmFsdWVcbiAgICAgICAgcHJvcHMuc2V0QXJ0aXN0RGF0YShhcnRpc3REYXRhQ2xvbmUpXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgJ2FydGlzdHMnLCBwcm9wcy5hcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWUpOyAvLyBnZXQgcmVmZXJlbmNlIHRvIGRvY1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFydGlzdERhdGFDbG9uZSlcblxuICAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJldmlzaW9uVHlwaW5nVGltZW91dDIpIC8vIGNsZWFyIHRpbWVyXG4gICAgICAgIHJldmlzaW9uVHlwaW5nVGltZW91dDIgPSBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdXNlIHRpbWVyXG4gICAgICAgICAgICB1cGRhdGVEb2MoZG9jUmVmLCBhcnRpc3REYXRhQ2xvbmUpXG4gICAgICAgICAgICBzZXRJc1R5cGluZyhmYWxzZSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdFRleHRBcmVhID0gKGZpbGVWZXJzaW9uSW5kZXgpID0+IHtcbiAgICAgICAgc2V0VGV4dEFyZWFJc0FjdGl2ZSh0cnVlKVxuICAgICAgICBzZXRGaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWQoZmlsZVZlcnNpb25JbmRleClcblxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoYXJlYWJsZUxpbmsgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyArIHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZSArICcvJyArIHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZSlcbiAgICAgICAgXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmFydGlzdERhdGEpXG5cbiAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgICAgIHByb3BzLnNvbmdEYXRhICYmXG4gICAgICBcbiAgICA8bWFpbiBjbGFzc05hbWU9e2FydGlzdFN0eWxlcy5zb25nfT5cbiAgICAgICAgey8qIHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9ICovfVxuICAgICAgICB7LyogPHVsIGtleT0ge3Byb3BzLnNvbmdJbmRleH0gb25Gb2N1cz17KCkgPT4gc2V0QmdDb2woJ2dyZWVuJyl9IG9uQmx1cj17KCkgPT4gc2V0QmdDb2woJ2JsYWNrJyl9PiAqL31cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9eydodHRwOi8vbG9jYWxob3N0OjMwMDAvJyArIHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZX0+XG4gICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+IHNob3cgYWxsIDwvYT5cbiAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgPGRldGFpbHNcbiAgICAgICAgICAgIG9wZW49e3Byb3BzLnNvbmdJbmRleCA9PSAwICYmIHRydWV9XG4gICAgICAgICAgICBcbiAgICAgICAgPlxuICAgICAgICAgICAgPHN1bW1hcnlcbiAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgID57cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eydodHRwOi8vbG9jYWxob3N0OjMwMDAvJyArIHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZSArICcvJyArIHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX0+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjogJ2JsdWUnfX0+Z28gdG8gc2hhcmVhYmxlIHZlcnNpb248L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FydGlzdFN0eWxlcy5zaGFyZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRTaGFyZWFibGVMaW5rKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgY29weSBzaGFyZSBsaW5rPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCI+PHBhdGggZD1cIk01LjI1IDE3LjE4OHEtLjUyMSAwLS44ODUtLjM2NVE0IDE2LjQ1OCA0IDE1LjkzOFY1Ljc3MWgxdjEwLjE2N3EwIC4wODMuMDgzLjE2Ni4wODQuMDg0LjE2Ny4wODRoOC4yMDh2MVptMi40MTctMi40MTdxLS41MjEgMC0uODg2LS4zNjUtLjM2NC0uMzY0LS4zNjQtLjg4NVY0LjE2N3EwLS41MjEuMzY0LS44ODYuMzY1LS4zNjQuODg2LS4zNjRoNy4zOTVxLjU0MiAwIC45MDcuMzY0LjM2NC4zNjUuMzY0Ljg4NnY5LjM1NHEwIC41MjEtLjM2NC44ODUtLjM2NS4zNjUtLjkwNy4zNjVabTAtMWg3LjM5NXEuMTA1IDAgLjE4OC0uMDgzLjA4My0uMDg0LjA4My0uMTY3VjQuMTY3cTAtLjEwNS0uMDgzLS4xNzctLjA4My0uMDczLS4xODgtLjA3M0g3LjY2N3EtLjA4NCAwLS4xNjcuMDczLS4wODMuMDcyLS4wODMuMTc3djkuMzU0cTAgLjA4My4wODMuMTY3LjA4My4wODMuMTY3LjA4M1ptLS4yNSAwVjMuOTE3djkuODU0WlwiLz48L3N2Zz4gXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bCBrZXk9IHtwcm9wcy5zb25nSW5kZXh9PlxuICAgICAgICAgICAgICAgIDxoMj5zb25nIG5hbWU6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8bGk+cGFpZCBmb3I6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEucGFpZEZvciA/ICd5ZXMnIDogJ25vJ308L2xpPlxuICAgICAgICAgICAgICAgIHsvKiA8bGk+ZGF0ZSByYXcgZmlsZXMgcmVjZWl2ZWQ6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuZGF0ZVJhd0ZpbGVzUmVjZWl2ZWR9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgPGxpPmRhdGUgcmVsZWFzZWQ6IHtEYXRlKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlVXBsb2FkZWQpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPmJhY2t1cCBsb2NhdGlvbjoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5iYWNrdXBMb2NhdGlvbn08L2xpPlxuICAgICAgICAgICAgICAgIHsvKiA8bGk+ZGF0ZSBvZiBtb3N0IHJlY2VudCBlZGl0OiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVPZk1vc3RSZWNlbnRFZGl0fTwvbGk+ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc29uZ0RhdGEuZmlsZVZlcnNpb25zLm1hcCgoeCwgZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGV0YWlscyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmaWxlVmVyc2lvbkluZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmaWxlVmVyc2lvbkluZGV4ID4gMCAmJiBhcnRpc3RTdHlsZXMub2xkRmlsZVZlcnNpb259YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e2ZpbGVWZXJzaW9uSW5kZXggPT0gMCAmJiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e3guZmlsZVZlcnNpb25OYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5maWxlIHZlcnNpb24gbmFtZToge3guZmlsZVZlcnNpb25OYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ZGF0ZSBhZGRlZDoge0RhdGUoeC5kYXRlQWRkZWQpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Sm9iIHR5cGU6IHt4LmpvYlR5cGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+ZmlsZSB2ZXJzaW9uIGluZGV4IHtmaWxlVmVyc2lvbkluZGV4fTwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8vIE9OTFkgU0hPVyBURVhUIEFSRUEgRk9SIE1PU1QgUkVDRU5UIEZJTEUgVkVSU0lPTiBbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlVmVyc2lvbkluZGV4ID09IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt4LnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2VsZWN0VGV4dEFyZWEoZmlsZVZlcnNpb25JbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YXJ0aXN0U3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9ICR7aXNUeXBpbmcgJiYgYXJ0aXN0U3R5bGVzLnJldmlzaW9uVGV4dEFyZWFJc1R5cGluZ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVR5cGluZyhlLnRhcmdldC52YWx1ZSwgcHJvcHMuc29uZ0luZGV4LCBmaWxlVmVyc2lvbkluZGV4KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJldmlzaW9uIG5vdGU6IHt4LnJldmlzaW9uTm90ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGV4dGFyZWFBdXRvc2l6ZSIsImFydGlzdFN0eWxlcyIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInVwZGF0ZURvYyIsIkxpbmsiLCJyZXZpc2lvblR5cGluZ1RpbWVvdXQyIiwiU29uZyIsInByb3BzIiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsInRleHRBcmVhSXNBY3RpdmUiLCJzZXRUZXh0QXJlYUlzQWN0aXZlIiwiZmlsZVZlcnNpb25JbmRleFNlbGVjdGVkIiwic2V0RmlsZVZlcnNpb25JbmRleFNlbGVjdGVkIiwiaGFuZGxlVHlwaW5nIiwiZXZlbnRWYWx1ZSIsInNvbmdJbmRleCIsImZpbGVWZXJzaW9uSW5kZXgiLCJhcnRpc3REYXRhQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhcnRpc3REYXRhIiwic29uZ3MiLCJmaWxlVmVyc2lvbnMiLCJyZXZpc2lvbk5vdGUiLCJzZXRBcnRpc3REYXRhIiwiZG9jUmVmIiwibWV0YWRhdGEiLCJhcnRpc3ROYW1lIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNlbGVjdFRleHRBcmVhIiwiZ2V0U2hhcmVhYmxlTGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNvbmdEYXRhIiwic29uZ01ldGFkYXRhIiwic29uZ05hbWUiLCJtYWluIiwiY2xhc3NOYW1lIiwic29uZyIsImRldGFpbHMiLCJvcGVuIiwic3VtbWFyeSIsInN0eWxlIiwiY3Vyc29yIiwiaHJlZiIsImEiLCJjb2xvciIsImJ1dHRvbiIsInNoYXJlQnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXRoIiwiZCIsInVsIiwiaDIiLCJsaSIsInBhaWRGb3IiLCJEYXRlIiwiZGF0ZVVwbG9hZGVkIiwiYmFja3VwTG9jYXRpb24iLCJtYXAiLCJ4Iiwib2xkRmlsZVZlcnNpb24iLCJmaWxlVmVyc2lvbk5hbWUiLCJkYXRlQWRkZWQiLCJqb2JUeXBlIiwiZGVmYXVsdFZhbHVlIiwib25Gb2N1cyIsInJldmlzaW9uVGV4dEFyZWEiLCJyZXZpc2lvblRleHRBcmVhSXNUeXBpbmciLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/Song.js\n"));

/***/ })

});