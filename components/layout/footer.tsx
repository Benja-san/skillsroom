import Link from "next/link"
import styles from "@/styles/layout/Footer.module.scss"
import ActionLink from "@/components/global/ActionLink"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"

type Props = {
  font: NextFontWithVariable
}

export default function Footer({font} : Props) {
  return (
    <footer className={`${font.className} ${styles.footer} `}>
      <nav>
        <ul>
          <li>
            <Link href="/legal">Legal</Link>
          </li>
          <li>
            <Link href="/politics">Politics</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
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
