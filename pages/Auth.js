import React, {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth, provider } from '../firebase-config';
import { fakeData } from './api/fakeData'

import { signInWithPopup, signOut } from 'firebase/auth'
import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 


//  i think to fix the error:
//  Import trace for requested module:
//  just make this a component because right now it's a page. 
//  i think it has to be accessible from a link somewhere on the website or else it gives an error? unsure. 
//  no problems in use and build compiles fine but yeah, figure it out <3


export default function Auth() {

    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            console.log(result.user)
            // checkIfNewClient(result.user)
            console.log(result.user.uid)
            if (result.user.uid == process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UID) {
                window.location.replace("/admin/dashboard");
            } else {
                window.location.replace("/");
            }
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

    // const date1 = new Date()
    // console.log(date1)

    return (
        <div>
            <button onClick={() => createFakeData()}>reset database</button>
            {/* {
                userAuth
                ?
                <button onClick={signUserOut}> Sign Out</button>
                :
                <button onClick={signInWithGoogle}> Sign In</button>
            } */}
            {
                userAuth
                &&
                <button onClick={signUserOut}> Sign Out</button>
            }
            {
                !userAuth
                &&
                <button onClick={signInWithGoogle}> Sign In</button>
            }
        </div>
    )
}
