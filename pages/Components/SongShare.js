import React from 'react'
import Link from 'next/link'
import { db, auth, provider, storage } from '../../firebase-config';
import { doc, onSnapshot, collection, query, where, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function SongShare(props) {

    // const [songPathRef, setSongPathRef] = React.useState(props.songData.pathReference)
    const [downloadURL, setDownloadURL] = React.useState('')

    React.useEffect(() => {
        if (props.songData) {
            const indexOfMostRecentFileVersion = props.songData.fileVersions.length - 1
            const fileVersionRef = ref(storage, props.songData.fileVersions[indexOfMostRecentFileVersion].pathReference);
            getDownloadURL(fileVersionRef)
            .then((url) => {
                setDownloadURL(url)
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [props.songData])

    return (
        <main>
        {
            props.songData &&
        <div>

            {/* <Link href={'http://localhost:3000/' + props.artistData.metadata.artistName + '/' + props.songData.songMetadata.songName}>
                    <a style={{color: 'blue'}}>show only</a>
            </Link> */}
            <ul>
                <li>song name: {props.songData.songMetadata.songName}</li>
                {/* <li>date released: {props.songData.songMetadata.dateReleased}</li> */}
                <li>date of most recent edit: {Date(props.songData.songMetadata.dateOfMostRecentEdit)}</li>
                <audio preload='none' controls src={downloadURL}></audio>
            </ul>
        </div>
        }
    </main>
  )
}
