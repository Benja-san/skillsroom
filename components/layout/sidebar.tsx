import { useTranslation } from "next-i18next"
import styles from "@/styles/layout/Sidebar.module.scss"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import Link from "next/link"
import {useRouter} from 'next/router';
import { FunctionComponent } from "react"
import SVGIcons from "../global/SVGIcons"
import ActionLink from "../global/ActionLink"

type Props = {
  activeMenu: boolean
  onClick: () => void
  font: NextFontWithVariable
}

const Sidebar: FunctionComponent<Props> = ({ activeMenu, onClick, font}) => {

  const { t } = useTranslation("navigation")
  const router = useRouter()
  let currentUrl = router.pathname

  return (
    <div className={`${styles.navigationContainer} ${activeMenu ? styles.displayed : ""}`}>
      <div onClick={onClick} className={styles.notNavigation}></div>
      <nav className={styles.navigation} >
        <div className={`${styles.menu}`}>
          <button
            onClick={onClick}
            className={`${styles.burger} ${styles.active}`}
            type="button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="8" height="8" fill="#FFFDFA" />
              <rect y="10" width="8" height="8" fill="#FFFDFA" />
              <rect x="10" y="10" width="8" height="8" fill="#FFFDFA" />
              <rect x="10" width="8" height="8" fill="#FFFDFA" />
            </svg>
          </button>
        </div>
        <ul className={`${styles.linksContainer} ${font.className}`}>
          {Object.values(t("sidebar", { returnObjects: true })).map(
            (section, key) => {
              return (
                <li onClick={onClick} key={key+1} className={styles.linkContainer}>
                  <Link href={section.url}>
                    <div className={`${styles.link} ${currentUrl === section.url ? styles.active : ""}`}>
                      <SVGIcons type={section.icon} />
                      <ActionLink title={section.title} />
                    </div>
                  </Link>
                </li>
              )
            }
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar