import React from 'react'

import Auth from '../Auth'

import Image from 'next/image';
import Link from 'next/link'

// import defaultStyles from '../../styles/Default.module.scss'
import AudioNavStyles from '../../styles/AudioNav.module.scss'
import artistStyles from '../../styles/Artist.module.scss'

import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../../firebase-config';

export default function AudioNav() {
const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
  return (
    <main className={AudioNavStyles.container}>
        <Auth />
        {
          userAuth &&
          userAuth.uid == process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID &&

          <Link href={'admin/dashboard'}>
            <a>ADMIN</a>
          </Link>
        }
        
        <Link href={'/'}>
          <a>HOME</a>
        </Link>
        {
            userAuth ?
            <div>
                <Image 
                  key='yeah'
                  src={userAuth.photoURL} 
                  className={artistStyles.profilePhotoIcon}
                  alt="User Photo" 
                  width={'50px'} 
                  height={'50px'} 
                //   layout='responsive'
                //   layout='fill'

                  />
            </div>
            :
            <h1>SIGN IN BRO</h1>
        }
    </main>
  )
}
