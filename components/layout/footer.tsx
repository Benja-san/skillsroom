import Link from "next/link"
import {useRouter} from 'next/router';
import { useTranslation } from "next-i18next"
import styles from "@/styles/layout/Footer.module.scss"
import ActionLink from "@/components/global/ActionLink"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { FunctionComponent } from "react"

type Props = {
  font: NextFontWithVariable
}

const Footer: FunctionComponent<Props> = ({font}) => {

  const { t } = useTranslation("navigation")
  const router = useRouter()
  let currentUrl = router.pathname

  return (
    <footer className={`${font.className} ${styles.footer} `}>
      <nav>
        <ul>
          {Object.values(t("footer", { returnObjects: true })).map(
            (section, key) => {
              return (
                <li className={currentUrl === section.url ? styles.active : ""} key={key+1}>
                  <Link href={section.url}>{section.title}</Link>
                </li>
              )
            }
          )}
        </ul>
        <div>
          <Link href="mailto:beugnet.freelance@gmail.com?subject=About my project">
            <ActionLink title="Contact" />
          </Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer