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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Artist.module.scss */ \"./styles/Artist.module.scss\");\n/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar revisionTypingTimeout2;\nfunction Song(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isTyping = ref[0], setIsTyping = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), textAreaIsActive = ref1[0], setTextAreaIsActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), fileVersionIndexSelected = ref2[0], setFileVersionIndexSelected = ref2[1];\n    var handleTyping = function(eventValue, songIndex, fileVersionIndex) {\n        setIsTyping(true);\n        var artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state\n        ;\n        artistDataClone.songs[songIndex].fileVersions[fileVersionIndex].revisionNote = eventValue;\n        props.setArtistData(artistDataClone);\n        var docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, \"artists\", props.artistData.metadata.artistName); // get reference to doc\n        // console.log(artistDataClone)\n        clearTimeout(revisionTypingTimeout2) // clear timer\n        ;\n        revisionTypingTimeout2 = setTimeout(function() {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, artistDataClone);\n            setIsTyping(false);\n        }, 500);\n    };\n    var selectTextArea = function(fileVersionIndex) {\n        setTextAreaIsActive(true);\n        setFileVersionIndexSelected(fileVersionIndex);\n    };\n    var getShareableLink = function() {\n        navigator.clipboard.writeText(\"http://localhost:3000/\" + props.artistData.metadata.artistName + \"/\" + props.songData.songMetadata.songName);\n    };\n    // console.log(props.artistData)\n    return props.songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().song),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            open: props.songIndex == 0 && true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    children: props.songData.songMetadata.songName\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"http://localhost:3000/\" + props.artistData.metadata.artistName + \"/\" + props.songData.songMetadata.songName,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: {\n                            color: \"blue\"\n                        },\n                        children: \"go to shareable version\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shareButton),\n                    onClick: function() {\n                        return getShareableLink();\n                    },\n                    children: [\n                        \"copy share link\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            height: \"20\",\n                            width: \"20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 73,\n                                columnNumber: 95\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 73,\n                            columnNumber: 32\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"song name: \",\n                                props.songData.songMetadata.songName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"paid for: \",\n                                props.songData.songMetadata.paidFor ? \"yes\" : \"no\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"date added: \",\n                                Date(props.songData.songMetadata.dateAdded)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"backup location: \",\n                                props.songData.songMetadata.backupLocation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this),\n                        props.songData.fileVersions.map(function(x, fileVersionIndex) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                className: \"\".concat(fileVersionIndex > 0 && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().oldFileVersion)),\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                open: fileVersionIndex == 0 && true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        children: x.fileVersionName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"file version name: \",\n                                                    x.fileVersionName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"date added: \",\n                                                    Date(x.dateAdded)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Job type: \",\n                                                    x.jobType\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 37\n                                            }, _this),\n                                            fileVersionIndex == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                defaultValue: x.revisionNote,\n                                                onFocus: function() {\n                                                    return selectTextArea(fileVersionIndex);\n                                                },\n                                                className: \"\".concat((_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().revisionTextArea), \" \").concat(isTyping && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_5___default().revisionTextAreaIsTyping)),\n                                                onChange: function(e) {\n                                                    return handleTyping(e.target.value, props.songIndex, fileVersionIndex);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 41\n                                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Revision note: \",\n                                                    x.revisionNote\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, fileVersionIndex, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    ]\n                }, props.songIndex, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Song, \"KPUREI2fY91eDUvyO5xGbJTza84=\");\n_c = Song;\nvar _c;\n$RefreshReg$(_c, \"Song\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdEO0FBQ087QUFDRztBQUVDO0FBQ2dEO0FBRS9FO0FBRzVCLElBQUlpQixzQkFBc0I7QUFFWCxTQUFTQyxJQUFJLENBQUNDLEtBQUssRUFBRTs7O0lBRWhDLElBQWdDbEIsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q21CLFFBQVEsR0FBaUJuQixHQUFlLEdBQWhDLEVBQUVvQixXQUFXLEdBQUlwQixHQUFlLEdBQW5CO0lBQzVCLElBQWdEQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhEcUIsZ0JBQWdCLEdBQXlCckIsSUFBZSxHQUF4QyxFQUFFc0IsbUJBQW1CLEdBQUl0QixJQUFlLEdBQW5CO0lBQzVDLElBQWdFQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBbkV1Qix3QkFBd0IsR0FBaUN2QixJQUFVLEdBQTNDLEVBQUV3QiwyQkFBMkIsR0FBSXhCLElBQVUsR0FBZDtJQUU1RCxJQUFNeUIsWUFBWSxHQUFHLFNBQUNDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBSztRQUM5RFIsV0FBVyxDQUFDLElBQUksQ0FBQztRQUVqQixJQUFNUyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ2QsS0FBSyxDQUFDZSxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWM7UUFBZjtRQUNwRUosZUFBZSxDQUFDSyxLQUFLLENBQUNQLFNBQVMsQ0FBQyxDQUFDUSxZQUFZLENBQUNQLGdCQUFnQixDQUFDLENBQUNRLFlBQVksR0FBR1YsVUFBVTtRQUN6RlIsS0FBSyxDQUFDbUIsYUFBYSxDQUFDUixlQUFlLENBQUM7UUFDcEMsSUFBTVMsTUFBTSxHQUFHL0IsdURBQUcsQ0FBQ0gsZ0RBQUUsRUFBRSxTQUFTLEVBQUVjLEtBQUssQ0FBQ2UsVUFBVSxDQUFDTSxRQUFRLENBQUNDLFVBQVUsQ0FBQyxFQUFFLHVCQUF1QjtRQUVoRywrQkFBK0I7UUFHL0JDLFlBQVksQ0FBQ3pCLHNCQUFzQixDQUFDLENBQUMsY0FBYzs7UUFDbkRBLHNCQUFzQixHQUFHMEIsVUFBVSxDQUFDLFdBQU07WUFDdEM1Qiw2REFBUyxDQUFDd0IsTUFBTSxFQUFFVCxlQUFlLENBQUM7WUFDbENULFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDckIsRUFBRSxHQUFHLENBQUM7S0FDVjtJQUVELElBQU11QixjQUFjLEdBQUcsU0FBQ2YsZ0JBQWdCLEVBQUs7UUFDekNOLG1CQUFtQixDQUFDLElBQUksQ0FBQztRQUN6QkUsMkJBQTJCLENBQUNJLGdCQUFnQixDQUFDO0tBRWhEO0lBRUQsSUFBTWdCLGdCQUFnQixHQUFHLFdBQU07UUFDM0JDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMsd0JBQXdCLEdBQUc3QixLQUFLLENBQUNlLFVBQVUsQ0FBQ00sUUFBUSxDQUFDQyxVQUFVLEdBQUcsR0FBRyxHQUFHdEIsS0FBSyxDQUFDOEIsUUFBUSxDQUFDQyxZQUFZLENBQUNDLFFBQVEsQ0FBQztLQUU5STtJQUNELGdDQUFnQztJQUVsQyxPQUVRaEMsS0FBSyxDQUFDOEIsUUFBUSxrQkFFcEIsOERBQUNHLE1BQUk7UUFBQ0MsU0FBUyxFQUFFakQsd0VBQWlCO2tCQU05Qiw0RUFBQ21ELFNBQU87WUFDSkMsSUFBSSxFQUFFckMsS0FBSyxDQUFDUyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUk7OzhCQUdsQyw4REFBQzZCLFNBQU87b0JBQ0pDLEtBQUssRUFBRTt3QkFBQ0MsTUFBTSxFQUFFLFNBQVM7cUJBQUM7OEJBQzVCeEMsS0FBSyxDQUFDOEIsUUFBUSxDQUFDQyxZQUFZLENBQUNDLFFBQVE7Ozs7O3dCQUFXOzhCQUNqRCw4REFBQ25DLGtEQUFJO29CQUFDNEMsSUFBSSxFQUFFLHdCQUF3QixHQUFHekMsS0FBSyxDQUFDZSxVQUFVLENBQUNNLFFBQVEsQ0FBQ0MsVUFBVSxHQUFHLEdBQUcsR0FBR3RCLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxRQUFROzhCQUNwSCw0RUFBQ1UsR0FBQzt3QkFBQ0gsS0FBSyxFQUFFOzRCQUFDSSxLQUFLLEVBQUUsTUFBTTt5QkFBQztrQ0FBRSx5QkFBdUI7Ozs7OzRCQUFJOzs7Ozt3QkFDbkQ7OEJBQ1AsOERBQUNDLFFBQU07b0JBQ1BWLFNBQVMsRUFBRWpELCtFQUF3QjtvQkFDL0I2RCxPQUFPLEVBQUU7K0JBQU1wQixnQkFBZ0IsRUFBRTtxQkFBQTs7d0JBQ3BDLGlCQUNrQjtzQ0FBQSw4REFBQ3FCLEtBQUc7NEJBQUNDLEtBQUssRUFBQyw0QkFBNEI7NEJBQUNDLE1BQU0sRUFBQyxJQUFJOzRCQUFDQyxLQUFLLEVBQUMsSUFBSTtzQ0FBQyw0RUFBQ0MsTUFBSTtnQ0FBQ0MsQ0FBQyxFQUFDLDZjQUE2Yzs7Ozs7b0NBQUU7Ozs7O2dDQUFNOzs7Ozs7d0JBQ3RpQjs4QkFDVCw4REFBQ0MsSUFBRTs7c0NBQ0MsOERBQUNDLElBQUU7O2dDQUFDLGFBQVc7Z0NBQUN0RCxLQUFLLENBQUM4QixRQUFRLENBQUNDLFlBQVksQ0FBQ0MsUUFBUTs7Ozs7O2dDQUFNO3NDQUMxRCw4REFBQ3VCLElBQUU7O2dDQUFDLFlBQVU7Z0NBQUN2RCxLQUFLLENBQUM4QixRQUFRLENBQUNDLFlBQVksQ0FBQ3lCLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSTs7Ozs7O2dDQUFNO3NDQUV2RSw4REFBQ0QsSUFBRTs7Z0NBQUMsY0FBWTtnQ0FBQ0UsSUFBSSxDQUFDekQsS0FBSyxDQUFDOEIsUUFBUSxDQUFDQyxZQUFZLENBQUMyQixTQUFTLENBQUM7Ozs7OztnQ0FBTTtzQ0FDbEUsOERBQUNILElBQUU7O2dDQUFDLG1CQUFpQjtnQ0FBQ3ZELEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDNEIsY0FBYzs7Ozs7O2dDQUFNO3dCQUdsRTNELEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ2IsWUFBWSxDQUFDMkMsR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBRW5ELGdCQUFnQixFQUFLOzRCQUNyRCxxQkFDSSw4REFBQzBCLFNBQU87Z0NBRUpGLFNBQVMsRUFBRSxFQUFDLENBQXNELE9BQXBEeEIsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJekIsa0ZBQTJCLENBQUU7Z0NBQ25Fc0QsS0FBSyxFQUFFO29DQUFDQyxNQUFNLEVBQUUsU0FBUztpQ0FBQztnQ0FDMUJILElBQUksRUFBRTNCLGdCQUFnQixJQUFJLENBQUMsSUFBSSxJQUFJOztrREFFbkMsOERBQUM0QixTQUFPO2tEQUFFdUIsQ0FBQyxDQUFDRSxlQUFlOzs7Ozs2Q0FBVztrREFFdEMsOERBQUNWLElBQUU7OzBEQUNDLDhEQUFDRSxJQUFFOztvREFBQyxxQkFBbUI7b0RBQUNNLENBQUMsQ0FBQ0UsZUFBZTs7Ozs7O3FEQUFNOzBEQUMvQyw4REFBQ1IsSUFBRTs7b0RBQUMsY0FBWTtvREFBQ0UsSUFBSSxDQUFDSSxDQUFDLENBQUNILFNBQVMsQ0FBQzs7Ozs7O3FEQUFNOzBEQUN4Qyw4REFBQ0gsSUFBRTs7b0RBQUMsWUFBVTtvREFBQ00sQ0FBQyxDQUFDRyxPQUFPOzs7Ozs7cURBQU07NENBRzFCdEQsZ0JBQWdCLElBQUksQ0FBQyxpQkFFckIsOERBQUMxQiwrREFBZ0I7Z0RBQ2JpRixZQUFZLEVBQUVKLENBQUMsQ0FBQzNDLFlBQVk7Z0RBQzVCZ0QsT0FBTyxFQUFFOzJEQUFNekMsY0FBYyxDQUFDZixnQkFBZ0IsQ0FBQztpREFBQTtnREFDL0N3QixTQUFTLEVBQUUsRUFBQyxDQUFtQ2pDLE1BQWlELENBQWxGaEIsb0ZBQTZCLEVBQUMsR0FBQyxDQUFvRCxRQUFsRGdCLFFBQVEsSUFBSWhCLDRGQUFxQyxDQUFFO2dEQUNsR29GLFFBQVEsRUFBRSxTQUFDQyxDQUFDOzJEQUFLL0QsWUFBWSxDQUFDK0QsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssRUFBRXhFLEtBQUssQ0FBQ1MsU0FBUyxFQUFFQyxnQkFBZ0IsQ0FBQztpREFBQTs7Ozs7cURBQ2xGLGlCQUVGLDhEQUFDNkMsSUFBRTs7b0RBQUMsaUJBQWU7b0RBQUNNLENBQUMsQ0FBQzNDLFlBQVk7Ozs7OztxREFBTTs7Ozs7OzZDQUUzQzs7K0JBeEJBUixnQkFBZ0I7Ozs7cUNBeUJmLENBQ2I7eUJBQ0osQ0FBQzs7bUJBdENBVixLQUFLLENBQUNTLFNBQVM7Ozs7d0JBeUNwQjs7Ozs7O2dCQUNDOzs7OztZQUNQLENBQ1I7Q0FDRjtHQTNHdUJWLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1NvbmcuanM/ZTk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcbmltcG9ydCBhcnRpc3RTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0FydGlzdC5tb2R1bGUuc2NzcydcblxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UtY29uZmlnJztcbmltcG9ydCB7IGRvYywgb25TbmFwc2hvdCwgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2MsIGdldERvY3MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmxldCByZXZpc2lvblR5cGluZ1RpbWVvdXQyXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbmcocHJvcHMpIHtcblxuICAgIGNvbnN0IFtpc1R5cGluZywgc2V0SXNUeXBpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3RleHRBcmVhSXNBY3RpdmUsIHNldFRleHRBcmVhSXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2ZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZCwgc2V0RmlsZVZlcnNpb25JbmRleFNlbGVjdGVkXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZVR5cGluZyA9IChldmVudFZhbHVlLCBzb25nSW5kZXgsIGZpbGVWZXJzaW9uSW5kZXgpID0+IHtcbiAgICAgICAgc2V0SXNUeXBpbmcodHJ1ZSlcblxuICAgICAgICBjb25zdCBhcnRpc3REYXRhQ2xvbmUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb3BzLmFydGlzdERhdGEpKSAvLyBjbG9uZSBzdGF0ZVxuICAgICAgICBhcnRpc3REYXRhQ2xvbmUuc29uZ3Nbc29uZ0luZGV4XS5maWxlVmVyc2lvbnNbZmlsZVZlcnNpb25JbmRleF0ucmV2aXNpb25Ob3RlID0gZXZlbnRWYWx1ZVxuICAgICAgICBwcm9wcy5zZXRBcnRpc3REYXRhKGFydGlzdERhdGFDbG9uZSlcbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCAnYXJ0aXN0cycsIHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZSk7IC8vIGdldCByZWZlcmVuY2UgdG8gZG9jXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aXN0RGF0YUNsb25lKVxuXG4gICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQocmV2aXNpb25UeXBpbmdUaW1lb3V0MikgLy8gY2xlYXIgdGltZXJcbiAgICAgICAgcmV2aXNpb25UeXBpbmdUaW1lb3V0MiA9IHNldFRpbWVvdXQoKCkgPT4geyAvLyB1c2UgdGltZXJcbiAgICAgICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIGFydGlzdERhdGFDbG9uZSlcbiAgICAgICAgICAgIHNldElzVHlwaW5nKGZhbHNlKVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0VGV4dEFyZWEgPSAoZmlsZVZlcnNpb25JbmRleCkgPT4ge1xuICAgICAgICBzZXRUZXh0QXJlYUlzQWN0aXZlKHRydWUpXG4gICAgICAgIHNldEZpbGVWZXJzaW9uSW5kZXhTZWxlY3RlZChmaWxlVmVyc2lvbkluZGV4KVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hhcmVhYmxlTGluayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nICsgcHJvcHMuYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lICsgJy8nICsgcHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lKVxuICAgICAgICBcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMuYXJ0aXN0RGF0YSlcblxuICByZXR1cm4gKFxuICAgICAgXG4gICAgICAgICAgcHJvcHMuc29uZ0RhdGEgJiZcbiAgICAgIFxuICAgIDxtYWluIGNsYXNzTmFtZT17YXJ0aXN0U3R5bGVzLnNvbmd9PlxuICAgICAgICB7Lyoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX0gKi99XG4gICAgICAgIHsvKiA8dWwga2V5PSB7cHJvcHMuc29uZ0luZGV4fSBvbkZvY3VzPXsoKSA9PiBzZXRCZ0NvbCgnZ3JlZW4nKX0gb25CbHVyPXsoKSA9PiBzZXRCZ0NvbCgnYmxhY2snKX0+ICovfVxuICAgICAgICB7LyogPExpbmsgaHJlZj17J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nICsgcHJvcHMuYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lfT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fT4gc2hvdyBhbGwgPC9hPlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICA8ZGV0YWlsc1xuICAgICAgICAgICAgb3Blbj17cHJvcHMuc29uZ0luZGV4ID09IDAgJiYgdHJ1ZX1cbiAgICAgICAgICAgIFxuICAgICAgICA+XG4gICAgICAgICAgICA8c3VtbWFyeVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgICAgICAgPntwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nICsgcHJvcHMuYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lICsgJy8nICsgcHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfT5cbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiAnYmx1ZSd9fT5nbyB0byBzaGFyZWFibGUgdmVyc2lvbjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YXJ0aXN0U3R5bGVzLnNoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldFNoYXJlYWJsZUxpbmsoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBjb3B5IHNoYXJlIGxpbms8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj48cGF0aCBkPVwiTTUuMjUgMTcuMTg4cS0uNTIxIDAtLjg4NS0uMzY1UTQgMTYuNDU4IDQgMTUuOTM4VjUuNzcxaDF2MTAuMTY3cTAgLjA4My4wODMuMTY2LjA4NC4wODQuMTY3LjA4NGg4LjIwOHYxWm0yLjQxNy0yLjQxN3EtLjUyMSAwLS44ODYtLjM2NS0uMzY0LS4zNjQtLjM2NC0uODg1VjQuMTY3cTAtLjUyMS4zNjQtLjg4Ni4zNjUtLjM2NC44ODYtLjM2NGg3LjM5NXEuNTQyIDAgLjkwNy4zNjQuMzY0LjM2NS4zNjQuODg2djkuMzU0cTAgLjUyMS0uMzY0Ljg4NS0uMzY1LjM2NS0uOTA3LjM2NVptMC0xaDcuMzk1cS4xMDUgMCAuMTg4LS4wODMuMDgzLS4wODQuMDgzLS4xNjdWNC4xNjdxMC0uMTA1LS4wODMtLjE3Ny0uMDgzLS4wNzMtLjE4OC0uMDczSDcuNjY3cS0uMDg0IDAtLjE2Ny4wNzMtLjA4My4wNzItLjA4My4xNzd2OS4zNTRxMCAuMDgzLjA4My4xNjcuMDgzLjA4My4xNjcuMDgzWm0tLjI1IDBWMy45MTd2OS44NTRaXCIvPjwvc3ZnPiBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsIGtleT0ge3Byb3BzLnNvbmdJbmRleH0+XG4gICAgICAgICAgICAgICAgPGgyPnNvbmcgbmFtZToge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxsaT5wYWlkIGZvcjoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5wYWlkRm9yID8gJ3llcycgOiAnbm8nfTwvbGk+XG4gICAgICAgICAgICAgICAgey8qIDxsaT5kYXRlIHJhdyBmaWxlcyByZWNlaXZlZDoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlUmF3RmlsZXNSZWNlaXZlZH08L2xpPiAqL31cbiAgICAgICAgICAgICAgICA8bGk+ZGF0ZSBhZGRlZDoge0RhdGUocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVBZGRlZCl9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+YmFja3VwIGxvY2F0aW9uOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmJhY2t1cExvY2F0aW9ufTwvbGk+XG4gICAgICAgICAgICAgICAgey8qIDxsaT5kYXRlIG9mIG1vc3QgcmVjZW50IGVkaXQ6IHtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuZGF0ZU9mTW9zdFJlY2VudEVkaXR9PC9saT4gKi99XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zb25nRGF0YS5maWxlVmVyc2lvbnMubWFwKCh4LCBmaWxlVmVyc2lvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZXRhaWxzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGVWZXJzaW9uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ZpbGVWZXJzaW9uSW5kZXggPiAwICYmIGFydGlzdFN0eWxlcy5vbGRGaWxlVmVyc2lvbn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17ZmlsZVZlcnNpb25JbmRleCA9PSAwICYmIHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57eC5maWxlVmVyc2lvbk5hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmZpbGUgdmVyc2lvbiBuYW1lOiB7eC5maWxlVmVyc2lvbk5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5kYXRlIGFkZGVkOiB7RGF0ZSh4LmRhdGVBZGRlZCl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Kb2IgdHlwZToge3guam9iVHlwZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5maWxlIHZlcnNpb24gaW5kZXgge2ZpbGVWZXJzaW9uSW5kZXh9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ly8gT05MWSBTSE9XIFRFWFQgQVJFQSBGT1IgTU9TVCBSRUNFTlQgRklMRSBWRVJTSU9OIFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVWZXJzaW9uSW5kZXggPT0gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3gucmV2aXNpb25Ob3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZWxlY3RUZXh0QXJlYShmaWxlVmVyc2lvbkluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthcnRpc3RTdHlsZXMucmV2aXNpb25UZXh0QXJlYX0gJHtpc1R5cGluZyAmJiBhcnRpc3RTdHlsZXMucmV2aXNpb25UZXh0QXJlYUlzVHlwaW5nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVHlwaW5nKGUudGFyZ2V0LnZhbHVlLCBwcm9wcy5zb25nSW5kZXgsIGZpbGVWZXJzaW9uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmV2aXNpb24gbm90ZToge3gucmV2aXNpb25Ob3RlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXh0YXJlYUF1dG9zaXplIiwiYXJ0aXN0U3R5bGVzIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJkb2MiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwiTGluayIsInJldmlzaW9uVHlwaW5nVGltZW91dDIiLCJTb25nIiwicHJvcHMiLCJpc1R5cGluZyIsInNldElzVHlwaW5nIiwidGV4dEFyZWFJc0FjdGl2ZSIsInNldFRleHRBcmVhSXNBY3RpdmUiLCJmaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWQiLCJzZXRGaWxlVmVyc2lvbkluZGV4U2VsZWN0ZWQiLCJoYW5kbGVUeXBpbmciLCJldmVudFZhbHVlIiwic29uZ0luZGV4IiwiZmlsZVZlcnNpb25JbmRleCIsImFydGlzdERhdGFDbG9uZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImFydGlzdERhdGEiLCJzb25ncyIsImZpbGVWZXJzaW9ucyIsInJldmlzaW9uTm90ZSIsInNldEFydGlzdERhdGEiLCJkb2NSZWYiLCJtZXRhZGF0YSIsImFydGlzdE5hbWUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0VGV4dEFyZWEiLCJnZXRTaGFyZWFibGVMaW5rIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic29uZ0RhdGEiLCJzb25nTWV0YWRhdGEiLCJzb25nTmFtZSIsIm1haW4iLCJjbGFzc05hbWUiLCJzb25nIiwiZGV0YWlscyIsIm9wZW4iLCJzdW1tYXJ5Iiwic3R5bGUiLCJjdXJzb3IiLCJocmVmIiwiYSIsImNvbG9yIiwiYnV0dG9uIiwic2hhcmVCdXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ3aWR0aCIsInBhdGgiLCJkIiwidWwiLCJoMiIsImxpIiwicGFpZEZvciIsIkRhdGUiLCJkYXRlQWRkZWQiLCJiYWNrdXBMb2NhdGlvbiIsIm1hcCIsIngiLCJvbGRGaWxlVmVyc2lvbiIsImZpbGVWZXJzaW9uTmFtZSIsImpvYlR5cGUiLCJkZWZhdWx0VmFsdWUiLCJvbkZvY3VzIiwicmV2aXNpb25UZXh0QXJlYSIsInJldmlzaW9uVGV4dEFyZWFJc1R5cGluZyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Song.js\n"));

/***/ })

});