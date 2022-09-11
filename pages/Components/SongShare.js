import React from 'react'
import Link from 'next/link'

export default function SongShare(props) {
  return (
    <main>
        <Link href={'http://localhost:3000/' + props.artistData.metadata.artistName + '/' + props.songData.songMetadata.songName}>
                <a style={{color: 'blue'}}>show only</a>
            </Link>
        <ul>
            {/* <li>songIndex {props.songIndex}</li> */}
            <li>song name: {props.songData.songMetadata.songName}</li>
            {/* <li>paid for: {props.songData.songMetadata.paidFor ? 'yes' : 'no'}</li> */}
            {/* <li>date raw files received: {props.songData.songMetadata.dateRawFilesReceived}</li> */}
            <li>date released: {props.songData.songMetadata.dateReleased}</li>
            {/* <li>backup location: {props.songData.songMetadata.backupLocation}</li> */}
            <li>date of most recent edit: {props.songData.songMetadata.dateOfMostRecentEdit}</li>
        </ul>
    </main>
  )
}
