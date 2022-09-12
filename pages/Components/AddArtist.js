
import React, {useState, useEffect} from 'react'
import TextareaAutosize from 'react-textarea-autosize';

import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 
import { db, auth, provider } from '../../firebase-config';

export default function AddArtist() {

    // const [userDataToDisplay, setUserDataToDisplay] = useState()

    const addArtist = async (event) => {
        event.preventDefault()
        const artistName = event.target[0].value
        const newArtistDataFromForm = {
            metadata: {
                artistName: event.target[0].value,
                artistNameStylized: event.target[1].value,
                uid: event.target[2].value, 
                email: event.target[3].value,
                whateverelse: event.target[4].value,
                profilePhoto: event.target[5].value,
                coverPhoto: event.target[6].value,
            },   
        }
        await setDoc(doc(db, 'artists', artistName), newArtistDataFromForm)
    }
    
    const displayUserData = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        // console.log('this should display the users data')
    }

    return (
        <main>
            {/* <h1>get artist info by uid</h1>
            <form onSubmit={displayUserData}>
                <input type='text' id='artistUid' required />
                <button type='submit'>get user data by uid</button>
            </form> */}
            <h1>add artist</h1>
            <form onSubmit={addArtist} style={{display:'flex', flexDirection: 'column'}}>

                <label htmlFor='artistName'>artistname*</label>
                <input type='text' id='artistName' defaultValue='defaultartistname2' required/>
                

                <label htmlFor='artistNameStylized'>artistNameStylized</label>
                <input type='text' id='artistNameStylized' defaultValue='defaultArtistNameStylized' required/>

                <label htmlFor='uid'>uid *</label>
                <input type='text' id='uid' defaultValue='defaultUid' required/>
                {/* <input type='text' id='uid' required/> */}

                <label htmlFor='email'>email</label>
                <input type='email' id='email' defaultValue='default@default.com' required/>

                <label htmlFor='whateverElse'>whateverElse</label>
                <TextareaAutosize 
                type='text' id='whateverElse'
                    defaultValue='defaultWhateverElse'
                    // defaultValue={x.revisionNote}
                    // onFocus={() => selectTextArea(fileVersionIndex)}
                    // className={`${artistStyles.revisionTextArea} ${isTyping && artistStyles.revisionTextAreaIsTyping}`}
                    // onChange={(e) => handleTyping(e.target.value, props.songIndex, fileVersionIndex)} 
                />

                <label htmlFor='profilePhoto'>profilePhoto</label>
                <input type='url' id='profilePhoto' defaultValue='https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'/>

                <label htmlFor='coverPhoto'>coverPhoto</label>
                <input type='url' id='coverPhoto' defaultValue='https://images.unsplash.com/photo-1574517947730-55cb23e608c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
                

                <button type="submit">submit</button>
            </form>
        </main>
    )
}
