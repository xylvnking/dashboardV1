
import React, {useState, useEffect} from 'react'

import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

export default function AddSong(props) {

    const [artistSelected, setArtistSelected] = useState()

    const addSong = async (event) => {
        event.preventDefault()
        // dummy data
        // artistName: event.target[0].value,
        const newSongDataFromFormToAdd = {
            songMetadata: {
                artistName: artistSelected,
                songName: event.target[1].value,
                songNameStylized: event.target[2].value,
                backupLocation: 'www.someurl.com',
                paidFor: true,
                dateRawFilesReceived: 'date',
                dateReleased: 'date',
                dateOfMostRecentEdit: 'some date object',
                shareable: true,
                isPartofAlbum: false,
            },
            fileVersions: [
                {
                    fileVersionName: `artistName-songName-dy-13-01-2022-0`,
                    dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
                    revisionNote: `this is a revision note for first song`,
                    jobType: `mix`
                }
            ]
        }

        let tempArtistSongsArray


        const docRef = doc(db, "artists", artistSelected); // create reference to document
        const docSnap = await getDoc(docRef); // get current documents data
        if (docSnap.exists()) { // if the document exists
            tempArtistSongsArray = (docSnap.data().songs) // store document data in scoped local array
            tempArtistSongsArray.push(newSongDataFromFormToAdd) // push the song we are adding into that array
            console.log(tempArtistSongsArray)
          }
        updateDoc(docRef, { // update the document with the updated array
            songs: tempArtistSongsArray
            
        })
        console.log('song would be added to db')
    }
    // console.log(props.allArtistData)

    return (
        <main>
            <h1>add song</h1>
                    <label htmlFor='artistSelection'>select artist</label>
                    <select id='artistSelection' style={{padding: '10px', cursor: 'pointer'}} onChange={(e) => setArtistSelected(e.target.value)}>
                        <option value="" style={{backgroundColor: 'aqua'}}>--select an artist--</option>

                        {props.allArtistData.map((artist, indexOfArtistInAllArtistData) => {
                            // console.log(artist)
                            return (
                                <option key={indexOfArtistInAllArtistData} value={artist.metadata.artistName}>{artist.metadata.artistName}</option>
                                // <p>no</p>
                                // <option style={{padding: '10px'}}>yer</option>
                            )
                        })}
                    </select>
                    {
                        artistSelected &&
                        <h3>artistSelected :: {artistSelected}</h3>
                    }
            <form onSubmit={addSong} style={{display:'flex', flexDirection: 'column'}}>
                

                <label htmlFor='artistName'>artistName</label>
                <input type='text' id='artistName' defaultValue={artistSelected}/>

                <label htmlFor='songName'>songName</label>
                <input type='text' id='songName' defaultValue='songnamedefault'/>
                
                <label htmlFor='songNameStylized'>songNameStylized</label>
                <input type='text' id='songNameStylized' defaultValue='songnamestylizeddefault'/>

                <label htmlFor='backupLocation'>backupLocation</label>
                <input type='text' id='dateReleased' defaultValue='backuplocationdefault'/>

                <p>paid for?</p>
                <label htmlFor='paidFor'>yes
                <input type='radio' id='paidFor' name='payThing' />
                </label>
                <label htmlFor='paidFor2'>no
                <input type='radio' id='paidFor2' name='payThing' defaultChecked />
                </label>


                <p>shareable?</p>
                <label htmlFor='paidFor'>yes
                <input type='radio' id='paidFor' name='shareable'/>
                </label>

                <label htmlFor='paidFor2'>no
                <input type='radio' id='paidFor2' name='shareable' defaultChecked />
                </label>

                {/* <label htmlFor='dateRawFilesReceived'>dateRawFilesReceived</label>
                <input type='date' id='dateRawFilesReceived'/>

                <label htmlFor='dateReleased'>dateReleased</label>
                <input type='date' id='dateReleased'/>

                <label htmlFor='dateOfMostRecentEdit'>dateOfMostRecentEdit</label>
                <input type='date' id='dateOfMostRecentEdit'/>

                <label htmlFor='dateOfMostRecentEdit'>dateAdded</label>
                <input type='date' id='dateOfMostRecentEdit'/> */}
                <button type="submit">submit</button>

                
            </form>
        </main>
    )
}
