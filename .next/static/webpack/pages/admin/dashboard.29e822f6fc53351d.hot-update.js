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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\nfunction AddFileVersion(props) {\n    // console.log(props.songData.songMetadata.songName)\n    var addFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var fileToUpload, fileNameRegexed, folderRef, newFileVersion, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        fileToUpload = event.target[6].files[0];\n                        fileNameRegexed = fileToUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, \"\");\n                        folderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, \"masters/\".concat(fileNameRegexed));\n                        _ctx.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytes)(folderRef, fileToUpload).then(function(snapshot) {\n                            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(snapshot.ref).then(function(url) {\n                                console.log(url);\n                            });\n                        });\n                    case 6:\n                        newFileVersion = {\n                            artistName: event.target[0].value,\n                            songName: event.target[1].value,\n                            fileVersionName: event.target[2].value,\n                            dateAdded: new Date(),\n                            revisionNote: event.target[4].value,\n                            jobType: event.target[5].value\n                        };\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.artistName); // create reference to document\n                        _ctx.next = 11;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 11:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                            tempArtistSongsArray[props.songIndex].fileVersions.push(newFileVersion);\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                        // tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array\n                        // console.log(tempArtistSongsArray)\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addFileVersion(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"add a file version:\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                onSubmit: addFileVersion,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"artistName\",\n                        name: \"artistName\",\n                        defaultValue: props.artistName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"songName\",\n                        name: \"songName\",\n                        defaultValue: props.songData.songMetadata.songName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"fileVersionName\",\n                        children: \"file version name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"fileVersionName\",\n                        name: \"fileVersionName\",\n                        defaultValue: \"filenamegoeshere\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"dateAdded\",\n                        name: \"dateAdded\",\n                        defaultValue: new Date()\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"revisionNote\",\n                        children: \"revisionNote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"revisionNote\",\n                        name: \"revisionNote\",\n                        defaultValue: \"no revision notes yet!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"jobType\",\n                        children: \"jobType\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"jobTyper\",\n                        name: \"jobType\",\n                        defaultValue: \"mix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"fileSelectionButton\",\n                        children: \"Select file...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"fileSelectionButton\",\n                        type: \"file\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n};\n_c = AddFileVersion;\nvar _c;\n$RefreshReg$(_c, \"AddFileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZOzs7Ozs0QkFBUTtrQ0FDbEQsOERBQUNULE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsY0FBYzt3QkFBQ2hDLElBQUksRUFBQyxjQUFjO3dCQUFDaUMsWUFBWSxFQUFDLHdCQUF3Qjs7Ozs7NEJBQUU7a0NBRWhHLDhEQUFDSyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsU0FBUztrQ0FBQyxTQUFPOzs7Ozs0QkFBUTtrQ0FDeEMsOERBQUNULE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsVUFBVTt3QkFBQ2hDLElBQUksRUFBQyxTQUFTO3dCQUFDaUMsWUFBWSxFQUFDLEtBQUs7Ozs7OzRCQUFFO2tDQUVwRSw4REFBQ0ssT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLHFCQUFxQjtrQ0FBQyxnQkFBYzs7Ozs7NEJBQVE7a0NBQzNELDhEQUFDVCxPQUFLO3dCQUFDRSxFQUFFLEVBQUMscUJBQXFCO3dCQUFDRCxJQUFJLEVBQUMsTUFBTTt3QkFBQ0ksUUFBUTs7Ozs7NEJBQVM7a0NBRTdELDhEQUFDSyxRQUFNO3dCQUFDVCxJQUFJLEVBQUMsUUFBUTtrQ0FBQyxRQUFNOzs7Ozs0QkFBUzs7Ozs7O29CQUNsQzs7Ozs7O1lBQ0osQ0FDUjtDQUNGO0FBL0V1QjdDLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9BZGRGaWxlVmVyc2lvbi5qcz9jZDEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIGdldERvYywgc2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UtY29uZmlnJztcbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXMsIGdldERvd25sb2FkVVJMLCBsaXN0QWxsLCBsaXN0LCBnZXRTdG9yYWdlLCBkZWxldGVPYmplY3R9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEZpbGVWZXJzaW9uKHByb3BzKSB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lKVxuXG5cbiAgICBjb25zdCBhZGRGaWxlVmVyc2lvbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGZpbGVUb1VwbG9hZCA9IGV2ZW50LnRhcmdldFs2XS5maWxlc1swXVxuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzZdLmZpbGVzWzBdLm5hbWUpXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lUmVnZXhlZCA9IGZpbGVUb1VwbG9hZC5uYW1lLnJlcGxhY2UoLy53YXZ8Lm1wM3wuanBnfC5qcGVnLywgJycpXG4gICAgICAgIGNvbnN0IGZvbGRlclJlZiA9IHJlZihzdG9yYWdlLCBgbWFzdGVycy8ke2ZpbGVOYW1lUmVnZXhlZH1gKVxuICAgICAgICBhd2FpdCB1cGxvYWRCeXRlcyhmb2xkZXJSZWYsIGZpbGVUb1VwbG9hZCkudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICBnZXREb3dubG9hZFVSTChzbmFwc2hvdC5yZWYpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0ZpbGVWZXJzaW9uID0ge1xuICAgICAgICAgICAgYXJ0aXN0TmFtZTogZXZlbnQudGFyZ2V0WzBdLnZhbHVlLFxuICAgICAgICAgICAgc29uZ05hbWU6IGV2ZW50LnRhcmdldFsxXS52YWx1ZSxcbiAgICAgICAgICAgIGZpbGVWZXJzaW9uTmFtZTogZXZlbnQudGFyZ2V0WzJdLnZhbHVlLFxuICAgICAgICAgICAgZGF0ZUFkZGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgcmV2aXNpb25Ob3RlOiBldmVudC50YXJnZXRbNF0udmFsdWUsXG4gICAgICAgICAgICBqb2JUeXBlOiBldmVudC50YXJnZXRbNV0udmFsdWVcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdGaWxlVmVyc2lvbilcbiAgICAgICAgbGV0IHRlbXBBcnRpc3RTb25nc0FycmF5XG5cbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcImFydGlzdHNcIiwgcHJvcHMuYXJ0aXN0TmFtZSk7IC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gZG9jdW1lbnRcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpOyAvLyBnZXQgY3VycmVudCBkb2N1bWVudHMgZGF0YVxuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkgeyAvLyBpZiB0aGUgZG9jdW1lbnQgZXhpc3RzXG4gICAgICAgICAgICB0ZW1wQXJ0aXN0U29uZ3NBcnJheSA9IChkb2NTbmFwLmRhdGEoKS5zb25ncykgLy8gc3RvcmUgZG9jdW1lbnQgZGF0YSBpbiBzY29wZWQgbG9jYWwgYXJyYXlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBBcnRpc3RTb25nc0FycmF5W3Byb3BzLnNvbmdJbmRleF0uZmlsZVZlcnNpb25zKVxuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXlbcHJvcHMuc29uZ0luZGV4XS5maWxlVmVyc2lvbnMucHVzaChuZXdGaWxlVmVyc2lvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBBcnRpc3RTb25nc0FycmF5W3Byb3BzLnNvbmdJbmRleF0uZmlsZVZlcnNpb25zKVxuICAgICAgICAgICAgLy8gdGVtcEFydGlzdFNvbmdzQXJyYXkucHVzaChuZXdTb25nRGF0YUZyb21Gb3JtVG9BZGQpIC8vIHB1c2ggdGhlIHNvbmcgd2UgYXJlIGFkZGluZyBpbnRvIHRoYXQgYXJyYXlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlbXBBcnRpc3RTb25nc0FycmF5KVxuICAgICAgICAgIH1cbiAgICAgICAgdXBkYXRlRG9jKGRvY1JlZiwgeyAvLyB1cGRhdGUgdGhlIGRvY3VtZW50IHdpdGggdGhlIHVwZGF0ZWQgYXJyYXlcbiAgICAgICAgICAgIHNvbmdzOiB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J2xpZ2h0Qm9yZGVyJz5cbiAgICAgICAgPGgzPmFkZCBhIGZpbGUgdmVyc2lvbjo8L2gzPlxuICAgICAgICA8Zm9ybSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fSBvblN1Ym1pdD17YWRkRmlsZVZlcnNpb259PlxuXG4gICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J2FydGlzdE5hbWUnPmFydGlzdE5hbWU8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIGlkPSdhcnRpc3ROYW1lJyBuYW1lPSdhcnRpc3ROYW1lJyBkZWZhdWx0VmFsdWU9e3Byb3BzLmFydGlzdE5hbWV9IHJlYWRPbmx5IHJlcXVpcmVkLz5cblxuICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPSdzb25nTmFtZSc+c29uZ05hbWU8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIGlkPSdzb25nTmFtZScgbmFtZT0nc29uZ05hbWUnIGRlZmF1bHRWYWx1ZT17cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfSByZWFkT25seSByZXF1aXJlZC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlVmVyc2lvbk5hbWUnPmZpbGUgdmVyc2lvbiBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZmlsZVZlcnNpb25OYW1lJyBuYW1lPSdmaWxlVmVyc2lvbk5hbWUnIGRlZmF1bHRWYWx1ZT0nZmlsZW5hbWVnb2VzaGVyZScgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J2RhdGVBZGRlZCc+ZGF0ZUFkZGVkPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyBpZD0nZGF0ZUFkZGVkJyBuYW1lPSdkYXRlQWRkZWQnIGRlZmF1bHRWYWx1ZT17bmV3IERhdGUoKX0vPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncmV2aXNpb25Ob3RlJz5yZXZpc2lvbk5vdGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdyZXZpc2lvbk5vdGUnIG5hbWU9J3JldmlzaW9uTm90ZScgZGVmYXVsdFZhbHVlPSdubyByZXZpc2lvbiBub3RlcyB5ZXQhJy8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdqb2JUeXBlJz5qb2JUeXBlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nam9iVHlwZXInIG5hbWU9J2pvYlR5cGUnIGRlZmF1bHRWYWx1ZT0nbWl4Jy8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlU2VsZWN0aW9uQnV0dG9uJz5TZWxlY3QgZmlsZS4uLjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9J2ZpbGVTZWxlY3Rpb25CdXR0b24nIHR5cGU9J2ZpbGUnIHJlcXVpcmVkPjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwidXBkYXRlRG9jIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJyZWYiLCJ1cGxvYWRCeXRlcyIsImdldERvd25sb2FkVVJMIiwibGlzdEFsbCIsImxpc3QiLCJnZXRTdG9yYWdlIiwiZGVsZXRlT2JqZWN0IiwiQWRkRmlsZVZlcnNpb24iLCJwcm9wcyIsImFkZEZpbGVWZXJzaW9uIiwiZXZlbnQiLCJmaWxlVG9VcGxvYWQiLCJmaWxlTmFtZVJlZ2V4ZWQiLCJmb2xkZXJSZWYiLCJuZXdGaWxlVmVyc2lvbiIsInRlbXBBcnRpc3RTb25nc0FycmF5IiwiZG9jUmVmIiwiZG9jU25hcCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwicmVwbGFjZSIsInN0b3JhZ2UiLCJ0aGVuIiwic25hcHNob3QiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiYXJ0aXN0TmFtZSIsInZhbHVlIiwic29uZ05hbWUiLCJmaWxlVmVyc2lvbk5hbWUiLCJkYXRlQWRkZWQiLCJEYXRlIiwicmV2aXNpb25Ob3RlIiwiam9iVHlwZSIsImV4aXN0cyIsImRhdGEiLCJzb25ncyIsInNvbmdJbmRleCIsImZpbGVWZXJzaW9ucyIsInB1c2giLCJtYWluIiwiY2xhc3NOYW1lIiwiaDMiLCJmb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsInJlcXVpcmVkIiwic29uZ0RhdGEiLCJzb25nTWV0YWRhdGEiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AddFileVersion.js\n"));

/***/ })

});