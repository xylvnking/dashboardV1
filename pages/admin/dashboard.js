import React, {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../../firebase-config';

import AudioNav from '../Components/AudioNav'
import AddSong from '../Components/AddSong'
import AddArtist from '../Components/AddArtist'
import ArtistOverview from '../Components/ArtistOverview'

// import { getDocs } from 'firebase/firestore';
import { doc, onSnapshot, collection, query, where, getDoc, getDocs, updateDoc } from "firebase/firestore";

export default function dashboard() {
    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    const [allArtistData, setAllArtistData] = useState()
    const [adminIsLoggedIn, setAdminIsLoggedIn] = useState(false)
    // console.log(userAuth)
    
    // check if admin and stuff
    useEffect(() => {
        // if (userAuth) {
        if (userAuth && userAuth.uid == process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID) {
            // console.log(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID)
            // console.log(userAuth.uid)
            // console.log('get a list of users here and pass it into the AddX components')
            setAdminIsLoggedIn(true)
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

    // console.log(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID)


  return (
      <div>

          <AudioNav/>
    {adminIsLoggedIn ?
      <main>
        <button onClick={() => console.log(allArtistData)}>log all users</button>
        {
            allArtistData &&
            allArtistData.map((artist, artistIndex) => {
                return (
                    <ArtistOverview 
                        key={artistIndex}
                        artistData={artist}
                    />
                )
            })
        }

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
    
                :
                'hey this is my zone go back home!'
}
      </div>
  )
}
