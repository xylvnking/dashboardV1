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

/***/ "./pages/Components/SongShare.js":
/*!***************************************!*\
  !*** ./pages/Components/SongShare.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SongShare; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\n\nfunction SongShare(props) {\n    var getCurrentDownloadUrl = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pathRef) {\n            var fileVersionRef;\n            return _Users_dylanking6132_xylvnking_dashboardv1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        fileVersionRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.storage, pathRef);\n                        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(fileVersionRef).then(function(url) {\n                            return url;\n                        }).catch(function(error) {\n                            console.log(error);\n                            return null;\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getCurrentDownloadUrl(pathRef) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: props.songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            \"song name: \",\n                            props.songData.songMetadata.songName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            \"date of most recent edit: \",\n                            Date(props.songData.songMetadata.dateOfMostRecentEdit)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                        preload: \"none\",\n                        controls: true,\n                        src: getCurrentDownloadUrl(x.pathReference)\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_c = SongShare;\nvar _c;\n$RefreshReg$(_c, \"SongShare\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmdTaGFyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF5QjtBQUNHO0FBQ3dDO0FBQ3VDO0FBQ3hDO0FBRXBELFNBQVNpQixTQUFTLENBQUNDLEtBQUssRUFBRTtJQUVyQyxJQUFNQyxxQkFBcUI7bUJBQUcsMlBBQU9DLE9BQU8sRUFBSztnQkFDdkNDLGNBQWM7Ozs7d0JBQWRBLGNBQWMsR0FBR04scURBQUcsQ0FBQ1YscURBQU8sRUFBRWUsT0FBTyxDQUFDLENBQUM7d0JBRTdDSixnRUFBYyxDQUFDSyxjQUFjLENBQUMsQ0FDN0JDLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7NEJBQ1gsT0FBT0EsR0FBRzt5QkFDYixDQUFDLENBQUNDLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7NEJBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDOzRCQUNsQixPQUFPLElBQUk7eUJBQ2QsQ0FBQzs7Ozs7O1NBQ0w7d0JBVktOLHFCQUFxQixDQUFVQyxPQUFPOzs7T0FVM0M7SUFDSCxxQkFDRSw4REFBQ1EsTUFBSTtrQkFFR1YsS0FBSyxDQUFDVyxRQUFRLGtCQUVsQiw4REFBQ0MsS0FBRztzQkFLQSw0RUFBQ0MsSUFBRTs7a0NBQ0MsOERBQUNDLElBQUU7OzRCQUFDLGFBQVc7NEJBQUNkLEtBQUssQ0FBQ1csUUFBUSxDQUFDSSxZQUFZLENBQUNDLFFBQVE7Ozs7Ozs0QkFBTTtrQ0FFMUQsOERBQUNGLElBQUU7OzRCQUFDLDRCQUEwQjs0QkFBQ0csSUFBSSxDQUFDakIsS0FBSyxDQUFDVyxRQUFRLENBQUNJLFlBQVksQ0FBQ0csb0JBQW9CLENBQUM7Ozs7Ozs0QkFBTTtrQ0FDM0YsOERBQUNDLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO3dCQUFDQyxRQUFRO3dCQUFDQyxHQUFHLEVBQUVyQixxQkFBcUIsQ0FBQ3NCLENBQUMsQ0FBQ0MsYUFBYSxDQUFDOzs7Ozs0QkFBVTs7Ozs7O29CQUNuRjs7Ozs7Z0JBQ0g7Ozs7O1lBRUgsQ0FDUjtDQUNGO0FBakN1QnpCLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Tb25nU2hhcmUuanM/NGI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIsIHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvYywgZ2V0RG9jcywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCBnZXREb3dubG9hZFVSTCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbmdTaGFyZShwcm9wcykge1xuXG4gICAgY29uc3QgZ2V0Q3VycmVudERvd25sb2FkVXJsID0gYXN5bmMgKHBhdGhSZWYpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZVZlcnNpb25SZWYgPSByZWYoc3RvcmFnZSwgcGF0aFJlZik7XG4gICAgICAgIFxuICAgICAgICBnZXREb3dubG9hZFVSTChmaWxlVmVyc2lvblJlZilcbiAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHVybFxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSlcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLnNvbmdEYXRhICYmXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9eydodHRwOi8vbG9jYWxob3N0OjMwMDAvJyArIHByb3BzLmFydGlzdERhdGEubWV0YWRhdGEuYXJ0aXN0TmFtZSArICcvJyArIHByb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6ICdibHVlJ319PnNob3cgb25seTwvYT5cbiAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPnNvbmcgbmFtZToge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5zb25nTmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIHsvKiA8bGk+ZGF0ZSByZWxlYXNlZDoge3Byb3BzLnNvbmdEYXRhLnNvbmdNZXRhZGF0YS5kYXRlUmVsZWFzZWR9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgPGxpPmRhdGUgb2YgbW9zdCByZWNlbnQgZWRpdDoge0RhdGUocHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVPZk1vc3RSZWNlbnRFZGl0KX08L2xpPlxuICAgICAgICAgICAgICAgIDxhdWRpbyBwcmVsb2FkPSdub25lJyBjb250cm9scyBzcmM9e2dldEN1cnJlbnREb3dubG9hZFVybCh4LnBhdGhSZWZlcmVuY2UpfT48L2F1ZGlvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsInN0b3JhZ2UiLCJkb2MiLCJvblNuYXBzaG90IiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwiZ2V0U3RvcmFnZSIsInJlZiIsImdldERvd25sb2FkVVJMIiwiU29uZ1NoYXJlIiwicHJvcHMiLCJnZXRDdXJyZW50RG93bmxvYWRVcmwiLCJwYXRoUmVmIiwiZmlsZVZlcnNpb25SZWYiLCJ0aGVuIiwidXJsIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwic29uZ0RhdGEiLCJkaXYiLCJ1bCIsImxpIiwic29uZ01ldGFkYXRhIiwic29uZ05hbWUiLCJEYXRlIiwiZGF0ZU9mTW9zdFJlY2VudEVkaXQiLCJhdWRpbyIsInByZWxvYWQiLCJjb250cm9scyIsInNyYyIsIngiLCJwYXRoUmVmZXJlbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/SongShare.js\n"));

/***/ })

});