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

/***/ "./pages/Components/AddFileVersion.js":
/*!********************************************!*\
  !*** ./pages/Components/AddFileVersion.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_type_of.mjs */ \"./node_modules/@swc/helpers/src/_type_of.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n\n\n\n\n\n\n\nfunction AddFileVersion(props) {\n    // console.log(props.songData.songMetadata.songName)\n    var addFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var newFileVersion, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        console.log(\"add file version here\");\n                        console.log((0,_swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(event.target[3].value));\n                        newFileVersion = {\n                            artistName: event.target[0].value,\n                            songName: event.target[1].value,\n                            fileVersionName: event.target[2].value,\n                            dateAdded: event.target[3].value,\n                            revisionNote: event.target[4].value,\n                            jobType: event.target[5].value\n                        };\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.artistName); // create reference to document\n                        _ctx.next = 8;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 8:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                            tempArtistSongsArray[props.songIndex].fileVersions.push(newFileVersion);\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                        // tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array\n                        // console.log(tempArtistSongsArray)\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addFileVersion(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"add a file version:\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                onSubmit: addFileVersion,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"artistName\",\n                        children: \"artistName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"artistName\",\n                        name: \"artistName\",\n                        value: props.artistName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"songName\",\n                        children: \"songName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"songName\",\n                        name: \"songName\",\n                        value: props.songData.songMetadata.songName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"fileVersionName\",\n                        children: \"file version name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"fileVersionName\",\n                        name: \"fileVersionName\",\n                        defaultValue: \"filenamegoeshere\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"dateAdded\",\n                        children: \"dateAdded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        id: \"dateAdded\",\n                        name: \"dateAdded\",\n                        defaultValue: new Date()\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"revisionNote\",\n                        children: \"revisionNote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"revisionNote\",\n                        name: \"revisionNote\",\n                        defaultValue: \"no revision notes yet!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"jobType\",\n                        children: \"jobType\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"jobTyper\",\n                        name: \"jobType\",\n                        defaultValue: \"mix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_c = AddFileVersion;\nvar _c;\n$RefreshReg$(_c, \"AddFileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO3dCQUFDQyxPQUFPLEVBQUMsU0FBUztrQ0FBQyxTQUFPOzs7Ozs0QkFBUTtrQ0FDeEMsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsVUFBVTt3QkFBQ0MsSUFBSSxFQUFDLFNBQVM7d0JBQUNLLFlBQVksRUFBQyxLQUFLOzs7Ozs0QkFBRTtrQ0FFcEUsOERBQUNFLFFBQU07d0JBQUNULElBQUksRUFBQyxRQUFRO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozs7b0JBQ2xDOzs7Ozs7WUFDSixDQUNSO0NBQ0Y7QUEvRHVCcEMsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FkZEZpbGVWZXJzaW9uLmpzP2NkMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRGaWxlVmVyc2lvbihwcm9wcykge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZSlcblxuXG4gICAgY29uc3QgYWRkRmlsZVZlcnNpb24gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZygnYWRkIGZpbGUgdmVyc2lvbiBoZXJlJylcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGV2ZW50LnRhcmdldFszXS52YWx1ZSlcbiAgICAgICAgY29uc3QgbmV3RmlsZVZlcnNpb24gPSB7XG4gICAgICAgICAgICBhcnRpc3ROYW1lOiBldmVudC50YXJnZXRbMF0udmFsdWUsXG4gICAgICAgICAgICBzb25nTmFtZTogZXZlbnQudGFyZ2V0WzFdLnZhbHVlLFxuICAgICAgICAgICAgZmlsZVZlcnNpb25OYW1lOiBldmVudC50YXJnZXRbMl0udmFsdWUsXG4gICAgICAgICAgICBkYXRlQWRkZWQ6IGV2ZW50LnRhcmdldFszXS52YWx1ZSxcbiAgICAgICAgICAgIHJldmlzaW9uTm90ZTogZXZlbnQudGFyZ2V0WzRdLnZhbHVlLFxuICAgICAgICAgICAgam9iVHlwZTogZXZlbnQudGFyZ2V0WzVdLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3RmlsZVZlcnNpb24pXG4gICAgICAgIGxldCB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJhcnRpc3RzXCIsIHByb3BzLmFydGlzdE5hbWUpOyAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTsgLy8gZ2V0IGN1cnJlbnQgZG9jdW1lbnRzIGRhdGFcbiAgICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIHN0b3JlIGRvY3VtZW50IGRhdGEgaW4gc2NvcGVkIGxvY2FsIGFycmF5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheVtwcm9wcy5zb25nSW5kZXhdLmZpbGVWZXJzaW9ucylcbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5W3Byb3BzLnNvbmdJbmRleF0uZmlsZVZlcnNpb25zLnB1c2gobmV3RmlsZVZlcnNpb24pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheVtwcm9wcy5zb25nSW5kZXhdLmZpbGVWZXJzaW9ucylcbiAgICAgICAgICAgIC8vIHRlbXBBcnRpc3RTb25nc0FycmF5LnB1c2gobmV3U29uZ0RhdGFGcm9tRm9ybVRvQWRkKSAvLyBwdXNoIHRoZSBzb25nIHdlIGFyZSBhZGRpbmcgaW50byB0aGF0IGFycmF5XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheSlcbiAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHsgLy8gdXBkYXRlIHRoZSBkb2N1bWVudCB3aXRoIHRoZSB1cGRhdGVkIGFycmF5XG4gICAgICAgICAgICBzb25nczogdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDxoMz5hZGQgYSBmaWxlIHZlcnNpb246PC9oMz5cbiAgICAgICAgPGZvcm0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0gb25TdWJtaXQ9e2FkZEZpbGVWZXJzaW9ufT5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FydGlzdE5hbWUnPmFydGlzdE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdhcnRpc3ROYW1lJyBuYW1lPSdhcnRpc3ROYW1lJyB2YWx1ZT17cHJvcHMuYXJ0aXN0TmFtZX0gcmVhZE9ubHkgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nc29uZ05hbWUnPnNvbmdOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc29uZ05hbWUnIG5hbWU9J3NvbmdOYW1lJyB2YWx1ZT17cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfSByZWFkT25seSByZXF1aXJlZC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlVmVyc2lvbk5hbWUnPmZpbGUgdmVyc2lvbiBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZmlsZVZlcnNpb25OYW1lJyBuYW1lPSdmaWxlVmVyc2lvbk5hbWUnIGRlZmF1bHRWYWx1ZT0nZmlsZW5hbWVnb2VzaGVyZScgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGF0ZUFkZGVkJz5kYXRlQWRkZWQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIGlkPSdkYXRlQWRkZWQnIG5hbWU9J2RhdGVBZGRlZCcgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSgpfS8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdyZXZpc2lvbk5vdGUnPnJldmlzaW9uTm90ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3JldmlzaW9uTm90ZScgbmFtZT0ncmV2aXNpb25Ob3RlJyBkZWZhdWx0VmFsdWU9J25vIHJldmlzaW9uIG5vdGVzIHlldCEnLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2pvYlR5cGUnPmpvYlR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdqb2JUeXBlcicgbmFtZT0nam9iVHlwZScgZGVmYXVsdFZhbHVlPSdtaXgnLz5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsIkFkZEZpbGVWZXJzaW9uIiwicHJvcHMiLCJhZGRGaWxlVmVyc2lvbiIsImV2ZW50IiwibmV3RmlsZVZlcnNpb24iLCJ0ZW1wQXJ0aXN0U29uZ3NBcnJheSIsImRvY1JlZiIsImRvY1NuYXAiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImFydGlzdE5hbWUiLCJzb25nTmFtZSIsImZpbGVWZXJzaW9uTmFtZSIsImRhdGVBZGRlZCIsInJldmlzaW9uTm90ZSIsImpvYlR5cGUiLCJleGlzdHMiLCJkYXRhIiwic29uZ3MiLCJzb25nSW5kZXgiLCJmaWxlVmVyc2lvbnMiLCJwdXNoIiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZm9ybSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJzb25nRGF0YSIsInNvbmdNZXRhZGF0YSIsImRlZmF1bHRWYWx1ZSIsIkRhdGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AddFileVersion.js\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_type_of.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_type_of.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _typeof; }\n/* harmony export */ });\nfunction _typeof(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fdHlwZV9vZi5tanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL190eXBlX29mLm1qcz80NzdjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAc3djL2hlbHBlcnMgLSB0eXBlb2ZcIjtcbiAgICByZXR1cm4gb2JqICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_type_of.mjs\n"));

/***/ })

});