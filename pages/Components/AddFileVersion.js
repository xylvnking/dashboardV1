import React, {useState, useEffect} from 'react'
import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

export default function AddFileVersion(props) {
    // console.log(props.songData.songMetadata.songName)


    const addFileVersion = async (event) => {
        event.preventDefault()
        console.log('add file version here')
        const newFileVersion = {
            artistName: event.target[0].value,
            songName: event.target[1].value,
            fileVersionName: event.target[2].value,
            dateAdded: event.target[3].value,
            revisionNote: event.target[4].value,
            jobType: event.target[5].value
        }
        // console.log(newFileVersion)
        let tempArtistSongsArray

        const docRef = doc(db, "artists", props.artistName); // create reference to document
        const docSnap = await getDoc(docRef); // get current documents data
        if (docSnap.exists()) { // if the document exists
            tempArtistSongsArray = (docSnap.data().songs) // store document data in scoped local array
            console.log(tempArtistSongsArray[props.songIndex].fileVersions)
            tempArtistSongsArray[props.songIndex].fileVersions.push(newFileVersion)
            console.log(tempArtistSongsArray[props.songIndex].fileVersions)
            // tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array
            // console.log(tempArtistSongsArray)
          }
        updateDoc(docRef, { // update the document with the updated array
            songs: tempArtistSongsArray
            
        })
    }


  return (
    <main className='lightBorder'>
        <h3>add a file version:</h3>
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={addFileVersion}>

            <label htmlFor='artistName'>artistName</label>
            <input type='text' id='artistName' name='artistName' value={props.artistName} readOnly required/>

            <label htmlFor='songName'>songName</label>
            <input type='text' id='songName' name='songName' value={props.songData.songMetadata.songName} readOnly required/>

            <label htmlFor='fileVersionName'>file version name</label>
            <input type='text' id='fileVersionName' name='fileVersionName' defaultValue='filenamegoeshere' required/>

            <label htmlFor='dateAdded'>dateAdded</label>
            <input type='text' id='dateAdded' name='dateAdded' defaultValue='somedate, make this an actual date'/>

            <label htmlFor='revisionNote'>revisionNote</label>
            <input type='text' id='revisionNote' name='revisionNote' defaultValue='no revision notes yet!'/>

            <label htmlFor='jobType'>jobType</label>
            <input type='text' id='jobTyper' name='jobType' defaultValue='mix'/>

            <button type='submit'>submit</button>
        </form>
    </main>
  )
}
