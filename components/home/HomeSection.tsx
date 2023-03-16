import ActionLink from "../global/ActionLink"
import SVGIcons from "../home/SVGIcons"
import Link from "next/link"
import { HomeSectionModel } from "@/models/HomeSectionModel"
import styles from "@/styles/home/HomeSection.module.scss"

export default function HomeSection({
  title,
  content,
  catchPhrase,
  buttonTitle,
  link,
  iconType,
}: HomeSectionModel) {

  return (
    <section className={styles.homeSectionContainer}>
      <div className={styles.header}>
        <SVGIcons type={iconType} />
        <h2>{title}</h2>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        {catchPhrase && <p>{catchPhrase}</p>}
        <Link href={link}>
          <ActionLink title={buttonTitle} />
        </Link>
      </div>
    </section>
  )
}
