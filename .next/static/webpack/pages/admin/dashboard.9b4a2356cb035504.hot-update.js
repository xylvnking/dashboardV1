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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_type_of.mjs */ \"./node_modules/@swc/helpers/src/_type_of.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n\n\n\n\n\n\n\nfunction AddFileVersion(props) {\n    // console.log(props.songData.songMetadata.songName)\n    var addFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var newFileVersion, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        console.log(\"add file version here\");\n                        console.log((0,_swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(event.target[3].value));\n                        newFileVersion = {\n                            artistName: event.target[0].value,\n                            songName: event.target[1].value,\n                            fileVersionName: event.target[2].value,\n                            dateAdded: new Date(),\n                            revisionNote: event.target[4].value,\n                            jobType: event.target[5].value\n                        };\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.artistName); // create reference to document\n                        _ctx.next = 8;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 8:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                            tempArtistSongsArray[props.songIndex].fileVersions.push(newFileVersion);\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                        // tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array\n                        // console.log(tempArtistSongsArray)\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addFileVersion(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"add a file version:\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                onSubmit: addFileVersion,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"artistName\",\n                        name: \"artistName\",\n                        defaultValue: props.artistName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"songName\",\n                        name: \"songName\",\n                        defaultValue: props.songData.songMetadata.songName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"fileVersionName\",\n                        children: \"file version name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"fileVersionName\",\n                        name: \"fileVersionName\",\n                        defaultValue: \"filenamegoeshere\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"dateAdded\",\n                        name: \"dateAdded\",\n                        defaultValue: new Date()\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"revisionNote\",\n                        children: \"revisionNote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"revisionNote\",\n                        name: \"revisionNote\",\n                        defaultValue: \"no revision notes yet!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"jobType\",\n                        children: \"jobType\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"jobTyper\",\n                        name: \"jobType\",\n                        defaultValue: \"mix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"fileSelectionButton\",\n                        children: \"Select file...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"fileSelectionButton\",\n                        type: \"file\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_c = AddFileVersion;\nvar _c;\n$RefreshReg$(_c, \"AddFileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FkZEZpbGVWZXJzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBZ0Q7QUFDd0M7QUFDN0I7QUFFNUMsU0FBU1ksY0FBYyxDQUFDQyxLQUFLLEVBQUU7SUFDMUMsb0RBQW9EO0lBR3BELElBQU1DLGNBQWM7bUJBQUcsMlBBQU9DLEtBQUssRUFBSztnQkFJOUJDLGNBQWMsRUFTaEJDLG9CQUFvQixFQUVsQkMsTUFBTSxFQUNOQyxPQUFPOzs7O3dCQWZiSixLQUFLLENBQUNLLGNBQWMsRUFBRTt3QkFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO3dCQUNwQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0VBQTRCLENBQXJCUCxLQUFLLENBQUNRLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxFQUFDO3dCQUNuQ1IsY0FBYyxHQUFHOzRCQUNuQlMsVUFBVSxFQUFFVixLQUFLLENBQUNRLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSzs0QkFDakNFLFFBQVEsRUFBRVgsS0FBSyxDQUFDUSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUs7NEJBQy9CRyxlQUFlLEVBQUVaLEtBQUssQ0FBQ1EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLOzRCQUN0Q0ksU0FBUyxFQUFFLElBQUlDLElBQUksRUFBRTs0QkFDckJDLFlBQVksRUFBRWYsS0FBSyxDQUFDUSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUs7NEJBQ25DTyxPQUFPLEVBQUVoQixLQUFLLENBQUNRLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSzt5QkFDakM7eUJBRXVCO3dCQUVsQk4sTUFBTSxHQUFHYix1REFBRyxDQUFDSSxnREFBRSxFQUFFLFNBQVMsRUFBRUksS0FBSyxDQUFDWSxVQUFVLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7K0JBQzlEbkIsMERBQU0sQ0FBQ1ksTUFB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QUFDLGdCQUFjOzs7Ozs0QkFBUTtrQ0FDM0QsOERBQUNWLE9BQUs7d0JBQUNFLEVBQUUsRUFBQyxxQkFBcUI7d0JBQUNELElBQUksRUFBQyxNQUFNOzs7Ozs0QkFBUztrQ0FFcEQsOERBQUNVLFFBQU07d0JBQUNWLElBQUksRUFBQyxRQUFRO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozs7b0JBQ2xDOzs7Ozs7WUFDSixDQUNSO0NBQ0Y7QUFsRXVCbkMsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FkZEZpbGVWZXJzaW9uLmpzP2NkMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRGaWxlVmVyc2lvbihwcm9wcykge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZSlcblxuXG4gICAgY29uc3QgYWRkRmlsZVZlcnNpb24gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZygnYWRkIGZpbGUgdmVyc2lvbiBoZXJlJylcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGV2ZW50LnRhcmdldFszXS52YWx1ZSlcbiAgICAgICAgY29uc3QgbmV3RmlsZVZlcnNpb24gPSB7XG4gICAgICAgICAgICBhcnRpc3ROYW1lOiBldmVudC50YXJnZXRbMF0udmFsdWUsXG4gICAgICAgICAgICBzb25nTmFtZTogZXZlbnQudGFyZ2V0WzFdLnZhbHVlLFxuICAgICAgICAgICAgZmlsZVZlcnNpb25OYW1lOiBldmVudC50YXJnZXRbMl0udmFsdWUsXG4gICAgICAgICAgICBkYXRlQWRkZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICByZXZpc2lvbk5vdGU6IGV2ZW50LnRhcmdldFs0XS52YWx1ZSxcbiAgICAgICAgICAgIGpvYlR5cGU6IGV2ZW50LnRhcmdldFs1XS52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0ZpbGVWZXJzaW9uKVxuICAgICAgICBsZXQgdGVtcEFydGlzdFNvbmdzQXJyYXlcblxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYXJ0aXN0c1wiLCBwcm9wcy5hcnRpc3ROYW1lKTsgLy8gY3JlYXRlIHJlZmVyZW5jZSB0byBkb2N1bWVudFxuICAgICAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7IC8vIGdldCBjdXJyZW50IGRvY3VtZW50cyBkYXRhXG4gICAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7IC8vIGlmIHRoZSBkb2N1bWVudCBleGlzdHNcbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5ID0gKGRvY1NuYXAuZGF0YSgpLnNvbmdzKSAvLyBzdG9yZSBkb2N1bWVudCBkYXRhIGluIHNjb3BlZCBsb2NhbCBhcnJheVxuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcEFydGlzdFNvbmdzQXJyYXlbcHJvcHMuc29uZ0luZGV4XS5maWxlVmVyc2lvbnMpXG4gICAgICAgICAgICB0ZW1wQXJ0aXN0U29uZ3NBcnJheVtwcm9wcy5zb25nSW5kZXhdLmZpbGVWZXJzaW9ucy5wdXNoKG5ld0ZpbGVWZXJzaW9uKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcEFydGlzdFNvbmdzQXJyYXlbcHJvcHMuc29uZ0luZGV4XS5maWxlVmVyc2lvbnMpXG4gICAgICAgICAgICAvLyB0ZW1wQXJ0aXN0U29uZ3NBcnJheS5wdXNoKG5ld1NvbmdEYXRhRnJvbUZvcm1Ub0FkZCkgLy8gcHVzaCB0aGUgc29uZyB3ZSBhcmUgYWRkaW5nIGludG8gdGhhdCBhcnJheVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcEFydGlzdFNvbmdzQXJyYXkpXG4gICAgICAgICAgfVxuICAgICAgICB1cGRhdGVEb2MoZG9jUmVmLCB7IC8vIHVwZGF0ZSB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgdXBkYXRlZCBhcnJheVxuICAgICAgICAgICAgc29uZ3M6IHRlbXBBcnRpc3RTb25nc0FycmF5XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nbGlnaHRCb3JkZXInPlxuICAgICAgICA8aDM+YWRkIGEgZmlsZSB2ZXJzaW9uOjwvaDM+XG4gICAgICAgIDxmb3JtIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319IG9uU3VibWl0PXthZGRGaWxlVmVyc2lvbn0+XG5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nYXJ0aXN0TmFtZSc+YXJ0aXN0TmFtZTwvbGFiZWw+ICovfVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2hpZGRlbicgaWQ9J2FydGlzdE5hbWUnIG5hbWU9J2FydGlzdE5hbWUnIGRlZmF1bHRWYWx1ZT17cHJvcHMuYXJ0aXN0TmFtZX0gcmVhZE9ubHkgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J3NvbmdOYW1lJz5zb25nTmFtZTwvbGFiZWw+ICovfVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2hpZGRlbicgaWQ9J3NvbmdOYW1lJyBuYW1lPSdzb25nTmFtZScgZGVmYXVsdFZhbHVlPXtwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWV9IHJlYWRPbmx5IHJlcXVpcmVkLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpbGVWZXJzaW9uTmFtZSc+ZmlsZSB2ZXJzaW9uIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdmaWxlVmVyc2lvbk5hbWUnIG5hbWU9J2ZpbGVWZXJzaW9uTmFtZScgZGVmYXVsdFZhbHVlPSdmaWxlbmFtZWdvZXNoZXJlJyByZXF1aXJlZC8+XG5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nZGF0ZUFkZGVkJz5kYXRlQWRkZWQ8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIGlkPSdkYXRlQWRkZWQnIG5hbWU9J2RhdGVBZGRlZCcgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSgpfS8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdyZXZpc2lvbk5vdGUnPnJldmlzaW9uTm90ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3JldmlzaW9uTm90ZScgbmFtZT0ncmV2aXNpb25Ob3RlJyBkZWZhdWx0VmFsdWU9J25vIHJldmlzaW9uIG5vdGVzIHlldCEnLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2pvYlR5cGUnPmpvYlR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdqb2JUeXBlcicgbmFtZT0nam9iVHlwZScgZGVmYXVsdFZhbHVlPSdtaXgnLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpbGVTZWxlY3Rpb25CdXR0b24nPlNlbGVjdCBmaWxlLi4uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD0nZmlsZVNlbGVjdGlvbkJ1dHRvbicgdHlwZT0nZmlsZSc+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsIkFkZEZpbGVWZXJzaW9uIiwicHJvcHMiLCJhZGRGaWxlVmVyc2lvbiIsImV2ZW50IiwibmV3RmlsZVZlcnNpb24iLCJ0ZW1wQXJ0aXN0U29uZ3NBcnJheSIsImRvY1JlZiIsImRvY1NuYXAiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImFydGlzdE5hbWUiLCJzb25nTmFtZSIsImZpbGVWZXJzaW9uTmFtZSIsImRhdGVBZGRlZCIsIkRhdGUiLCJyZXZpc2lvbk5vdGUiLCJqb2JUeXBlIiwiZXhpc3RzIiwiZGF0YSIsInNvbmdzIiwic29uZ0luZGV4IiwiZmlsZVZlcnNpb25zIiwicHVzaCIsIm1haW4iLCJjbGFzc05hbWUiLCJoMyIsImZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsInJlcXVpcmVkIiwic29uZ0RhdGEiLCJzb25nTWV0YWRhdGEiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AddFileVersion.js\n"));

/***/ })

});