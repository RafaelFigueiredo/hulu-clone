import head from 'next/head'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link red="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <Nav />
      
      {/* Result */}
    </div>
  )
}
