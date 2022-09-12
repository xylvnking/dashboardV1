"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 6627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Artist)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3018);
/* harmony import */ var _styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3158);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var _Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3167);
/* harmony import */ var _Components_Song__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2026);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_SongShare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, _Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__, _Components_Song__WEBPACK_IMPORTED_MODULE_9__]);
([_firebase_config__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, _Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__, _Components_Song__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import styles from '../styles/Home.module.css'










const artistTemp = "artistName1";
let revisionTypingTimeout;
function Artist(props) {
    const [userAuth, userAuthIsLoading, userAuthError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8);
    const { 0: artistData , 1: setArtistData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: artistIsLoggedInAndOnTheirOwnPage , 1: setArtistIsLoggedInAndOnTheirOwnPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { artist , song , ok  } = router.query;
    // get data
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (artist) {
            const getDataPublic = async ()=>{
                const documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, "artists"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(`metadata.artistName`, "==", artist[0]));
                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(documentsToGet);
                querySnapshot.forEach((doc)=>{
                    setArtistData(doc.data());
                    if (userAuth && userAuth.uid == doc.data().metadata.uid && artist[0] == doc.data().metadata.artistName) {
                        console.log("somebody is signed in and at a custom url");
                        setArtistIsLoggedInAndOnTheirOwnPage(true);
                    }
                });
            };
            getDataPublic();
        } else if (userAuth) {
            const getDataAuthorized = async ()=>{
                // console.log(userAuth.uid)
                const documentsToGet = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, "artists"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.where)(`metadata.uid`, "==", userAuth.uid));
                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(documentsToGet);
                querySnapshot.forEach((doc)=>{
                    setArtistData(doc.data());
                });
            };
            getDataAuthorized();
        }
    // if (userAuth) {
    //   if (userAuth.uid && artist[0]) {
    //       console.log('user is on thier own')
    //       setArtistIsLoggedInAndOnTheirOwnPage(true)
    //     }
    // }
    // check if the artist is logged in AND at their own url
    }, [
        userAuth,
        artist
    ]);
    const check = ()=>{
        // console.log(userAuth.uid)
        // console.log(artist[1])
        // console.log(song)
        console.log(artistData);
    // console.log(dataTest)
    // console.log(userAuth)
    // console.log(artist[1])
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_AudioNav__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>check(),
                        children: "CHECK"
                    }),
                    artistData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default().profilePhotoIcon),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: artistData.metadata.profilePhoto,
                                    className: (_styles_Default_module_scss__WEBPACK_IMPORTED_MODULE_12___default().profilePhotoIcon),
                                    alt: "User Photo",
                                    width: "100%",
                                    height: "100%",
                                    style: {
                                        borderRadius: "50%"
                                    }
                                }, artistData.metadata.uid)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    "artist name stylized: ",
                                    artistData.metadata.artistNameStylized
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "http://localhost:3000/" + artistData.metadata.artistName,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            style: {
                                                color: "green"
                                            },
                                            children: " SHOW ALL SONGS "
                                        })
                                    }),
                                    /*
                    if the artist is signed in AND on their own page AND a song is selected with the url param, the shareable version is shown
                    otherwise if no song is selected with the url param they see all the details and can make revisions

                    if they go to anybody elses page they see all shareable songs, and if a url param is available they only see that songs shareable version
                  */ userAuth && userAuth.uid == artistData.metadata.uid ? // song component with extra info and editing capabilities
                                    artistData.songs.map((x, songIndex)=>{
                                        if (artist && artist[1]) {
                                            if (x.songMetadata.songName == artist[1]) {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_SongShare__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                    songData: x,
                                                    artistData: artistData,
                                                    songIndex: songIndex,
                                                    dataFromUrl: artist
                                                }, songIndex);
                                            }
                                        } else {
                                            console.log("callin");
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Song__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                songData: x,
                                                artistData: artistData,
                                                setArtistData: setArtistData,
                                                songIndex: songIndex
                                            }, songIndex);
                                        }
                                    }) : // public song sharing
                                    artistData.songs.map((x, songIndex)=>{
                                        if (artist && artist[1]) {
                                            if (x.songMetadata.songName == artist[1]) {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_SongShare__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                    songData: x,
                                                    artistData: artistData,
                                                    songIndex: songIndex,
                                                    dataFromUrl: artist
                                                }, songIndex);
                                            }
                                        } else {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_SongShare__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                songData: x,
                                                artistData: artistData,
                                                songIndex: songIndex,
                                                dataFromUrl: artist
                                            }, songIndex);
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;