import { FunctionComponent } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

const Custom500: FunctionComponent = () => {

    const { t } = useTranslation("error")

    return (
      <>
        <h1>{t("500-title")}</h1>
        <h2>{t("500-subtitle")}</h2>
      </>
    )
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

export default Custom500