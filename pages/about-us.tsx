import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from 'next/head'

export default function AboutUs() {
  const { t } = useTranslation("common")

  return (
    <>
      <Head>
        <title>Skills Room : {t("headTitle")}</title>
        <meta name="description" content={`${t("headDescription")}`} />
      </Head>
      <h1>{t("mainTitle")}</h1>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  }
}
