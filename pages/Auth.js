import React, {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth'
import { fakeData } from './api/fakeData'

import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 

export default function Auth() {

    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            console.log(result.user)
            // checkIfNewClient(result.user)
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
    
    const createFakeData = async () => {
        // fakeData.forEach(x => console.log(x))
        fakeData.forEach(x => {
            setDoc(doc(db, 'artists', x.metadata.artistName), x).catch((error) => {
                console.log(error)
            })
        })
    }

    return (
        <div>
            <button onClick={() => createFakeData()}>reset database</button>
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
