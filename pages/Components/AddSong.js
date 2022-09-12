import React, {useState, useEffect} from 'react'

export default function AddSong(props) {

    const [artistSelected, setArtistSelected] = useState()

    const addSong = () => {
        console.log('song would be added to db')
    }
    // console.log(props.allArtistData)

    return (
        <main>
            <h1>add song</h1>
                    <label htmlFor='artistSelection'>select artist</label>
                    <select id='artistSelection' style={{padding: '10px', cursor: 'pointer'}} onChange={(e) => setArtistSelected(e.target.value)}>
                        <option value="" style={{backgroundColor: 'aqua'}}>--select an artist--</option>

                        {props.allArtistData.map((artist, indexOfArtistInAllArtistData) => {
                            // console.log(artist)
                            return (
                                <option key={indexOfArtistInAllArtistData} value={artist.metadata.artistName}>{artist.metadata.artistName}</option>
                                // <option style={{padding: '10px'}}>yer</option>
                            )
                        })}
                    </select>
                    {
                        artistSelected &&
                        <h3>artistSelected :: {artistSelected}</h3>
                    }
            <form onSubmit={addSong} style={{display:'flex', flexDirection: 'column'}}>
                

                <label htmlFor='artistName'>artistName</label>
                
                <input type='email' id='artistName' defaultValue={artistSelected}/>
                <br />
                <br />

                <label htmlFor='songName'>songName</label>
                <input type='text' id='songName'/>
                

                <label htmlFor='songNameStylized'>songNameStylized</label>
                <input type='text' id='songNameStylized'/>

                

                <label htmlFor='backupLocation'>backupLocation</label>
                <input type='text' id='dateReleased'/>
                {/* <select>
                    <option>yeah</option>
                    <option>no</option>
                </select> */}

                

                <label htmlFor='dateRawFilesReceived'>dateRawFilesReceived</label>
                <input type='date' id='dateRawFilesReceived'/>

                <label htmlFor='dateReleased'>dateReleased</label>
                <input type='date' id='dateReleased'/>

                <label htmlFor='dateOfMostRecentEdit'>dateOfMostRecentEdit</label>
                <input type='date' id='dateOfMostRecentEdit'/>

                <label htmlFor='dateOfMostRecentEdit'>dateAdded</label>
                <input type='date' id='dateOfMostRecentEdit'/>
                


                <p>paid for?</p>
                <label htmlFor='paidFor'>yes
                <input type='radio' id='paidFor' name='payThing' />
                </label>
                <label htmlFor='paidFor2'>no
                <input type='radio' id='paidFor2' name='payThing' defaultChecked />
                </label>


                <p>shareable?</p>
                <label htmlFor='paidFor'>yes
                <input type='radio' id='paidFor' name='shareable'/>
                </label>

                <label htmlFor='paidFor2'>no
                <input type='radio' id='paidFor2' name='shareable' defaultChecked />
                </label>

                

                
            </form>
        </main>
    )
}
