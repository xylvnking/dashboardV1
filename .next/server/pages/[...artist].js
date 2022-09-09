/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[...artist]";
exports.ids = ["pages/[...artist]"];
exports.modules = {

/***/ "./styles/Dashboard.module.scss":
/*!**************************************!*\
  !*** ./styles/Dashboard.module.scss ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Dashboard_navbar__i6Qk8\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkdjEvLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5zY3NzPzIyNTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyXCI6IFwiRGFzaGJvYXJkX25hdmJhcl9faTZRazhcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Dashboard.module.scss\n");

/***/ }),

/***/ "./firebase-config.js":
/*!****************************!*\
  !*** ./firebase-config.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDI47qZP4b9OD7_WETHcLtQh3-6Dmu2T_Q\",\n    authDomain: \"dashboardv1-b5220.firebaseapp.com\",\n    projectId: \"dashboardv1-b5220\",\n    storageBucket: \"dashboardv1-b5220.appspot.com\",\n    messagingSenderId: \"198616744704\",\n    appId: \"1:198616744704:web:988e3c34e54b7f7691a9e5\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS1jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0s7QUFDVjtBQUNKO0FBRTlDLE1BQU1NLGNBQWMsR0FBRztJQUNuQkMsTUFBTSxFQUFFQyx5Q0FBd0M7SUFDaERHLFVBQVUsRUFBRUgsbUNBQTRDO0lBQ3hESyxTQUFTLEVBQUVMLG1CQUEyQztJQUN0RE8sYUFBYSxFQUFFUCwrQkFBK0M7SUFDOURTLGlCQUFpQixFQUFFVCxjQUFvRDtJQUN2RVcsS0FBSyxFQUFFWCwyQ0FBdUM7Q0FDakQ7QUFFRCxNQUFNYSxHQUFHLEdBQUdwQiwyREFBYSxDQUFDSyxjQUFjLENBQUM7QUFFekMsaUVBQWVOLG9EQUFRLEVBQUM7QUFDakIsTUFBTXNCLE9BQU8sR0FBR2pCLDREQUFVLENBQUNnQixHQUFHLENBQUMsQ0FBQztBQUNoQyxNQUFNRSxFQUFFLEdBQUduQixnRUFBWSxDQUFDaUIsR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTUcsSUFBSSxHQUFHdEIsc0RBQU8sQ0FBQ21CLEdBQUcsQ0FBQztBQUN6QixNQUFNSSxRQUFRLEdBQUcsSUFBSXRCLDZEQUFrQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkdjEvLi9maXJlYmFzZS1jb25maWcuanM/NDZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UsIHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxuZXhwb3J0IGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsImFwcCIsInN0b3JhZ2UiLCJkYiIsImF1dGgiLCJwcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase-config.js\n");

/***/ }),

