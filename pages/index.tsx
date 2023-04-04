import HomeSection from "@/components/home/HomeSection"
import { HomeSectionModel } from "@/models/HomeSectionModel"
import { textWithLetterColored } from "@/helpers/utils"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import styles from "@/styles/home/Home.module.scss"
import { FunctionComponent } from "react"

const Home: FunctionComponent = () => {
  const { t } = useTranslation("home-content")
  return (
    <>
      <Head>
        <title>Skills Room : {t("head-title-home")}</title>
        <meta name="description" content={`${t("head-description-home")}`} />
      </Head>
      <>
        <h1>{textWithLetterColored(t("main-title"))}</h1>
        <ul className={styles.sectionsList}>
          {Object.values(t("sections", { returnObjects: true })).map(
            (section: HomeSectionModel, index: number) => {
              return (
                <HomeSection
                  key={index}
                  title={section.title}
                  content={section.content}
                  catchPhrase={section.catchPhrase}
                  buttonTitle={section.buttonTitle}
                  link={section.link}
                  iconType={section.iconType}
                  titleColoredPart={section.titleColoredPart}
                />
              )
            }
          )}
        </ul>
      </>
    </>
  )
}

export async function getStaticProps({ locale } : any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home-content"])),
    },
  }
}

export default Home