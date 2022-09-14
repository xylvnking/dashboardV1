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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddFileVersion; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\nfunction AddFileVersion(props) {\n    // console.log(props.songData.songMetadata.songName)\n    var addFileVersion = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var fileToUpload, fileNameRegexed, folderRef, newFileVersion, tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        fileToUpload = event.target[6].files[0];\n                        fileNameRegexed = fileToUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, \"\");\n                        folderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.storage, \"masters/\".concat(fileNameRegexed));\n                        _ctx.next = 6;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadBytes)(folderRef, fileToUpload).then(function(snapshot) {\n                            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(snapshot.ref).then(function(url) {\n                                console.log(url);\n                            });\n                        });\n                    case 6:\n                        newFileVersion = {\n                            artistName: event.target[0].value,\n                            songName: event.target[1].value,\n                            // fileVersionName: event.target[2].value,\n                            fileVersionName: fileNameRegexed,\n                            dateAdded: new Date(),\n                            revisionNote: event.target[4].value,\n                            jobType: event.target[5].value\n                        };\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.artistName); // create reference to document\n                        _ctx.next = 11;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 11:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                            tempArtistSongsArray[props.songIndex].fileVersions.push(newFileVersion);\n                            console.log(tempArtistSongsArray[props.songIndex].fileVersions);\n                        // tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array\n                        // console.log(tempArtistSongsArray)\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addFileVersion(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"add a file version:\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                onSubmit: addFileVersion,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"artistName\",\n                        name: \"artistName\",\n                        defaultValue: props.artistName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"songName\",\n                        name: \"songName\",\n                        defaultValue: props.songData.songMetadata.songName,\n                        readOnly: true,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"fileVersionName\",\n                        name: \"fileVersionName\",\n                        defaultValue: \"filenamegoeshere\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"dateAdded\",\n                        name: \"dateAdded\",\n                        defaultValue: new Date()\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"revisionNote\",\n                        name: \"revisionNote\",\n                        defaultValue: \"no revision notes yet!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"hidden\",\n                        id: \"jobTyper\",\n                        name: \"jobType\",\n                        defaultValue: \"mix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"fileSelectionButton\",\n                        type: \"file\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/AddFileVersion.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n};\n_c = AddFileVersion;\nvar _c;\n$RefreshReg$(_c, \"AddFileVersion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO3dCQUFDQyxJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsRUFBRSxFQUFDLFVBQVU7d0JBQUMvQixJQUFJLEVBQUMsU0FBUzt3QkFBQ2dDLFlBQVksRUFBQyxLQUFLOzs7Ozs0QkFBRTtrQ0FHdEUsOERBQUNILE9BQUs7d0JBQUNFLEVBQUUsRUFBQyxxQkFBcUI7d0JBQUNELElBQUksRUFBQyxNQUFNO3dCQUFDSSxRQUFROzs7Ozs0QkFBUztrQ0FFN0QsOERBQUNHLFFBQU07d0JBQUNQLElBQUksRUFBQyxRQUFRO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozs7b0JBQ2xDOzs7Ozs7WUFDSixDQUNSO0NBQ0Y7QUFoRnVCNUMsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FkZEZpbGVWZXJzaW9uLmpzP2NkMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIsIHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgcmVmLCB1cGxvYWRCeXRlcywgZ2V0RG93bmxvYWRVUkwsIGxpc3RBbGwsIGxpc3QsIGdldFN0b3JhZ2UsIGRlbGV0ZU9iamVjdH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRmlsZVZlcnNpb24ocHJvcHMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuc29uZ05hbWUpXG5cblxuICAgIGNvbnN0IGFkZEZpbGVWZXJzaW9uID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZmlsZVRvVXBsb2FkID0gZXZlbnQudGFyZ2V0WzZdLmZpbGVzWzBdXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXRbNl0uZmlsZXNbMF0ubmFtZSlcbiAgICAgICAgY29uc3QgZmlsZU5hbWVSZWdleGVkID0gZmlsZVRvVXBsb2FkLm5hbWUucmVwbGFjZSgvLndhdnwubXAzfC5qcGd8LmpwZWcvLCAnJylcbiAgICAgICAgY29uc3QgZm9sZGVyUmVmID0gcmVmKHN0b3JhZ2UsIGBtYXN0ZXJzLyR7ZmlsZU5hbWVSZWdleGVkfWApXG4gICAgICAgIGF3YWl0IHVwbG9hZEJ5dGVzKGZvbGRlclJlZiwgZmlsZVRvVXBsb2FkKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIGdldERvd25sb2FkVVJMKHNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3RmlsZVZlcnNpb24gPSB7XG4gICAgICAgICAgICBhcnRpc3ROYW1lOiBldmVudC50YXJnZXRbMF0udmFsdWUsXG4gICAgICAgICAgICBzb25nTmFtZTogZXZlbnQudGFyZ2V0WzFdLnZhbHVlLFxuICAgICAgICAgICAgLy8gZmlsZVZlcnNpb25OYW1lOiBldmVudC50YXJnZXRbMl0udmFsdWUsXG4gICAgICAgICAgICBmaWxlVmVyc2lvbk5hbWU6IGZpbGVOYW1lUmVnZXhlZCxcbiAgICAgICAgICAgIGRhdGVBZGRlZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHJldmlzaW9uTm90ZTogZXZlbnQudGFyZ2V0WzRdLnZhbHVlLFxuICAgICAgICAgICAgam9iVHlwZTogZXZlbnQudGFyZ2V0WzVdLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3RmlsZVZlcnNpb24pXG4gICAgICAgIGxldCB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuXG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJhcnRpc3RzXCIsIHByb3BzLmFydGlzdE5hbWUpOyAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTsgLy8gZ2V0IGN1cnJlbnQgZG9jdW1lbnRzIGRhdGFcbiAgICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIHN0b3JlIGRvY3VtZW50IGRhdGEgaW4gc2NvcGVkIGxvY2FsIGFycmF5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheVtwcm9wcy5zb25nSW5kZXhdLmZpbGVWZXJzaW9ucylcbiAgICAgICAgICAgIHRlbXBBcnRpc3RTb25nc0FycmF5W3Byb3BzLnNvbmdJbmRleF0uZmlsZVZlcnNpb25zLnB1c2gobmV3RmlsZVZlcnNpb24pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheVtwcm9wcy5zb25nSW5kZXhdLmZpbGVWZXJzaW9ucylcbiAgICAgICAgICAgIC8vIHRlbXBBcnRpc3RTb25nc0FycmF5LnB1c2gobmV3U29uZ0RhdGFGcm9tRm9ybVRvQWRkKSAvLyBwdXNoIHRoZSBzb25nIHdlIGFyZSBhZGRpbmcgaW50byB0aGF0IGFycmF5XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wQXJ0aXN0U29uZ3NBcnJheSlcbiAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHsgLy8gdXBkYXRlIHRoZSBkb2N1bWVudCB3aXRoIHRoZSB1cGRhdGVkIGFycmF5XG4gICAgICAgICAgICBzb25nczogdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDxoMz5hZGQgYSBmaWxlIHZlcnNpb246PC9oMz5cbiAgICAgICAgPGZvcm0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0gb25TdWJtaXQ9e2FkZEZpbGVWZXJzaW9ufT5cblxuICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPSdhcnRpc3ROYW1lJz5hcnRpc3ROYW1lPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyBpZD0nYXJ0aXN0TmFtZScgbmFtZT0nYXJ0aXN0TmFtZScgZGVmYXVsdFZhbHVlPXtwcm9wcy5hcnRpc3ROYW1lfSByZWFkT25seSByZXF1aXJlZC8+XG5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nc29uZ05hbWUnPnNvbmdOYW1lPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyBpZD0nc29uZ05hbWUnIG5hbWU9J3NvbmdOYW1lJyBkZWZhdWx0VmFsdWU9e3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX0gcmVhZE9ubHkgcmVxdWlyZWQvPlxuXG4gICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J2ZpbGVWZXJzaW9uTmFtZSc+ZmlsZSB2ZXJzaW9uIG5hbWU8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIGlkPSdmaWxlVmVyc2lvbk5hbWUnIG5hbWU9J2ZpbGVWZXJzaW9uTmFtZScgZGVmYXVsdFZhbHVlPSdmaWxlbmFtZWdvZXNoZXJlJyByZXF1aXJlZC8+XG5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nZGF0ZUFkZGVkJz5kYXRlQWRkZWQ8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIGlkPSdkYXRlQWRkZWQnIG5hbWU9J2RhdGVBZGRlZCcgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSgpfS8+XG5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0ncmV2aXNpb25Ob3RlJz5yZXZpc2lvbk5vdGU8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdoaWRkZW4nIGlkPSdyZXZpc2lvbk5vdGUnIG5hbWU9J3JldmlzaW9uTm90ZScgZGVmYXVsdFZhbHVlPSdubyByZXZpc2lvbiBub3RlcyB5ZXQhJy8+XG5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nam9iVHlwZSc+am9iVHlwZTwvbGFiZWw+ICovfVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2hpZGRlbicgaWQ9J2pvYlR5cGVyJyBuYW1lPSdqb2JUeXBlJyBkZWZhdWx0VmFsdWU9J21peCcvPlxuXG4gICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J2ZpbGVTZWxlY3Rpb25CdXR0b24nPlNlbGVjdCBmaWxlLi4uPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8aW5wdXQgaWQ9J2ZpbGVTZWxlY3Rpb25CdXR0b24nIHR5cGU9J2ZpbGUnIHJlcXVpcmVkPjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZG9jIiwiZ2V0RG9jIiwic2V0RG9jIiwidXBkYXRlRG9jIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiLCJzdG9yYWdlIiwicmVmIiwidXBsb2FkQnl0ZXMiLCJnZXREb3dubG9hZFVSTCIsImxpc3RBbGwiLCJsaXN0IiwiZ2V0U3RvcmFnZSIsImRlbGV0ZU9iamVjdCIsIkFkZEZpbGVWZXJzaW9uIiwicHJvcHMiLCJhZGRGaWxlVmVyc2lvbiIsImV2ZW50IiwiZmlsZVRvVXBsb2FkIiwiZmlsZU5hbWVSZWdleGVkIiwiZm9sZGVyUmVmIiwibmV3RmlsZVZlcnNpb24iLCJ0ZW1wQXJ0aXN0U29uZ3NBcnJheSIsImRvY1JlZiIsImRvY1NuYXAiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsInJlcGxhY2UiLCJ0aGVuIiwic25hcHNob3QiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiYXJ0aXN0TmFtZSIsInZhbHVlIiwic29uZ05hbWUiLCJmaWxlVmVyc2lvbk5hbWUiLCJkYXRlQWRkZWQiLCJEYXRlIiwicmV2aXNpb25Ob3RlIiwiam9iVHlwZSIsImV4aXN0cyIsImRhdGEiLCJzb25ncyIsInNvbmdJbmRleCIsImZpbGVWZXJzaW9ucyIsInB1c2giLCJtYWluIiwiY2xhc3NOYW1lIiwiaDMiLCJmb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsInJlcXVpcmVkIiwic29uZ0RhdGEiLCJzb25nTWV0YWRhdGEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/AddFileVersion.js\n"));

/***/ })

});