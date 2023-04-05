import { FunctionComponent } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

const Custom404: FunctionComponent = () => {

    const { t } = useTranslation("error")

    return <h1>{t("404-title")}</h1>
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "error",
        "navigation"
      ])),
    },
  }
}

export default Custom404