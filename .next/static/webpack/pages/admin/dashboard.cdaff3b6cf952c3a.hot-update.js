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

/***/ "./pages/Components/AddSong.js":
/*!*************************************!*\
  !*** ./pages/Components/AddSong.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddSong; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AddSong(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), artistSelected = ref[0], setArtistSelected = ref[1];\n    var addSong = function(event) {\n        //     const docRef = doc(db, 'artists', artistData.metadata.artistName);\n        // updateDoc(docRef, {\n        //   \"metadata.whateverelse\": 'this should be a new thing!'\n        // })\n        event.preventDefault();\n        var artistName = artistSelected;\n        var newSongDataFromFormToAdd = {\n            songMetadata: {\n                songName: \"thefirstsongsname\",\n                songNameStylized: \"the FIRSTsong NAME!!!!\",\n                paidFor: true,\n                dateRawFilesReceived: \"date\",\n                dateReleased: \"date\",\n                backupLocation: \"www.someurl.com\",\n                dateOfMostRecentEdit: \"some date object\",\n                shareable: true,\n                isPartofAlbum: false\n            },\n            fileVersions: [\n                {\n                    fileVersionName: \"artistName-songName-dy-13-01-2022-0\",\n                    dateAdded: \"January 1, 2022 at 12:00:00 am UTC-4\",\n                    revisionNote: \"this is a revision note for first song\",\n                    jobType: \"mix\"\n                }\n            ]\n        };\n        // const docRef = doc(db, 'artists', props.art)\n        console.log(\"song would be added to db\");\n    };\n    console.log(props.allArtistData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"add song\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"artistSelection\",\n                children: \"select artist\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 46,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"artistSelection\",\n                style: {\n                    padding: \"10px\",\n                    cursor: \"pointer\"\n                },\n                onChange: function(e) {\n                    return setArtistSelected(e.target.value);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        style: {\n                            backgroundColor: \"aqua\"\n                        },\n                        children: \"--select an artist--\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, this),\n                    props.allArtistData.map(function(artist, indexOfArtistInAllArtistData) {\n                        // console.log(artist)\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: artist.metadata.artistName,\n                            children: artist.metadata.artistName\n                        }, indexOfArtistInAllArtistData, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                            lineNumber: 53,\n                            columnNumber: 33\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 47,\n                columnNumber: 21\n            }, this),\n            artistSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"artistSelected :: \",\n                    artistSelected\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 61,\n                columnNumber: 25\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addSong,\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"artistName\",\n                        children: \"artistName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"artistName\",\n                        defaultValue: artistSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"songName\",\n                        children: \"songName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"songName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"songNameStylized\",\n                        children: \"songNameStylized\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"songNameStylized\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"backupLocation\",\n                        children: \"backupLocation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"dateReleased\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"paid for?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor\",\n                        children: [\n                            \"yes\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor\",\n                                name: \"payThing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor2\",\n                        children: [\n                            \"no\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor2\",\n                                name: \"payThing\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"shareable?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor\",\n                        children: [\n                            \"yes\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor\",\n                                name: \"shareable\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor2\",\n                        children: [\n                            \"no\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor2\",\n                                name: \"shareable\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n};\n_s(AddSong, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = AddSong;\nvar _c;\n$RefreshReg$(_c, \"AddSong\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FHUiw4REFBQ0YsR0FBQztrQ0FBQyxZQUFVOzs7Ozs0QkFBSTtrQ0FDakIsOERBQUN6QixPQUFLO3dCQUFDQyxPQUFPLEVBQUMsU0FBUzs7NEJBQUMsS0FDekI7MENBQUEsOERBQUNxQixPQUFLO2dDQUFDQyxJQUFJLEVBQUMsT0FBTztnQ0FBQ3BCLEVBQUUsRUFBQyxTQUFTO2dDQUFDdUIsSUFBSSxFQUFDLFdBQVc7Ozs7O29DQUFFOzs7Ozs7NEJBQzNDO2tDQUVSLDhEQUFDMUIsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLFVBQVU7OzRCQUFDLElBQzFCOzBDQUFBLDhEQUFDcUIsT0FBSztnQ0FBQ0MsSUFBSSxFQUFDLE9BQU87Z0NBQUNwQixFQUFFLEVBQUMsVUFBVTtnQ0FBQ3VCLElBQUksRUFBQyxXQUFXO2dDQUFDQyxjQUFjOzs7OztvQ0FBRzs7Ozs7OzRCQUM1RDs7Ozs7O29CQWdCTDs7Ozs7O1lBQ0osQ0FDVjtDQUNKO0dBL0d1QnhELE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FkZFNvbmcuanM/YjFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkU29uZyhwcm9wcykge1xuXG4gICAgY29uc3QgW2FydGlzdFNlbGVjdGVkLCBzZXRBcnRpc3RTZWxlY3RlZF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBhZGRTb25nID0gKGV2ZW50KSA9PiB7XG5cbiAgICAvLyAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCAnYXJ0aXN0cycsIGFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZSk7XG4gICAgLy8gdXBkYXRlRG9jKGRvY1JlZiwge1xuICAgIC8vICAgXCJtZXRhZGF0YS53aGF0ZXZlcmVsc2VcIjogJ3RoaXMgc2hvdWxkIGJlIGEgbmV3IHRoaW5nISdcbiAgICAvLyB9KVxuXG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBhcnRpc3ROYW1lID0gYXJ0aXN0U2VsZWN0ZWRcbiAgICAgICAgY29uc3QgbmV3U29uZ0RhdGFGcm9tRm9ybVRvQWRkID0ge1xuICAgICAgICAgICAgc29uZ01ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgc29uZ05hbWU6ICd0aGVmaXJzdHNvbmdzbmFtZScsXG4gICAgICAgICAgICAgICAgc29uZ05hbWVTdHlsaXplZDogJ3RoZSBGSVJTVHNvbmcgTkFNRSEhISEnLFxuICAgICAgICAgICAgICAgIHBhaWRGb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0ZVJhd0ZpbGVzUmVjZWl2ZWQ6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBkYXRlUmVsZWFzZWQ6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICBiYWNrdXBMb2NhdGlvbjogJ3d3dy5zb21ldXJsLmNvbScsXG4gICAgICAgICAgICAgICAgZGF0ZU9mTW9zdFJlY2VudEVkaXQ6ICdzb21lIGRhdGUgb2JqZWN0JyxcbiAgICAgICAgICAgICAgICBzaGFyZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNQYXJ0b2ZBbGJ1bTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsZVZlcnNpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWxlVmVyc2lvbk5hbWU6IGBhcnRpc3ROYW1lLXNvbmdOYW1lLWR5LTEzLTAxLTIwMjItMGAsXG4gICAgICAgICAgICAgICAgICAgIGRhdGVBZGRlZDogYEphbnVhcnkgMSwgMjAyMiBhdCAxMjowMDowMCBhbSBVVEMtNGAsXG4gICAgICAgICAgICAgICAgICAgIHJldmlzaW9uTm90ZTogYHRoaXMgaXMgYSByZXZpc2lvbiBub3RlIGZvciBmaXJzdCBzb25nYCxcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogYG1peGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3QgZG9jUmVmID0gZG9jKGRiLCAnYXJ0aXN0cycsIHByb3BzLmFydClcbiAgICAgICAgY29uc29sZS5sb2coJ3Nvbmcgd291bGQgYmUgYWRkZWQgdG8gZGInKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5hbGxBcnRpc3REYXRhKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDE+YWRkIHNvbmc8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYXJ0aXN0U2VsZWN0aW9uJz5zZWxlY3QgYXJ0aXN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0nYXJ0aXN0U2VsZWN0aW9uJyBzdHlsZT17e3BhZGRpbmc6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fSBvbkNoYW5nZT17KGUpID0+IHNldEFydGlzdFNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdhcXVhJ319Pi0tc2VsZWN0IGFuIGFydGlzdC0tPC9vcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hbGxBcnRpc3REYXRhLm1hcCgoYXJ0aXN0LCBpbmRleE9mQXJ0aXN0SW5BbGxBcnRpc3REYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleE9mQXJ0aXN0SW5BbGxBcnRpc3REYXRhfSB2YWx1ZT17YXJ0aXN0Lm1ldGFkYXRhLmFydGlzdE5hbWV9PnthcnRpc3QubWV0YWRhdGEuYXJ0aXN0TmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+bm88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxvcHRpb24gc3R5bGU9e3twYWRkaW5nOiAnMTBweCd9fT55ZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGlzdFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+YXJ0aXN0U2VsZWN0ZWQgOjoge2FydGlzdFNlbGVjdGVkfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXthZGRTb25nfSBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FydGlzdE5hbWUnPmFydGlzdE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2FydGlzdE5hbWUnIGRlZmF1bHRWYWx1ZT17YXJ0aXN0U2VsZWN0ZWR9Lz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdzb25nTmFtZSc+c29uZ05hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc29uZ05hbWUnLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nc29uZ05hbWVTdHlsaXplZCc+c29uZ05hbWVTdHlsaXplZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzb25nTmFtZVN0eWxpemVkJy8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYmFja3VwTG9jYXRpb24nPmJhY2t1cExvY2F0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2RhdGVSZWxlYXNlZCcvPlxuXG4gICAgICAgICAgICAgICAgPHA+cGFpZCBmb3I/PC9wPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYWlkRm9yJz55ZXNcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIGlkPSdwYWlkRm9yJyBuYW1lPSdwYXlUaGluZycgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYWlkRm9yMic+bm9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIGlkPSdwYWlkRm9yMicgbmFtZT0ncGF5VGhpbmcnIGRlZmF1bHRDaGVja2VkIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuXG4gICAgICAgICAgICAgICAgPHA+c2hhcmVhYmxlPzwvcD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFpZEZvcic+eWVzXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBpZD0ncGFpZEZvcicgbmFtZT0nc2hhcmVhYmxlJy8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYWlkRm9yMic+bm9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIGlkPSdwYWlkRm9yMicgbmFtZT0nc2hhcmVhYmxlJyBkZWZhdWx0Q2hlY2tlZCAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J2RhdGVSYXdGaWxlc1JlY2VpdmVkJz5kYXRlUmF3RmlsZXNSZWNlaXZlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIGlkPSdkYXRlUmF3RmlsZXNSZWNlaXZlZCcvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2RhdGVSZWxlYXNlZCc+ZGF0ZVJlbGVhc2VkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgaWQ9J2RhdGVSZWxlYXNlZCcvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2RhdGVPZk1vc3RSZWNlbnRFZGl0Jz5kYXRlT2ZNb3N0UmVjZW50RWRpdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIGlkPSdkYXRlT2ZNb3N0UmVjZW50RWRpdCcvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2RhdGVPZk1vc3RSZWNlbnRFZGl0Jz5kYXRlQWRkZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBpZD0nZGF0ZU9mTW9zdFJlY2VudEVkaXQnLz4gKi99XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWRkU29uZyIsInByb3BzIiwiYXJ0aXN0U2VsZWN0ZWQiLCJzZXRBcnRpc3RTZWxlY3RlZCIsImFkZFNvbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXJ0aXN0TmFtZSIsIm5ld1NvbmdEYXRhRnJvbUZvcm1Ub0FkZCIsInNvbmdNZXRhZGF0YSIsInNvbmdOYW1lIiwic29uZ05hbWVTdHlsaXplZCIsInBhaWRGb3IiLCJkYXRlUmF3RmlsZXNSZWNlaXZlZCIsImRhdGVSZWxlYXNlZCIsImJhY2t1cExvY2F0aW9uIiwiZGF0ZU9mTW9zdFJlY2VudEVkaXQiLCJzaGFyZWFibGUiLCJpc1BhcnRvZkFsYnVtIiwiZmlsZVZlcnNpb25zIiwiZmlsZVZlcnNpb25OYW1lIiwiZGF0ZUFkZGVkIiwicmV2aXNpb25Ob3RlIiwiam9iVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhbGxBcnRpc3REYXRhIiwibWFpbiIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJzdHlsZSIsInBhZGRpbmciLCJjdXJzb3IiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImFydGlzdCIsImluZGV4T2ZBcnRpc3RJbkFsbEFydGlzdERhdGEiLCJtZXRhZGF0YSIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJwIiwibmFtZSIsImRlZmF1bHRDaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/AddSong.js\n"));

/***/ })

});