import { textWithLetterColored } from "@/helpers/utils"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import Image from "next/image"
import teamPicture from "../public/pictures/teamPicture.png"
import styles from "@/styles/about/AboutUs.module.scss"
import TeamCard from "@/components/aboutUs/TeamCard"
import { TeamMemberModel } from "@/models/TeamMemberModel"

export default function AboutUs() {
  const { t } = useTranslation(["about", "teamMembers"])
  const teamCardTranslationContent = t("section-5", { returnObjects: true })

  return (
    <>
      <Head>
        <title>Skills Room : {t("headTitle")}</title>
        <meta name="description" content={`${t("headDescription")}`} />
      </Head>
      <h1>{textWithLetterColored(t("mainTitle"))}</h1>
      <section className={styles.sectionContainer}>
        <h2>{t("section-1.title")}</h2>
        <p>{t("section-1.content")}</p>
      </section>
      <section className={styles.sectionContainer}>
        <h2>{t("section-2.title")}</h2>
        <p>{t("section-2.content")}</p>
      </section>
      <section className={styles.sectionContainer}>
        <h2>{t("section-3.title")}</h2>
      </section>
      <section className={styles.sectionContainer}>
        <h2>{t("section-4.title")}</h2>
      </section>
      <section className={`${styles.sectionContainer} ${styles.teamContainer}`}>
        <div className={styles.descriptionContainer}>
          <h2>{t("section-5.title")}</h2>
          <div className={styles.imageContainer}>
            <Image src={teamPicture} alt="Skills Room team picture" />
          </div>
          <p>{t("section-5.content")}</p>
        </div>
        <div className={styles.membersList}>
          {Object.values(
            t("members", { ns: "teamMembers", returnObjects: true })
          ).map((teamMember: TeamMemberModel, index: number) => (
            <TeamCard
              key={index}
              teamMember={teamMember}
              translationContent={teamCardTranslationContent}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "teamMembers"])),
    },
  }
}
