import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import logoPic from '@/public/logo.png'

import { Oxygen } from 'next/font/google'
import localFont from 'next/font/local'

const oxygen = Oxygen({ weight: "400", subsets: ["latin"] })
const bigJohnPro = localFont({src: "../public/fonts/bjp-bold.otf"})

export default function Home() {
  return (
    <>
      <Head>
        <title>Skills Room : Home</title>
        <meta name="description" content="Future is here" />
      </Head>
      <h1 className={bigJohnPro.className} >Coming Soon</h1>
    </>
  )
}
