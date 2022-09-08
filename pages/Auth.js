import React, {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth'


export default function Auth() {

    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            console.log(result.user)
        })
        .catch(function (error) {
            console.error("there was an error signing in", error);
        })
    }
    const signUserOut = async () => {
        await signOut(auth, provider).then(() => {
        })
        .catch(function (error) {
            console.error("there was an error signing out", error);
        })
    }

    return (
        <div>
            {
                userAuth
                ?
                <button onClick={signUserOut}> Sign Out</button>
                :
                <button onClick={signInWithGoogle}> Sign In</button>
            }
        </div>
    )
}
