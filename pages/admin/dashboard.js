import React from 'react'
import AudioNav from '../Components/AudioNav'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../../firebase-config';

export default function dashboard() {
    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    // console.log(userAuth)
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID)

    // check if admin and stuff
  return (
    <main>
        <AudioNav/>
        form to upload files, manage users, etc
        <br/>
        make it modular and easy to adapt onto later on
        <br/>
        yeah
    </main>
  )
}
