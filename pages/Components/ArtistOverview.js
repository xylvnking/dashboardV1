import React, {useState, useEffect} from 'react'
import Song2 from './Song2'
import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

export default function ArtistOverview(props) {

    const [artistSongs, setArtistSongs] = useState()
    const [artistMetadataState, setArtistmetadateState] = useState()


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

    useEffect(() => {

        // loads the artists data and sets state which the ui is conditionally rendered by
        if (props.artistData.songs) {
            setArtistSongs(props.artistData.songs)
        } else if (props.artistData.metadata) {
            setArtistmetadateState(props.artistData.metadata)

        }
        
    }, [])

  return (
    <main className='lightBorder'>
        
        <ul>
            {
                artistMetadataState &&
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
            artistSongs && // this conditional allows prerendering and also stops the site from breaking if the artist has no songs yet
            artistSongs.map((songData, songIndex) => {
                return (
                    <Song2 
                        key={songIndex}
                        songData={songData}
                        songIndex={songIndex}
                        deleteSong={deleteSong}
                        artistName={props.artistData.metadata.artistName}
                    />
                )
            })
        }

    </main>
  )
}
