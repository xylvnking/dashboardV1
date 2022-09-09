import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import {useAuthState} from "react-firebase-hooks/auth"

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

const artistName = {
  metadata: {
      artistName: 'artistName',
      // uid: 'yejjhfb4hbth4j5b4jynjkg', 
      email: 'artistemail@email.com',
      whateverelse: 'other data',
      coverPhoto: 'www.someurl.com',
      profilePhoto: 'www.someurl.com'
      
  },
  songs: {
      songName: {
          songMetadata: {
              paidFor: true,
              dateRawFilesReceived: 'date',
              dateReleased: 'date',
              backupLocation: 'www.someurl.com0'
          },
          fileVersions: [
              {
                  fileVersionName: `artistName-songName-dy-13-01-2022-0`,
                  dateAdded: `January 1, 2022 at 12:00:00 am UTC-4`,
                  revisionNote: `this is a revision note`,
                  jobType: `mix or master`
              },
              
          ]
      }
  }
}

export default function Artist(props) {
  const router = useRouter()
  const { artist, song, ok } = router.query



  return (
    <main>
      <h1>{artist}</h1>
      <h1>{song}</h1>
      <h1>{props.artistName}</h1>
    </main>
  )
}
