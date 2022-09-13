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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddSong; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction AddSong(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), artistSelected = ref[0], setArtistSelected = ref[1];\n    var addSong = function(event) {\n        //     const docRef = doc(db, 'artists', artistData.metadata.artistName);\n        // updateDoc(docRef, {\n        //   \"metadata.whateverelse\": 'this should be a new thing!'\n        // })\n        event.preventDefault();\n        var artistName = artistSelected;\n        var newSongDataFromFormToAdd = {\n            songMetadata: {\n                songName: \"thefirstsongsname\",\n                songNameStylized: \"the FIRSTsong NAME!!!!\",\n                paidFor: true,\n                dateRawFilesReceived: \"date\",\n                dateReleased: \"date\",\n                backupLocation: \"www.someurl.com\",\n                dateOfMostRecentEdit: \"some date object\",\n                shareable: true,\n                isPartofAlbum: false\n            },\n            fileVersions: [\n                {\n                    fileVersionName: \"artistName-songName-dy-13-01-2022-0\",\n                    dateAdded: \"January 1, 2022 at 12:00:00 am UTC-4\",\n                    revisionNote: \"this is a revision note for first song\",\n                    jobType: \"mix\"\n                }\n            ]\n        };\n        var docRef = doc(db, \"artists\", artistSelected);\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, {\n            songs: [\n                newSongDataFromFormToAdd\n            ]\n        });\n        console.log(\"song would be added to db\");\n    };\n    console.log(props.allArtistData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"add song\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"artistSelection\",\n                children: \"select artist\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 53,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"artistSelection\",\n                style: {\n                    padding: \"10px\",\n                    cursor: \"pointer\"\n                },\n                onChange: function(e) {\n                    return setArtistSelected(e.target.value);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        style: {\n                            backgroundColor: \"aqua\"\n                        },\n                        children: \"--select an artist--\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this),\n                    props.allArtistData.map(function(artist, indexOfArtistInAllArtistData) {\n                        // console.log(artist)\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: artist.metadata.artistName,\n                            children: artist.metadata.artistName\n                        }, indexOfArtistInAllArtistData, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                            lineNumber: 60,\n                            columnNumber: 33\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 54,\n                columnNumber: 21\n            }, this),\n            artistSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"artistSelected :: \",\n                    artistSelected\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 68,\n                columnNumber: 25\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addSong,\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"artistName\",\n                        children: \"artistName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"artistName\",\n                        defaultValue: artistSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"songName\",\n                        children: \"songName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"songName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"songNameStylized\",\n                        children: \"songNameStylized\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"songNameStylized\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"backupLocation\",\n                        children: \"backupLocation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"dateReleased\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"paid for?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor\",\n                        children: [\n                            \"yes\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor\",\n                                name: \"payThing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor2\",\n                        children: [\n                            \"no\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor2\",\n                                name: \"payThing\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"shareable?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor\",\n                        children: [\n                            \"yes\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor\",\n                                name: \"shareable\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"paidFor2\",\n                        children: [\n                            \"no\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                id: \"paidFor2\",\n                                name: \"shareable\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddSong.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n};\n_s(AddSong, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = AddSong;\nvar _c;\n$RefreshReg$(_c, \"AddSong\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs0QkFBQyxJQUMxQjswQ0FBQSw4REFBQ3FCLE9BQUs7Z0NBQUNDLElBQUksRUFBQyxPQUFPO2dDQUFDcEIsRUFBRSxFQUFDLFVBQVU7Z0NBQUN1QixJQUFJLEVBQUMsVUFBVTtnQ0FBQ0MsY0FBYzs7Ozs7b0NBQUc7Ozs7Ozs0QkFDM0Q7a0NBR1IsOERBQUNGLEdBQUM7a0NBQUMsWUFBVTs7Ozs7NEJBQUk7a0NBQ2pCLDhEQUFDekIsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLFNBQVM7OzRCQUFDLEtBQ3pCOzBDQUFBLDhEQUFDcUIsT0FBSztnQ0FBQ0MsSUFBSSxFQUFDLE9BQU87Z0NBQUNwQixFQUFFLEVBQUMsU0FBUztnQ0FBQ3VCLElBQUksRUFBQyxXQUFXOzs7OztvQ0FBRTs7Ozs7OzRCQUMzQztrQ0FFUiw4REFBQzFCLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxVQUFVOzs0QkFBQyxJQUMxQjswQ0FBQSw4REFBQ3FCLE9BQUs7Z0NBQUNDLElBQUksRUFBQyxPQUFPO2dDQUFDcEIsRUFBRSxFQUFDLFVBQVU7Z0NBQUN1QixJQUFJLEVBQUMsV0FBVztnQ0FBQ0MsY0FBYzs7Ozs7b0NBQUc7Ozs7Ozs0QkFDNUQ7a0NBYVIsOERBQUNDLFFBQU07d0JBQUNMLElBQUksRUFBQyxRQUFRO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozs7b0JBR2xDOzs7Ozs7WUFDSixDQUNWO0NBQ0o7R0FySHVCeEQsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQWRkU29uZy5qcz9iMWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwZGF0ZURvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRTb25nKHByb3BzKSB7XG5cbiAgICBjb25zdCBbYXJ0aXN0U2VsZWN0ZWQsIHNldEFydGlzdFNlbGVjdGVkXSA9IHVzZVN0YXRlKClcblxuICAgIGNvbnN0IGFkZFNvbmcgPSAoZXZlbnQpID0+IHtcblxuICAgIC8vICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsICdhcnRpc3RzJywgYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lKTtcbiAgICAvLyB1cGRhdGVEb2MoZG9jUmVmLCB7XG4gICAgLy8gICBcIm1ldGFkYXRhLndoYXRldmVyZWxzZVwiOiAndGhpcyBzaG91bGQgYmUgYSBuZXcgdGhpbmchJ1xuICAgIC8vIH0pXG5cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGFydGlzdE5hbWUgPSBhcnRpc3RTZWxlY3RlZFxuICAgICAgICBjb25zdCBuZXdTb25nRGF0YUZyb21Gb3JtVG9BZGQgPSB7XG4gICAgICAgICAgICBzb25nTWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICBzb25nTmFtZTogJ3RoZWZpcnN0c29uZ3NuYW1lJyxcbiAgICAgICAgICAgICAgICBzb25nTmFtZVN0eWxpemVkOiAndGhlIEZJUlNUc29uZyBOQU1FISEhIScsXG4gICAgICAgICAgICAgICAgcGFpZEZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRlUmF3RmlsZXNSZWNlaXZlZDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGRhdGVSZWxlYXNlZDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgIGJhY2t1cExvY2F0aW9uOiAnd3d3LnNvbWV1cmwuY29tJyxcbiAgICAgICAgICAgICAgICBkYXRlT2ZNb3N0UmVjZW50RWRpdDogJ3NvbWUgZGF0ZSBvYmplY3QnLFxuICAgICAgICAgICAgICAgIHNoYXJlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1BhcnRvZkFsYnVtOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWxlVmVyc2lvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVWZXJzaW9uTmFtZTogYGFydGlzdE5hbWUtc29uZ05hbWUtZHktMTMtMDEtMjAyMi0wYCxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUFkZGVkOiBgSmFudWFyeSAxLCAyMDIyIGF0IDEyOjAwOjAwIGFtIFVUQy00YCxcbiAgICAgICAgICAgICAgICAgICAgcmV2aXNpb25Ob3RlOiBgdGhpcyBpcyBhIHJldmlzaW9uIG5vdGUgZm9yIGZpcnN0IHNvbmdgLFxuICAgICAgICAgICAgICAgICAgICBqb2JUeXBlOiBgbWl4YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsICdhcnRpc3RzJywgYXJ0aXN0U2VsZWN0ZWQpXG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHtcbiAgICAgICAgICAgIHNvbmdzOiBbXG4gICAgICAgICAgICAgICAgbmV3U29uZ0RhdGFGcm9tRm9ybVRvQWRkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Nvbmcgd291bGQgYmUgYWRkZWQgdG8gZGInKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5hbGxBcnRpc3REYXRhKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDE+YWRkIHNvbmc8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYXJ0aXN0U2VsZWN0aW9uJz5zZWxlY3QgYXJ0aXN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0nYXJ0aXN0U2VsZWN0aW9uJyBzdHlsZT17e3BhZGRpbmc6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fSBvbkNoYW5nZT17KGUpID0+IHNldEFydGlzdFNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdhcXVhJ319Pi0tc2VsZWN0IGFuIGFydGlzdC0tPC9vcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hbGxBcnRpc3REYXRhLm1hcCgoYXJ0aXN0LCBpbmRleE9mQXJ0aXN0SW5BbGxBcnRpc3REYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleE9mQXJ0aXN0SW5BbGxBcnRpc3REYXRhfSB2YWx1ZT17YXJ0aXN0Lm1ldGFkYXRhLmFydGlzdE5hbWV9PnthcnRpc3QubWV0YWRhdGEuYXJ0aXN0TmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+bm88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxvcHRpb24gc3R5bGU9e3twYWRkaW5nOiAnMTBweCd9fT55ZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGlzdFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+YXJ0aXN0U2VsZWN0ZWQgOjoge2FydGlzdFNlbGVjdGVkfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXthZGRTb25nfSBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FydGlzdE5hbWUnPmFydGlzdE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYXJ0aXN0TmFtZScgZGVmYXVsdFZhbHVlPXthcnRpc3RTZWxlY3RlZH0vPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3NvbmdOYW1lJz5zb25nTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdzb25nTmFtZScvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdzb25nTmFtZVN0eWxpemVkJz5zb25nTmFtZVN0eWxpemVkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3NvbmdOYW1lU3R5bGl6ZWQnLz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdiYWNrdXBMb2NhdGlvbic+YmFja3VwTG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZGF0ZVJlbGVhc2VkJy8+XG5cbiAgICAgICAgICAgICAgICA8cD5wYWlkIGZvcj88L3A+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3BhaWRGb3InPnllc1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgaWQ9J3BhaWRGb3InIG5hbWU9J3BheVRoaW5nJyAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3BhaWRGb3IyJz5ub1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgaWQ9J3BhaWRGb3IyJyBuYW1lPSdwYXlUaGluZycgZGVmYXVsdENoZWNrZWQgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG5cbiAgICAgICAgICAgICAgICA8cD5zaGFyZWFibGU/PC9wPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYWlkRm9yJz55ZXNcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIGlkPSdwYWlkRm9yJyBuYW1lPSdzaGFyZWFibGUnLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3BhaWRGb3IyJz5ub1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgaWQ9J3BhaWRGb3IyJyBuYW1lPSdzaGFyZWFibGUnIGRlZmF1bHRDaGVja2VkIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nZGF0ZVJhd0ZpbGVzUmVjZWl2ZWQnPmRhdGVSYXdGaWxlc1JlY2VpdmVkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgaWQ9J2RhdGVSYXdGaWxlc1JlY2VpdmVkJy8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZVJlbGVhc2VkJz5kYXRlUmVsZWFzZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBpZD0nZGF0ZVJlbGVhc2VkJy8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZU9mTW9zdFJlY2VudEVkaXQnPmRhdGVPZk1vc3RSZWNlbnRFZGl0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgaWQ9J2RhdGVPZk1vc3RSZWNlbnRFZGl0Jy8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZU9mTW9zdFJlY2VudEVkaXQnPmRhdGVBZGRlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIGlkPSdkYXRlT2ZNb3N0UmVjZW50RWRpdCcvPiAqL31cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVwZGF0ZURvYyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRTb25nIiwicHJvcHMiLCJhcnRpc3RTZWxlY3RlZCIsInNldEFydGlzdFNlbGVjdGVkIiwiYWRkU29uZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcnRpc3ROYW1lIiwibmV3U29uZ0RhdGFGcm9tRm9ybVRvQWRkIiwic29uZ01ldGFkYXRhIiwic29uZ05hbWUiLCJzb25nTmFtZVN0eWxpemVkIiwicGFpZEZvciIsImRhdGVSYXdGaWxlc1JlY2VpdmVkIiwiZGF0ZVJlbGVhc2VkIiwiYmFja3VwTG9jYXRpb24iLCJkYXRlT2ZNb3N0UmVjZW50RWRpdCIsInNoYXJlYWJsZSIsImlzUGFydG9mQWxidW0iLCJmaWxlVmVyc2lvbnMiLCJmaWxlVmVyc2lvbk5hbWUiLCJkYXRlQWRkZWQiLCJyZXZpc2lvbk5vdGUiLCJqb2JUeXBlIiwiZG9jUmVmIiwiZG9jIiwiZGIiLCJzb25ncyIsImNvbnNvbGUiLCJsb2ciLCJhbGxBcnRpc3REYXRhIiwibWFpbiIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJzdHlsZSIsInBhZGRpbmciLCJjdXJzb3IiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImFydGlzdCIsImluZGV4T2ZBcnRpc3RJbkFsbEFydGlzdERhdGEiLCJtZXRhZGF0YSIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJwIiwibmFtZSIsImRlZmF1bHRDaGVja2VkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/AddSong.js\n"));

/***/ })

});