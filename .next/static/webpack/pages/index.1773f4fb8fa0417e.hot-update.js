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

/***/ "./pages/[...artist].js":
/*!******************************!*\
  !*** ./pages/[...artist].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Dashboard.module.scss */ \"./styles/Dashboard.module.scss\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// this page needs to be able to read from firebase using the router query, if it exists\n// collection would be artist[0]\n// document names are predetermined\n// songName would be either artist[1] or song (from the ?song=somesongname parameter)\n// then allow writes if they are authorized\n// http://localhost:3000/artistname?song=songname\n// the artists will be created by me when I actually upload files to them, so I can enter anything I want\n// .collection(\"artists\").where(\"metadata.artistName\", \"==\", \"artistNameFromQuery\")\n// you get access to their uid when they log in, so you could search for the document which contains that\n// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine\n// .collection(\"artists\").where(\"uid\", \"==\", \"the uid of the signed in artist\")\nvar artistName = {\n    metadata: {\n        artistName: \"artistName\",\n        // uid: 'yejjhfb4hbth4j5b4jynjkg', \n        email: \"artistemail@email.com\",\n        whateverelse: \"other data\",\n        coverPhoto: \"www.someurl.com\",\n        profilePhoto: \"www.someurl.com\"\n    },\n    songs: {\n        songName: {\n            songMetadata: {\n                paidFor: true,\n                dateRawFilesReceived: \"date\",\n                dateReleased: \"date\",\n                backupLocation: \"www.someurl.com\"\n            },\n            fileVersions: [\n                {\n                    fileVersionName: \"artistName-songName-dy-13-01-2022-0\",\n                    dateAdded: \"January 1, 2022 at 12:00:00 am UTC-4\",\n                    revisionNote: \"this is a revision note for first song\",\n                    jobType: \"mix\"\n                },\n                {\n                    fileVersionName: \"artistName-songName-dy-13-01-2022-1\",\n                    dateAdded: \"January 2, 2022 at 12:00:00 am UTC-4\",\n                    revisionNote: \"this is a revision note for second song\",\n                    jobType: \"mix\"\n                },\n                {\n                    fileVersionName: \"artistName-songName-dy-13-01-2022-2\",\n                    dateAdded: \"January 3, 2022 at 12:00:00 am UTC-4\",\n                    revisionNote: \"this is a revision note for third song\",\n                    jobType: \"mix\"\n                }, \n            ]\n        }\n    }\n};\nfunction Artist(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _query = router.query, artist = _query.artist, song = _query.song, ok = _query.ok;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: song\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: props.artistName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" this should have no style\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n};\n_s(Artist, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Artist;\nvar _c;\n$RefreshReg$(_c, \"Artist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uYXJ0aXN0XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdEO0FBQ1Q7QUFDZTtBQUNSO0FBQ1U7QUFJeEQsd0ZBQXdGO0FBQ3hGLGdDQUFnQztBQUM5QixtQ0FBbUM7QUFDakMscUZBQXFGO0FBRXpGLDJDQUEyQztBQUUzQyxpREFBaUQ7QUFJakQseUdBQXlHO0FBRXpHLG1GQUFtRjtBQUVuRix5R0FBeUc7QUFFekcsZ0dBQWdHO0FBRWhHLCtFQUErRTtBQUUvRSxJQUFNTyxVQUFVLEdBQUc7SUFDakJDLFFBQVEsRUFBRTtRQUNORCxVQUFVLEVBQUUsWUFBWTtRQUN4QixtQ0FBbUM7UUFDbkNFLEtBQUssRUFBRSx1QkFBdUI7UUFDOUJDLFlBQVksRUFBRSxZQUFZO1FBQzFCQyxVQUFVLEVBQUUsaUJBQWlCO1FBQzdCQyxZQUFZLEVBQUUsaUJBQWlCO0tBRWxDO0lBQ0RDLEtBQUssRUFBRTtRQUNIQyxRQUFRLEVBQUU7WUFDTkMsWUFBWSxFQUFFO2dCQUNWQyxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsb0JBQW9CLEVBQUUsTUFBTTtnQkFDNUJDLFlBQVksRUFBRSxNQUFNO2dCQUNwQkMsY0FBYyxFQUFFLGlCQUFpQjthQUNwQztZQUNEQyxZQUFZLEVBQUU7Z0JBQ1Y7b0JBQ0lDLGVBQWUsRUFBRyxxQ0FBbUM7b0JBQ3JEQyxTQUFTLEVBQUcsc0NBQW9DO29CQUNoREMsWUFBWSxFQUFHLHdDQUFzQztvQkFDckRDLE9BQU8sRUFBRyxLQUFHO2lCQUNoQjtnQkFDRDtvQkFDSUgsZUFBZSxFQUFHLHFDQUFtQztvQkFDckRDLFNBQVMsRUFBRyxzQ0FBb0M7b0JBQ2hEQyxZQUFZLEVBQUcseUNBQXVDO29CQUN0REMsT0FBTyxFQUFHLEtBQUc7aUJBQ2hCO2dCQUNEO29CQUNJSCxlQUFlLEVBQUcscUNBQW1DO29CQUNyREMsU0FBUyxFQUFHLHNDQUFvQztvQkFDaERDLFlBQVksRUFBRyx3Q0FBc0M7b0JBQ3JEQyxPQUFPLEVBQUcsS0FBRztpQkFDaEI7YUFFSjtTQUNKO0tBQ0o7Q0FDRjtBQU1jLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOztJQUNwQyxJQUFNQyxNQUFNLEdBQUd4QixzREFBUyxFQUFFO0lBQzFCLElBQTZCd0IsTUFBWSxHQUFaQSxNQUFNLENBQUNDLEtBQUssRUFBakNDLE1BQU0sR0FBZUYsTUFBWSxDQUFqQ0UsTUFBTSxFQUFFQyxJQUFJLEdBQVNILE1BQVksQ0FBekJHLElBQUksRUFBRUMsRUFBRSxHQUFLSixNQUFZLENBQW5CSSxFQUFFO0lBSXhCLHFCQUNFLDhEQUFDQyxNQUFJOzswQkFDSCw4REFBQ0MsU0FBTztnQkFBQ0MsU0FBUyxFQUFFNUIsNkVBQWlCOztrQ0FFbkMsOERBQUM4QixJQUFFO2tDQUFFUCxNQUFNOzs7Ozs0QkFBTTtrQ0FDakIsOERBQUNPLElBQUU7a0NBQUVOLElBQUk7Ozs7OzRCQUFNO2tDQUNmLDhEQUFDTSxJQUFFO2tDQUFFVixLQUFLLENBQUNuQixVQUFVOzs7Ozs0QkFBTTs7Ozs7O29CQUNuQjswQkFDViw4REFBQzZCLElBQUU7MEJBQUMsNEJBQTBCOzs7OztvQkFBSzs7Ozs7O1lBQzlCLENBQ1I7Q0FDRjtHQWpCdUJYLE1BQU07O1FBQ2J0QixrREFBUzs7O0FBREZzQixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1suLi5hcnRpc3RdLmpzP2QwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZGFzaFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5zY3NzJ1xuXG5cblxuLy8gdGhpcyBwYWdlIG5lZWRzIHRvIGJlIGFibGUgdG8gcmVhZCBmcm9tIGZpcmViYXNlIHVzaW5nIHRoZSByb3V0ZXIgcXVlcnksIGlmIGl0IGV4aXN0c1xuLy8gY29sbGVjdGlvbiB3b3VsZCBiZSBhcnRpc3RbMF1cbiAgLy8gZG9jdW1lbnQgbmFtZXMgYXJlIHByZWRldGVybWluZWRcbiAgICAvLyBzb25nTmFtZSB3b3VsZCBiZSBlaXRoZXIgYXJ0aXN0WzFdIG9yIHNvbmcgKGZyb20gdGhlID9zb25nPXNvbWVzb25nbmFtZSBwYXJhbWV0ZXIpXG5cbi8vIHRoZW4gYWxsb3cgd3JpdGVzIGlmIHRoZXkgYXJlIGF1dGhvcml6ZWRcblxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FydGlzdG5hbWU/c29uZz1zb25nbmFtZVxuXG5cblxuLy8gdGhlIGFydGlzdHMgd2lsbCBiZSBjcmVhdGVkIGJ5IG1lIHdoZW4gSSBhY3R1YWxseSB1cGxvYWQgZmlsZXMgdG8gdGhlbSwgc28gSSBjYW4gZW50ZXIgYW55dGhpbmcgSSB3YW50XG5cbi8vIC5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKS53aGVyZShcIm1ldGFkYXRhLmFydGlzdE5hbWVcIiwgXCI9PVwiLCBcImFydGlzdE5hbWVGcm9tUXVlcnlcIilcblxuLy8geW91IGdldCBhY2Nlc3MgdG8gdGhlaXIgdWlkIHdoZW4gdGhleSBsb2cgaW4sIHNvIHlvdSBjb3VsZCBzZWFyY2ggZm9yIHRoZSBkb2N1bWVudCB3aGljaCBjb250YWlucyB0aGF0XG5cbi8vIGl0J3MgYSBsaXR0bGUgc2N1ZmZlZCBvZiBhIHdvcmtmbG93IGJ1dCBhdCB0aGlzIHNjYWxlIHNpbmNlIGl0J3Mgc3BlY2lmaWMgdG8gbWUgaXQgd29ya3MgZmluZVxuXG4vLyAuY29sbGVjdGlvbihcImFydGlzdHNcIikud2hlcmUoXCJ1aWRcIiwgXCI9PVwiLCBcInRoZSB1aWQgb2YgdGhlIHNpZ25lZCBpbiBhcnRpc3RcIilcblxuY29uc3QgYXJ0aXN0TmFtZSA9IHtcbiAgbWV0YWRhdGE6IHtcbiAgICAgIGFydGlzdE5hbWU6ICdhcnRpc3ROYW1lJyxcbiAgICAgIC8vIHVpZDogJ3llampoZmI0aGJ0aDRqNWI0anluamtnJywgXG4gICAgICBlbWFpbDogJ2FydGlzdGVtYWlsQGVtYWlsLmNvbScsXG4gICAgICB3aGF0ZXZlcmVsc2U6ICdvdGhlciBkYXRhJyxcbiAgICAgIGNvdmVyUGhvdG86ICd3d3cuc29tZXVybC5jb20nLFxuICAgICAgcHJvZmlsZVBob3RvOiAnd3d3LnNvbWV1cmwuY29tJ1xuICAgICAgXG4gIH0sXG4gIHNvbmdzOiB7XG4gICAgICBzb25nTmFtZToge1xuICAgICAgICAgIHNvbmdNZXRhZGF0YToge1xuICAgICAgICAgICAgICBwYWlkRm9yOiB0cnVlLFxuICAgICAgICAgICAgICBkYXRlUmF3RmlsZXNSZWNlaXZlZDogJ2RhdGUnLFxuICAgICAgICAgICAgICBkYXRlUmVsZWFzZWQ6ICdkYXRlJyxcbiAgICAgICAgICAgICAgYmFja3VwTG9jYXRpb246ICd3d3cuc29tZXVybC5jb20nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWxlVmVyc2lvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZmlsZVZlcnNpb25OYW1lOiBgYXJ0aXN0TmFtZS1zb25nTmFtZS1keS0xMy0wMS0yMDIyLTBgLFxuICAgICAgICAgICAgICAgICAgZGF0ZUFkZGVkOiBgSmFudWFyeSAxLCAyMDIyIGF0IDEyOjAwOjAwIGFtIFVUQy00YCxcbiAgICAgICAgICAgICAgICAgIHJldmlzaW9uTm90ZTogYHRoaXMgaXMgYSByZXZpc2lvbiBub3RlIGZvciBmaXJzdCBzb25nYCxcbiAgICAgICAgICAgICAgICAgIGpvYlR5cGU6IGBtaXhgXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGZpbGVWZXJzaW9uTmFtZTogYGFydGlzdE5hbWUtc29uZ05hbWUtZHktMTMtMDEtMjAyMi0xYCxcbiAgICAgICAgICAgICAgICAgIGRhdGVBZGRlZDogYEphbnVhcnkgMiwgMjAyMiBhdCAxMjowMDowMCBhbSBVVEMtNGAsXG4gICAgICAgICAgICAgICAgICByZXZpc2lvbk5vdGU6IGB0aGlzIGlzIGEgcmV2aXNpb24gbm90ZSBmb3Igc2Vjb25kIHNvbmdgLFxuICAgICAgICAgICAgICAgICAgam9iVHlwZTogYG1peGBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZmlsZVZlcnNpb25OYW1lOiBgYXJ0aXN0TmFtZS1zb25nTmFtZS1keS0xMy0wMS0yMDIyLTJgLFxuICAgICAgICAgICAgICAgICAgZGF0ZUFkZGVkOiBgSmFudWFyeSAzLCAyMDIyIGF0IDEyOjAwOjAwIGFtIFVUQy00YCxcbiAgICAgICAgICAgICAgICAgIHJldmlzaW9uTm90ZTogYHRoaXMgaXMgYSByZXZpc2lvbiBub3RlIGZvciB0aGlyZCBzb25nYCxcbiAgICAgICAgICAgICAgICAgIGpvYlR5cGU6IGBtaXhgXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIF1cbiAgICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdChwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGFydGlzdCwgc29uZywgb2sgfSA9IHJvdXRlci5xdWVyeVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtkYXNoU3R5bGVzLm5hdmJhcn0+XG5cbiAgICAgICAgPGgxPnthcnRpc3R9PC9oMT5cbiAgICAgICAgPGgxPntzb25nfTwvaDE+XG4gICAgICAgIDxoMT57cHJvcHMuYXJ0aXN0TmFtZX08L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGgxPiB0aGlzIHNob3VsZCBoYXZlIG5vIHN0eWxlPC9oMT5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aFN0YXRlIiwic3R5bGVzIiwiZGFzaFN0eWxlcyIsImFydGlzdE5hbWUiLCJtZXRhZGF0YSIsImVtYWlsIiwid2hhdGV2ZXJlbHNlIiwiY292ZXJQaG90byIsInByb2ZpbGVQaG90byIsInNvbmdzIiwic29uZ05hbWUiLCJzb25nTWV0YWRhdGEiLCJwYWlkRm9yIiwiZGF0ZVJhd0ZpbGVzUmVjZWl2ZWQiLCJkYXRlUmVsZWFzZWQiLCJiYWNrdXBMb2NhdGlvbiIsImZpbGVWZXJzaW9ucyIsImZpbGVWZXJzaW9uTmFtZSIsImRhdGVBZGRlZCIsInJldmlzaW9uTm90ZSIsImpvYlR5cGUiLCJBcnRpc3QiLCJwcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiYXJ0aXN0Iiwic29uZyIsIm9rIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[...artist].js\n"));

/***/ })

});