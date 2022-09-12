"use strict";
exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 3504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3158);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var _api_fakeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7635);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__]);
([_firebase_config__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Auth() {
    const [userAuth, userAuthIsLoading, userAuthError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8);
    const signInWithGoogle = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, _firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .provider */ .Ap).then((result)=>{
            console.log(result.user);
        // checkIfNewClient(result.user)
        }).catch(function(error) {
            console.error("there was an error signing in", error);
        });
    };
    const signUserOut = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, _firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .provider */ .Ap).then(()=>{}).catch(function(error) {
            console.error("there was an error signing out", error);
        });
    };
    const createFakeData = async ()=>{
        // fakeData.forEach(x => console.log(x))
        _api_fakeData__WEBPACK_IMPORTED_MODULE_5__/* .fakeData.forEach */ .r.forEach((x)=>{
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, "artists", x.metadata.artistName), x).catch((error)=>{
                console.log(error);
            });
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>createFakeData(),
                children: "reset database"
            }),
            userAuth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: signUserOut,
                children: " Sign Out"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: signInWithGoogle,
                children: " Sign In"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ fakeData)
/* harmony export */ });
// export const fakeData = {
//     metadata: {
//         artistName: 'artistName',
//         // uid: 'yejjhfb4hbth4j5b4jynjkg', 
//         email: 'artistemail@email.com',
//         whateverelse: 'other data',
//         coverPhoto: 'www.someurl.com',
//         profilePhoto: 'www.someurl.com'
//     },
//     songs: {
//         songName: {
//             songMetadata: {
//                 paidFor: true,
//                 dateRawFilesReceived: 'date',
//                 dateReleased: 'date',
//                 backupLocation: 'www.someurl.com'
//             },
//             fileVersions: [
//                 {
//                     fileVersionName: `artistName-songName-dy-13-01-2022-0`,
//                     dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
//                     revisionNote: `this is a revision note for first song`,
//                     jobType: `mix`
//                 },
//                 {
//                     fileVersionName: `artistName-songName-dy-13-01-2022-1`,
//                     dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
//                     revisionNote: `this is a revision note for second song`,
//                     jobType: `mix`
//                 },
//                 {
//                     fileVersionName: `artistName-songName-dy-13-01-2022-2`,
//                     dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
//                     revisionNote: `this is a revision note for third song`,
//                     jobType: `mix`
//                 },
//             ]
//         }
//     }
//   }
const fakeData = [
    {
        metadata: {
            artistName: "dylanking6132",
            artistNameStylized: "The fi    rst Artist!!",
            uid: "K9Q8HllpqcMwvWXgZcE44X3DVum2",
            email: "dylanking6132@gmail.com",
            whateverelse: "other data",
            coverPhoto: "www.someurl.com",
            profilePhoto: "https://lh3.googleusercontent.com/a-/AFdZucqQ6ZlopecV3GYA95ouqR7HYrJ6Z5d8KChaQoOn3g=s96-c"
        },
        songs: [
            {
                songMetadata: {
                    songName: "thefirstsongsname",
                    songNameStylized: "the FIRSTsong NAME!!!!",
                    paidFor: true,
                    dateRawFilesReceived: "date",
                    dateReleased: "date",
                    backupLocation: "www.someurl.com",
                    dateOfMostRecentEdit: "some date object",
                    shareable: true
                },
                fileVersions: [
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-0`,
                        dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for first song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-1`,
                        dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for second song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-2`,
                        dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for third song`,
                        jobType: `mix`
                    }, 
                ]
            },
            {
                songMetadata: {
                    songName: "thesecondsongsname",
                    songNameStylized: "the secSECSECONDg NAME!!!!",
                    paidFor: true,
                    dateRawFilesReceived: "date",
                    dateReleased: "date",
                    backupLocation: "www.someurl.com",
                    dateOfMostRecentEdit: "some date object",
                    shareable: true
                },
                fileVersions: [
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-0`,
                        dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for first song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-1`,
                        dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for second song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-2`,
                        dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for third song`,
                        jobType: `mix`
                    }, 
                ]
            }, 
        ]
    },
    {
        metadata: {
            artistName: "dylanking600",
            artistNameStylized: "The SEcOND Artist!!",
            uid: "QYTUFmkQ9TYQvDTqL3LEcxgt6S43",
            email: "dylan.king600@gmail.com",
            whateverelse: "other data",
            coverPhoto: "www.someurl.com",
            profilePhoto: "https://lh3.googleusercontent.com/a-/AFdZucr6-80QvFuYjgw0YWqJiwQfQnjXYH3jsw6S55zflQ=s96-c"
        },
        songs: [
            {
                songMetadata: {
                    songName: "thefirstsongsname",
                    songNameStylized: "the FIRSTsong NAME!!!!",
                    paidFor: true,
                    dateRawFilesReceived: "date",
                    dateReleased: "date",
                    backupLocation: "www.someurl.com",
                    dateOfMostRecentEdit: "some date object",
                    shareable: true
                },
                fileVersions: [
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-0`,
                        dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for first song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-1`,
                        dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for second song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-2`,
                        dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for third song`,
                        jobType: `mix`
                    }, 
                ]
            },
            {
                songMetadata: {
                    songName: "thesecondsongsname",
                    songNameStylized: "the secSECSECONDg NAME!!!!",
                    paidFor: true,
                    dateRawFilesReceived: "date",
                    dateReleased: "date",
                    backupLocation: "www.someurl.com",
                    dateOfMostRecentEdit: "some date object",
                    shareable: true
                },
                fileVersions: [
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-0`,
                        dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for first song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-1`,
                        dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for second song`,
                        jobType: `mix`
                    },
                    {
                        fileVersionName: `artistName-songName-dy-13-01-2022-2`,
                        dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
                        revisionNote: `this is a revision note for third song`,
                        jobType: `mix`
                    }, 
                ]
            }, 
        ]
    }, 
] // // export const fakeData = {
 // //     metadata: {
 // //         artistName: 'artistName',
 // //         // uid: 'yejjhfb4hbth4j5b4jynjkg', 
 // //         email: 'artistemail@email.com',
 // //         whateverelse: 'other data',
 // //         coverPhoto: 'www.someurl.com',
 // //         profilePhoto: 'www.someurl.com'
 // //     },
 // //     songs: {
 // //         songName: {
 // //             songMetadata: {
 // //                 paidFor: true,
 // //                 dateRawFilesReceived: 'date',
 // //                 dateReleased: 'date',
 // //                 backupLocation: 'www.someurl.com'
 // //             },
 // //             fileVersions: [
 // //                 {
 // //                     fileVersionName: `artistName-songName-dy-13-01-2022-0`,
 // //                     dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
 // //                     revisionNote: `this is a revision note for first song`,
 // //                     jobType: `mix`
 // //                 },
 // //                 {
 // //                     fileVersionName: `artistName-songName-dy-13-01-2022-1`,
 // //                     dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
 // //                     revisionNote: `this is a revision note for second song`,
 // //                     jobType: `mix`
 // //                 },
 // //                 {
 // //                     fileVersionName: `artistName-songName-dy-13-01-2022-2`,
 // //                     dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
 // //                     revisionNote: `this is a revision note for third song`,
 // //                     jobType: `mix`
 // //                 },
 // //             ]
 // //         }
 // //     }
 // //   }
 // export const fakeData = [
 //     {
 //         metadata: {
 //             artistName: 'artistname1',
 //             artistNameStylized: 'The fi    rst Artist!!',
 //             uid: 'K9Q8HllpqcMwvWXgZcE44X3DVum2', 
 //             email: 'artistemail@email.com',
 //             whateverelse: 'other data',
 //             coverPhoto: 'www.someurl.com',
 //             profilePhoto: 'www.someurl.com'
 //         },
 //         songs: {
 //             songName1: { // should this be an array? probably not
 //                 songMetadata: {
 //                     songName: 'the first songs name',
 //                     paidFor: true,
 //                     dateRawFilesReceived: 'date',
 //                     dateReleased: 'date',
 //                     backupLocation: 'www.someurl.com'
 //                 },
 //                 fileVersions: [
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-0`,
 //                         dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for first song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-1`,
 //                         dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for second song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-2`,
 //                         dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for third song`,
 //                         jobType: `mix`
 //                     },
 //                 ]
 //             },
 //             songName2: { // should this be an array? probably not
 //                 songMetadata: {
 //                     songName: 'the second songs name',
 //                     paidFor: true,
 //                     dateRawFilesReceived: 'date',
 //                     dateReleased: 'date',
 //                     backupLocation: 'www.someurl.com'
 //                 },
 //                 fileVersions: [
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-0`,
 //                         dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for first song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-1`,
 //                         dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for second song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-2`,
 //                         dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for third song`,
 //                         jobType: `mix`
 //                     },
 //                 ]
 //             },
 //         }
 //     },
 //     {
 //         metadata: {
 //             artistName: 'artistname2',
 //             artistNameStylized: 'The SEcOND Artist!!',
 //             uid: 'QYTUFmkQ9TYQvDTqL3LEcxgt6S43', 
 //             email: 'artistemail@email.com',
 //             whateverelse: 'other data',
 //             coverPhoto: 'www.someurl.com',
 //             profilePhoto: 'www.someurl.com'
 //         },
 //         songs: {
 //             songName: {
 //                 songMetadata: {
 //                     songName: 'the first songs name',
 //                     paidFor: true,
 //                     dateRawFilesReceived: 'date',
 //                     dateReleased: 'date',
 //                     backupLocation: 'www.someurl.com'
 //                 },
 //                 fileVersions: [
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-0`,
 //                         dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for first song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-1`,
 //                         dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for second song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-2`,
 //                         dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for third song`,
 //                         jobType: `mix`
 //                     },
 //                 ]
 //             },
 //             songName: {
 //                 songMetadata: {
 //                     songName: 'the second songs name',
 //                     paidFor: true,
 //                     dateRawFilesReceived: 'date',
 //                     dateReleased: 'date',
 //                     backupLocation: 'www.someurl.com'
 //                 },
 //                 fileVersions: [
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-0`,
 //                         dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for first song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-1`,
 //                         dateAdded: `January 2, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for second song`,
 //                         jobType: `mix`
 //                     },
 //                     {
 //                         fileVersionName: `artistName-songName-dy-13-01-2022-2`,
 //                         dateAdded: `January 3, 2022 at 12:00:00 am UTC-4`,
 //                         revisionNote: `this is a revision note for third song`,
 //                         jobType: `mix`
 //                     },
 //                 ]
 //             },
 //         }
 //     },
 // ]
;


/***/ })

};
;