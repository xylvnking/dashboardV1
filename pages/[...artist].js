import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import {useAuthState} from "react-firebase-hooks/auth"
import styles from '../styles/Home.module.css'
import dashStyles from '../styles/Dashboard.module.scss'

import { db, auth, provider } from '../firebase-config';
import { doc, onSnapshot, collection, query, where, getDocs } from "firebase/firestore";








// this page needs to be able to read from firebase using the router query, if it exists
// collection would be artist[0]
  // document names are predetermined
    // songName would be either artist[1] or song (from the ?song=somesongname parameter)

// then allow writes if they are authorized

// http://localhost:3000/artistname?song=songname



// the artists will be created by me when I actually upload files to them, so I can enter anything I want

// .collection("artists").where("metadata.artistName", "==", "artistNameFromQuery")

// you get access to their uid when they log in, so you could search for the document which contains that

// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine

// .collection("artists").where("uid", "==", "the uid of the signed in artist")





// need to get reference to their artist name when they sign in

const artistTemp = 'artistName1'



export default function Artist(props) {

  const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
  const [artistData, setArtistData] = useState()
  const router = useRouter()
  const { artist, song, ok } = router.query
  // console.log(artist)
  
  useEffect(() => {

    if (userAuth) {
      console.log('shouldnt see this')

      const getData = async () => {
        const q = query(collection(db, "artists"), where(`metadata.uid`, "==", userAuth.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      }
      
      getData()



    } else {
      const getData = async () => {
        
        const q = query(collection(db, "artists"), where(`metadata.artistName`, "==", 'artistname1'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setArtistData(doc.data())
        });
      }
      
      getData()



    }

  }, [userAuth])


  console.log(artistData)




  return (  
    <main>
      <section className={dashStyles.navbar}>
        {
          artistData &&
          artistData.metadata.artistName
        }
        <h1>{artist}</h1>
        <h1>{song}</h1>
        <h1>{props.artistName}</h1>
      </section>
      <h1> this should have no style</h1>
    </main>
  )
}
