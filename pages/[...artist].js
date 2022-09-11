import React, {useState, useEffect} from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image';

// import styles from '../styles/Home.module.css'
import dashStyles from '../styles/Dashboard.module.scss'
import defaultStyles from '../styles/Default.module.scss'
import artistStyles from '../styles/Artist.module.scss'


import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../firebase-config';
import { doc, onSnapshot, collection, query, where, getDoc, getDocs, updateDoc } from "firebase/firestore";

import AudioNav from './Components/AudioNav';
import Song from './Components/Song';

import TextareaAutosize from 'react-textarea-autosize';

const artistTemp = 'artistName1'

let revisionTypingTimeout

export default function Artist(props) {

  const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
  const [artistData, setArtistData] = useState()
  const [artistIsLoggedInAndOnTheirOwnPage, setArtistIsLoggedInAndOnTheirOwnPage] = useState(false)
  
  const router = useRouter()
  const { artist, song, ok } = router.query


  // get data
  useEffect(() => { // could you turn this into a next api call?

    if (artist){
      const getDataPublic = async () => {
        const documentsToGet = query(collection(db, "artists"), where(`metadata.artistName`, "==", artist[0]));
        const querySnapshot = await getDocs(documentsToGet);
        querySnapshot.forEach((doc) => {
          setArtistData(doc.data())
          // console.log(doc.id, " => ", doc.data());
        });
      }
      getDataPublic()
    }
    else if (userAuth) {
      const getDataAuthorized = async () => {
        // console.log(userAuth.uid)
        const documentsToGet = query(collection(db, "artists"), where(`metadata.uid`, "==", userAuth.uid)); 
        const querySnapshot = await getDocs(documentsToGet);
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          setArtistData(doc.data())
        });

      }
      getDataAuthorized()
    } 
    
    // check if the artist is logged in AND at their own url
    if (artist && userAuth && artist[0] == userAuth.uid) {
      // console.log('user is on thier own')
      setArtistIsLoggedInAndOnTheirOwnPage(true)
    }
  }, [userAuth, artist])

  const check = () => {
    // console.log(artistData)
    // console.log(dataTest)
    // console.log(userAuth)
    // console.log(artist[0])
  }
  return (  
    <>
    
    <AudioNav/>
      <main>
        <button onClick={() => check()}>CHECK</button>
        {/* <button onClick={() => }>nothing rn</button> */}

          {
            artistData &&
            <div>
              <div className={defaultStyles.profilePhotoIcon}>
                {<Image 
                  key={artistData.metadata.uid}
                  src={artistData.metadata.profilePhoto} 
                  className={defaultStyles.profilePhotoIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'}
                  style={{borderRadius: '50%'}}
                  /> }
              </div>
                <h1>artist name stylized: {artistData.metadata.artistNameStylized}</h1>
                <h1>uid: {artistData.metadata.uid}</h1>
                <h1>email: {artistData.metadata.email}</h1>
                {/* {artistData.songs.map((x, songIndex) => { */}

                {artistData.songs.map((x, songIndex) => {
                  return (
                    <Song 
                      key={songIndex}
                      songData={x} // passing the song data here is easier than re-getting it within the component
                      artistData={artistData}
                      setArtistData={setArtistData}
                      songIndex={songIndex}
                    />
                  )
                })}

                {/* {artistData.songs.map((x, songIndex) => {
                  return (
                    <ul key= {songIndex}>
                      <h2>song name: {x.songMetadata.songName}</h2>
                      <li>paid for: {x.songMetadata.paidFor ? 'yes' : 'no'}</li>
                      <li>date raw files received: {x.songMetadata.dateRawFilesReceived}</li>
                      <li>date released: {x.songMetadata.dateReleased}</li>
                      <li>backup location: {x.songMetadata.backupLocation}</li>
                      <li>date of most recent edit: {x.songMetadata.dateOfMostRecentEdit}</li>
                          {x.fileVersions.map((x, fileVersionIndex) => {
                            return (
                              <ul key={fileVersionIndex}>
                                <li>file version name: {x.fileVersionName}</li>
                                <li>date added: {x.dateAdded}</li>
                                <li>Revision note: {x.revisionNote}</li>
                                <TextareaAutosize 
                                    defaultValue={x.revisionNote}
                                    className={artistStyles.revisionTextArea}
                                    onChange={(e) => saveRevisionNote(e.target.value, songIndex, fileVersionIndex)} 
                                />
                                <li>Job type: {x.jobType}</li>
                              </ul>
                            )
                          })}
                    </ul>
                  )
                })} */}

            </div>
          }
          {/* <h1>{song}</h1>
          <h1>{props.artistName}</h1> */}

      </main>
    </>
  )
}
