import HomeSection from "@/components/home/HomeSection"
import { HomeSectionModel } from "@/models/HomeSectionModel"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import styles from "@/styles/home/Home.module.scss"
import MainTitle from "@/components/global/MainTitle"

export default function Home() {
  const { t } = useTranslation("home-content")

  return (
    <>
      <Head>
        <title>Skills Room : {t("head-title-home")}</title>
        <meta name="description" content={`${t("head-description-home")}`} />
      </Head>
      <>
        <MainTitle title={t("main-title")} />
        <div className={styles.sectionsList}>
          {Object.values(t("sections", { returnObjects: true })).map(
            (section: HomeSectionModel, index: number) => {
              return (
                console.log(section),
                (
                  <HomeSection
                    key={index}
                    title={section.title}
                    content={section.content}
                    catchPhrase={section.catchPhrase}
                    buttonTitle={section.buttonTitle}
                    link={section.link}
                    iconType={section.iconType}
                  />
                )
              )
            }
          )}
        </div>
      </>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home-content"])),
    },
  }
}
