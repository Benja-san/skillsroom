import { useTranslation } from "next-i18next"
import styles from "@/styles/layout/Sidebar.module.scss"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import Link from "next/link"
import {useRouter} from 'next/router';
import { FunctionComponent, useState, useRef, useEffect } from "react"
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
  const currentLocale = router.locale

  const languageBox = useRef<any>(null)
  const [isLanguageBoxDisplayed, setIsLanguageBoxDisplayed] = useState(false)
  function toggleLanguageBox() {
    setIsLanguageBoxDisplayed(!isLanguageBoxDisplayed)
  }
  function handleClickOutside(event: MouseEvent) {
    if (languageBox.current && !languageBox.current.contains(event.target)) {
      setIsLanguageBoxDisplayed(false)
    }
  }

  useEffect(() => {
    if(!isLanguageBoxDisplayed) return
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isLanguageBoxDisplayed])

  return (
    <div className={`${styles.navigationContainer} ${activeMenu ? styles.displayed : ""}`}>
      <div onClick={onClick} className={styles.notNavigation}></div>
      <nav className={`${styles.navigation} ${font.className}`} >
        <ul className={`${styles.menu}`}>

          <li className={styles.menuList}>
            <button className={styles.theme} type="button">
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L9.75 6.75H16.5L15.1005 8.25H4.3005L12 0ZM13.7002 9.75H2.90025L1.5 11.25H8.25L6 18L13.7002 9.75Z" fill="#FFFDFA"/>
              </svg>
            </button>
          </li>

          <li ref={languageBox} className={styles.menuList}>
            <button 
              type="button" 
              className={`${font.className} ${styles.language} ${isLanguageBoxDisplayed && styles.active}`}
              onClick={toggleLanguageBox}
            >
              {currentLocale}
            </button>
            {isLanguageBoxDisplayed && (
              <ul className={styles.languagesContainer}>
                <li className={styles.languageList}>
                  <a href={`/en${currentUrl}`}>en</a>
                </li>
                <li className={styles.languageList}>
                  <a href={`/fr${currentUrl}`}>fr</a>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.menuList}>
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
          </li>

        </ul>
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