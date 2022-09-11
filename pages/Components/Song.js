import React, {useState, useEffect} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import artistStyles from '../../styles/Artist.module.scss'

let revisionTypingTimeout2

export default function Song(props) {

    const handleTyping = (eventValue, songIndex, fileVersionIndex) => {
        clearTimeout(revisionTypingTimeout2) // clear timer
        revisionTypingTimeout2 = setTimeout(() => { // use timer
            // updateDoc(docRef, artistDataClone) // update firebase
            props.saveRevisionNote(eventValue, songIndex, fileVersionIndex)
        }, 500)
    }
    console.log(props)
  return (
    <main
    // style={isActive ? { backgroundColor: 'blue'} : { backgroundColor: 'green'}}
    >
        {/* {props.songData.songMetadata.songName} */}
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
                        <ul key={fileVersionIndex}>
                            <li>file version name: {x.fileVersionName}</li>
                            <li>date added: {x.dateAdded}</li>
                            <li>Revision note: {x.revisionNote}</li>
                            <TextareaAutosize 
                                defaultValue={x.revisionNote}
                                className={artistStyles.revisionTextArea}
                                // get song index here

                                // onChange={(e) => props.saveRevisionNote(e.target.value, props.songIndex, fileVersionIndex)} 
                                onChange={(e) => handleTyping(e.target.value, props.songIndex, fileVersionIndex)} 
                            />
                            <li>Job type: {x.jobType}</li>
                        </ul>
                    )
                })
            }

        </ul>
    </main>
  )
}
