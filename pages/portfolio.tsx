import { useTranslation } from "react-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"
import { FunctionComponent } from "react"
import Image from "next/image"
import { textWithLetterColored } from "@/helpers/utils"

const Portfolio: FunctionComponent = () => {
  const { t } = useTranslation("projects-content")
  const sortedProjects = Object.values(t("projects", { ns: "projects", returnObjects: true })).sort((a: any, b: any) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

  return (
    <>
      <Head>
        <title>Skills Room : {t("head-title")}</title>
        <meta name="description" content={`${t("head-description")}`} />
      </Head>
      <h1>{textWithLetterColored(t("title"))}</h1>
      <p>{t("intro")}</p>
      <section>
        <ul>
          {sortedProjects.map((project) => (
            <li key={project.slug}>
              <Image 
                src={`/projects-links-landing-page/${project.logo}`} 
                alt={project.name}
                width={90}
                height={90}
              />
              <h2>{project.name}</h2>
              <time>{project.updatedAt}</time>
            </li>
          ))}
          </ul>
      </section>
    </>
  )
}

export async function getStaticProps({ locale } : any) {
  return {
      props: {
        ...(await serverSideTranslations(locale, [
          "projects-content",
          "projects",
          "navigation"
        ])),
      },
    }
  }

export default Portfolio