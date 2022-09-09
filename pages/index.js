import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Artist from './[...artist]'
import Auth from './Auth'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard V1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico?v=1.1" />
      </Head>

      <Auth />
      <main>

        <Artist
          artistName='artistnnaaaame'
        />
        
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

