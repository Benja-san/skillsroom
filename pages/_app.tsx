import { appWithTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Layout from "@/components/layout/layout"
import Head from "next/head"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default appWithTranslation(App)