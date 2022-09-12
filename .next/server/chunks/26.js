exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 1735:
/***/ ((module) => {

// Exports
module.exports = {
	"revisionTextArea": "Artist_revisionTextArea__Rt4Em",
	"revisionTextAreaIsTyping": "Artist_revisionTextAreaIsTyping__1_kmn",
	"oldFileVersion": "Artist_oldFileVersion__SUn9V",
	"song": "Artist_song__lkM_t",
	"shareButton": "Artist_shareButton__nQl3z"
};


/***/ }),

/***/ 2026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Song)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1735);
/* harmony import */ var _styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3158);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);
([_firebase_config__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







let revisionTypingTimeout2;
function Song(props) {
    const { 0: isTyping , 1: setIsTyping  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: textAreaIsActive , 1: setTextAreaIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: fileVersionIndexSelected , 1: setFileVersionIndexSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleTyping = (eventValue, songIndex, fileVersionIndex)=>{
        setIsTyping(true);
        const artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state
        ;
        artistDataClone.songs[songIndex].fileVersions[fileVersionIndex].revisionNote = eventValue;
        props.setArtistData(artistDataClone);
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.db, "artists", props.artistData.metadata.artistName); // get reference to doc
        // console.log(artistDataClone)
        clearTimeout(revisionTypingTimeout2) // clear timer
        ;
        revisionTypingTimeout2 = setTimeout(()=>{
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(docRef, artistDataClone);
            setIsTyping(false);
        }, 500);
    };
    const selectTextArea = (fileVersionIndex)=>{
        setTextAreaIsActive(true);
        setFileVersionIndexSelected(fileVersionIndex);
    };
    const getShareableLink = ()=>{
        navigator.clipboard.writeText("http://localhost:3000/" + props.artistData.metadata.artistName + "/" + props.songData.songMetadata.songName);
    };
    // console.log(props.artistData)
    return props.songData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6___default().song),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
            open: props.songIndex == 0 && true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                    style: {
                        cursor: "pointer"
                    },
                    children: props.songData.songMetadata.songName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "http://localhost:3000/" + props.artistData.metadata.artistName + "/" + props.songData.songMetadata.songName,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        style: {
                            color: "blue"
                        },
                        children: "go to shareable version"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shareButton),
                    onClick: ()=>getShareableLink(),
                    children: [
                        "copy share link",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "20",
                            width: "20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            children: [
                                "song name: ",
                                props.songData.songMetadata.songName
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "paid for: ",
                                props.songData.songMetadata.paidFor ? "yes" : "no"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "date raw files received: ",
                                props.songData.songMetadata.dateRawFilesReceived
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "date released: ",
                                props.songData.songMetadata.dateReleased
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "backup location: ",
                                props.songData.songMetadata.backupLocation
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "date of most recent edit: ",
                                props.songData.songMetadata.dateOfMostRecentEdit
                            ]
                        }),
                        props.songData.fileVersions.map((x, fileVersionIndex)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                className: `${fileVersionIndex > 0 && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6___default().oldFileVersion)}`,
                                style: {
                                    cursor: "pointer"
                                },
                                open: fileVersionIndex == 0 && true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                        children: x.fileVersionName
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "file version name: ",
                                                    x.fileVersionName
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "date added: ",
                                                    x.dateAdded
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Job type: ",
                                                    x.jobType
                                                ]
                                            }),
                                            fileVersionIndex == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                defaultValue: x.revisionNote,
                                                onFocus: ()=>selectTextArea(fileVersionIndex),
                                                className: `${(_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6___default().revisionTextArea)} ${isTyping && (_styles_Artist_module_scss__WEBPACK_IMPORTED_MODULE_6___default().revisionTextAreaIsTyping)}`,
                                                onChange: (e)=>handleTyping(e.target.value, props.songIndex, fileVersionIndex)
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Revision note: ",
                                                    x.revisionNote
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, fileVersionIndex);
                        })
                    ]
                }, props.songIndex)
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;