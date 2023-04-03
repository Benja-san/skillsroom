import ActionLink from "../global/ActionLink"
import SVGIcons from "../home/SVGIcons"
import Link from "next/link"
import { FunctionComponent } from "react"
import { HomeSectionModel } from "@/models/HomeSectionModel"
import styles from "@/styles/home/HomeSection.module.scss"

const HomeSection: FunctionComponent<HomeSectionModel> = ({
  title,
  content,
  catchPhrase,
  buttonTitle,
  link,
  iconType,
  titleColoredPart,
}) => {
  return (
    <li className={styles.homeSectionContainer}>
      <section>
        <div className={styles.header}>
          <SVGIcons type={iconType} />
          <h2>
            {title}
            <span>{titleColoredPart}</span>
          </h2>
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles.footer}>
          <p>{catchPhrase}</p>
          <Link href={link}>
            <ActionLink title={buttonTitle} />
          </Link>
        </div>
      </section>
    </li>
  )
}

export default HomeSection