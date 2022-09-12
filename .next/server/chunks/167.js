exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 8283:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AudioNav_container__kyYaV"
};


/***/ }),

/***/ 3018:
/***/ ((module) => {

// Exports
module.exports = {
	"profilePhotoIcon": "Default_profilePhotoIcon__Y7iJY",
	"revisionTextArea": "Default_revisionTextArea__e_FaO"
};


/***/ }),

/***/ 3167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3504);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_AudioNav_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8283);
/* harmony import */ var _styles_AudioNav_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AudioNav_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3018);
/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3158);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_config__WEBPACK_IMPORTED_MODULE_6__]);
([_Auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_config__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function AudioNav() {
    const [userAuth, userAuthIsLoading, userAuthError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_AudioNav_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "http://localhost:3000/admin/dashboard",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: "ADMIN"
                })
            }),
            userAuth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: userAuth.photoURL,
                    className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_8___default().profilePhotoIcon),
                    alt: "User Photo",
                    width: "50px",
                    height: "50px"
                }, "yeah")
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "SIGN IN BRO"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;