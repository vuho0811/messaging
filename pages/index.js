import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Chat from './chatFolder/[id]'
import ChatScreen from '../components/ChatScreen'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Messenger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar></Sidebar>

    </div>
  )
}