import Link from "next/link"
import { Oxygen } from "next/font/google"
import styles from "@/styles/Footer.module.scss"
import ActionLink from "@/components/global/ActionLink"

const oxygen = Oxygen({
  weight: "300",
  subsets: ["latin"],
  variable: "--oxygen-font",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
})

export default function Footer() {
  return (
    <footer className={`${oxygen.className} ${styles.footer} `}>
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
