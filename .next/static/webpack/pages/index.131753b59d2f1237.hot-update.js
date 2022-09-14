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

/***/ "./pages/Components/Song.js":
/*!**********************************!*\
  !*** ./pages/Components/Song.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Artist.module.scss */ \"./styles/Artist.module.scss\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar revisionTypingTimeout2;\nfunction Song(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isTyping = ref[0], setIsTyping = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), textAreaIsActive = ref1[0], setTextAreaIsActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), fileVersionIndexSelected = ref2[0], setFileVersionIndexSelected = ref2[1];\n    var handleTyping = function(eventValue, songIndex, fileVersionIndex) {\n        setIsTyping(true);\n        var artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state\n        ;\n        artistDataClone.songs[songIndex].fileVersions[fileVersionIndex].revisionNote = eventValue;\n        props.setArtistData(artistDataClone);\n        var docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, \"artists\", props.artistData.metadata.artistName); // get reference to doc\n        // console.log(artistDataClone)\n        clearTimeout(revisionTypingTimeout2) // clear timer\n        ;\n        revisionTypingTimeout2 = setTimeout(function() {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, artistDataClone);\n            setIsTyping(false);\n        }, 500);\n    };\n    var selectTextArea = function(fileVersionIndex) {\n        setTextAreaIsActive(true);\n        setFileVersionIndexSelected(fileVersionIndex);\n    };\n    var getShareableLink = function() {\n        navigator.clipboard.writeText(\"http://localhost:3000/\" + props.artistData.metadata.artistName + \"/\" + props.songData.songMetadata.songName);\n    };\n    // console.log(props.artistData)\n    return props.songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().song),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            open: props.songIndex == 0 && true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    children: props.songData.songMetadata.songName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"http://localhost:3000/\" + props.artistData.metadata.artistName + \"/\" + props.songData.songMetadata.songName,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: {\n                            color: \"blue\"\n                        },\n                        children: \"go to shareable version\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shareButton),\n                    onClick: function() {\n                        return getShareableLink();\n                    },\n                    children: [\n                        \"copy share link\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            height: \"20\",\n                            width: \"20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 73,\n                                columnNumber: 95\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 73,\n                            columnNumber: 32\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"song name: \",\n                                props.songData.songMetadata.songName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"paid for: \",\n                                props.songData.songMetadata.paidFor ? \"yes\" : \"no\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"backup location: \",\n                                props.songData.songMetadata.backupLocation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this),\n                        props.songData.fileVersions.map(function(x, fileVersionIndex) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                className: \"\".concat(fileVersionIndex > 0 && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().oldFileVersion)),\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                open: fileVersionIndex == 0 && true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        children: x.fileVersionName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"file version name: \",\n                                                    x.fileVersionName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"date added: \",\n                                                    Date(x.dateAdded)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Job type: \",\n                                                    x.jobType\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 37\n                                            }, _this),\n                                            fileVersionIndex == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                defaultValue: x.revisionNote,\n                                                onFocus: function() {\n                                                    return selectTextArea(fileVersionIndex);\n                                                },\n                                                className: \"\".concat((_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().revisionTextArea), \" \").concat(isTyping && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().revisionTextAreaIsTyping)),\n                                                onChange: function(e) {\n                                                    return handleTyping(e.target.value, props.songIndex, fileVersionIndex);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 41\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Revision note: \",\n                                                    x.revisionNote\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, fileVersionIndex, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    ]\n                }, props.songIndex, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Song, \"KPUREI2fY91eDUvyO5xGbJTza84=\");\n_c = Song;\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uzs7Ozt3QkF5Q3BCOzs7Ozs7Z0JBQ0M7Ozs7O1lBQ1AsQ0FDUjtDQUNGO0dBM0d1QlYsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvU29uZy5qcz9lOThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xuaW1wb3J0IGFydGlzdFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQXJ0aXN0Lm1vZHVsZS5zY3NzJ1xuXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvYywgZ2V0RG9jcywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxubGV0IHJldmlzaW9uVHlwaW5nVGltZW91dDJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZyhwcm9wcykge1xuXG4gICAgY29uc3QgW2lzVHlwaW5nLCBzZXRJc1R5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdGV4dEFyZWFJc0FjdGl2ZSwgc2V0VGV4dEFyZWFJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZmlsZVZlcnNpb25JbmRleFNlbGVjdGVkLCBzZXRGaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWRdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50VmFsdWUsIHNvbmdJbmRleCwgZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICBzZXRJc1R5cGluZyh0cnVlKVxuXG4gICAgICAgIGNvbnN0IGFydGlzdERhdGFDbG9uZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvcHMuYXJ0aXN0RGF0YSkpIC8vIGNsb25lIHN0YXRlXG4gICAgICAgIGFydGlzdERhdGFDbG9uZS5zb25nc1tzb25nSW5kZXhdLmZpbGVWZXJzaW9uc1tmaWxlVmVyc2lvbkluZGV4XS5yZXZpc2lvbk5vdGUgPSBldmVudFZhbHVlXG4gICAgICAgIHByb3BzLnNldEFydGlzdERhdGEoYXJ0aXN0RGF0YUNsb25lKVxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsICdhcnRpc3RzJywgcHJvcHMuYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lKTsgLy8gZ2V0IHJlZmVyZW5jZSB0byBkb2NcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnRpc3REYXRhQ2xvbmUpXG5cbiAgICAgICAgXG4gICAgICAgIGNsZWFyVGltZW91dChyZXZpc2lvblR5cGluZ1RpbWVvdXQyKSAvLyBjbGVhciB0aW1lclxuICAgICAgICByZXZpc2lvblR5cGluZ1RpbWVvdXQyID0gc2V0VGltZW91dCgoKSA9PiB7IC8vIHVzZSB0aW1lclxuICAgICAgICAgICAgdXBkYXRlRG9jKGRvY1JlZiwgYXJ0aXN0RGF0YUNsb25lKVxuICAgICAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpXG4gICAgICAgIH0sIDUwMClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RUZXh0QXJlYSA9IChmaWxlVmVyc2lvbkluZGV4KSA9PiB7XG4gICAgICAgIHNldFRleHRBcmVhSXNBY3RpdmUodHJ1ZSlcbiAgICAgICAgc2V0RmlsZVZlcnNpb25JbmRleFNlbGVjdGVkKGZpbGVWZXJzaW9uSW5kZXgpXG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGFyZWFibGVMaW5rID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycgKyBwcm9wcy5hcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWUgKyAnLycgKyBwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWUpXG4gICAgICAgIFxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5hcnRpc3REYXRhKVxuXG4gIHJldHVybiAoXG4gICAgICBcbiAgICAgICAgICBwcm9wcy5zb25nRGF0YSAmJlxuICAgICAgXG4gICAgPG1haW4gY2xhc3NOYW1lPXthcnRpc3RTdHlsZXMuc29uZ30+XG4gICAgICAgIHsvKiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfSAqL31cbiAgICAgICAgey8qIDx1bCBrZXk9IHtwcm9wcy5zb25nSW5kZXh9IG9uRm9jdXM9eygpID0+IHNldEJnQ29sKCdncmVlbicpfSBvbkJsdXI9eygpID0+IHNldEJnQ29sKCdibGFjaycpfT4gKi99XG4gICAgICAgIHsvKiA8TGluayBocmVmPXsnaHR0cDovL2xvY2FsaG9zdDozMDAwLycgKyBwcm9wcy5hcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWV9PlxuICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319PiBzaG93IGFsbCA8L2E+XG4gICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgIDxkZXRhaWxzXG4gICAgICAgICAgICBvcGVuPXtwcm9wcy5zb25nSW5kZXggPT0gMCAmJiB0cnVlfVxuICAgICAgICAgICAgXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzdW1tYXJ5XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICA+e3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L3N1bW1hcnk+XG4gICAgICAgICAgICA8TGluayBocmVmPXsnaHR0cDovL2xvY2FsaG9zdDozMDAwLycgKyBwcm9wcy5hcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWUgKyAnLycgKyBwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9PlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6ICdibHVlJ319PmdvIHRvIHNoYXJlYWJsZSB2ZXJzaW9uPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXthcnRpc3RTdHlsZXMuc2hhcmVCdXR0b259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0U2hhcmVhYmxlTGluaygpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGNvcHkgc2hhcmUgbGluazxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPjxwYXRoIGQ9XCJNNS4yNSAxNy4xODhxLS41MjEgMC0uODg1LS4zNjVRNCAxNi40NTggNCAxNS45MzhWNS43NzFoMXYxMC4xNjdxMCAuMDgzLjA4My4xNjYuMDg0LjA4NC4xNjcuMDg0aDguMjA4djFabTIuNDE3LTIuNDE3cS0uNTIxIDAtLjg4Ni0uMzY1LS4zNjQtLjM2NC0uMzY0LS44ODVWNC4xNjdxMC0uNTIxLjM2NC0uODg2LjM2NS0uMzY0Ljg4Ni0uMzY0aDcuMzk1cS41NDIgMCAuOTA3LjM2NC4zNjQuMzY1LjM2NC44ODZ2OS4zNTRxMCAuNTIxLS4zNjQuODg1LS4zNjUuMzY1LS45MDcuMzY1Wm0wLTFoNy4zOTVxLjEwNSAwIC4xODgtLjA4My4wODMtLjA4NC4wODMtLjE2N1Y0LjE2N3EwLS4xMDUtLjA4My0uMTc3LS4wODMtLjA3My0uMTg4LS4wNzNINy42NjdxLS4wODQgMC0uMTY3LjA3My0uMDgzLjA3Mi0uMDgzLjE3N3Y5LjM1NHEwIC4wODMuMDgzLjE2Ny4wODMuMDgzLjE2Ny4wODNabS0uMjUgMFYzLjkxN3Y5Ljg1NFpcIi8+PC9zdmc+IFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8dWwga2V5PSB7cHJvcHMuc29uZ0luZGV4fT5cbiAgICAgICAgICAgICAgICA8aDI+c29uZyBuYW1lOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPGxpPnBhaWQgZm9yOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnBhaWRGb3IgPyAneWVzJyA6ICdubyd9PC9saT5cbiAgICAgICAgICAgICAgICB7LyogPGxpPmRhdGUgcmF3IGZpbGVzIHJlY2VpdmVkOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVSYXdGaWxlc1JlY2VpdmVkfTwvbGk+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8bGk+ZGF0ZSByZWxlYXNlZDoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlUmVsZWFzZWR9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgPGxpPmJhY2t1cCBsb2NhdGlvbjoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5iYWNrdXBMb2NhdGlvbn08L2xpPlxuICAgICAgICAgICAgICAgIHsvKiA8bGk+ZGF0ZSBvZiBtb3N0IHJlY2VudCBlZGl0OiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVPZk1vc3RSZWNlbnRFZGl0fTwvbGk+ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc29uZ0RhdGEuZmlsZVZlcnNpb25zLm1hcCgoeCwgZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGV0YWlscyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmaWxlVmVyc2lvbkluZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmaWxlVmVyc2lvbkluZGV4ID4gMCAmJiBhcnRpc3RTdHlsZXMub2xkRmlsZVZlcnNpb259YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e2ZpbGVWZXJzaW9uSW5kZXggPT0gMCAmJiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e3guZmlsZVZlcnNpb25OYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5maWxlIHZlcnNpb24gbmFtZToge3guZmlsZVZlcnNpb25OYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ZGF0ZSBhZGRlZDoge0RhdGUoeC5kYXRlQWRkZWQpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Sm9iIHR5cGU6IHt4LmpvYlR5cGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+ZmlsZSB2ZXJzaW9uIGluZGV4IHtmaWxlVmVyc2lvbkluZGV4fTwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8vIE9OTFkgU0hPVyBURVhUIEFSRUEgRk9SIE1PU1QgUkVDRU5UIEZJTEUgVkVSU0lPTiBbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlVmVyc2lvbkluZGV4ID09IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt4LnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2VsZWN0VGV4dEFyZWEoZmlsZVZlcnNpb25JbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YXJ0aXN0U3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9ICR7aXNUeXBpbmcgJiYgYXJ0aXN0U3R5bGVzLnJldmlzaW9uVGV4dEFyZWFJc1R5cGluZ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVR5cGluZyhlLnRhcmdldC52YWx1ZSwgcHJvcHMuc29uZ0luZGV4LCBmaWxlVmVyc2lvbkluZGV4KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJldmlzaW9uIG5vdGU6IHt4LnJldmlzaW9uTm90ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGV4dGFyZWFBdXRvc2l6ZSIsImFydGlzdFN0eWxlcyIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInVwZGF0ZURvYyIsIkxpbmsiLCJyZXZpc2lvblR5cGluZ1RpbWVvdXQyIiwiU29uZyIsInByb3BzIiwiaXNUeXBpbmciLCJzZXRJc1R5cGluZyIsInRleHRBcmVhSXNBY3RpdmUiLCJzZXRUZXh0QXJlYUlzQWN0aXZlIiwiZmlsZVZlcnNpb25JbmRleFNlbGVjdGVkIiwic2V0RmlsZVZlcnNpb25JbmRleFNlbGVjdGVkIiwiaGFuZGxlVHlwaW5nIiwiZXZlbnRWYWx1ZSIsInNvbmdJbmRleCIsImZpbGVWZXJzaW9uSW5kZXgiLCJhcnRpc3REYXRhQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhcnRpc3REYXRhIiwic29uZ3MiLCJmaWxlVmVyc2lvbnMiLCJyZXZpc2lvbk5vdGUiLCJzZXRBcnRpc3REYXRhIiwiZG9jUmVmIiwibWV0YWRhdGEiLCJhcnRpc3ROYW1lIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNlbGVjdFRleHRBcmVhIiwiZ2V0U2hhcmVhYmxlTGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNvbmdEYXRhIiwic29uZ01ldGFkYXRhIiwic29uZ05hbWUiLCJtYWluIiwiY2xhc3NOYW1lIiwic29uZyIsImRldGFpbHMiLCJvcGVuIiwic3VtbWFyeSIsInN0eWxlIiwiY3Vyc29yIiwiaHJlZiIsImEiLCJjb2xvciIsImJ1dHRvbiIsInNoYXJlQnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYXRoIiwiZCIsInVsIiwiaDIiLCJsaSIsInBhaWRGb3IiLCJiYWNrdXBMb2NhdGlvbiIsIm1hcCIsIngiLCJvbGRGaWxlVmVyc2lvbiIsImZpbGVWZXJzaW9uTmFtZSIsIkRhdGUiLCJkYXRlQWRkZWQiLCJqb2JUeXBlIiwiZGVmYXVsdFZhbHVlIiwib25Gb2N1cyIsInJldmlzaW9uVGV4dEFyZWEiLCJyZXZpc2lvblRleHRBcmVhSXNUeXBpbmciLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/Song.js\n"));

/***/ })

});