/***/ "./pages/[...artist].js":
/*!******************************!*\
  !*** ./pages/[...artist].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Artist)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Dashboard.module.scss */ \"./styles/Dashboard.module.scss\");\n/* harmony import */ var _styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);\n([_firebase_config__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n// this page needs to be able to read from firebase using the router query, if it exists\n// collection would be artist[0]\n// document names are predetermined\n// songName would be either artist[1] or song (from the ?song=somesongname parameter)\n// then allow writes if they are authorized\n// http://localhost:3000/artistname?song=songname\n// the artists will be created by me when I actually upload files to them, so I can enter anything I want\n// .collection(\"artists\").where(\"metadata.artistName\", \"==\", \"artistNameFromQuery\")\n// you get access to their uid when they log in, so you could search for the document which contains that\n// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine\n// .collection(\"artists\").where(\"uid\", \"==\", \"the uid of the signed in artist\")\n// need to get reference to their artist name when they sign in\nconst artistTemp = \"artistName1\";\nfunction Artist(props) {\n    const [userAuth, userAuthIsLoading, userAuthError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.auth);\n    const { 0: artistData , 1: setArtistData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { artist , song , ok  } = router.query;\n    // console.log(artist)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userAuth) {\n            console.log(\"shouldnt see this\");\n            const getData = async ()=>{\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)(`metadata.uid`, \"==\", userAuth.uid));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                });\n            };\n            getData();\n        } else {\n            const getData1 = async ()=>{\n                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"artists\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)(`metadata.artistName`, \"==\", \"artistname1\"));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);\n                querySnapshot.forEach((doc)=>{\n                    console.log(doc.id, \" => \", doc.data());\n                    setArtistData(doc.data());\n                });\n            };\n            getData1();\n        }\n    }, [\n        userAuth\n    ]);\n    console.log(artistData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Dashboard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navbar),\n                children: [\n                    artistData && artistData.metadata.artistName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: song\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: props.artistName\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" this should have no style\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/dashboardv1/pages/[...artist].js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzRCQUFNO2tDQUNmLDhEQUFDaUIsSUFBRTtrQ0FBRXpCLEtBQUssQ0FBQ3dCLFVBQVU7Ozs7OzRCQUFNOzs7Ozs7b0JBQ25COzBCQUNWLDhEQUFDQyxJQUFFOzBCQUFDLDRCQUEwQjs7Ozs7b0JBQUs7Ozs7OztZQUM5QixDQUNSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmR2MS8uL3BhZ2VzL1suLi5hcnRpc3RdLmpzP2QwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZGFzaFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5zY3NzJ1xuXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi9maXJlYmFzZS1jb25maWcnO1xuaW1wb3J0IHsgZG9jLCBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cblxuXG5cblxuXG5cblxuLy8gdGhpcyBwYWdlIG5lZWRzIHRvIGJlIGFibGUgdG8gcmVhZCBmcm9tIGZpcmViYXNlIHVzaW5nIHRoZSByb3V0ZXIgcXVlcnksIGlmIGl0IGV4aXN0c1xuLy8gY29sbGVjdGlvbiB3b3VsZCBiZSBhcnRpc3RbMF1cbiAgLy8gZG9jdW1lbnQgbmFtZXMgYXJlIHByZWRldGVybWluZWRcbiAgICAvLyBzb25nTmFtZSB3b3VsZCBiZSBlaXRoZXIgYXJ0aXN0WzFdIG9yIHNvbmcgKGZyb20gdGhlID9zb25nPXNvbWVzb25nbmFtZSBwYXJhbWV0ZXIpXG5cbi8vIHRoZW4gYWxsb3cgd3JpdGVzIGlmIHRoZXkgYXJlIGF1dGhvcml6ZWRcblxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FydGlzdG5hbWU/c29uZz1zb25nbmFtZVxuXG5cblxuLy8gdGhlIGFydGlzdHMgd2lsbCBiZSBjcmVhdGVkIGJ5IG1lIHdoZW4gSSBhY3R1YWxseSB1cGxvYWQgZmlsZXMgdG8gdGhlbSwgc28gSSBjYW4gZW50ZXIgYW55dGhpbmcgSSB3YW50XG5cbi8vIC5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKS53aGVyZShcIm1ldGFkYXRhLmFydGlzdE5hbWVcIiwgXCI9PVwiLCBcImFydGlzdE5hbWVGcm9tUXVlcnlcIilcblxuLy8geW91IGdldCBhY2Nlc3MgdG8gdGhlaXIgdWlkIHdoZW4gdGhleSBsb2cgaW4sIHNvIHlvdSBjb3VsZCBzZWFyY2ggZm9yIHRoZSBkb2N1bWVudCB3aGljaCBjb250YWlucyB0aGF0XG5cbi8vIGl0J3MgYSBsaXR0bGUgc2N1ZmZlZCBvZiBhIHdvcmtmbG93IGJ1dCBhdCB0aGlzIHNjYWxlIHNpbmNlIGl0J3Mgc3BlY2lmaWMgdG8gbWUgaXQgd29ya3MgZmluZVxuXG4vLyAuY29sbGVjdGlvbihcImFydGlzdHNcIikud2hlcmUoXCJ1aWRcIiwgXCI9PVwiLCBcInRoZSB1aWQgb2YgdGhlIHNpZ25lZCBpbiBhcnRpc3RcIilcblxuXG5cblxuXG4vLyBuZWVkIHRvIGdldCByZWZlcmVuY2UgdG8gdGhlaXIgYXJ0aXN0IG5hbWUgd2hlbiB0aGV5IHNpZ24gaW5cblxuY29uc3QgYXJ0aXN0VGVtcCA9ICdhcnRpc3ROYW1lMSdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdChwcm9wcykge1xuXG4gIGNvbnN0IFt1c2VyQXV0aCwgdXNlckF1dGhJc0xvYWRpbmcsIHVzZXJBdXRoRXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gIGNvbnN0IFthcnRpc3REYXRhLCBzZXRBcnRpc3REYXRhXSA9IHVzZVN0YXRlKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBhcnRpc3QsIHNvbmcsIG9rIH0gPSByb3V0ZXIucXVlcnlcbiAgLy8gY29uc29sZS5sb2coYXJ0aXN0KVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmICh1c2VyQXV0aCkge1xuICAgICAgY29uc29sZS5sb2coJ3Nob3VsZG50IHNlZSB0aGlzJylcblxuICAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwiYXJ0aXN0c1wiKSwgd2hlcmUoYG1ldGFkYXRhLnVpZGAsIFwiPT1cIiwgdXNlckF1dGgudWlkKSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZ2V0RGF0YSgpXG5cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgXCJhcnRpc3RzXCIpLCB3aGVyZShgbWV0YWRhdGEuYXJ0aXN0TmFtZWAsIFwiPT1cIiwgJ2FydGlzdG5hbWUxJykpO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgICAgICBzZXRBcnRpc3REYXRhKGRvYy5kYXRhKCkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBnZXREYXRhKClcblxuXG5cbiAgICB9XG5cbiAgfSwgW3VzZXJBdXRoXSlcblxuXG4gIGNvbnNvbGUubG9nKGFydGlzdERhdGEpXG5cblxuXG5cbiAgcmV0dXJuICggIFxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtkYXNoU3R5bGVzLm5hdmJhcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBhcnRpc3REYXRhICYmXG4gICAgICAgICAgYXJ0aXN0RGF0YS5tZXRhZGF0YS5hcnRpc3ROYW1lXG4gICAgICAgIH1cbiAgICAgICAgPGgxPnthcnRpc3R9PC9oMT5cbiAgICAgICAgPGgxPntzb25nfTwvaDE+XG4gICAgICAgIDxoMT57cHJvcHMuYXJ0aXN0TmFtZX08L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGgxPiB0aGlzIHNob3VsZCBoYXZlIG5vIHN0eWxlPC9oMT5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aFN0YXRlIiwic3R5bGVzIiwiZGFzaFN0eWxlcyIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsImFydGlzdFRlbXAiLCJBcnRpc3QiLCJwcm9wcyIsInVzZXJBdXRoIiwidXNlckF1dGhJc0xvYWRpbmciLCJ1c2VyQXV0aEVycm9yIiwiYXJ0aXN0RGF0YSIsInNldEFydGlzdERhdGEiLCJyb3V0ZXIiLCJhcnRpc3QiLCJzb25nIiwib2siLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSIsInEiLCJ1aWQiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImlkIiwiZGF0YSIsIm1haW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2YmFyIiwibWV0YWRhdGEiLCJhcnRpc3ROYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...artist].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[...artist].js"));
module.exports = __webpack_exports__;

})();