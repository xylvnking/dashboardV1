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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Artist.module.scss */ \"./styles/Artist.module.scss\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar revisionTypingTimeout2;\nfunction Song(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isTyping = ref[0], setIsTyping = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), textAreaIsActive = ref1[0], setTextAreaIsActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), fileVersionIndexSelected = ref2[0], setFileVersionIndexSelected = ref2[1];\n    var handleTyping = function(eventValue, songIndex, fileVersionIndex) {\n        setIsTyping(true);\n        var artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state\n        ;\n        artistDataClone.songs[songIndex].fileVersions[fileVersionIndex].revisionNote = eventValue;\n        props.setArtistData(artistDataClone);\n        var docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, \"artists\", props.artistData.metadata.artistName); // get reference to doc\n        // console.log(artistDataClone)\n        clearTimeout(revisionTypingTimeout2) // clear timer\n        ;\n        revisionTypingTimeout2 = setTimeout(function() {\n            // updateDoc(docRef, artistDataClone) // update firebase\n            // props.saveRevisionNote(eventValue, songIndex, fileVersionIndex)\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, artistDataClone);\n            setIsTyping(false);\n        }, 500);\n    };\n    var selectTextArea = function(fileVersionIndex) {\n        setTextAreaIsActive(true);\n        setFileVersionIndexSelected(fileVersionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            open: props.songIndex == 0 && true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: props.songData.songMetadata.songName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"song name: \",\n                                props.songData.songMetadata.songName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"paid for: \",\n                                props.songData.songMetadata.paidFor ? \"yes\" : \"no\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date raw files received: \",\n                                props.songData.songMetadata.dateRawFilesReceived\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date released: \",\n                                props.songData.songMetadata.dateReleased\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"backup location: \",\n                                props.songData.songMetadata.backupLocation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date of most recent edit: \",\n                                props.songData.songMetadata.dateOfMostRecentEdit\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, this),\n                        props.songData.fileVersions.map(function(x, fileVersionIndex) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                className: \"\".concat(fileVersionIndex > 0 && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_4___default().oldFileVersion)),\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                open: fileVersionIndex == 0 && true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        children: x.fileVersionName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"file version name: \",\n                                                    x.fileVersionName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"date added: \",\n                                                    x.dateAdded\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Job type: \",\n                                                    x.jobType\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 37\n                                            }, _this),\n                                            fileVersionIndex == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                defaultValue: x.revisionNote,\n                                                onFocus: function() {\n                                                    return selectTextArea(fileVersionIndex);\n                                                },\n                                                className: \"\".concat((_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_4___default().revisionTextArea), \" \").concat(isTyping && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_4___default().revisionTextAreaIsTyping)),\n                                                onChange: function(e) {\n                                                    return handleTyping(e.target.value, props.songIndex, fileVersionIndex);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 41\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Revision note: \",\n                                                    x.revisionNote\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, fileVersionIndex, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 61,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    ]\n                }, props.songIndex, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n};\n_s(Song, \"KPUREI2fY91eDUvyO5xGbJTza84=\");\n_c = Song;\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBRSxFQUFDLENBQW1DMUMsTUFBaUQsQ0FBbEZmLG9GQUE2QixFQUFDLEdBQUMsQ0FBb0QsUUFBbERlLFFBQVEsSUFBSWYsNEZBQXFDLENBQUU7Z0RBQ2xHb0UsUUFBUSxFQUFFLFNBQUNDLENBQUM7MkRBQUtoRCxZQUFZLENBQUNnRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFekQsS0FBSyxDQUFDUyxTQUFTLEVBQUVDLGdCQUFnQixDQUFDO2lEQUFBOzs7OztxREFDbEYsaUJBRUYsOERBQUN5QixJQUFFOztvREFBQyxpQkFBZTtvREFBQ08sQ0FBQyxDQUFDeEIsWUFBWTs7Ozs7O3FEQUFNOzs7Ozs7NkNBRTNDOzsrQkF4QkFSLGdCQUFnQjs7OztxQ0F5QmYsQ0FDYjt5QkFDSixDQUFDOzttQkF0Q0FWLEtBQUssQ0FBQ1MsU0FBUzs7Ozt3QkF5Q3BCOzs7Ozs7Z0JBQ0M7Ozs7O1lBQ1AsQ0FDUjtDQUNGO0dBdEZ1QlYsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvU29uZy5qcz9lOThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xuaW1wb3J0IGFydGlzdFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQXJ0aXN0Lm1vZHVsZS5zY3NzJ1xuXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvYywgZ2V0RG9jcywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5sZXQgcmV2aXNpb25UeXBpbmdUaW1lb3V0MlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb25nKHByb3BzKSB7XG5cbiAgICBjb25zdCBbaXNUeXBpbmcsIHNldElzVHlwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt0ZXh0QXJlYUlzQWN0aXZlLCBzZXRUZXh0QXJlYUlzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWQsIHNldEZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVUeXBpbmcgPSAoZXZlbnRWYWx1ZSwgc29uZ0luZGV4LCBmaWxlVmVyc2lvbkluZGV4KSA9PiB7XG4gICAgICAgIHNldElzVHlwaW5nKHRydWUpXG5cbiAgICAgICAgY29uc3QgYXJ0aXN0RGF0YUNsb25lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9wcy5hcnRpc3REYXRhKSkgLy8gY2xvbmUgc3RhdGVcbiAgICAgICAgYXJ0aXN0RGF0YUNsb25lLnNvbmdzW3NvbmdJbmRleF0uZmlsZVZlcnNpb25zW2ZpbGVWZXJzaW9uSW5kZXhdLnJldmlzaW9uTm90ZSA9IGV2ZW50VmFsdWVcbiAgICAgICAgcHJvcHMuc2V0QXJ0aXN0RGF0YShhcnRpc3REYXRhQ2xvbmUpXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgJ2FydGlzdHMnLCBwcm9wcy5hcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWUpOyAvLyBnZXQgcmVmZXJlbmNlIHRvIGRvY1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFydGlzdERhdGFDbG9uZSlcblxuICAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJldmlzaW9uVHlwaW5nVGltZW91dDIpIC8vIGNsZWFyIHRpbWVyXG4gICAgICAgIHJldmlzaW9uVHlwaW5nVGltZW91dDIgPSBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdXNlIHRpbWVyXG4gICAgICAgICAgICAvLyB1cGRhdGVEb2MoZG9jUmVmLCBhcnRpc3REYXRhQ2xvbmUpIC8vIHVwZGF0ZSBmaXJlYmFzZVxuICAgICAgICAgICAgLy8gcHJvcHMuc2F2ZVJldmlzaW9uTm90ZShldmVudFZhbHVlLCBzb25nSW5kZXgsIGZpbGVWZXJzaW9uSW5kZXgpXG4gICAgICAgICAgICB1cGRhdGVEb2MoZG9jUmVmLCBhcnRpc3REYXRhQ2xvbmUpXG4gICAgICAgICAgICBzZXRJc1R5cGluZyhmYWxzZSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdFRleHRBcmVhID0gKGZpbGVWZXJzaW9uSW5kZXgpID0+IHtcbiAgICAgICAgc2V0VGV4dEFyZWFJc0FjdGl2ZSh0cnVlKVxuICAgICAgICBzZXRGaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWQoZmlsZVZlcnNpb25JbmRleClcblxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICAgIHsvKiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfSAqL31cbiAgICAgICAgey8qIDx1bCBrZXk9IHtwcm9wcy5zb25nSW5kZXh9IG9uRm9jdXM9eygpID0+IHNldEJnQ29sKCdncmVlbicpfSBvbkJsdXI9eygpID0+IHNldEJnQ29sKCdibGFjaycpfT4gKi99XG4gICAgICAgIDxkZXRhaWxzXG4gICAgICAgICAgICBvcGVuPXtwcm9wcy5zb25nSW5kZXggPT0gMCAmJiB0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8c3VtbWFyeT57cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgIDx1bCBrZXk9IHtwcm9wcy5zb25nSW5kZXh9PlxuICAgICAgICAgICAgICAgIDxoMj5zb25nIG5hbWU6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8bGk+cGFpZCBmb3I6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEucGFpZEZvciA/ICd5ZXMnIDogJ25vJ308L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5kYXRlIHJhdyBmaWxlcyByZWNlaXZlZDoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlUmF3RmlsZXNSZWNlaXZlZH08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5kYXRlIHJlbGVhc2VkOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVSZWxlYXNlZH08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5iYWNrdXAgbG9jYXRpb246IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuYmFja3VwTG9jYXRpb259PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+ZGF0ZSBvZiBtb3N0IHJlY2VudCBlZGl0OiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVPZk1vc3RSZWNlbnRFZGl0fTwvbGk+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zb25nRGF0YS5maWxlVmVyc2lvbnMubWFwKCh4LCBmaWxlVmVyc2lvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZXRhaWxzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGVWZXJzaW9uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ZpbGVWZXJzaW9uSW5kZXggPiAwICYmIGFydGlzdFN0eWxlcy5vbGRGaWxlVmVyc2lvbn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17ZmlsZVZlcnNpb25JbmRleCA9PSAwICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57eC5maWxlVmVyc2lvbk5hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmZpbGUgdmVyc2lvbiBuYW1lOiB7eC5maWxlVmVyc2lvbk5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kYXRlIGFkZGVkOiB7eC5kYXRlQWRkZWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Kb2IgdHlwZToge3guam9iVHlwZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5maWxlIHZlcnNpb24gaW5kZXgge2ZpbGVWZXJzaW9uSW5kZXh9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ly8gT05MWSBTSE9XIFRFWFQgQVJFQSBGT1IgTU9TVCBSRUNFTlQgRklMRSBWRVJTSU9OIFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVWZXJzaW9uSW5kZXggPT0gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3gucmV2aXNpb25Ob3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZWxlY3RUZXh0QXJlYShmaWxlVmVyc2lvbkluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthcnRpc3RTdHlsZXMucmV2aXNpb25UZXh0QXJlYX0gJHtpc1R5cGluZyAmJiBhcnRpc3RTdHlsZXMucmV2aXNpb25UZXh0QXJlYUlzVHlwaW5nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVHlwaW5nKGUudGFyZ2V0LnZhbHVlLCBwcm9wcy5zb25nSW5kZXgsIGZpbGVWZXJzaW9uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmV2aXNpb24gbm90ZToge3gucmV2aXNpb25Ob3RlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXh0YXJlYUF1dG9zaXplIiwiYXJ0aXN0U3R5bGVzIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJkb2MiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwicmV2aXNpb25UeXBpbmdUaW1lb3V0MiIsIlNvbmciLCJwcm9wcyIsImlzVHlwaW5nIiwic2V0SXNUeXBpbmciLCJ0ZXh0QXJlYUlzQWN0aXZlIiwic2V0VGV4dEFyZWFJc0FjdGl2ZSIsImZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZCIsInNldEZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZCIsImhhbmRsZVR5cGluZyIsImV2ZW50VmFsdWUiLCJzb25nSW5kZXgiLCJmaWxlVmVyc2lvbkluZGV4IiwiYXJ0aXN0RGF0YUNsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYXJ0aXN0RGF0YSIsInNvbmdzIiwiZmlsZVZlcnNpb25zIiwicmV2aXNpb25Ob3RlIiwic2V0QXJ0aXN0RGF0YSIsImRvY1JlZiIsIm1ldGFkYXRhIiwiYXJ0aXN0TmFtZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzZWxlY3RUZXh0QXJlYSIsIm1haW4iLCJkZXRhaWxzIiwib3BlbiIsInN1bW1hcnkiLCJzb25nRGF0YSIsInNvbmdNZXRhZGF0YSIsInNvbmdOYW1lIiwidWwiLCJoMiIsImxpIiwicGFpZEZvciIsImRhdGVSYXdGaWxlc1JlY2VpdmVkIiwiZGF0ZVJlbGVhc2VkIiwiYmFja3VwTG9jYXRpb24iLCJkYXRlT2ZNb3N0UmVjZW50RWRpdCIsIm1hcCIsIngiLCJjbGFzc05hbWUiLCJvbGRGaWxlVmVyc2lvbiIsInN0eWxlIiwiY3Vyc29yIiwiZmlsZVZlcnNpb25OYW1lIiwiZGF0ZUFkZGVkIiwiam9iVHlwZSIsImRlZmF1bHRWYWx1ZSIsIm9uRm9jdXMiLCJyZXZpc2lvblRleHRBcmVhIiwicmV2aXNpb25UZXh0QXJlYUlzVHlwaW5nIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Song.js\n"));

/***/ })

});