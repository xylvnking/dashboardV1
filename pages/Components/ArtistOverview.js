import React, {useState, useEffect} from 'react'
import Song2 from './Song2'
import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

export default function ArtistOverview(props) {

    const [artistSongs, setArtistSongs] = useState(props.artistData.songs)

    const check = () => {
        console.log(artistSongs)
    }

    const deleteSong = async (songIndexToRemove) => {
        let tempArtistSongsArray
        const docRef = doc(db, "artists", props.artistData.metadata.artistName); // create reference to document
        const docSnap = await getDoc(docRef); // get current documents data
        if (docSnap.exists()) { // if the document exists
            tempArtistSongsArray = (docSnap.data().songs) // store document data in scoped local array
            tempArtistSongsArray.splice(songIndexToRemove, 1) // push the song we are adding into that array
          }
        updateDoc(docRef, {
            songs: tempArtistSongsArray
        })
        setArtistSongs(tempArtistSongsArray)
    }

  return (
    <main className='lightBorder'>
        <button onClick={() => check()}>show props from artists</button>
        <ul>
            {
                // artistSongs &&
                Object.keys(props.artistData.metadata).map((metadataField, index) => {
                // Object.keys(artistSongs.metadata).map((metadataField, index) => {
                    // artistSongs.metadata.map((metadataField, index) => {
                    return (
                        <ul key={index}>
                            <li><strong>{metadataField}</strong></li>
                            <li>{props.artistData.metadata[metadataField]}</li>
                            <br />
                        </ul>
                    )
                })
            }
            <li></li>
        </ul>
        {
            artistSongs &&
            artistSongs.map((songData, songIndex) => {
                // artistSongs.map((songData, songIndex) => {
                return (
                    <Song2 
                        key={songIndex}
                        songData={songData}
                        songIndex={songIndex}
                        deleteSong={deleteSong}
                    />
                )
            })
        }

    </main>
  )
}
