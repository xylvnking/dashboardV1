import React, {useState, useEffect} from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link'

// import styles from '../styles/Home.module.css'
import dashStyles from '../styles/Dashboard.module.scss'
// import defaultStyles from '../styles/Default.module.scss'
import artistStyles from '../styles/Artist.module.scss'


import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../firebase-config';
import { doc, onSnapshot, collection, query, where, getDoc, getDocs, updateDoc } from "firebase/firestore";

import AudioNav from './Components/AudioNav';
import Song from './Components/Song';

import TextareaAutosize from 'react-textarea-autosize';
import SongShare from './Components/SongShare';

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
        console.log('an artist has been specified')
        const documentsToGet = query(collection(db, "artists"), where(`metadata.artistName`, "==", artist[0]));
        const querySnapshot = await getDocs(documentsToGet);
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
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
    // console.log(artist[1])
    // console.log(song)
    
    console.log(artistData.albums)
    // console.log(dataTest)
    // console.log(userAuth)
    // console.log(artist[1])
  }
  return (  
    <>
    
    <AudioNav/>
      <main>
        {/* <button onClick={() => }>nothing rn</button> */}

          {
            artistData &&
            <div>
              <div className={artistStyles.profilePhotoIcon}>
                {<Image 
                  key={artistData.metadata.uid}
                  src={artistData.metadata.profilePhoto} 
                  className={artistStyles.profilePhotoIcon}
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
                <Link href={'http://localhost:3000/' + artistData.metadata.artistName}>
                  <a style={{color: 'green'}}> SHOW ALL SONGS </a>                                  
                </Link>
                {

                  /*
                    if the artist is signed in AND on their own page AND a song is selected with the url param, the shareable version is shown
                    otherwise if no song is selected with the url param they see all the details and can make revisions

                    if they go to anybody elses page they see all shareable songs, and if a url param is available they only see that songs shareable version
                  */
                  userAuth && userAuth.uid == artistData.metadata.uid && artistData.songs
                  ?
                    
                    // song component with extra info and editing capabilities
                    artistData.songs.map((x, songIndex) => {
                      if (artist && artist[1]) { // checks if the url has a specific song in it and if so only returns that song
                        if (x.songMetadata.songName == artist[1]) {
                          return (
                            <SongShare 
                            key={songIndex}
                            songData={x}
                            artistData={artistData}
                            songIndex={songIndex}
                            dataFromUrl={artist}
                            />
                            
                            )}
                      } else { // if no song is specified in the url all songs are returned
                        console.log('callin')
                        return (
                          <Song 
                          key={songIndex}
                          songData={x} // passing the song data here is easier than re-getting it within the component
                          artistData={artistData}
                          setArtistData={setArtistData}
                          songIndex={songIndex}
                          />)}
                      })



                      :


                      
                      artistData.songs && // doesn't try to render songs if none exist
                      
                      // public song sharing
                      artistData.songs.map((x, songIndex) => {
                        if (artist && artist[1]) { // checks if the url has a specific song in it and if so only returns that song
                          if (x.songMetadata.songName == artist[1]) {
                            return (
                              <SongShare 
                              key={songIndex}
                              songData={x}
                              artistData={artistData}
                              songIndex={songIndex}
                              dataFromUrl={artist}
                              />
                            )
                          }
                        } else {
                          return (
                            <SongShare 
                            key={songIndex}
                            songData={x}
                            artistData={artistData}
                            songIndex={songIndex}
                            dataFromUrl={artist}
                            />
                          )

                        }
                      })
                }
                </section>
            </div>
          }
          {/* <h1>{song}</h1>
          <h1>{props.artistName}</h1> */}

      </main>
    </>
  )
}
