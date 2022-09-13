import React, {useState, useEffect} from 'react'
import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

export default function FileVersion(props) {
    const [fileVersionData, setFileVersionData] = useState(props.fileVersion)

    const deleteFileVersion = async () => {

        let tempFileVersionsArray
        let tempArtistSongsArray
        
        const docRef = doc(db, "artists", fileVersionData.artistName); // create reference to document
        const docSnap = await getDoc(docRef); // get current documents data
        // if (docSnap.exists() && docSnap.data().songs[props.fileVersionIndex].fileVersions) { // if the document exists
        if (docSnap.exists() ) { // if the document exists
            tempArtistSongsArray = (docSnap.data().songs) // clone all the song's data in a local array 
            tempArtistSongsArray[props.songIndex].fileVersions.splice(props.fileVersionIndex, 1) // remove the file version
        }
        updateDoc(docRef, { 
            songs: tempArtistSongsArray // update doc with new data
        })
        setFileVersionData(null)
    }

  return (
      fileVersionData &&
    <main className='lightBorder'>
            <h3>{props.fileVersion.fileVersionName}</h3>
            <ul>
                <li><strong>Artist name:</strong></li>
                <li>{props.fileVersion.artistName}</li>
                <li><strong>Song name:</strong></li>
                <li>{props.fileVersion.songName}</li>

            </ul>
        <ul>
            {
                Object.keys(fileVersionData).map((fileVersionField, fileversionFieldIndex) => {
                    return (
                        <ul key={fileversionFieldIndex}>
                            <li><strong>{fileVersionField}</strong></li>
                            <li>{fileVersionData[fileVersionField]}</li>
                        </ul>
                    )
                })
            }
        </ul>
        <button onClick={() => deleteFileVersion()}>delete file version</button>
    </main>
  )
}
