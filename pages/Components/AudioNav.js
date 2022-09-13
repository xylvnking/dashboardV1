import React from 'react'

import Auth from '../Auth'

import Image from 'next/image';
import Link from 'next/link'

import AudioNavStyles from '../../styles/AudioNav.module.scss'
import defaultStyles from '../../styles/Default.module.scss'

import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../../firebase-config';

export default function AudioNav() {
const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
  return (
    <main className={AudioNavStyles.container}>
        <Auth />
        <Link href={'admin/dashboard'}>
          <a>ADMIN</a>
        </Link>
        
        <Link href={'/'}>
          <a>HOME</a>
        </Link>
        {
            userAuth ?
            <div>
                <Image 
                  key='yeah'
                  src={userAuth.photoURL} 
                  className={defaultStyles.profilePhotoIcon}
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
