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


          if ( userAuth && userAuth.uid == doc.data().metadata.uid && artist[0] == doc.data().metadata.artistName) {
            console.log('somebody is signed in and at a custom url')
                  setArtistIsLoggedInAndOnTheirOwnPage(true)
          }

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
          setArtistData(doc.data())
        });

      }
      getDataAuthorized()
    } 

    // if (userAuth) {
    //   if (userAuth.uid && artist[0]) {
    //       console.log('user is on thier own')
    //       setArtistIsLoggedInAndOnTheirOwnPage(true)
    //     }
    // }
    
    // check if the artist is logged in AND at their own url
    }, [userAuth, artist])
    
    const check = () => {
    // console.log(userAuth.uid)
    console.log(artist[0])
    
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
                {/* <h1>uid: {artistData.metadata.uid}</h1> */}
                {/* <h1>email: {artistData.metadata.email}</h1> */}
                {/* {artistData.songs.map((x, songIndex) => { */}

                
                <section>
                {
                  artistIsLoggedInAndOnTheirOwnPage || userAuth.uid == artistData.metadata.uid
                    // shows all the extra info and revision textarea if true, otherwise public
                    // important because otherwise every artist would see the extra info and textarea for every other artist
                    // and even though i'd block writes to the database, obviously that information is semi-sensitive and shouldn't be public


                    // wait if they are signed in they should just see their stuff if no url provided?
                    ?
                    
                    // song component with extra info and editing capabilities
                    artistData.songs.map((x, songIndex) => {
                      return (
                        <Song 
                        key={songIndex}
                        songData={x} // passing the song data here is easier than re-getting it within the component
                        artistData={artistData}
                        setArtistData={setArtistData}
                        songIndex={songIndex}
                        />
                        )
                      })
                      :
                      // public song sharing
                      artistData.songs.map((x, songIndex) => {
                        return (
                          <div key={x.songMetadata.songName}>
                            {
                              x.songMetadata.shareable == true // allows the artist to toggle whether the song is shown publicly or not
                              &&
                              <ul>
                                <h2>song name: {x.songMetadata.songName}</h2>
                                {/* <li>paid for: {x.songMetadata.paidFor ? 'yes' : 'no'}</li> */}
                                {/* <li>date raw files received: {x.songMetadata.dateRawFilesReceived}</li> */}
                                {/* <li>date released: {x.songMetadata.dateReleased}</li> */}
                                {/* <li>backup location: {x.songMetadata.backupLocation}</li> */}
                                {/* <li>date of most recent edit: {x.songMetadata.dateOfMostRecentEdit}</li> */}
                                    {x.fileVersions.map((x, fileVersionIndex) => {
                                      return (
                                        <div key={x.fileVersionName}>
                                          {
                                            fileVersionIndex == 0
                                            ?
                                            <ul key={fileVersionIndex}>
                                              <li>file version name: {x.fileVersionName}</li>
                                              <li>date added: {x.dateAdded}</li>
                                              {/* <li>Job type: {x.jobType}</li> */}
                                              <TextareaAutosize 
                                                  defaultValue={x.revisionNote}
                                                  className={artistStyles.revisionTextArea}
                                                  onChange={(e) => saveRevisionNote(e.target.value, songIndex, fileVersionIndex)} 
                                              />
                                            </ul>
                                            :
                                            <li>Revision note: {x.revisionNote}</li>
                                          }
                                        </div>
                                      )
                                    })}
                              </ul>
                            }
                          </div>
                        )
                      })
                }
                </section>
                {/* {artistData.songs.map((x, songIndex) => {
                  return (
                    <Song 
                      key={songIndex}
                      songData={x} // passing the song data here is easier than re-getting it within the component
                      artistData={artistData}
                      setArtistData={setArtistData}
                      songIndex={songIndex}
                    />
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
