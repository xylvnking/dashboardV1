import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { db, auth, provider } from '../firebase-config';

import Artist from './[...artist]'
import Auth from './Auth'
import {useAuthState} from "react-firebase-hooks/auth"
import AudioNav from './Components/AudioNav';

export default function Home() {
  const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
  return (
    <div>
      <Head>
        <title>Dashboard V1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico?v=1.1" />
      </Head>

      {/* <Auth /> */}
      <main>
        {
          userAuth ?
          <Artist
            artistName='artistnnaaaame'
          />
          :
          
          <div>
            <AudioNav />
            {/* <h1>hey, welcome to the pre-pre-pre alpha of my audio engineering software</h1> */}
            {/* <h1>I have a lot of plans for this project, but will be remaking it from the ground up.</h1> */}
            <h1>no homepage yet :) - sign in!</h1>
            {/* <h1>Check out the documentation on github if you're interested in seeing what's under the hood!</h1> */}
          </div>
        }


        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

