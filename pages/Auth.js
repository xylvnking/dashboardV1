import React, {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth'

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

    // const createNewClient = async (user) => {
    //     try {
    //         // await setDoc(doc(db, artists, 'artistName'), {
    //         await setDoc(doc(db, artists, 'user.email'), {
    //             data: 'data'
    //         });
    //     } catch (error) {
    //         console.error("Error adding document: ", error);
    //     }
    // }

    // const checkIfNewClient = async (user) => {
    //     const docRef = doc(db, artists, 'artistName')
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //     } else {
    //         createNewClient(user)
    //     }
    // }

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
