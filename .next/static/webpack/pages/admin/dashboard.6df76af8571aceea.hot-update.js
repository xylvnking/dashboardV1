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

/***/ "./pages/Components/Song2.js":
/*!***********************************!*\
  !*** ./pages/Components/Song2.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Song2; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Song2(props) {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(props.songData), 2), songsData = ref[0], setSongsData = ref[1];\n    var deleteSong = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempArtistSongsArray, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\", props.songData.songMetadata.artistName); // create reference to document\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n                    case 4:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {\n                            tempArtistSongsArray = docSnap.data().songs // store document data in scoped local array\n                            ;\n                            console.log(tempArtistSongsArray);\n                            tempArtistSongsArray.splice(props.songIndex, 1) // push the song we are adding into that array\n                            ;\n                            console.log(tempArtistSongsArray);\n                        }\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(docRef, {\n                            songs: tempArtistSongsArray\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"lightBorder\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"song index is \",\n                        props.songIndex\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                Object.keys(props.songData.songMetadata).map(function(metadataField, metadataFieldIndex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                    children: metadataField\n                                }, void 0, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: props.songData.songMetadata[metadataField]\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                                lineNumber: 49,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, metadataFieldIndex, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                        lineNumber: 47,\n                        columnNumber: 25\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return deleteSong();\n                    },\n                    children: \"delete song\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/Song2.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(Song2, \"B5l0uSvsIEZGmO9ns5WLjbG0GMw=\");\n_c = Song2;\nvar _c;\n$RefreshReg$(_c, \"Song2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmcyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXlCO0FBRStEO0FBQzdCO0FBRzVDLFNBQVNVLEtBQUssQ0FBQ0MsS0FBSyxFQUFFOzs7SUFFakMsSUFBa0NYLEdBQThCLG9GQUE5QkEscURBQWMsQ0FBQ1csS0FBSyxDQUFDRSxRQUFRLENBQUMsTUFBekRDLFNBQVMsR0FBa0JkLEdBQThCLEdBQWhELEVBQUVlLFlBQVksR0FBSWYsR0FBOEIsR0FBbEM7SUFHOUIsSUFBTWdCLFVBQVU7bUJBQUcsNlBBQVk7Z0JBT3ZCQyxvQkFBb0IsRUFHbEJDLE1BQU0sRUFDTkMsT0FBTzs7Ozt5QkFKVzt3QkFHbEJELE1BQU0sR0FBR2YsdURBQUcsQ0FBQ0ksZ0RBQUUsRUFBRSxTQUFTLEVBQUVJLEtBQUssQ0FBQ0UsUUFBUSxDQUFDTyxZQUFZLENBQUNDLFVBQVUsQ0FBQyxDQUFDLENBQUMsK0JBQStCOzsrQkFDcEZqQiwwREFBTSxDQUFDYyxNQUFNLENBQUM7O3dCQUE5QkMsT0FBTyxZQUF1Qjt3QkFDcEMsSUFBSUEsT0FBTyxDQUFDRyxNQUFNLEVBQUUsRUFBRTs0QkFDbEJMLG9CQUFvQixHQUFJRSxPQUFPLENBQUNJLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUUsNENBQTRDOzRCQUE3Qzs0QkFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxvQkFBb0IsQ0FBQzs0QkFDakNBLG9CQUFvQixDQUFDVSxNQUFNLENBQUNoQixLQUFLLENBQUNpQixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsOENBQThDOzs0QkFDOUZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxvQkFBb0IsQ0FBQzt5QkFDbEM7d0JBQ0hYLDZEQUFTLENBQUNZLE1BQU0sRUFBRTs0QkFDZE0sS0FBSyxFQUFFUCxvQkFBb0I7eUJBQzlCLENBQUM7Ozs7OztTQUtMO3dCQXpCS0QsVUFBVTs7O09BeUJmO0lBRUgscUJBQ0UsOERBQUNhLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7a0JBQ3pCLDRFQUFDQyxJQUFFOzs4QkFFQyw4REFBQ0MsSUFBRTs7d0JBQUMsZ0JBQWM7d0JBQUNyQixLQUFLLENBQUNpQixTQUFTOzs7Ozs7d0JBQU07Z0JBRXBDSyxNQUFNLENBQUNDLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ0UsUUFBUSxDQUFDTyxZQUFZLENBQUMsQ0FBQ2UsR0FBRyxDQUFDLFNBQUNDLGFBQWEsRUFBRUMsa0JBQWtCLEVBQUs7b0JBQ2hGLHFCQUNJLDhEQUFDTixJQUFFOzswQ0FDQyw4REFBQ08sSUFBRTswQ0FBQyw0RUFBQ0MsUUFBTTs4Q0FBRUgsYUFBYTs7Ozs7eUNBQVU7Ozs7O3FDQUFLOzBDQUN6Qyw4REFBQ0UsSUFBRTswQ0FBRTNCLEtBQUssQ0FBQ0UsUUFBUSxDQUFDTyxZQUFZLENBQUNnQixhQUFhLENBQUM7Ozs7O3FDQUFNOzt1QkFGaERDLGtCQUFrQjs7Ozs2QkFHdEIsQ0FDUjtpQkFDSixDQUFDOzhCQUVOLDhEQUFDRyxRQUFNO29CQUFDQyxPQUFPLEVBQUU7K0JBQU16QixVQUFVLEVBQUU7cUJBQUE7OEJBQUUsYUFBVzs7Ozs7d0JBQVM7Ozs7OztnQkFDeEQ7Ozs7O1lBQ0YsQ0FDUjtDQUNGO0dBbkR1Qk4sS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvU29uZzIuanM/MWM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgZG9jLCBnZXREb2MsIHNldERvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiOyBcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZzIocHJvcHMpIHtcblxuICAgIGNvbnN0IFtzb25nc0RhdGEsIHNldFNvbmdzRGF0YV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5zb25nRGF0YSlcbiAgICBcblxuICAgIGNvbnN0IGRlbGV0ZVNvbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgLy8gZmV0Y2goJy9hcGkvZmlyZWJhc2UnKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLy8gICAgIC50aGVuKCh4KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh4KVxuICAgICAgICAvLyB9KVxuICAgICAgICBsZXQgdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmFydGlzdE5hbWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYXJ0aXN0c1wiLCBwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuYXJ0aXN0TmFtZSk7IC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gZG9jdW1lbnRcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpOyAvLyBnZXQgY3VycmVudCBkb2N1bWVudHMgZGF0YVxuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkgeyAvLyBpZiB0aGUgZG9jdW1lbnQgZXhpc3RzXG4gICAgICAgICAgICB0ZW1wQXJ0aXN0U29uZ3NBcnJheSA9IChkb2NTbmFwLmRhdGEoKS5zb25ncykgLy8gc3RvcmUgZG9jdW1lbnQgZGF0YSBpbiBzY29wZWQgbG9jYWwgYXJyYXlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBBcnRpc3RTb25nc0FycmF5KVxuICAgICAgICAgICAgdGVtcEFydGlzdFNvbmdzQXJyYXkuc3BsaWNlKHByb3BzLnNvbmdJbmRleCwgMSkgLy8gcHVzaCB0aGUgc29uZyB3ZSBhcmUgYWRkaW5nIGludG8gdGhhdCBhcnJheVxuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcEFydGlzdFNvbmdzQXJyYXkpXG4gICAgICAgICAgfVxuICAgICAgICB1cGRhdGVEb2MoZG9jUmVmLCB7XG4gICAgICAgICAgICBzb25nczogdGVtcEFydGlzdFNvbmdzQXJyYXlcbiAgICAgICAgfSlcbiAgICAgICAgXG5cblxuXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdsaWdodEJvcmRlcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGgxPnNvbmcgaW5kZXggaXMge3Byb3BzLnNvbmdJbmRleH08L2gxPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YSkubWFwKChtZXRhZGF0YUZpZWxkLCBtZXRhZGF0YUZpZWxkSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e21ldGFkYXRhRmllbGRJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+e21ldGFkYXRhRmllbGR9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YVttZXRhZGF0YUZpZWxkXX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVNvbmcoKX0+ZGVsZXRlIHNvbmc8L2J1dHRvbj5cbiAgICAgICAgPC91bD5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsIlNvbmcyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNvbmdEYXRhIiwic29uZ3NEYXRhIiwic2V0U29uZ3NEYXRhIiwiZGVsZXRlU29uZyIsInRlbXBBcnRpc3RTb25nc0FycmF5IiwiZG9jUmVmIiwiZG9jU25hcCIsInNvbmdNZXRhZGF0YSIsImFydGlzdE5hbWUiLCJleGlzdHMiLCJkYXRhIiwic29uZ3MiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwic29uZ0luZGV4IiwibWFpbiIsImNsYXNzTmFtZSIsInVsIiwiaDEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibWV0YWRhdGFGaWVsZCIsIm1ldGFkYXRhRmllbGRJbmRleCIsImxpIiwic3Ryb25nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/Song2.js\n"));

/***/ })

});