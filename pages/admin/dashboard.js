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
        <button onClick={() => console.log(allArtistData)}>log all users</button>
        <AudioNav/>

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
