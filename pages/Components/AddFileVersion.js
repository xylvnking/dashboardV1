import React, {useState, useEffect} from 'react'
import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider, storage } from '../../firebase-config';
import { ref, uploadBytes, getDownloadURL, listAll, list, getStorage, deleteObject} from "firebase/storage";

export default function AddFileVersion(props) {
    // console.log(props.songData.songMetadata.songName)


    const addFileVersion = async (event) => {
        event.preventDefault()
        const fileToUpload = event.target[6].files[0]
        
        // console.log(event.target[6].files[0].name)
        const fileNameRegexed = fileToUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, '')
        const pathReference = `masters/${fileNameRegexed}`
        const folderRef = ref(storage, pathReference)
        await uploadBytes(folderRef, fileToUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url)
          })
        })

        
        const newFileVersion = {
            artistName: event.target[0].value,
            songName: event.target[1].value,
            // fileVersionName: event.target[2].value,
            fileVersionName: fileNameRegexed,
            dateAdded: new Date(),
            revisionNote: event.target[4].value,
            jobType: event.target[5].value,
            pathReference: pathReference,
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
        {
          props.songData &&
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={addFileVersion}>

            {/* <label htmlFor='artistName'>artistName</label> */}
            <input type='hidden' id='artistName' name='artistName' defaultValue={props.artistName} readOnly required/>

            {/* <label htmlFor='songName'>songName</label> */}
            
            <input type='hidden' id='songName' name='songName' defaultValue={props.songData.songMetadata.songName} readOnly required/>

            {/* <label htmlFor='fileVersionName'>file version name</label> */}
            <input type='hidden' id='fileVersionName' name='fileVersionName' defaultValue='filenamegoeshere' required/>

            {/* <label htmlFor='dateAdded'>dateAdded</label> */}
            <input type='hidden' id='dateAdded' name='dateAdded' defaultValue={new Date()}/>

            {/* <label htmlFor='revisionNote'>revisionNote</label> */}
            <input type='hidden' id='revisionNote' name='revisionNote' defaultValue='no revision notes yet!'/>

            {/* <label htmlFor='jobType'>jobType</label> */}
            <input type='hidden' id='jobTyper' name='jobType' defaultValue='mix'/>

            {/* <label htmlFor='fileSelectionButton'>Select file...</label> */}
            <input id='fileSelectionButton' type='file' required></input>

            <button type='submit'>submit</button>
        </form>
        }
    </main>
  )
}
