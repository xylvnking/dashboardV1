import React from 'react'
import Link from 'next/link'

export default function SongShare(props) {
  return (
    <main>
        {
            props.songData &&

        <div>

            <Link href={'http://localhost:3000/' + props.artistData.metadata.artistName + '/' + props.songData.songMetadata.songName}>
                    <a style={{color: 'blue'}}>show only</a>
                </Link>
            <ul>
                <li>song name: {props.songData.songMetadata.songName}</li>
                <li>date released: {props.songData.songMetadata.dateReleased}</li>
                <li>date of most recent edit: {props.songData.songMetadata.dateOfMostRecentEdit}</li>
            </ul>
        </div>
        }
    </main>
  )
}
