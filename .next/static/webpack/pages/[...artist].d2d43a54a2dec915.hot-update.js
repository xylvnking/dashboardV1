"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...artist]",{

/***/ "./pages/Components/SongShare.js":
/*!***************************************!*\
  !*** ./pages/Components/SongShare.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SongShare; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SongShare(props) {\n    _s();\n    // const [songPathRef, setSongPathRef] = React.useState(props.songData.pathReference)\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), downloadURL = ref1[0], setDownloadURL = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        if (props.songData) {\n            var indexOfMostRecentFileVersion = props.songData.fileVersions.length - 1;\n            var fileVersionRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.storage, props.songData.fileVersions[indexOfMostRecentFileVersion].pathReference);\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(fileVersionRef).then(function(url) {\n                setDownloadURL(url);\n            }).catch(function(error) {\n                console.log(error);\n            });\n        }\n    }, [\n        props.songData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: props.songData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"song name: \",\n                            props.songData.songMetadata.songName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"date of most recent edit: \",\n                            Date(props.songData.songMetadata.dateOfMostRecentEdit)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                        preload: \"none\",\n                        controls: true,\n                        src: downloadURL\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/Components/SongShare.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n};\n_s(SongShare, \"1BTRU6gr51lnbfrQJ9m8f8DBfXI=\");\n_c = SongShare;\nvar _c;\n$RefreshReg$(_c, \"SongShare\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1NvbmdTaGFyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBeUI7QUFDRztBQUN3QztBQUN1QztBQUN4QztBQUVwRCxTQUFTaUIsU0FBUyxDQUFDQyxLQUFLLEVBQUU7O0lBRXJDLHFGQUFxRjtJQUNyRixJQUFzQ2xCLElBQWtCLG9GQUFsQkEscURBQWMsQ0FBQyxFQUFFLENBQUMsTUFBakRvQixXQUFXLEdBQW9CcEIsSUFBa0IsR0FBdEMsRUFBRXFCLGNBQWMsR0FBSXJCLElBQWtCLEdBQXRCO0lBRWxDQSxzREFBZSxDQUFDLFdBQU07UUFDbEIsSUFBSWtCLEtBQUssQ0FBQ0ssUUFBUSxFQUFFO1lBQ2hCLElBQU1DLDRCQUE0QixHQUFHTixLQUFLLENBQUNLLFFBQVEsQ0FBQ0UsWUFBWSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztZQUMzRSxJQUFNQyxjQUFjLEdBQUdaLHFEQUFHLENBQUNWLHFEQUFPLEVBQUVhLEtBQUssQ0FBQ0ssUUFBUSxDQUFDRSxZQUFZLENBQUNELDRCQUE0QixDQUFDLENBQUNJLGFBQWEsQ0FBQztZQUM1R1osZ0VBQWMsQ0FBQ1csY0FBYyxDQUFDLENBQzdCRSxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO2dCQUNYVCxjQUFjLENBQUNTLEdBQUcsQ0FBQzthQUN0QixDQUFDLENBQUNDLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7Z0JBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO2FBQ3JCLENBQUM7U0FDTDtLQUNKLEVBQUU7UUFBQ2QsS0FBSyxDQUFDSyxRQUFRO0tBQUMsQ0FBQztJQUVwQixxQkFDSSw4REFBQ1ksTUFBSTtrQkFFRGpCLEtBQUssQ0FBQ0ssUUFBUSxrQkFHbEIsOERBQUNhLEtBQUc7c0JBS0EsNEVBQUNDLElBQUU7O2tDQUNDLDhEQUFDQyxJQUFFOzs0QkFBQyxhQUFXOzRCQUFDcEIsS0FBSyxDQUFDSyxRQUFRLENBQUNnQixZQUFZLENBQUNDLFFBQVE7Ozs7Ozs0QkFBTTtrQ0FFMUQsOERBQUNGLElBQUU7OzRCQUFDLDRCQUEwQjs0QkFBQ0csSUFBSSxDQUFDdkIsS0FBSyxDQUFDSyxRQUFRLENBQUNnQixZQUFZLENBQUNHLG9CQUFvQixDQUFDOzs7Ozs7NEJBQU07a0NBQzNGLDhEQUFDQyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsTUFBTTt3QkFBQ0MsUUFBUTt3QkFBQ0MsR0FBRyxFQUFFMUIsV0FBVzs7Ozs7NEJBQVU7Ozs7OztvQkFDeEQ7Ozs7O2dCQUNIOzs7OztZQUVILENBQ1I7Q0FDRjtHQXZDdUJILFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1NvbmdTaGFyZS5qcz80YjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciwgc3RvcmFnZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBkb2MsIG9uU25hcHNob3QsIGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jLCBnZXREb2NzLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZ1NoYXJlKHByb3BzKSB7XG5cbiAgICAvLyBjb25zdCBbc29uZ1BhdGhSZWYsIHNldFNvbmdQYXRoUmVmXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLnNvbmdEYXRhLnBhdGhSZWZlcmVuY2UpXG4gICAgY29uc3QgW2Rvd25sb2FkVVJMLCBzZXREb3dubG9hZFVSTF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5zb25nRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZk1vc3RSZWNlbnRGaWxlVmVyc2lvbiA9IHByb3BzLnNvbmdEYXRhLmZpbGVWZXJzaW9ucy5sZW5ndGggLSAxXG4gICAgICAgICAgICBjb25zdCBmaWxlVmVyc2lvblJlZiA9IHJlZihzdG9yYWdlLCBwcm9wcy5zb25nRGF0YS5maWxlVmVyc2lvbnNbaW5kZXhPZk1vc3RSZWNlbnRGaWxlVmVyc2lvbl0ucGF0aFJlZmVyZW5jZSk7XG4gICAgICAgICAgICBnZXREb3dubG9hZFVSTChmaWxlVmVyc2lvblJlZilcbiAgICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgICAgICAgICBzZXREb3dubG9hZFVSTCh1cmwpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuc29uZ0RhdGFdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLnNvbmdEYXRhICYmXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nICsgcHJvcHMuYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lICsgJy8nICsgcHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjogJ2JsdWUnfX0+c2hvdyBvbmx5PC9hPlxuICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+c29uZyBuYW1lOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLnNvbmdOYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgey8qIDxsaT5kYXRlIHJlbGVhc2VkOiB7cHJvcHMuc29uZ0RhdGEuc29uZ01ldGFkYXRhLmRhdGVSZWxlYXNlZH08L2xpPiAqL31cbiAgICAgICAgICAgICAgICA8bGk+ZGF0ZSBvZiBtb3N0IHJlY2VudCBlZGl0OiB7RGF0ZShwcm9wcy5zb25nRGF0YS5zb25nTWV0YWRhdGEuZGF0ZU9mTW9zdFJlY2VudEVkaXQpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGF1ZGlvIHByZWxvYWQ9J25vbmUnIGNvbnRyb2xzIHNyYz17ZG93bmxvYWRVUkx9PjwvYXVkaW8+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwic3RvcmFnZSIsImRvYyIsIm9uU25hcHNob3QiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvYyIsImdldERvY3MiLCJ1cGRhdGVEb2MiLCJnZXRTdG9yYWdlIiwicmVmIiwiZ2V0RG93bmxvYWRVUkwiLCJTb25nU2hhcmUiLCJwcm9wcyIsInVzZVN0YXRlIiwiZG93bmxvYWRVUkwiLCJzZXREb3dubG9hZFVSTCIsInVzZUVmZmVjdCIsInNvbmdEYXRhIiwiaW5kZXhPZk1vc3RSZWNlbnRGaWxlVmVyc2lvbiIsImZpbGVWZXJzaW9ucyIsImxlbmd0aCIsImZpbGVWZXJzaW9uUmVmIiwicGF0aFJlZmVyZW5jZSIsInRoZW4iLCJ1cmwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJkaXYiLCJ1bCIsImxpIiwic29uZ01ldGFkYXRhIiwic29uZ05hbWUiLCJEYXRlIiwiZGF0ZU9mTW9zdFJlY2VudEVkaXQiLCJhdWRpbyIsInByZWxvYWQiLCJjb250cm9scyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/SongShare.js\n"));

/***/ })

});