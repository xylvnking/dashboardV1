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

/***/ "./pages/Components/ArtistOverview.js":
/*!********************************************!*\
  !*** ./pages/Components/ArtistOverview.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtistOverview; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Song2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Song2 */ \"./pages/Components/Song2.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ArtistOverview(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.artistData.songs), artistSongs = ref[0], setArtistSongs = ref[1];\n    var check = function() {\n        console.log(artistSongs);\n    };\n    var deleteSong = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(songIndexToRemove) {\n            var tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_5__.db, \"artists\", props.artistData.metadata.artistName); // create reference to document\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n                    case 4:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            tempArtistSongsArray.splice(songIndexToRemove, 1) // push the song we are adding into that array\n                            ;\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteSong(songIndexToRemove) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"show props from artists\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    artistSongs && // Object.keys(props.artistData.metadata).map((metadataField, index) => {\n                    // Object.keys(artistSongs.metadata).map((metadataField, index) => {\n                    artistSongs.metadata.map(function(metadataField, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                        children: metadataField\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: props.artistData.metadata[metadataField]\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {}, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            artistSongs && // props.artistData.songs.map((songData, songIndex) => {\n            artistSongs.map(function(songData, songIndex) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Song2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    songData: songData,\n                    songIndex: songIndex,\n                    deleteSong: deleteSong\n                }, songIndex, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/ArtistOverview.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(ArtistOverview, \"OhwSlhhi+3Pujy89MGwX45nDIuA=\");\n_c = ArtistOverview;\nvar _c;\n$RefreshReg$(_c, \"ArtistOverview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0FydGlzdE92ZXJ2aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBZ0Q7QUFDckI7QUFDNkQ7QUFDN0I7QUFFNUMsU0FBU2EsY0FBYyxDQUFDQyxLQUFLLEVBQUU7OztJQUUxQyxJQUFzQ2IsR0FBZ0MsR0FBaENBLCtDQUFRLENBQUNhLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLLENBQUMsRUFBL0RDLFdBQVcsR0FBb0JoQixHQUFnQyxHQUFwRCxFQUFFaUIsY0FBYyxHQUFJakIsR0FBZ0MsR0FBcEM7SUFFbEMsSUFBTWtCLEtBQUssR0FBRyxXQUFNO1FBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVyxDQUFDO0tBQzNCO0lBRUQsSUFBTUssVUFBVTttQkFBRywyUEFBT0MsaUJBQWlCLEVBQUs7Z0JBQ3hDQyxvQkFBb0IsRUFDbEJDLE1BQU0sRUFDTkMsT0FBTzs7Ozt5QkFGVzt3QkFDbEJELE1BQU0sR0FBR25CLHVEQUFHLENBQUNJLGdEQUFFLEVBQUUsU0FBUyxFQUFFSSxLQUFLLENBQUNDLFVBQVUsQ0FBQ1ksUUFBUSxDQUFDQyxVQUFVLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7K0JBQ2xGckIsMERBQU0sQ0FBQ2tCLE1BQU0sQ0FBQzs7d0JBQTlCQyxPQUFPLFlBQXVCO3dCQUNwQyxJQUFJQSxPQUFPLENBQUNHLE1BQU0sRUFBRSxFQUFFOzRCQUNsQkwsb0JBQW9CLEdBQUlFLE9BQU8sQ0FBQ0ksSUFBSSxFQUFFLENBQUNkLEtBQUssQ0FBRSw0Q0FBNEM7NEJBQTdDOzRCQUM3Q1Esb0JBQW9CLENBQUNPLE1BQU0sQ0FBQ1IsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsOENBQThDOzt5QkFDakc7d0JBQ0hkLDZEQUFTLENBQUNnQixNQUFNLEVBQUU7NEJBQ2RULEtBQUssRUFBRVEsb0JBQW9CO3lCQUM5QixDQUFDOzs7Ozs7U0FDTDt3QkFYS0YsVUFBVSxDQUFVQyxpQkFBaUI7OztPQVcxQztJQUVILHFCQUNFLDhEQUFDUyxNQUFJO1FBQUNDLFNBQVMsRUFBQyxhQUFhOzswQkFDekIsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTWhCLEtBQUssRUFBRTtpQkFBQTswQkFBRSx5QkFBdUI7Ozs7O29CQUFTOzBCQUNoRSw4REFBQ2lCLElBQUU7O29CQUVLbkIsV0FBVyxJQUNYLHlFQUF5RTtvQkFDekUsb0VBQW9FO29CQUNoRUEsV0FBVyxDQUFDVSxRQUFRLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxhQUFhLEVBQUVDLEtBQUssRUFBSzt3QkFDbkQscUJBQ0ksOERBQUNILElBQUU7OzhDQUNDLDhEQUFDSSxJQUFFOzhDQUFDLDRFQUFDQyxRQUFNO2tEQUFFSCxhQUFhOzs7Ozs2Q0FBVTs7Ozs7eUNBQUs7OENBQ3pDLDhEQUFDRSxJQUFFOzhDQUFFMUIsS0FBSyxDQUFDQyxVQUFVLENBQUNZLFFBQVEsQ0FBQ1csYUFBYSxDQUFDOzs7Ozt5Q0FBTTs4Q0FDbkQsOERBQUNJLElBQUU7Ozs7eUNBQUc7OzJCQUhESCxLQUFLOzs7O2lDQUlULENBQ1I7cUJBQ0osQ0FBQztrQ0FFTiw4REFBQ0MsSUFBRTs7Ozs0QkFBTTs7Ozs7O29CQUNSO1lBRUR2QixXQUFXLElBQ1gsd0RBQXdEO1lBQ3BEQSxXQUFXLENBQUNvQixHQUFHLENBQUMsU0FBQ00sUUFBUSxFQUFFQyxTQUFTLEVBQUs7Z0JBQ3pDLHFCQUNJLDhEQUFDekMsOENBQUs7b0JBRUZ3QyxRQUFRLEVBQUVBLFFBQVE7b0JBQ2xCQyxTQUFTLEVBQUVBLFNBQVM7b0JBQ3BCdEIsVUFBVSxFQUFFQSxVQUFVO21CQUhqQnNCLFNBQVM7Ozs7eUJBSWhCLENBQ0w7YUFDSixDQUFDOzs7Ozs7WUFHSCxDQUNSO0NBQ0Y7R0ExRHVCL0IsY0FBYztBQUFkQSxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQXJ0aXN0T3ZlcnZpZXcuanM/NjAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTb25nMiBmcm9tICcuL1NvbmcyJ1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIGdldERvYywgc2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UtY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aXN0T3ZlcnZpZXcocHJvcHMpIHtcblxuICAgIGNvbnN0IFthcnRpc3RTb25ncywgc2V0QXJ0aXN0U29uZ3NdID0gdXNlU3RhdGUocHJvcHMuYXJ0aXN0RGF0YS5zb25ncylcblxuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnRpc3RTb25ncylcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVTb25nID0gYXN5bmMgKHNvbmdJbmRleFRvUmVtb3ZlKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYXJ0aXN0c1wiLCBwcm9wcy5hcnRpc3REYXRhLm1ldGFkYXRhLmFydGlzdE5hbWUpOyAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTsgLy8gZ2V0IGN1cnJlbnQgZG9jdW1lbnRzIGRhdGFcbiAgICAgICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHsgLy8gaWYgdGhlIGRvY3VtZW50IGV4aXN0c1xuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkgPSAoZG9jU25hcC5kYXRhKCkuc29uZ3MpIC8vIHN0b3JlIGRvY3VtZW50IGRhdGEgaW4gc2NvcGVkIGxvY2FsIGFycmF5XG4gICAgICAgICAgICB0ZW1wQXJ0aXN0U29uZ3NBcnJheS5zcGxpY2Uoc29uZ0luZGV4VG9SZW1vdmUsIDEpIC8vIHB1c2ggdGhlIHNvbmcgd2UgYXJlIGFkZGluZyBpbnRvIHRoYXQgYXJyYXlcbiAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZURvYyhkb2NSZWYsIHtcbiAgICAgICAgICAgIHNvbmdzOiB0ZW1wQXJ0aXN0U29uZ3NBcnJheVxuICAgICAgICB9KVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nbGlnaHRCb3JkZXInPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKCl9PnNob3cgcHJvcHMgZnJvbSBhcnRpc3RzPC9idXR0b24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcnRpc3RTb25ncyAmJlxuICAgICAgICAgICAgICAgIC8vIE9iamVjdC5rZXlzKHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEpLm1hcCgobWV0YWRhdGFGaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBPYmplY3Qua2V5cyhhcnRpc3RTb25ncy5tZXRhZGF0YSkubWFwKChtZXRhZGF0YUZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcnRpc3RTb25ncy5tZXRhZGF0YS5tYXAoKG1ldGFkYXRhRmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+e21ldGFkYXRhRmllbGR9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3Byb3BzLmFydGlzdERhdGEubWV0YWRhdGFbbWV0YWRhdGFGaWVsZF19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFydGlzdFNvbmdzICYmXG4gICAgICAgICAgICAvLyBwcm9wcy5hcnRpc3REYXRhLnNvbmdzLm1hcCgoc29uZ0RhdGEsIHNvbmdJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGFydGlzdFNvbmdzLm1hcCgoc29uZ0RhdGEsIHNvbmdJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTb25nMiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c29uZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgc29uZ0RhdGE9e3NvbmdEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29uZ0luZGV4PXtzb25nSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTb25nPXtkZWxldGVTb25nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTb25nMiIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsIkFydGlzdE92ZXJ2aWV3IiwicHJvcHMiLCJhcnRpc3REYXRhIiwic29uZ3MiLCJhcnRpc3RTb25ncyIsInNldEFydGlzdFNvbmdzIiwiY2hlY2siLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlU29uZyIsInNvbmdJbmRleFRvUmVtb3ZlIiwidGVtcEFydGlzdFNvbmdzQXJyYXkiLCJkb2NSZWYiLCJkb2NTbmFwIiwibWV0YWRhdGEiLCJhcnRpc3ROYW1lIiwiZXhpc3RzIiwiZGF0YSIsInNwbGljZSIsIm1haW4iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJtZXRhZGF0YUZpZWxkIiwiaW5kZXgiLCJsaSIsInN0cm9uZyIsImJyIiwic29uZ0RhdGEiLCJzb25nSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/ArtistOverview.js\n"));

/***/ })

});