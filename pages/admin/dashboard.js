import React, {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../../firebase-config';

import AudioNav from '../Components/AudioNav'
import AddSong from '../Components/AddSong'
import AddArtist from '../Components/AddArtist'

// import { getDocs } from 'firebase/firestore';
import { doc, onSnapshot, collection, query, where, getDoc, getDocs, updateDoc } from "firebase/firestore";

export default function dashboard() {
    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    const [allArtistData, setAllArtistData] = useState()
    // console.log(userAuth)
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID)

    // check if admin and stuff
    useEffect(() => {
        if (userAuth) {
            // console.log('get a list of users here and pass it into the AddX components')
            const getListOfUsers = async () => {
                const arrayOfUsersTemp = []
                const documentsToGet = query(collection(db, "artists"));
                const querySnapshot = await getDocs(documentsToGet)
                querySnapshot.forEach((doc) => {
                    arrayOfUsersTemp.push(doc.data())
                    // console.log(doc.data())
                })
                setAllArtistData(arrayOfUsersTemp)
            }
            getListOfUsers()
        }

    },[userAuth])


  return (
    <main>
        <AudioNav/>
        <button onClick={() => console.log(allArtistData)}>log all users</button>
        {
            allArtistData &&
            allArtistData.map((artist, artistIndex) => {
                return (
                    // MAKE THIS AN ARTIST COMPONENT, THEN A SONG COMPONENT WITHIN THAT
                    // AND CONSIDER WHETHER IT SHOULD BE THE SAME ONE THE ARTISTS SEE
                    <ul key={artistIndex}>
                        <li>{artist.metadata.artistName}</li>
                        <ul>{artist.songs.map((song, songIndex) => {
                            return (
                                <ul key={songIndex}>

                                    <li onClick={() => console.log(`open ${song.songMetadata.songName}`)}>{song.songMetadata.songName}</li>
                                    <button onClick={() => console.log(`DELETE ${song.songMetadata.songName}`)}>Delete</button>
                                </ul>
                            )
                        })}</ul>

                    </ul>
                )
            })
        }

        <h3>maybe remake the song component</h3>
        <details>
            <summary>add artist</summary>
            <AddArtist />
        </details>

        <details open={true}>
            <summary>add song</summary>
            {allArtistData &&
            <AddSong 
                allArtistData={allArtistData}
            />}
        </details>

        
    </main>
  )
}
