import React, {useState, useEffect} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import artistStyles from '../../styles/Artist.module.scss'

import { db, auth, provider } from '../../firebase-config';
import { doc, onSnapshot, collection, query, where, getDoc, getDocs, updateDoc } from "firebase/firestore";

import Link from 'next/link'


let revisionTypingTimeout2

export default function Song(props) {

    const [isTyping, setIsTyping] = useState(false)
    const [textAreaIsActive, setTextAreaIsActive] = useState(false)
    const [fileVersionIndexSelected, setFileVersionIndexSelected] = useState()

    const handleTyping = (eventValue, songIndex, fileVersionIndex) => {
        setIsTyping(true)

        const artistDataClone = JSON.parse(JSON.stringify(props.artistData)) // clone state
        artistDataClone.songs[songIndex].fileVersions[fileVersionIndex].revisionNote = eventValue
        props.setArtistData(artistDataClone)
        const docRef = doc(db, 'artists', props.artistData.metadata.artistName); // get reference to doc

        // console.log(artistDataClone)

        
        clearTimeout(revisionTypingTimeout2) // clear timer
        revisionTypingTimeout2 = setTimeout(() => { // use timer
            updateDoc(docRef, artistDataClone)
            setIsTyping(false)
        }, 500)
    }

    const selectTextArea = (fileVersionIndex) => {
        setTextAreaIsActive(true)
        setFileVersionIndexSelected(fileVersionIndex)

    }

    const getShareableLink = () => {
        navigator.clipboard.writeText('http://localhost:3000/' + props.artistData.metadata.artistName + '/' + props.songData.songMetadata.songName)
        
    }
    // console.log(props.artistData)

  return (
    <main className={artistStyles.song}>
        {/* {props.songData.songMetadata.songName} */}
        {/* <ul key= {props.songIndex} onFocus={() => setBgCol('green')} onBlur={() => setBgCol('black')}> */}
        {/* <Link href={'http://localhost:3000/' + props.artistData.metadata.artistName}>
            <a style={{color: 'green'}}> show all </a>
        </Link> */}
        <details
            open={props.songIndex == 0 && true}
            
        >
            <summary
                style={{cursor: 'pointer'}}
            >{props.songData.songMetadata.songName}</summary>
            {/* <Link href={'http://localhost:3000/' + props.artistData.metadata.artistName + '/' + props.songData.songMetadata.songName}>
                <a style={{color: 'blue'}}>show only</a>
            </Link> */}
            <button
            className={artistStyles.shareButton}
                onClick={() => getShareableLink()}
            >
                share <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z"/></svg> 
            </button>
            <ul key= {props.songIndex}>
                <h2>song name: {props.songData.songMetadata.songName}</h2>
                <li>paid for: {props.songData.songMetadata.paidFor ? 'yes' : 'no'}</li>
                <li>date raw files received: {props.songData.songMetadata.dateRawFilesReceived}</li>
                <li>date released: {props.songData.songMetadata.dateReleased}</li>
                <li>backup location: {props.songData.songMetadata.backupLocation}</li>
                <li>date of most recent edit: {props.songData.songMetadata.dateOfMostRecentEdit}</li>
                {
                    props.songData.fileVersions.map((x, fileVersionIndex) => {
                        return (
                            <details 
                                key={fileVersionIndex} 
                                className={`${fileVersionIndex > 0 && artistStyles.oldFileVersion}`}
                                style={{cursor: 'pointer'}}
                                open={fileVersionIndex == 0 && true}
                            >
                                <summary>{x.fileVersionName}</summary>
                                
                                <ul>
                                    <li>file version name: {x.fileVersionName}</li>
                                    <li>date added: {x.dateAdded}</li>
                                    <li>Job type: {x.jobType}</li>
                                    {/* <li>file version index {fileVersionIndex}</li> */}
                                    {// ONLY SHOW TEXT AREA FOR MOST RECENT FILE VERSION [0]
                                        fileVersionIndex == 0 
                                        ? 
                                        <TextareaAutosize 
                                            defaultValue={x.revisionNote}
                                            onFocus={() => selectTextArea(fileVersionIndex)}
                                            className={`${artistStyles.revisionTextArea} ${isTyping && artistStyles.revisionTextAreaIsTyping}`}
                                            onChange={(e) => handleTyping(e.target.value, props.songIndex, fileVersionIndex)} 
                                        />
                                        :
                                        <li>Revision note: {x.revisionNote}</li>
                                    }
                                </ul>
                            </details>
                        )
                    })
                }

            </ul>
        </details>
    </main>
  )
}
