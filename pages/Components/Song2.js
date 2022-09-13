import React, {useState, useEffect} from 'react'

import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

import FileVersion from './FileVersion';
import AddFileVersion from './AddFileVersion';


export default function Song2(props) {

    const [songData, setSongData] = useState(props.songData)
    

    const deleteSong2 = async () => {
        // setLoading(true)
        // fetch('/api/firebase')
        //     .then((res) => res.json())
        //     .then((x) => {
        //     console.log(x)
        // })
        let tempArtistSongsArray
        // console.log(props.songData.songMetadata.artistName)
        
        const docRef = doc(db, "artists", props.songData.songMetadata.artistName); // create reference to document
        const docSnap = await getDoc(docRef); // get current documents data
        if (docSnap.exists()) { // if the document exists
            tempArtistSongsArray = (docSnap.data().songs) // store document data in scoped local array
            console.log(tempArtistSongsArray)
            tempArtistSongsArray.splice(props.songIndex, 1) 
            console.log(tempArtistSongsArray)
          }
        updateDoc(docRef, {
            songs: tempArtistSongsArray
        })
        setSongData(null)
        
        


    }

  return (
            songData &&
    <main className='lightBorder'>
        <ul>
            <h1>song index is {props.songIndex}</h1>
            
            <li><strong>Artist name:</strong></li>
            <li>{songData.songMetadata.artistName}</li>
            <li><strong>Song name:</strong></li>
            <li>{songData.songMetadata.songName}</li>
            <li><strong>Date of most recent edit:</strong></li>
            <li>{Date(songData.songMetadata.dateOfMostRecentEdit)}</li>
            <details>
                <summary>more metadata</summary>
                {
                    // Object.keys(props.songData.songMetadata).map((metadataField, metadataFieldIndex) => {
                    Object.keys(songData.songMetadata).map((metadataField, metadataFieldIndex) => {
                        
                        if (typeof props.songData.songMetadata[metadataField] == 'string') {
                            return (
                                <ul key={metadataFieldIndex}>
                                    <li><strong>{metadataField}</strong></li>
                                    <li>{props.songData.songMetadata[metadataField]}</li>
                                </ul>
                            )
                        }
                    })
                }
            </details>

            <AddFileVersion 
                artistName={props.artistName}
                songData={songData}
                songIndex={props.songIndex}

            />


            {songData.fileVersions.map((fileVersion, fileVersionIndex) => {
                return (

                    <FileVersion 
                        key={fileVersionIndex}
                        fileVersion={fileVersion}
                        fileVersionIndex={fileVersionIndex}
                        songIndex={props.songIndex}
                    />
                )
            })}




            <button onClick={() => deleteSong2(props.songData.songMetadata.artistName)}>delete song within song</button>
            <button onClick={() => props.deleteSong(props.songIndex)}>delete song by calling prop function</button>
            <button onClick={() => console.log(
                songData.fileVersions
            )}>check</button>
            {/* <button onClick={() => deleteSong2(props.songIndex)}>delete song</button> */}
        </ul>
    </main>
  )
}
