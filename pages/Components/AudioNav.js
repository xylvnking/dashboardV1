import React from 'react'
import Auth from '../Auth'
import AudioNavStyles from '../../styles/AudioNav.module.scss'
// import defaultStyles from '../../styles/Default.module.scss'

import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../../firebase-config';

export default function AudioNav() {
const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
  return (
    <main className={AudioNavStyles.container}>
        <Auth />
        {/* <div className={defaultStyles.nextImage}>
                {<Image 
                  key={artistData.metadata.uid}
                  src={artistData.metadata.profilePhoto} 
                  // className={styles.userIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'} 
                  /> }
              </div> */}
    </main>
  )
}
