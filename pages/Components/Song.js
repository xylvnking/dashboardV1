import React, {useState, useEffect} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import artistStyles from '../../styles/Artist.module.scss'

let revisionTypingTimeout2

export default function Song(props) {

    const [isTyping, setIsTyping] = useState(false)
    const [textAreaIsActive, setTextAreaIsActive] = useState(false)
    const [fileVersionIndexSelected, setFileVersionIndexSelected] = useState()

    const handleTyping = (eventValue, songIndex, fileVersionIndex) => {

        setIsTyping(true)

        // should firebase just be updated from here? why have it in the parent component?



        clearTimeout(revisionTypingTimeout2) // clear timer
        revisionTypingTimeout2 = setTimeout(() => { // use timer
            // updateDoc(docRef, artistDataClone) // update firebase
            props.saveRevisionNote(eventValue, songIndex, fileVersionIndex)
            setIsTyping(false)
        }, 500)
    }

    const selectTextArea = (fileVersionIndex) => {
        setTextAreaIsActive(true)
        setFileVersionIndexSelected(fileVersionIndex)

    }


  return (
    <main>
        {/* {props.songData.songMetadata.songName} */}
        {/* <ul key= {props.songIndex} onFocus={() => setBgCol('green')} onBlur={() => setBgCol('black')}> */}
        <details
            open={props.songIndex == 0 && true}
        >
            <summary>{props.songData.songMetadata.songName}</summary>
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
                            >
                                <summary>{x.fileVersionName}</summary>
                                
                                    <ul 
                                        // key={fileVersionIndex}
                                        
                                    >
                                        <li>file version name: {x.fileVersionName}</li>
                                        <li>date added: {x.dateAdded}</li>
                                        <li>Job type: {x.jobType}</li>
                                        <li>file version index {fileVersionIndex}</li>
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
