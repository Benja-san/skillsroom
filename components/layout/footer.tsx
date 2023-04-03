import Link from "next/link"
import styles from "@/styles/layout/Footer.module.scss"
import ActionLink from "@/components/global/ActionLink"

export default function Footer({font } : any) {
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
